import React, { Component } from 'react';
import Link from 'next/link';

class ServicesStyleOne extends Component {
    render() {
        return (
            <section className="features-area pt-100 pb-70 bg-f4f6fc">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="features-box-one">
                                <i className='bx bx-conversation bg-13c4a1'></i>
                                <h3>IT Consultancy</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                <Link href="/service-details">
                                    <a className="read-more">
                                        Read more 
                                        <i className='bx bx-right-arrow-alt'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="features-box-one">
                                <i className='bx bx-mobile bg-6610f2'></i>
                                <h3>Mobile Applications</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                <Link href="/service-details">
                                    <a className="read-more">
                                        Read more 
                                        <i className='bx bx-right-arrow-alt'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="features-box-one">
                                <i className='bx bxs-badge-check bg-ffb700'></i>
                                <h3>IT Solutions</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                <Link href="/service-details">
                                    <a className="read-more">
                                        Read more 
                                        <i className='bx bx-right-arrow-alt'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="features-box-one">
                                <i className='bx bx-laptop bg-9c27b0'></i>
                                <h3>Web Development</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                <Link href="/service-details">
                                    <a className="read-more">
                                        Read more 
                                        <i className='bx bx-right-arrow-alt'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
    
                        <div className="col-lg-4 col-md-6">
                            <div className="features-box-one">
                                <i className='bx bx-cart bg-3f51b5'></i>
                                <h3>eCommerce</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                <Link href="/service-details">
                                    <a className="read-more">
                                        Read more 
                                        <i className='bx bx-right-arrow-alt'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
    
                        <div className="col-lg-4 col-md-6">
                            <div className="features-box-one">
                                <i className='bx bxs-dashboard bg-e91e63'></i>
                                <h3>Project Management</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                <Link href="/service-details">
                                    <a className="read-more">
                                        Read more 
                                        <i className='bx bx-right-arrow-alt'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="features-box-one">
                                <i className='bx bx-data bg-fc3549'></i>
                                <h3>Web Hosting</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                <Link href="/service-details">
                                    <a className="read-more">
                                        Read more 
                                        <i className='bx bx-right-arrow-alt'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="features-box-one">
                                <i className='bx bxs-info-circle bg-00d280'></i>
                                <h3>Technical Support</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                <Link href="/service-details">
                                    <a className="read-more">
                                        Read more 
                                        <i className='bx bx-right-arrow-alt'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="features-box-one">
                                <i className='bx bx-cog bg-ff612f'></i>
                                <h3>SEO, Affiliate Marketing</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                <Link href="/service-details">
                                    <a className="read-more">
                                        Read more 
                                        <i className='bx bx-right-arrow-alt'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServicesStyleOne;