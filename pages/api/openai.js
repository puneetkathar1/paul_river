const { Configuration, OpenAIApi } = require('openai')
import dbConnect from '../../lib/dbConnect'
import User from '../../model/User.js'
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from './auth/[...nextauth].js'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

const handler = async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions)
  const { prompt, projectName, mood, words } = req.body

  if (session.user.email) {
    await dbConnect()

    let textPrompt = `${prompt} in ${mood} tone in ${words} words`

    const textResponse = await openai.createCompletion({
      prompt: textPrompt,
      model: 'text-davinci-003',
      temperature: 0.9,
      max_tokens: 4000,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.6,
      stop: [' Human:', ' AI:'],
    })
    let text = textResponse.data.choices[0].text

    const user = await User.findOne({
      email: session.user.email,
    })
    user.projects[projectName] = {
      ...user.projects[projectName],
      query: prompt,
      mood: mood,
      words: words,
    }
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
