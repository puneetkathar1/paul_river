import React, { Component } from 'react'
import NavbarThree from '../components/Layouts/NavbarThree'
import PageTitleArea from '../components/Common/PageTitleArea'
import BlogWithSidebar from '../components/Blog/BlogWithSidebar'
import FreeTrialArea from '../components/Common/FreeTrialArea'
import Footer from '../components/Layouts/Footer'

class Blog2 extends Component {
  render() {
    return (
      <>
        <NavbarThree />

        <PageTitleArea
          pageTitle="Blog Right Sidebar"
          pageDescription="News and Insights"
        />

        <BlogWithSidebar />

        <FreeTrialArea />

        <Footer />
      </>
    )
  }
}

export default Blog2
