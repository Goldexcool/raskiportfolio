"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/Navbar";
// import logo from '../../../../public/Blue-Colorful-Phoenix-Digital-Studio-Logo-1.png';
import { cn } from "../../lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const router = useRouter();
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}

    >
      <Menu setActive={setActive}>
        {/* <Image src={logo} alt="" width={50} height={50}/> */}
        <MenuItem setActive={setActive} active={active} item="Home">
          {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div> */}
        </MenuItem>
        <Link href="/service" >
          <MenuItem
            setActive={setActive}
            active={active}
            item="Services"
          >
          </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Portfolio">
          {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div> */}
        </MenuItem>
        <Link href={'/pricing'}>
        <MenuItem setActive={setActive} active={active} item="Princing">
        </MenuItem>
        </Link>
        
        {/* <MenuItem setActive={setActive} active={active} item="Blog">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem> */}
        <MenuItem setActive={setActive} active={active} item="Contact">
          {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div> */}
        </MenuItem>
      </Menu>
    </div>
  );
}
