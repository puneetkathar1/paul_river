import React, { useState } from 'react'
import { useSession, getSession, signOut, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import NavbarThree from '../components/Layouts/NavbarThree'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Upgrade from '../components/UpgradeFromStripe'
import Stripe from 'stripe'
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]'
import axios from 'axios'
import baseUrl from '../utils/baseUrl'
import Loader from '../components/Shared/Loader'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function Page({ clientSecret }) {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return <Loader loading={true} />
  }
  const options = {
    // passing the client secret obtained in step 3
    clientSecret: clientSecret,
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  }
  return (
    <>
      <NavbarThree isPro={false} />
      <Elements stripe={stripePromise} options={options}>
        <Upgrade clientSecret={clientSecret} />
      </Elements>
    </>
  )
}

export async function getServerSideProps({ res, req }) {
  const session = await unstable_getServerSession(req, res, authOptions)
  if (session) {
    const checkPro = async () => {
      const res = await axios(`${baseUrl}/api/verifySubscription`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({
          email: session.user.email,
        }),
      })
      // const res2 = await res.json()
      return await res.data.message
    }
    const isPro = await checkPro()
    if (!isPro) {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 1000,
        currency: 'aud',
        automatic_payment_methods: {
          enabled: true,
        },
        metadata: { customerEmail: `'${session.user.email}'` },
      })
      return {
        props: { clientSecret: paymentIntent.client_secret },
      }
    } else {
      return {
        redirect: {
          permanent: false,
          destination: '/dashboard',
        },
      }
    }
  } else {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    }
  }
}
