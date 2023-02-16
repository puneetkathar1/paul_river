const { Configuration, OpenAIApi } = require('openai')
import dbConnect from '../../lib/dbConnect'
import User from '../../model/User.js'
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from './auth/[...nextauth].js'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

const generateImage = async (prompt, n) => {
  let images = []
  for (let i = 0; i < n; i++) {
    const response = await openai.createImage({
      prompt: prompt,
      size: '1024x1024',
    })
    images.push(response.data.data[0].url)
  }
  return images
}

const handler = async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions)
  const { prompt, projectName, images: numberOfImages } = req.body

  if (session.user.email) {
    await dbConnect()

    const imagePrompt = prompt

    const images = await generateImage(imagePrompt, numberOfImages)
    let text = ''
    for (let i = 0; i < images.length; i++) {
      text += `<img width={500} height={500} src='${images[i]}'/>`
    }

    const user = await User.findOne({
      email: session.user.email,
    })
    user.projects[projectName].images.push({
      imagePrompt,
      text,
      date: new Date(),
    })
    user.markModified('projects')
    await user.save()

    return await res.status(200).json({
      data: text,
    })
  } else {
    return res.status(401).json({
      error: 'Unauthorized',
    })
  }
}

export default handler
