import React, { Component } from 'react'
import Link from 'next/link'

export default class LetsTalk extends Component {
    render() {
        return (
            <div className="lets-talk-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-12">
                            <div className="lets-talk-content">
                                <span className="sub-title">Let’s Talk</span>
                                <h2>Get Started A Project?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="lets-talk-btn">
                                <Link href="/contact">
                                    <a className="default-btn">
                                        <i className="bx bxs-hot"></i>Contact Us<span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
