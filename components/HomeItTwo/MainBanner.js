import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    autoplayTimeout: 2500,
    items: 1,
    animateOut: 'fadeOut',
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
            <div className="main-banner main-banner-two">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <div className="main-banner-content">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <div className="content">
                                            <h1>Solve Business Challenges With IT</h1>
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
                            {this.state.display ? <OwlCarousel 
                            className="banner-image-slider owl-carousel owl-theme"
                                {...options}
                            >
                                <div className="banner-image banner-slider-bg1"></div>
                                <div className="banner-image banner-slider-bg2"></div>
                                <div className="banner-image banner-slider-bg3"></div>
                            </OwlCarousel> : ''}
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