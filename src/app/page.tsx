import Image from "next/image";
import Hero from "./components/Hero";
import {MenuItem} from "./components/ui/Navbar";
import { NavbarDemo } from "./components/ui/Nav";
import { ThreeDCardDemo } from "./components/ui/ServiceCard";
import { TabsDemo } from "./components/PortfolioTab";
import { StickyScrollRevealDemo } from "./components/sticky";
import { InfiniteMovingCardsDemo } from "./components/ClientsReview";
import { GlobeDemo } from "./components/GlobeDemo";
import Footer from "./components/Footer";
import { CardHoverEffectDemo } from "./components/Skills";

export default function Home() {
  return (
    <main>
      <div>
        <NavbarDemo />
        <Hero />
        <ThreeDCardDemo />
        <TabsDemo />
        <StickyScrollRevealDemo />
        <CardHoverEffectDemo/>
        <InfiniteMovingCardsDemo />
        <GlobeDemo />
        <Footer />
      </div>
    </main>
  );
}
