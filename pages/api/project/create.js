require('dotenv').config()
import dbConnect from '../../../lib/dbConnect.ts'
import User from '../../../model/User.js'
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth].js'

export default async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions)
  await dbConnect()

  const { newProject } = req.body
  console.log('CREATING PROJECT')

  try {
    // Find user with the email
    const user = await User.findOne({
      email: session.user.email,
    })
    if (user.projects[newProject]) {
      return res.status(200).json({ error: 'Project already exists!' })
    }
    user.projects[newProject] = {
      query: '',
      mood: '',
      words: '',
      images: [],
      archive: [],
    }
    user.markModified('projects')
    await user.save()

    return res.status(200).json({ message: 'User Updated!' })
  } catch (err) {
    console.log(err)
  }
}
