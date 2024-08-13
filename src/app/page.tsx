import Image from "next/image";
import Hero from "./components/Hero";
import {MenuItem} from "./components/ui/Navbar";
import { NavbarDemo } from "./components/ui/Nav";
import { ThreeDCardDemo } from "./components/ui/ServiceCard";
import { TabsDemo } from "./components/PortfolioTab";

export default function Home() {
  return (
    <main>
      <div>
        <NavbarDemo />
        <Hero />
        <ThreeDCardDemo />
        <TabsDemo />
      </div>
    </main>
  );
}
