import React, { Component } from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

class ServiceRightImageStyle extends Component {
    render() {
        return (
            <section className="services-area bg-right-shape ptb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="services-content it-service-content">
                            <div className="content left-content">
                                <div className="icon">
                                    <img src="/images/icon1.png" alt="image" />
                                </div>

                                <h2>UX / UI Design</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="feature-box">
                                            <i className='bx bxs-badge-check'></i>  
                                            Mobile App Design
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="feature-box">
                                            <i className='bx bxs-badge-check'></i> 
                                            Web Design
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="feature-box">
                                            <i className='bx bxs-badge-check'></i> 
                                            eCommerce Design
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="feature-box">
                                            <i className='bx bxs-badge-check'></i> 
                                            Product Design
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="feature-box">
                                            <i className='bx bxs-badge-check'></i> 
                                            UX / UI Design
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="feature-box">
                                            <i className='bx bxs-badge-check'></i> 
                                            Business Card Design
                                        </div>
                                    </div>
                                </div>

                                <Link href="/service-details">
                                    <a className="default-btn">
                                        <i className="bx bxs-spreadsheet"></i> 
                                        Learn More 
                                        <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="services-image">
                            <ScrollAnimation animateIn="fadeInRight" delay={50} animateOnce={true}>
                                <div className="image">
                                    <img src="/images/services/service3.png" alt="image" />
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceRightImageStyle;