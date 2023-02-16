import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from './auth/[...nextauth]'
import Stripe from 'stripe'
import dbConnect from '../../lib/dbConnect'
import User from '../../model/User.js'
import baseUrl from '../../utils/baseUrl'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async (req, res) => {
  const { priceId } = req.body
  console.log(priceId)
  const session2 = await unstable_getServerSession(req, res, authOptions)

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [
      {
        price: priceId,
        // For metered billing, do not pass quantity
        quantity: 1,
      },
    ],
    subscription_data: {
      metadata: { customerEmail: session2.user.email },
    },
    customer_email: session2.user.email,
    // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
    // the actual Session ID is returned in the query parameter when your customer
    // is redirected to the success page.
    success_url: `${baseUrl}/success`,
    cancel_url: `${baseUrl}/canceled`,
  })

  await dbConnect()
  await User.findOneAndUpdate(
    {
      email: session2.user.email,
    },
    { requestsLeft: 10 },
  )
  res.redirect(303, session.url)
}
