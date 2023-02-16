import React, { Component } from 'react'
import NavbarThree from '../components/Layouts/NavbarThree'
import PageTitleArea from '../components/Common/PageTitleArea'
import BlogGrid from '../components/Blog/BlogGrid'
import FreeTrialArea from '../components/Common/FreeTrialArea'
import Footer from '../components/Layouts/Footer'

class Blog extends Component {
  render() {
    return (
      <>
        <NavbarThree />

        <PageTitleArea pageTitle="Blog" pageDescription="News and Insights" />

        <BlogGrid />

        <FreeTrialArea />

        <Footer />
      </>
    )
  }
}

export default Blog
