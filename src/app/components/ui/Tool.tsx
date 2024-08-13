"use client";
import React from "react";
import { AnimatedTooltip } from "../../components/ui/ToolTips";
import image1 from "../../../../public/photo-1438761681033-6461ffad8d80.avif"
import image2 from "../../../../public/photo-1472099645785-5658abf4ff4e.avif"
import image3 from "../../../../public/photo-1535713875002-d1d0cf377fde.avif"
import image4 from "../../../../public/photo-1544725176-7c40e5a71c5e.avif"
import image5 from "../../../../public/photo-1580489944761-15a19d654956.avif"
import image6 from  "../../../../public/photo-1599566150163-29194dcaad36.avif"
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: image1
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: image2
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: image3
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: image4
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: image5
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: image6
  },
];

export function AnimatedTooltipPreview({className}: {className?: string}) {
  return (
    <div className={`flex flex-row items-start justify-start mb-10 mt-[0.5rem] w-full ${className}`}>
      <AnimatedTooltip items={people} />
    </div>
  );
}
