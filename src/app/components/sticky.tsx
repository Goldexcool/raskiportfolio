"use client";
import React from "react";
import { StickyScroll } from "../components/ui/stickyscroll";
import Image from "next/image";
import call from '../../../public/worried-african-guy-with-curly-hair-talking-phone-surprised-black-male-model-posing-with-mouth-open-call_197531-20178.jpg'
import strategy from '../../../public/business-strategy_53876-167052.jpg'
import design from '../../../public/web-design-technology-browsing-programming-concept_53876-163260.jpg'
import development from '../../../public/operation-process-performance-development-icon_53876-16541.jpg'
import onboarding from '../../../public/realistic-responsive-website-design-collection_23-2149500087.jpg'

const content = [
    {
        title: "Do we Match?",
        subText: "Discovery Call",
        description:
            "Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can we solve with a new website?",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src={call}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Do we have good Strategy?",
        subText: "Concept & Strategy",
        description:
            "Together, we develop a strategy that successfully combines your goals with the needs of your target audience. Based on this concept, I create the first wireframes and an interactive prototype. This provides us with a very good impression of the website and the user interface.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src={strategy}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Some Magic?",
        subText: "web Design",
        description:
            "Now comes the magic. Based on the previously developed concept, I create a high-end screen design perfectly tailored to your brand. A web design that sets you apart from your competition, fits your target audience ideally, and provides an excellent user experience.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src={design}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "More Magic?",
        subText: "Development",
        description:
            "In this step, we breathe life into your new high-end design. You will receive a custom-built website using a modular web design system and CMS integration. Animations will add the necessary flair to your site and set you apart from the boring competition.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src={development}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Ready to go?",
        subText: "Website onboarding",
        description:
            "In a personal Framer workshop, I will show you how to make changes to your new website quickly and easily. Additionally, you will receive personalized Framer video tutorials that you can access at any time. Edit your Framer website without a complicated backend or the need for an additional programmer. It's as simple as that.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
                src={onboarding}
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
            />
        </div>
        ),
    },
];
export function StickyScrollRevealDemo() {
    return (
        <div className="md:px-10 px-5 mt-[20rem]">
            <div className="flex flex-col mb-[2rem] gap-2">
                <h1 className="md:text-3xl text-xl font-bold text-center text-[#2d0954]">
                    The Process
                </h1>
                <p className="text-center md:text-6xl text-3xl text-[#2d0954]">
                Your Website in 5 steps
                </p>
                <p className="text-center text-xl text-[#2d0954]">
                Our process ensures that we create a website tailored to your business needs.
                </p>
            </div>
            <StickyScroll content={content} />
        </div>
    );
}
