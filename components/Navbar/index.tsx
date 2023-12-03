import React from "react";
import { AlignJustify, Search } from "lucide-react";
import Image from "next/image";
import ToggleTheme from "./ToggleTheme";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";
import PopoverLinks from "./PopoverLinks";
import SearchBarMobile from "./SearchBarMobile";

const Navbar = () => {
  return (
    <nav className="p-2.5 border-b-border-200 border-b-[1px] top-0 sticky z-10 bg-background h-[60px]">
      <header className="page flex gap-2.5 items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2.5">
            <Image src="https://app.yafreeka.com/splash/img/dark-2x.png" alt="logo" width={30} height={20} />
            <h1 className="font-bold hidden lg:flex text-2xl">YAFREEKA</h1>
          </div>
        </Link>

        <div className="flex-1 max-w-[500px] items-center gap-2.5 hidden md:flex">
          <Input type="text" placeholder="Search for videos..." className="p-2 px-3 rounded-md flex-1 outline-none" />
          <Button asChild variant="outline" className="w-[50px]">
            <Search size={64} />
          </Button>
        </div>

        <div className="flex items-center gap-2.5">
          <SearchBarMobile />
          <Link href="/creator/ef342frv54235g" className="hidden md:inline">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
          <ToggleTheme />
          <PopoverLinks />
          <Sheet>
            <SheetTrigger asChild className="cursor-pointer">
              <AlignJustify size={30} />
            </SheetTrigger>
            <Sidebar />
          </Sheet>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
