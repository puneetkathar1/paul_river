import React, { Component } from 'react'
import NavbarThree from '../components/Layouts/NavbarThree'
import PageTitleArea from '../components/Common/PageTitleArea'
import FeaturesStyleOne from '../components/Features/FeaturesStyleOne'
import ClientsFeedbackSlider from '../components/Common/ClientsFeedbackSlider'
import SubscribeStyleTwo from '../components/Common/SubscribeStyleTwo'
import FreeTrialArea from '../components/Common/FreeTrialArea'
import Footer from '../components/Layouts/Footer'

class Features extends Component {
  render() {
    return (
      <>
        <NavbarThree />

        <PageTitleArea
          pageTitle="Features"
          pageDescription="The ability to elicit, assessing opportunities"
        />

        <FeaturesStyleOne />

        <ClientsFeedbackSlider />

        <SubscribeStyleTwo />

        <FreeTrialArea />

        <Footer />
      </>
    )
  }
}

export default Features
