import React, { Component } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1200: {
            items: 3,
        }
    }
}

export default class LatestBlog extends Component {

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
            <section className="blog-area pt-100 pb-70 bg-f4e9da">
                <div className="container">
                    <div className="section-title text-left">
                        <span className="sub-title">Our News</span>
                        <h2>Check Out Our Latest Blog</h2>
                    </div>

                    {this.state.display ? <OwlCarousel 
                    className="blog-slides owl-carousel owl-theme"
                        {...options}
                    > 
                        <div className="single-blog-post-item">
                            <div className="post-image">
                                <Link href="/blog-details">
                                    <a className="d-block">
                                        <img src="/images/blog/blog10.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <a href="/blog" className="category">Education</a>

                                <h3>
                                    <Link href="/blog-details">
                                        <a>University Admissions Could Face Emergency Controls</a>
                                    </Link>
                                </h3>

                                <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <div className="post-author d-flex align-items-center">
                                            <img src="/images/author/author9.jpg" className="rounded-circle" alt="image" />
                                            <span>Alex Morgan</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i className='bx bx-calendar'></i> April 30, 2020
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="single-blog-post-item">
                            <div className="post-image">
                                <Link href="/blog-details">
                                    <a className="d-block">
                                        <img src="/images/blog/blog11.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <a href="/blog" className="category">SEO</a>

                                <h3>
                                    <Link href="/blog-details">
                                        <a>Online Learning Can Prepare Students For A Fast-Changing</a>
                                    </Link>
                                </h3>
                                
                                <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <div className="post-author d-flex align-items-center">
                                            <img src="/images/author/author8.jpg" className="rounded-circle" alt="image" />
                                            <span>James Smith</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i className='bx bx-calendar'></i> April 29, 2020
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="single-blog-post-item">
                            <div className="post-image">
                                <Link href="/blog-details">
                                    <a className="d-block">
                                        <img src="/images/blog/blog12.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <a href="/blog" className="category">Business</a>

                                <h3>
                                    <Link href="/blog-details">
                                        <a>As Learning Moves Online, Trigger Warnings Must Too Much</a>
                                    </Link>
                                </h3>

                                <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <div className="post-author d-flex align-items-center">
                                            <img src="/images/author/author7.jpg" className="rounded-circle" alt="image" />
                                            <span>Sarah Taylor</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i className='bx bx-calendar'></i> April 28, 2020
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="single-blog-post-item">
                            <div className="post-image">
                                <Link href="/blog-details">
                                    <a className="d-block">
                                        <img src="/images/blog/blog13.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <a href="/blog" className="category">Business</a>

                                <h3>
                                    <Link href="/blog-details">
                                        <a>How To Secure Remote Workers During The COVID-19 Outbreak</a>
                                    </Link>
                                </h3>
                                
                                <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <div className="post-author d-flex align-items-center">
                                            <img src="/images/author/author6.jpg" className="rounded-circle" alt="image" />
                                            <span>Andro Lucy</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i className='bx bx-calendar'></i> April 27, 2020
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </section>
        )
    }
}
