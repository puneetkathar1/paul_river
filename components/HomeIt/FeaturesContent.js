import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class FeaturesContent extends Component {
    render() {
        return (
            <section className="features-area pt-100 pb-70 bg-f4f6fc">
                <div className="container">
                    <div className="section-title">
                        <h2>Our amazing features</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <ScrollAnimation animateIn="fadeInLeft" delay={50} animateOnce={true}>
                                <div className="features-box-one">
                                    <i className='bx bx-conversation bg-13c4a1'></i>
                                    <h3>IT Consultancy</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna.</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <ScrollAnimation animateIn="fadeInLeft" delay={100} animateOnce={true}>
                                <div className="features-box-one">
                                    <i className='bx bxs-badge-check bg-6610f2'></i>
                                    <h3>IT Solutions</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna.</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <ScrollAnimation animateIn="fadeInLeft" delay={150} animateOnce={true}>
                                <div className="features-box-one">
                                    <i className='bx bxs-dashboard bg-ffb700'></i>
                                    <h3>Simple Dashboard</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna.</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <ScrollAnimation animateIn="fadeInLeft" delay={200} animateOnce={true}>
                                <div className="features-box-one">
                                    <i className='bx bxs-bell-ring bg-fc3549'></i>
                                    <h3>Deadline Reminders</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna.</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <ScrollAnimation animateIn="fadeInLeft" delay={250} animateOnce={true}>
                                <div className="features-box-one">
                                    <i className='bx bxs-info-circle bg-00d280'></i>
                                    <h3>Information Retrieval</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna.</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <ScrollAnimation animateIn="fadeInLeft" delay={300} animateOnce={true}>
                                <div className="features-box-one">
                                    <i className='bx bx-cog bg-ff612f'></i>
                                    <h3>Flexible Functionality</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FeaturesContent;