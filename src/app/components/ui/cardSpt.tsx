import React from 'react';
import { CardSpotlight } from "../../components/ui/CardSpotlight";
import { ButtonsCard } from './Button';

export function CardSpotlightDemo() {
    const cards = [
        {
            package: "LITE",
            price: "$3900.00",
            steps: [
                "Concept",
                "Strategy",
                "Web Design",
                "Prototype"
            ],
            description: "Affordable web design package with a custom design, CMS integration, and responsive design for small businesses and startups."
        },
        {
            package: "PREMIUM",
            price: "$6900.00",
            steps: [
                "Concept",
                "Strategy",
                "Web Design",
                "Development",
            ],
            description: "Comprehensive web design package with UX/UI design, interactive prototype, Framer development, and CMS integration for medium businesses."
        },
        {
            package: "GOLD",
            price: "$9900.00",
            steps: [
                "Web Design",
                "Development",
                "Content",
                "Seo",
            ],
            description: "Elite web design package with SEO optimization, research, and SEO support for businesses looking to dominate their market."
        }
    ];

    return (
        <div className="flex flex-wrap gap-6 justify-center mt-[10rem] mb-[4rem]">
            {cards.map((card, index) => (
                <CardSpotlight key={index} className="flex flex-col h-[26rem] md:w-96 w-full p-5 md:p-10">
                    <div className="flex-1">
                        <p className="text-xl font-bold text-white">
                            {card.package}
                        </p>
                        <p className="text-xl font-bold mt-2 text-white">
                            {card.price}
                        </p>
                        <div className="text-neutral-200 mt-4">
                            <p>Follow these steps:</p>
                            <ul className="list-none mt-2">
                                {card.steps.map((step, stepIndex) => (
                                    <Step key={stepIndex} title={step} />
                                ))}
                            </ul>
                        </div>
                        <p className="text-neutral-300 mt-4 text-sm">
                            {card.description}
                        </p>
                    </div>
                    <div className="mt-4">
                        <ButtonsCard text="Get Started" />
                    </div>
                </CardSpotlight>
            ))}
        </div>
    );
}

const Step = ({ title }: { title: string }) => {
    return (
        <li className="flex gap-2 items-start">
            <CheckIcon />
            <p className="text-white">{title}</p>
        </li>
    );
};

const CheckIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
                fill="currentColor"
                strokeWidth="0"
            />
        </svg>
    );
};
