"use client";
import React from "react";
import { InfiniteMovingCards } from "../components/ui/MovingCards";
import john from '../../../public/pexels-oleg-podlesnykh-11785442 1.svg'
import david from '../../../public/pexels-dziana-hasanbekava-7196344 1.svg'
import lee from '../../../public/pexels-elizaveta-chayko-7357789 1 (1).svg'
import andrew from '../../../public/andrew.svg'
import emily from '../../../public/emily.svg'
import ryan from '../../../public/ryan.svg'


export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden mt-[3rem]">
        <div className="flex w-full justify-center items-center flex-col gap-">
            <h1 className="md:text-5xl text-3xl text-center mb-[0.5rem] text-slate-700 uppercase">What my clients say</h1>
            <h2 className="md:text-2xl text-xl text-center mb-[2rem] text-slate-700 w-3/4">See what my clients have to say about working with me and the results I helped them achieve.</h2>
        </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    topText: "Amazing Results with Dynamic Web Premium Web Design Services.",
    quote:
      "Dynamic Web is a top-notch web designer who created a stunning website for my business. He was attentive to my needs and provided excellent customer service throughout the entire process. I highly recommend his services.",
    name: "John Smith",
    image: john,
    title: "ABC Company",
  },
  {
    topText: "Expert Webflow and SEO Services: Excellent Work, Great Results.",
    quote:
      "Working with Dynamic Webb on my website redesign was a fantastic experience. He was able to take my vision and turn it into a beautiful and functional website. His attention to detail and creative approach is unmatched. I couldn't be happier with the end result.",
    name: "David Kim",
    image: david,
    title: "Design Inc.",
  },
  {
    topText: "Professional, Collaborative Web Design Experience with Arik.",
    quote:
      "I had the pleasure of working with Arik on a website development project and was blown away by his expertise and professionalism. He made the process seamless and delivered a website that exceeded our expectations. I highly recommend Arik for all your web development needs.",
    name: "Karen Lee",
    image: lee,
    title: "Redwood Technologies",
  },
  {
    topText: "Expertise in Web Design: Second to None with Arik.",
    quote: "Arik is not only an exceptional web designer, but also a pleasure to work with. He took the time to understand my business and its unique needs, and created a website that perfectly represents my brand. I highly recommend Arik's services to anyone looking for a top-quality web designer.",
    name: "Andrew Thompson",
    image: andrew,
    title: "Silverstone Corporation",
  },
  {
    topText: "Web Design and Content Solutions: Stand Out from the Crowd.",
    quote:
      "Arik's SEO services have helped my business improve its online presence and increase traffic to our website. He is knowledgeable, professional, and provides excellent results. I highly recommend him for all your SEO needs.",
    name: "Emily Davis",
    image: emily,
    title: "Greenway Industries",
  },
  {
    topText: "High-Quality Web Design: Exceptional Attention to Detail with Arik.",
    quote:
      "Arik's development services are top-notch. He is able to take complex ideas and turn them into functional, user-friendly websites. His attention to detail and commitment to customer satisfaction are unmatched. I highly recommend Arik for all your web development needs.",
    name: "Ryan Chen",
    image: ryan,
    title: "Golden Gate Solutions",
  },
];
