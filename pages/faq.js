import React, { Component } from 'react'
import NavbarThree from '../components/Layouts/NavbarThree'
import PageTitleArea from '../components/Common/PageTitleArea'
import FaqContent from '../components/Faq/FaqContent'
import SubscribeStyleTwo from '../components/Common/SubscribeStyleTwo'
import FreeTrialArea from '../components/Common/FreeTrialArea'
import Footer from '../components/Layouts/Footer'

class Faq extends Component {
  render() {
    return (
      <>
        <NavbarThree />

        <PageTitleArea
          pageTitle="Frequently Asked Questions"
          pageDescription="Get to know about Hepro"
        />

        <FaqContent />

        <SubscribeStyleTwo />

        <FreeTrialArea />

        <Footer />
      </>
    )
  }
}

export default Faq
