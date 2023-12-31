"use client";

import React from "react";
import { SheetClose, SheetContent } from "@/components/ui/sheet";
import { BellRing, Bookmark, HelpCircle, LayoutPanelLeft, LogOut, Music, Play, Settings, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

const links = [
  {
    title: "Home",
    href: "/",
    icon: <LayoutPanelLeft size={20} />,
  },
  {
    title: "Quicks",
    href: "/quicks",
    icon: <Play size={20} />,
  },
  {
    title: "Podmusic",
    href: "/podmusic",
    icon: <Music size={20} />,
  },
  {
    title: "Saved",
    href: "/saved",
    icon: <Bookmark size={20} />,
  },
  {
    title: "Notifications",
    href: "/notifications",
    icon: <BellRing size={20} />,
  },
  {
    title: "Account",
    href: "/creator/fbbhueryb8878ibv84378",
    icon: <User size={20} />,
  },
  {
    title: "Help",
    href: "/help",
    icon: <HelpCircle size={20} />,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <Settings size={20} />,
  },
];

function Sidebar() {
  const pathname = usePathname();
  return (
    <div>
      <SheetContent>
        <div className="flex gap-2.5 items-center my-4 border-b-border border-b-[1px] pb-2.5">
          <Image src="https://app.yafreeka.com/splash/img/dark-2x.png" alt="logo" width={30} height={20} />
          <h1 className="font-bold text-xl">YAFREEKA</h1>
        </div>
        <ScrollArea className="h-[90%]">
          <ul className="grid grid-cols-1 gap-1">
            {links.map((link) => {
              const active = link.href === pathname;
              return (
                <Link href={link.href} key={link.href}>
                  <SheetClose asChild>
                    <div
                      className={cn(
                        "flex items-center gap-2.5 p-4 rounded-md duration-300 ease-in-out hover:bg-muted",
                        active ? "font-semibold bg-muted" : ""
                      )}
                    >
                      {link.icon}
                      <span className="">{link.title}</span>
                    </div>
                  </SheetClose>
                </Link>
              );
            })}
          </ul>
          <SheetClose className="w-full flex mt-1 items-center gap-2.5 text-red-500 p-4 rounded-md duration-500 ease-in-out hover:bg-muted">
            <LogOut size={20} />
            <span>Logout</span>
          </SheetClose>
        </ScrollArea>
      </SheetContent>
    </div>
  );
}

export default Sidebar;
