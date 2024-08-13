/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Spotlight } from '../components/ui/Spotlight';
import { GridBackgroundDemo } from './ui/GridBackground';
import { TextGenerateEffect } from './ui/TextEffect';
import hero from '../../../public/cropped-Blue-Colorful-Phoenix-Digital-Studio-Logo.png'
import { AnimatedTooltipPreview } from './ui/Tool';
import { ButtonsCard } from './ui/Button';

const Hero = () => {

    return (
        <section className=''>
            <div className=''>
                <Spotlight fill='white' className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen ' />
                <Spotlight fill="#103163" className='top-10 left-20 h-[80vh] w-[50vw]' />
                <Spotlight fill="#291038" className='top-28 -left-20 h-[80vh] w-[50vw]' />
            </div>
            <GridBackgroundDemo  className='z-[-100] text-5xl h-screen'/>
            <div className='absolute md:top-[20%] top-[10%] grid md:grid-cols-2 grid-cols-1 justify-between md:px-10 gap-[2rem] px-5 items-center w-full z-10'>
                <div className=' flex justify-center flex-col gap-2 w-full order-1'>
                    <h2 className='md:text-3xl text-2xl text-start'>LEADING DIGITAL AGENCY</h2>
                    <TextGenerateEffect words='The Website That Delivers The Best ROI for Your Investment' className='md:text-4xl text-[2rem] text-start text-[#2d0954]' />
                    <h3 className='text-start text-xl'>Our team will create a visually stunning, SEO-friendly, and user-centered website that represents your brand with confidence.</h3>
                    <div>
                    <AnimatedTooltipPreview className="flex items-start w-full justify-start" />
                        <ButtonsCard text='Hire Us!!!!' className='bg-[#2d0954]text-2xl' />
                    </div>
                </div>
                <img src={hero.src} alt='' className='order-2 lg:translate-x-10 overflow-hidden flex justify-center items-start lg:rotate-12 rounded-md ' />
            </div>

        </section>
    );
}

export default Hero;
