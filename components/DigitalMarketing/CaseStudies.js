import React, { Component } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        992: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    }
}


export default class CaseStudies extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <section className="case-studies-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title text-left">
                        <span className="sub-title">Case Studies</span>
                        <h2>Check of our some recent works & case studies</h2>
                    </div>
                </div>

                <div className="container-fluid">
                    {this.state.display ? <OwlCarousel 
                    className="case-studies-slides owl-carousel owl-theme"
                        {...options}
                    > 
                        <div className="single-case-studies-item">
                            <Link href="/service-details">
                                <a className="image d-block">
                                    <img src="/images/case-studies/case-studies-img1.jpg" alt="image" />
                                </a>
                            </Link>
                            <div className="content">
                                <h3>
                                    <Link href="/service-details">
                                        <a>Customer Satisfaction for a Digital Marketing Agency</a>
                                    </Link>
                                </h3>
                                <Link href="/service-details">
                                    <a className="link-btn"><i className='bx bx-right-arrow-alt'></i></a>
                                </Link>
                            </div>
                        </div>

                        <div className="single-case-studies-item">
                            <Link href="/service-details">
                                <a className="image d-block">
                                    <img src="/images/case-studies/case-studies-img2.jpg" alt="image" />
                                </a>
                            </Link>
                            <div className="content">
                                <h3>
                                    <Link href="/service-details">
                                        <a>Return on Investment for Various Digital Marketing</a>
                                    </Link>
                                </h3>
                                <Link href="/service-details">
                                    <a className="link-btn"><i className='bx bx-right-arrow-alt'></i></a>
                                </Link>
                            </div>
                        </div>

                        <div className="single-case-studies-item">
                            <Link href="/service-details">
                                <a className="image d-block">
                                    <img src="/images/case-studies/case-studies-img3.jpg" alt="image" />
                                </a>
                            </Link>
                            <div className="content">
                                <h3>
                                    <Link href="/service-details">
                                        <a>Google Search Engine Marketing Case Study</a>
                                    </Link>
                                </h3>
                                <Link href="/service-details">
                                    <a className="link-btn"><i className='bx bx-right-arrow-alt'></i></a>
                                </Link>
                            </div>
                        </div>

                        <div className="single-case-studies-item">
                            <Link href="/service-details">
                                <a className="image d-block">
                                    <img src="/images/case-studies/case-studies-img4.jpg" alt="image" />
                                </a>
                            </Link>
                            <div className="content">
                                <h3>
                                    <Link href="/service-details">
                                        <a>Analysis of New Product Launch Using Google</a>
                                    </Link>
                                </h3>
                                <Link href="/service-details">
                                    <a className="link-btn"><i className='bx bx-right-arrow-alt'></i></a>
                                </Link>
                            </div>
                        </div>

                        <div className="single-case-studies-item">
                            <Link href="/service-details">
                                <a className="image d-block">
                                    <img src="/images/case-studies/case-studies-img5.jpg" alt="image" />
                                </a>
                            </Link>
                            <div className="content">
                                <h3>
                                    <Link href="/service-details">
                                        <a>Social Media Strategies for Online Shopping Cart</a>
                                    </Link>
                                </h3>
                                <Link href="/service-details">
                                    <a className="link-btn"><i className='bx bx-right-arrow-alt'></i></a>
                                </Link>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </section>
        )
    }
}
