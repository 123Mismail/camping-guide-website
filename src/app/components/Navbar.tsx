import Link from "next/link";
import React from "react";
import { navItems } from "@/app/components/constants/constant";
import Button from "./Button";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
const Navbar = () => {
  return (
    <nav className="z-50 flex   justify-between items-center min-h-10 px-5 max-w-full py-3 bg-gray-50">
      <Link href={"/"} className="text-2xl font-bold text-black-600 ">
        {" "}
        Hi<span className="text-green-600 font-extrabold">link.</span>
      </Link>
      <div className="hidden md:block">
        <ul className="flex items-center space-x-6">
          {navItems.map((item, i) => (
            <li
              className="text-gray-700 text-lg font-medium cursor-pointer hover:text-gray-60 px-2 py-1   hover:bg-gray-300 rounded-full"
              key={i}
            >
              {item}
            </li>
          ))}

          <Button title="Log In" style="bg-gray-900 text-white px-4 py-2" icon='/user.png'></Button>
        </ul>
      </div>
      <span className="md:hidden z-50  ">
        <Sheet >
          <SheetTrigger>
            {" "}
            <Menu />
          </SheetTrigger>
          <SheetContent className=" bg-white">
          <ul className="space-y-3 pt-3 ">
          {navItems.map((item, i) => (
            <li
              className="text-gray-700 text-lg font-medium cursor-pointer  hover:text-gray-60 "
              key={i}
            >
              {item}
            </li>
          ))}

          <Button title="LogIn" style="bg-gray-900 text-white px-10 py-2" icon='/user.png'></Button>
        </ul>
          </SheetContent>
        </Sheet>
      </span>
    </nav>
  );
};

export default Navbar;
