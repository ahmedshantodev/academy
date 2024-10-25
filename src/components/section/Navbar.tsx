"use client";
import React, { act, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-0 md:top-10 inset-x-0 w-full md:max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>

        <Link href={"/our-courses"}>
          <MenuItem setActive={setActive} active={active} item="Our Courses" />
        </Link>

        <Link href={"/contact-us"}>
          <MenuItem setActive={setActive} active={active} item="Contact us" />
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
