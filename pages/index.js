import React, { Component } from 'react';
import NavbarThree from '../components/Layouts/NavbarThree';
import MainBanner from '../components/WithoutAnimation/HomeSaas/MainBanner';
import Features from '../components/WithoutAnimation/HomeSaas/Features';
import FeaturedFeature from '../components/WithoutAnimation/HomeSaas/FeaturedFeature';
import MoreToDiscover from '../components/WithoutAnimation/HomeSaas/MoreToDiscover';
import WhyChooseUs from '../components/WithoutAnimation/Common/WhyChooseUs';
import BuildYourApplication from '../components/WithoutAnimation/HomeSaas/BuildYourApplication';
import ClientsFeedbackSlider from '../components/Common/ClientsFeedbackSlider';
import PricingStyleOne from '../components/Pricing/PricingStyleOne';
import FaqContent from '../components/Faq/FaqContent';
import OurLovingClients from '../components/Common/OurLovingClients';
import FreeTrialArea from '../components/WithoutAnimation/HomeSaas/FreeTrialArea';
import Footer from '../components/Layouts/Footer';

class IndexSaas extends Component {
    render() {
        return (
            <>
                <NavbarThree />
                <MainBanner />
                <Features />
                <FeaturedFeature />
                <MoreToDiscover />
                <WhyChooseUs />
                <BuildYourApplication />
                <ClientsFeedbackSlider />
                <PricingStyleOne />
                <FaqContent />
                <OurLovingClients />
                <FreeTrialArea />
                <Footer />
            </>
        );
    }
}

export default IndexSaas;