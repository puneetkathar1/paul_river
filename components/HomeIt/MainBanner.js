import React, { Component } from 'react';
import Link from 'next/link';

class MainBanner extends Component {
    render() {
        return (
            <>
                <div className="main-banner main-banner-one">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-7 col-md-12">
                                <div className="main-banner-content">
                                    <div className="d-table">
                                        <div className="d-table-cell">
                                            <div className="content">
                                                <h1>Secure IT Solutions for a more secure environment</h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                                <Link href="/contact">
                                                    <a className="default-btn">
                                                        <i className="bx bxs-hot"></i> 
                                                        Get Started 
                                                        <span></span>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5 col-md-12">
                                <div className="banner-image mbanner-bg-one">
                                    <div className="d-table">
                                        <div className="d-table-cell">
                                            {/* Animate Image */}
                                            <div className="animate-banner-image">
                                                <img src="/images/animate-banner-img1.jpg" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* For Small Device */}
                                    <img src="/images/banner-slider/banner-img1.jpg" className="mbanner-img" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shape Images */}
                    <div className="shape20">
                        <img src="/images/shape/shape19.png" alt="image" />
                    </div>
                    <div className="shape21">
                        <img src="/images/shape/shape20.png" alt="image" />
                    </div>
                    <div className="shape19">
                        <img src="/images/shape/shape18.png" alt="image" />
                    </div>
                    <div className="shape22">
                        <img src="/images/shape/shape21.png" alt="image" />
                    </div>
                    <div className="shape23">
                        <img src="/images/shape/shape22.svg" alt="image" />
                    </div>
                    <div className="shape24">
                        <img src="/images/shape/shape23.png" alt="image" />
                    </div>
                    <div className="shape26">
                        <img src="/images/shape/shape25.png" alt="image" />
                    </div>
                </div>
            </>
        );
    }
}

export default MainBanner;