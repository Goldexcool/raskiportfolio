import React from 'react';
import { NavbarDemo } from '../components/ui/Nav';
import { GlobeDemo } from '../components/GlobeDemo';
import Footer from '../components/Footer';
import { CardSpotlightDemo } from '../components/ui/cardSpt';

const Services = () => {
    return (
        <section>
            <NavbarDemo />
            <div>
                <CardSpotlightDemo />
            </div>
            <GlobeDemo />
            <Footer />
        </section>
    );
}

export default Services;
