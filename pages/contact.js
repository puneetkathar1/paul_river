import React, { Component } from 'react'
import NavbarThree from '../components/Layouts/NavbarThree'
import PageTitleArea from '../components/Common/PageTitleArea'
import ContactFormArea from '../components/Contact/ContactFormArea'
import OurLovingClients from '../components/Common/OurLovingClients'
import Footer from '../components/Layouts/Footer'
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]'
import axios from 'axios'
import baseUrl from '../utils/baseUrl'
const Contact = ({ isPro }) => {
  return (
    <>
      <NavbarThree isPro={isPro} />

      <PageTitleArea
        pageTitle="Contact Us"
        pageDescription="Drop us Message for any Query"
      />

      <ContactFormArea />

      <OurLovingClients />

      <Footer />
    </>
  )
}

export default Contact

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
