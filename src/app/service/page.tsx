import React from 'react';
import { NavbarDemo } from '../components/ui/Nav';
import { GlobeDemo } from '../components/GlobeDemo';
import Footer from '../components/Footer';
import { HeroScrollDemo } from '../components/ui/AniDemo';
import { FeaturesSectionDemo } from '../components/ui/Bento';

const Services = () => {
    return (
        <section>
            <NavbarDemo />
            <div>
                <HeroScrollDemo />
                <FeaturesSectionDemo />
            </div>
            <GlobeDemo />
            <Footer />
        </section>
    );
}

export default Services;
