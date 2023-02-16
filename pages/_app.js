import '../styles/bootstrap.min.css'
import '../styles/animate.min.css'
import '../styles/boxicons.min.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import '../node_modules/react-modal-video/css/modal-video.min.css'
import '../styles/style.css'
import '../styles/responsive.css'

import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import Loader from '../components/Shared/Loader'
import GoTop from '../components/Shared/GoTop'
import { SessionProvider } from 'next-auth/react'

export default class MyApp extends App {
  // Preloader
  state = {
    loading: true,
  }
  componentDidMount() {
    this.timerHandle = this.setState({ loading: false })
  }
  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle)
      this.timerHandle = 0
    }
  }

  render() {
    const { Component, pageProps, session } = this.props
    return (
      <SessionProvider session={session}>
        <Head>
          <title>Hepro - React Next IT & SaaS Startup Template</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            name="description"
            content="Hepro - React Next IT & SaaS Startup Template"
          />
          <meta
            name="og:title"
            property="og:title"
            content="Hepro - React Next IT & SaaS Startup Template"
          ></meta>
          <meta
            name="twitter:card"
            content="Hepro - React Next IT & SaaS Startup Template"
          ></meta>
          <link
            rel="canonical"
            href="https://hepro-react.envytheme.com/"
          ></link>
        </Head>

        <Component {...pageProps} />

        {/* Preloader */}
        <Loader loading={this.state.loading} />

        {/* Go Top Button */}
        <GoTop scrollStepInPx="100" delayInMs="10.50" />
      </SessionProvider>
    )
  }
}
