import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Features extends Component {
    render() {
        return (
            <section className="features-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Amazing Features</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                <div className="features-box">
                                    <div className="icon">
                                        <i className='bx bx-conversation'></i>
                                    </div>
                                    <h3>IT Consultancy</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                    <div className="back-icon">
                                        <i className='bx bx-conversation'></i>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                                <div className="features-box">
                                    <div className="icon">
                                        <i className='bx bxs-badge-check'></i>
                                    </div>
                                    <h3>IT Solutions</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                    <div className="back-icon">
                                        <i className='bx bxs-badge-check'></i>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ScrollAnimation animateIn="fadeInUp" delay={150} animateOnce={true}>
                                <div className="features-box">
                                    <div className="icon">
                                        <i className='bx bxs-dashboard'></i>
                                    </div>
                                    <h3>Simple Dashboard</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                    <div className="back-icon">
                                        <i className='bx bxs-dashboard'></i>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce={true}>
                                <div className="features-box">
                                    <div className="icon">
                                        <i className='bx bxs-bell-ring'></i>
                                    </div>
                                    <h3>Deadline Reminders</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                    <div className="back-icon">
                                        <i className='bx bxs-bell-ring'></i>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ScrollAnimation animateIn="fadeInUp" delay={250} animateOnce={true}>
                                <div className="features-box">
                                    <div className="icon">
                                        <i className='bx bxs-info-circle'></i>
                                    </div>
                                    <h3>Information Retrieval</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                    <div className="back-icon">
                                        <i className='bx bxs-info-circle'></i>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
                                <div className="features-box">
                                    <div className="icon">
                                        <i className='bx bx-cog'></i>
                                    </div>
                                    <h3>Flexible Functionality</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                    <div className="back-icon">
                                        <i className='bx bx-cog'></i>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;