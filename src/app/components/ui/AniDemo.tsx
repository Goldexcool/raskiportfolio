"use client";
import React from "react";
import { ContainerScroll } from "../ui/ScrollAni";
import Image from "next/image";
import serviceHero from '../../../../public/html-css-collage-concept_23-2150061955.jpg'

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="md:text-4xl text-2xl font-semibold text-black dark:text-white">
            Web Design & Framer<br />
              <span className="text-4xl md:text-[2.5rem] text-[1.5rem] font-bold mt-1 leading-none">
              Premium web design, development, and SEO services to help your business stand out.
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={serviceHero}
          alt="hero"
          height={720}
          width={1400}
          objectFit="cover"
          objectPosition="center"
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
