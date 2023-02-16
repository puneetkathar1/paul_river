import React, { Component } from 'react';
import Link from 'next/link';

class OurLovingClients extends Component {
    render() {
        return (
            <section className="our-loving-clients ptb-100 bg-f4f5fe">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Loving Clients</h2>
                    </div>

                    <div className="clients-logo-list align-items-center">
                        <div className="single-clients-logo">
                            <a href="#" target="_blank">
                                <img src="/images/clients/client1.png" alt="image" />
                            </a>
                        </div>

                        <div className="single-clients-logo">
                            <a href="#" target="_blank">
                                <img src="/images/clients/client2.png" alt="image" />
                            </a>
                        </div>

                        <div className="single-clients-logo">
                            <a href="#" target="_blank">
                                <img src="/images/clients/client3.png" alt="image" />
                            </a>
                        </div>

                        <div className="single-clients-logo">
                            <a href="#" target="_blank">
                                <img src="/images/clients/client4.png" alt="image" />
                            </a>
                        </div>

                        <div className="single-clients-logo">
                            <a target="_blank">
                                <img src="/images/clients/client5.png" alt="image" />
                            </a>
                        </div>

                        <div className="single-clients-logo">
                            <a href="#" target="_blank">
                                <img src="/images/clients/client6.png" alt="image" />
                            </a>
                        </div>

                        <div className="single-clients-logo">
                            <a href="#" target="_blank">
                                <img src="/images/clients/client7.png" alt="image" />
                            </a>
                        </div>

                        <div className="single-clients-logo">
                            <a href="#" target="_blank">
                                <img src="/images/clients/client8.png" alt="image" />
                            </a>
                        </div>

                        <div className="single-clients-logo">
                            <a href="#" target="_blank">
                                <img src="/images/clients/client9.png" alt="image" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OurLovingClients;