import React, { Component } from 'react';

class FunFacts extends Component {
    render() {
        return (
            <div className="funfacts-inner">
                <div className="row">
                    <div className="col-lg-3 col-6 col-sm-6">
                        <div className="single-funfacts funfact-style-two">
                            <i className='bx bx-list-check'></i>
                            <h3>
                                850
                                <span className="sign-icon">+</span>
                            </h3>
                            <p>Completed Projects</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6">
                        <div className="single-funfacts funfact-style-two">
                            <i className='bx bx-smile'></i>
                            <h3>
                                850
                                <span className="sign-icon">+</span>
                            </h3>
                            <p>Happy Clients</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6">
                        <div className="single-funfacts funfact-style-two">
                            <i className='bx bx-grid-small'></i>
                            <h3>
                                120
                                <span className="sign-icon">+</span>
                            </h3>
                            <p>Ongoing Projects</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6">
                        <div className="single-funfacts funfact-style-two">
                            <i className='bx bxs-award'></i>
                            <h3>
                                50
                                <span className="sign-icon">+</span>
                            </h3>
                            <p>Winning Awards</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FunFacts;