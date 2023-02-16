import React, { Component } from 'react'

export default class AboutArea extends Component {
    render() {
        return (
            <div className="about-area">
                <div className="container">
                    <div className="section-title text-left">
                        <span className="sub-title">About Us</span>
                        <h2>We Are A Strategic Digital Marketing Agency</h2>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="about-inner-area">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-inner-image">
                                    <img src="/images/marketing-agency/about-image.jpg" alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-inner-content">
                                    <div className="content">
                                        <h2>We Can Build Strategy That Would Make a Big Difference</h2>
                                        <ul className="features-list">
                                            <li><i className='bx bx-check'></i> Complete Marketing Solutions</li>
                                            <li><i className='bx bx-check'></i> Flexible Working Hours</li>
                                            <li><i className='bx bx-check'></i> Experienced Team Members</li>
                                            <li><i className='bx bx-check'></i> Outstanding Digital Experience</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
