import dbConnect from '../../lib/dbConnect'
import User from '../../model/User'
import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { authorization } = req.headers

      if (authorization === `Bearer ${process.env.API_SECRET_KEY}`) {
        await dbConnect()
        await User.find({}, (err, users) => {
          if (err) {
            console.log(err)
          }
          users.map(async (user) => {
            const subscription = await stripe.subscriptions.search({
              query: `status:'active' AND metadata["customerEmail"]:'${user.email}'`,
            })
            const data2 = await subscription.data.filter((el) => {
              return (
                el.plan.active && el.plan.id == 'price_1MOmYzISD02ap540aAaG1jt1'
              )
            })
            if (data2.length > 0) {
              await User.findOneAndUpdate(
                {
                  email: user.email,
                },
                { requestsLeft: 10 },
              )
            } else {
              await User.findOneAndUpdate(
                {
                  email: user.email,
                },
                { requestsLeft: 1 },
              )
            }
          })
        })
        await res.status(200).json({ success: true })
      } else {
        res.status(401).json({ success: false })
      }
    } catch (err) {
      console.log(err)
      res.status(500).json({ statusCode: 500, message: err.message })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
