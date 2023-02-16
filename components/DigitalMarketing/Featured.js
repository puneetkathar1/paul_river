import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import Link from 'next/link'

export default class Featured extends Component {
    render() {
        return (
            <div className="featured-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                <div className="single-featured-box">
                                    <img src="/images/marketing-agency/featured-img1.jpg" alt="image" />
                                    <h3>Marketing Campaigns & Content Creation</h3>

                                    <Link href="/service-details">
                                        <a className="read-more-btn">
                                            Read More <i className='bx bx-right-arrow-alt'></i>
                                        </a>
                                    </Link>

                                    <Link href="/service-details">
                                        <a className="link-btn"></a>
                                    </Link>
                                </div>
                            </ScrollAnimation>
                        </div>
                       
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                                <div className="single-featured-box">
                                    <img src="/images/marketing-agency/featured-img2.jpg" alt="image" />
                                    <h3>LInk Building & Local Search Strategy</h3>
                                    
                                    <Link href="/service-details">
                                        <a className="read-more-btn">
                                            Read More <i className='bx bx-right-arrow-alt'></i>
                                        </a>
                                    </Link>

                                    <Link href="/service-details">
                                        <a className="link-btn"></a>
                                    </Link>
                                </div>
                            </ScrollAnimation>
                        </div>
                  
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <ScrollAnimation animateIn="fadeInUp" delay={150} animateOnce={true}>
                                <div className="single-featured-box">
                                    <img src="/images/marketing-agency/featured-img3.jpg" alt="image" />
                                    <h3>Search Optimization & Paid Advertising</h3>
                                    
                                    <Link href="/service-details">
                                        <a className="read-more-btn">
                                            Read More <i className='bx bx-right-arrow-alt'></i>
                                        </a>
                                    </Link>

                                    <Link href="/service-details">
                                        <a className="link-btn"></a>
                                    </Link>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
