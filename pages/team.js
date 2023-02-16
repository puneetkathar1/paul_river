import React, { Component } from 'react'
import NavbarThree from '../components/Layouts/NavbarThree'
import PageTitleArea from '../components/Common/PageTitleArea'
import TeamMemberContent from '../components/Team/TeamMemberContent'
import OurLovingClients from '../components/Common/OurLovingClients'
import ClientsFeedbackSlider from '../components/Common/ClientsFeedbackSlider'
import Footer from '../components/Layouts/Footer'

class Team extends Component {
  render() {
    return (
      <>
        <NavbarThree />

        <PageTitleArea
          pageTitle="Team"
          pageDescription="Meet Our experts always ready to help you"
        />

        <TeamMemberContent />

        <OurLovingClients />

        <ClientsFeedbackSlider />

        <Footer />
      </>
    )
  }
}

export default Team
