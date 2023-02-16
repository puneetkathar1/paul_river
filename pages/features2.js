import React, { Component } from 'react'
import NavbarThree from '../components/Layouts/NavbarThree'
import PageTitleArea from '../components/Common/PageTitleArea'
import FeaturesStyleTwo from '../components/Features/FeaturesStyleTwo'
import ClientsFeedbackThree from '../components/Common/ClientsFeedbackThree'
import FreeTrialArea from '../components/Common/FreeTrialArea'
import Footer from '../components/Layouts/Footer'

class features2 extends Component {
  render() {
    return (
      <>
        <NavbarThree />

        <PageTitleArea
          pageTitle="Features Style Two"
          pageDescription="The ability to elicit, assessing opportunities"
        />

        <FeaturesStyleTwo />

        <ClientsFeedbackThree />

        <FreeTrialArea />

        <Footer />
      </>
    )
  }
}

export default features2
