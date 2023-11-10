"use client";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {
  BsCameraVideo,
  BsPlusCircleDotted,
  BsMusicPlayerFill,
  BsClipboardPlus,
} from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { TbSquareRoundedPlusFilled } from "react-icons/tb";
import { HiOutlineStatusOnline, HiCog } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { RiFileVideoFill } from "react-icons/ri";
import { PiBookOpenFill } from "react-icons/pi";
import { IoIosHelpCircle, IoIosNotifications } from "react-icons/io";

import * as Popover from "@radix-ui/react-popover";
import * as Avatar from "@radix-ui/react-avatar";
import { usePathname } from "next/navigation";

const menuItens = [
  {
    title: "Home",
    href: "/",
    icon: <AiFillHome className="text-xl text-gray-600" />,
  },
  {
    title: "Quicks",
    href: "/quicks",
    icon: <RiFileVideoFill className="text-xl text-gray-600" />,
  },
  {
    title: "PodMusic",
    href: "/podmusic",
    icon: <BsMusicPlayerFill className="text-xl text-gray-600" />,
  },
  {
    title: "Scripts",
    href: "/scripts",
    icon: <PiBookOpenFill className="text-xl text-gray-600" />,
  },
  {
    title: "Notifications",
    href: "/notifications",
    icon: <IoIosNotifications className="text-xl text-gray-600" />,
  },
  {
    title: "Help",
    href: "/help",
    icon: <IoIosHelpCircle className="text-xl text-gray-600" />,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <HiCog className="text-xl text-gray-600" />,
  },
];

function Navbar() {
  const [show, setShow] = useState<boolean>(false);

  const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const toggleSidebar = useCallback(() => {
    setShow((prev) => !prev);
  }, []);

  const pathname = usePathname();

  return (
    <nav className="sticky bg-white z-10 top-0 border-b-[1px] border-b-gray-400">
      <header className="page h-[60px] px-[10px] flex justify-between items-center gap-[10px]">
        <div className="flex gap-[10px] items-center ">
          <AiOutlineMenu
            className="text-2xl cursor-pointer"
            onClick={toggleSidebar}
          />
          <Link href="/">
            <p className="font-bold text-xl">LOGO</p>
          </Link>
        </div>
        <form
          onSubmit={onsubmit}
          className="flex-1 flex items-center bg-gray-100 max-w-[600px]"
        >
          <input
            type="search"
            placeholder="Search..."
            className="bg-transparent h-full w-full p-[10px]"
          />
          <button className="border-l-gray-500 border-l-[1px] mx-[10px] pl-[10px]">
            <CiSearch className="text-2xl cursor-pointer" />
          </button>
        </form>
        <div className="flex items-center gap-[20px]">
          <Popover.Root>
            <Popover.Trigger>
              <BsCameraVideo className="text-2xl cursor-pointer" />
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="rounded-md w-[200px] mr-[10px] bg-white p-[10px] border-[1px] border-gray-300">
                <div className="flex items-center gap-[10px]">
                  <TbSquareRoundedPlusFilled className="text-2xl" />
                  <p className="">New video</p>
                </div>

                <div className="flex items-center gap-[10px] my-[10px]">
                  <BsPlusCircleDotted className="text-2xl" />
                  <p className="">New quick</p>
                </div>

                <div className="flex items-center gap-[10px] my-[10px]">
                  <BsClipboardPlus className="text-xl" />
                  <p className="">New script</p>
                </div>

                <div className="flex items-center gap-[10px]">
                  <HiOutlineStatusOnline className="text-2xl text-red-600" />
                  <p className="">Go live</p>
                </div>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>

          <Avatar.Root className="w-[40px] h-[40px] rounded-full bg-gray-300 overflow-hidden">
            <Avatar.Image
              src="https://loremflickr.com/640/480?lock=2478286160527360"
              className="object-cover"
            />
          </Avatar.Root>
        </div>
      </header>
      <div
        className={`fixed top-[60px] ${
          show ? "left-0" : "left-[-100%]"
        } w-[300px] min-h-screen h-full bg-white border-r-[1px] border-r-gray-200 duration-200 ease-in-out`}
      >
        {menuItens.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} onClick={toggleSidebar}>
              <div
                className={`flex items-center gap-[20px] m-[10px] rounded-md p-[10px] hover:bg-gray-100 ${
                  isActive && "bg-gray-200"
                } `}
              >
                {item.icon}
                <span className="">{item.title}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
