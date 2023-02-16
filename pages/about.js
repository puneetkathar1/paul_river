import React, { Component } from 'react'
import NavbarThree from '../components/Layouts/NavbarThree'
import PageTitleArea from '../components/Common/PageTitleArea'
import AboutContent from '../components/About/AboutContent'
import Partner from '../components/Common/Partner'
import WhyChooseUsTwo from '../components/Common/WhyChooseUsTwo'
import TeamMember from '../components/About/TeamMember'
import DownloadApp from '../components/Common/DownloadApp'
import ClientsFeedbackSlider from '../components/Common/ClientsFeedbackSlider'
import FreeTrialArea from '../components/Common/FreeTrialArea'
import Footer from '../components/Layouts/Footer'
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]'
import axios from 'axios'
import baseUrl from '../utils/baseUrl'
const About = ({ isPro }) => {
  return (
    <>
      <NavbarThree isPro={isPro} />
      <PageTitleArea pageTitle="About Us" pageDescription="The Hepro Story" />
      <AboutContent />
      <Partner />
      <WhyChooseUsTwo />
      <TeamMember />
      <DownloadApp />
      <ClientsFeedbackSlider />
      <FreeTrialArea />
      <Footer />
    </>
  )
}

export default About

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
      props: {},
    }
  }
}
