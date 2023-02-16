import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
    navText: [
        "<i class='bx bx-left-arrow-alt'></i>",
        "<i class='bx bx-right-arrow-alt'></i>"
    ]
}

class MainBanner extends Component {

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
            <div className="banner-section chatbot-main-banner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <div className="banner-content">
                                <div className="content">
                                    {this.state.display ? <OwlCarousel 
                                    className="banner-content-slides owl-carousel owl-theme"
                                        {...options}
                                    >
                                        <div className="inner-content">
                                            <h1>Jump with us to build your brand</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                            <Link href="/contact">
                                                <a className="default-btn">
                                                    <i className="bx bxs-hot"></i>
                                                    Try It Free Now
                                                    <span></span>
                                                </a>
                                            </Link>
                                        </div>

                                        <div className="inner-content">
                                            <h1>Build your brand for customers</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                            <Link href="/contact">
                                                <a className="default-btn">
                                                    <i className="bx bxs-hot"></i>
                                                    Try It Free Now
                                                    <span></span>
                                                </a>
                                            </Link>
                                        </div>
                                    </OwlCarousel> : ''}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12">
                            <div className="banner-img bg-3">
                                <div className="chat-wrapper">
                                    <div className="chat">
                                        <div className="chat-container">
                                            <div className="chat-listcontainer">
                                                <ul className="chat-message-list">
                                                    <li className="message-right ms1">
                                                        <div className="messageinner-ms1">
                                                            <img src="/images/author/author6.jpg" alt="Image" />

                                                            <span className="message-text">
                                                                👋 Hi! I'm a Hepro. Let me know if you have any questions regarding our tool or set up a demo to learn more! 
                                                                <span className="message-time">19:58</span>
                                                            </span>
                                                        </div>
                                                    </li>

                                                     <li className="message-left ms2">
                                                        <div className="messageinner-ms2">
                                                            <img src="/images/author/author7.jpg" alt="Image" />
                                                            
                                                            <span className="message-text">
                                                                I have a Question 
                                                                <span className="message-time">19:58</span>
                                                            </span>
                                                        </div>
                                                    </li>
 
                                                    <li className="message-right ms3">
                                                        <div className="messageinner-ms3">
                                                            <img src="/images/author/author6.jpg" alt="Image" />
                                                            <span className="message-text">
                                                                Sure! Ask me anything! 
                                                                <span className="message-time">19:58</span>
                                                            </span>
                                                        </div>
                                                    </li>

                                                    <li className="message-left ms4">
                                                        <div className="messageinner-ms4">
                                                            <img src="/images/author/author7.jpg" alt="Image" />
                                                            <span className="message-text">
                                                                What are you doing? 
                                                                <span className="message-time">19:58</span>
                                                            </span>
                                                        </div>
                                                    </li>

                                                    <li className="message-right ms5">
                                                        <div className="messageinner-ms5">
                                                            <img src="/images/author/author6.jpg" alt="Image" />
                                                            <span className="message-text">
                                                                I'm great! I would love to get to better understand how you're doing and your needs, so I can best tell you how I can help you. Let me get some contact details.
                                                                <span className="message-time">19:58</span>
                                                            </span>
                                                        </div>
                                                    </li>

                                                    <li className="message-left ms6">
                                                        <div className="messageinner-ms6">
                                                            <img src="/images/author/author7.jpg" alt="Image" />
                                                            <span className="message-text">
                                                                Could you describe EnvyTheme in one sentence? 
                                                                <span className="message-time">19:58</span>
                                                            </span>
                                                        </div>
                                                    </li>
 
                                                    <li className="message-right ms7">
                                                        <div className="messageinner-ms7">
                                                            <img src="/images/author/author6.jpg" alt="Image" />
                                                            <span className="message-text">
                                                                EnvyTheme.com | Premium High-Quality Items Design+Dev! Buy all exciting premium templates and themes from EnvyTheme!, Thank You!❤️
                                                                <span className="message-time">19:58</span>
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <img src="/images/banner-img3.jpg" alt="Image" alt="image" />
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
        );
    }
}

export default MainBanner;