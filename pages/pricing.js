import React, { Component } from 'react'
import NavbarThree from '../components/Layouts/NavbarThree'
import PageTitleArea from '../components/Common/PageTitleArea'
import PricingStyleOne from '../components/Pricing/PricingStyleOne'
import FaqContent from '../components/Faq/FaqContent'
import OurLovingClients from '../components/Common/OurLovingClients'
import FreeTrialAreaTwo from '../components/Common/FreeTrialAreaTwo'
import Footer from '../components/Layouts/Footer'
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]'
import axios from 'axios'
import baseUrl from '../utils/baseUrl'
const Pricing = ({ isPro }) => {
  return (
    <>
      <NavbarThree isPro={isPro} />

      <PageTitleArea
        pageTitle="Transparent Pricing"
        pageDescription="Border-less account pricing"
      />

      <PricingStyleOne />

      <FaqContent />

      <OurLovingClients />

      <FreeTrialAreaTwo />

      <Footer />
    </>
  )
}

export default Pricing

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

    return {
      props: { isPro: isPro },
    }
  } else {
    return {
      props: { },
    }
  }
}
