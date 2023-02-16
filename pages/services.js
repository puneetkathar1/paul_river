import React, { Component } from 'react'
import NavbarThree from '../components/Layouts/NavbarThree'
import PageTitleArea from '../components/Common/PageTitleArea'
import ServicesStyleOne from '../components/Services/ServicesStyleOne'
import WhyChooseUs from '../components/Common/WhyChooseUs'
import PricingStyleOne from '../components/Pricing/PricingStyleOne'
import TeamStyleOne from '../components/Common/TeamStyleOne'
import DownloadApp from '../components/Common/DownloadApp'
import ClientsFeedbackSlider from '../components/Common/ClientsFeedbackSlider'
import SubscribeStyleTwo from '../components/Common/SubscribeStyleTwo'
import OurLovingClients from '../components/Common/OurLovingClients'
import Footer from '../components/Layouts/Footer'

class Services extends Component {
  render() {
    return (
      <>
        <NavbarThree />

        <PageTitleArea pageTitle="Services" pageDescription="Our Services" />

        <ServicesStyleOne />

        <WhyChooseUs />

        <PricingStyleOne />

        <TeamStyleOne />

        <DownloadApp />

        <ClientsFeedbackSlider />

        <SubscribeStyleTwo />

        <OurLovingClients />

        <Footer />
      </>
    )
  }
}

export default Services
