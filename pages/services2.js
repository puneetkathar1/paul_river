import React, { Component } from 'react'
import NavbarThree from '../components/Layouts/NavbarThree'
import PageTitleArea from '../components/Common/PageTitleArea'
import ServicesStyleTwo from '../components/Services/ServicesStyleTwo'
import ClientsFeedbackSliderTwo from '../components/Common/ClientsFeedbackSliderTwo'
import WhyChooseUs from '../components/Common/WhyChooseUs'
import PricingStyleTwo from '../components/Pricing/PricingStyleTwo'
import TeamStyleTwo from '../components/Common/TeamStyleTwo'
import SubscribeStyleTwo from '../components/Common/SubscribeStyleTwo'
import OurLovingClients from '../components/Common/OurLovingClients'
import Footer from '../components/Layouts/Footer'

class Services2 extends Component {
  render() {
    return (
      <>
        <NavbarThree />

        <PageTitleArea
          pageTitle="Services Style Two"
          pageDescription="Our Services"
        />

        <ServicesStyleTwo />

        <ClientsFeedbackSliderTwo />

        <WhyChooseUs />

        <PricingStyleTwo />

        <TeamStyleTwo />

        <SubscribeStyleTwo />

        <OurLovingClients />

        <Footer />
      </>
    )
  }
}

export default Services2
