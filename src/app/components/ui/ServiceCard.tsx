"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3dCard";
import Link from "next/link";
import website from '../../../../public/photo-1682506456442-a051e8dae813.avif';
import seo from '../../../../public/photo-1460925895917-afdab827c52f.avif';
import vid from '../../../../public/photo-1678690832871-8b9993c76aa8.avif';
import { LampContainer } from "./lamp";

export function ThreeDCardDemo() {
    return (
        <main className="flex flex-col relative">
            <LampContainer>
                <div className="flex flex-col gap-4 items-center">
                    <h1 className="md:text-5xl text-2xl text-center">Our Quality Services</h1>
                    <h1 className="md:text-3xl text-xl text-center w-3/4">We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</h1>
                </div>
            </LampContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-10 px-5 absolute top-[30rem] justify-center place-items-center w-full">

                {/* Card 1 */}
                <CardContainer className="inter-var w-full h-full flex flex-col">
                    <CardBody className="bg-gray-50 relative group/card flex-1 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full rounded-xl p-6 border">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                            WEB DEVELOPMENT
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
                        >
                            Our WordPress Development Company has been providing WordPress website development services for years. Our process is convenient and customized according to the client.
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={website}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>
                        <div className="flex justify-between items-center mt-auto">
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="https://twitter.com/mannupaaji"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Try now →
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>

                {/* Card 2 */}
                <CardContainer className="inter-var w-full h-full flex flex-col">
                    <CardBody className="bg-gray-50 relative group/card flex-1 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full rounded-xl p-6 border">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                            SEO SERVICES
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
                        >
                            Boost your business’s online presence with our comprehensive SEO services tailored to your needs.
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={seo}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>
                        <div className="flex justify-between items-center mt-auto">
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="https://twitter.com/mannupaaji"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Try now →
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>

                {/* Card 3 */}
                <CardContainer className="inter-var w-full h-full flex flex-col">
                    <CardBody className="bg-gray-50 relative group/card flex-1 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full rounded-xl p-6 border">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                            VIDEO MARKETING
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
                        >
                            Leverage video content to engage your audience and drive conversions with our expert video marketing services.
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={vid}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>
                        <div className="flex justify-between items-center mt-auto">
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="https://twitter.com/mannupaaji"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Try now →
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            </div>
        </main>
    );
}
