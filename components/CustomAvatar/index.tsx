"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

function CustomAvatar({ src, name }: { src: string; name: string }) {
  return (
    <Avatar>
      <AvatarImage src={src} />
      <AvatarFallback className="flex items-center justify-center w-full h-full">{name.toUpperCase().slice(0, 2)}</AvatarFallback>
    </Avatar>
  );
}

export default CustomAvatar;
