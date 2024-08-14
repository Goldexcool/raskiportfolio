import { HoverEffect } from "../components/ui/CardHover";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-[8rem]">
        <div className="flex flex-col gap-2 items-center justify-center ">
            <h1 className="md:text-[3rem] text-[1.8rem] text-[#fff]">Our Skills</h1>
            <h2 className="md:text-[1.5rem] text-[0.7rem] text-[#fff] text-center">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</h2>
        </div>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Figma",
    description:
      " A powerful web-based design tool used for creating user interfaces, wireframes, and prototypes.",
    link: "https://figma.com",
  },
  {
    title: "WordPress",
    description:
      " An open-source content management system (CMS) that powers a significant portion of the web.",
    link: "https://wordpress.com",
  },
  {
    title: "Shopify",
    description:
      "An e-commerce platform that enables individuals and businesses to create online stores.",
    link: "https://shopify.com",
  },
  {
    title: "Wix",
    description:
      "A user-friendly website builder that allows users to create websites using drag-and-drop tools.",
    link: "https://wix.com",
  },
  {
    title: "Etsy",
    description:
      "An online marketplace that focuses on handmade, vintage, and unique items. It allows sellers to create their own shops.",
    link: "https://etsy.com",
  },
  {
    title: "GoDaddy",
    description:
      " A web hosting and domain registration service provider. It offers a range of services, including website building tools, email hosting, and online marketing solutions",
    link: "https://godaddy.com",
  },
];
