import React, { Component } from 'react'
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

export default class CompanyIntroVideo extends Component {

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
            
                <div className="company-preview-area">
                    <div className="container">
                        <div className="company-preview-video">
                            <div
                                onClick={e => {e.preventDefault(); this.openModal()}}
                                className="video-btn popup-youtube"
                            > 
                                <i className="bx bx-play"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
