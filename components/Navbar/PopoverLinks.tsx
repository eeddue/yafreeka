"use client";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import { Music2, Play, Plus, Radio, Video } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const popoverLinks = [
  {
    title: "New video",
    href: "/create/video",
    icon: <Video size={20} />,
  },
  {
    title: "New Quick",
    href: "/create/quick",
    icon: <Play size={20} />,
  },
  {
    title: "New music",
    href: "/create/podmusic",
    icon: <Music2 size={20} />,
  },
  {
    title: "Go live",
    href: "/create/live",
    icon: <Radio size={20} className="text-red-500" />,
  },
];

function PopoverLinks() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline" className="w-[45px]" asChild>
          <Plus size={25} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col w-[200px]">
        {popoverLinks.map((item) => {
          return (
            <Link href={item.href} key={item.href}>
              <PopoverClose className="flex gap-2.5 items-center hover:bg-muted w-full p-2 px-4 rounded-md">
                {item.icon}
                <span className="text-sm lg:text-md">{item.title}</span>
              </PopoverClose>
            </Link>
          );
        })}
      </PopoverContent>
    </Popover>
  );
}

export default PopoverLinks;
