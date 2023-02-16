import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import EmailProvider from 'next-auth/providers/email'
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '../../../lib/mongodb.ts'

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FB_CLIENT,
      clientSecret: process.env.FB_SECRET,
    }),
    // ...add more providers here
  ],
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.SECRET,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  session: {
    // Set to jwt in order to CredentialsProvider works properly
    strategy: 'jwt',
  },
}

export default NextAuth(authOptions)
