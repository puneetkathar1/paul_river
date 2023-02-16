import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import Link from 'next/link'

export default class MainBanner extends Component {
    render() {
        return (
            <section className="digital-agency-banner">
                <div className="container">
                    <div className="digital-agency-banner-content">
                        <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                            <h1>World Leading <span>Digital Marketing</span> Agency</h1>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeInUp" delay={150} animateOnce={true}>
                            <Link href="/contact">
                                <a className="default-btn">
                                    <i className="bx bxs-hot"></i> Get Started Now <span></span>
                                </a>
                            </Link>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>
        )
    }
}
