import React, { Component } from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';
import Particles from 'react-particles-js';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const particleOpt = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#fff'
        },
        size: {
            value: 3
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            }
        }
    }
}

class MainBanner extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
                {/* Popup Modal Video If you want to change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='_ysd-zHamjk' 
                    onClose={() => this.setState({isOpen: false})} 
                />

                <div className="saas-banner">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container max-width-1290">
                                <div className="row align-items-center pt-5">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="saas-image mt-70">
                                            <ScrollAnimation animateIn="fadeInDown" delay={50} animateOnce={true}>
                                                <img src="/images/saas-shape/arrow.png" alt="arrow" />
                                            </ScrollAnimation>

                                            <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                                <img src="/images/saas-shape/box1.png" alt="box1" />
                                            </ScrollAnimation>

                                            <ScrollAnimation animateIn="fadeInLeft" delay={50} animateOnce={true}>
                                                <img src="/images/saas-shape/boy1.png" alt="boy1" />
                                            </ScrollAnimation>

                                            <ScrollAnimation animateIn="zoomIn" delay={50} animateOnce={true}>
                                                <img src="/images/saas-shape/boy2.png" alt="boy2" />
                                            </ScrollAnimation>
 
                                            <ScrollAnimation animateIn="bounceIn" delay={50} animateOnce={true}>
                                                <img src="/images/saas-shape/boy3.png" alt="boy3" />
                                            </ScrollAnimation>

                                            <ScrollAnimation animateIn="fadeInDown" delay={50} animateOnce={true}>
                                                <img src="/images/saas-shape/digital-screen.png" alt="Digital Screen" />
                                            </ScrollAnimation>

                                            <ScrollAnimation animateIn="zoomIn" delay={50} animateOnce={true}>
                                                <img src="/images/saas-shape/filter1.png" alt="filter1" />
                                            </ScrollAnimation>

                                            <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                                <img src="/images/saas-shape/filter2.png" alt="filter2" />
                                            </ScrollAnimation>

                                            <ScrollAnimation animateIn="rotateIn" delay={50} animateOnce={true}>
                                                <img src="/images/saas-shape/filter3.png" alt="filter3" />
                                            </ScrollAnimation>

                                            <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                                <img src="/images/saas-shape/girl1.png" alt="girl1" />
                                            </ScrollAnimation>

                                            <ScrollAnimation animateIn="zoomIn" delay={50} animateOnce={true}>
                                                <img src="/images/saas-shape/girl2.png" alt="girl2" />
                                            </ScrollAnimation>

                                            <ScrollAnimation animateIn="zoomIn" delay={50} animateOnce={true}>
                                                <img src="/images/saas-shape/monitor.png" alt="monitor" />
                                            </ScrollAnimation>
    
                                            {/* Main image */}
                                            <ScrollAnimation animateIn="zoomIn" delay={50} animateOnce={true}>
                                                <img src="/images/saas-shape/saas-main-image.png" alt="Main image" />
                                            </ScrollAnimation>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-12">
                                        <div className="hero-content pl-4">
                                            <h1>Manage your business strategy in one placeholder</h1>
                                            <p>Our passion to work hard and deliver excellent results. It could solve the needs of your customers and develop innovation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            
                                            <div className="banner-btn">
                                                <div className="d-flex">
                                                    <Link href="/contact">
                                                        <a className="default-btn">
                                                            <i className="bx bxs-hot"></i>
                                                            Get Started 
                                                            <span></span>
                                                        </a>
                                                    </Link>

                                                    <div
                                                        onClick={e => {e.preventDefault(); this.openModal()}}
                                                        className="video-btn popup-youtube"
                                                    > 
                                                        <i className='bx bxs-right-arrow'></i> Watch Video 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shape-rotate rotateme">
                        <img src="/images/saas-shape/shape-rotate.png" alt="image" />
                    </div>
                    
                    <div className="particles-content">
                        <Particles
                            params={{...particleOpt}}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default MainBanner;