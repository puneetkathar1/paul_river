require('dotenv').config()
import dbConnect from '../../../lib/dbConnect.ts'
import User from '../../../model/User.js'
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth].js'

export default async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions)
  await dbConnect()

  const { projectName } = req.body

  try {
    // Find user with the email
    const user = await User.findOne({
      email: session.user.email,
    })
    if (!user.projects[projectName]) {
      return res.status(200).json({ error: 'Project doesnt exists!' })
    }

    return res.status(200).json({
      message: 'Project found!',
      data: user.projects[projectName],
      requestsLeft: user.requestsLeft,
    })
  } catch (err) {
    console.log(err)
  }
}
