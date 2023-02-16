import Stripe from 'stripe'
import { setCookie } from 'nookies'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  try {
    if (req.method != 'POST') return res.status(400)
    const { email } = req.body

    // Create a subscription
    const subscription = await stripe.subscriptions.search({
      query: `status:'active' AND metadata["customerEmail"]:'${email}'`,
    })
    console.log(subscription.data)
    const data2 = subscription.data.filter((el) => {
      return el.plan.active && el.plan.id == 'price_1MOmYzISD02ap540aAaG1jt1'
    })
    // Set
    console.log(data2.length > 0)

    // Send back the client secret for payment
    res.json({
      message: data2.length > 0,
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Internal server error' })
  }
}
