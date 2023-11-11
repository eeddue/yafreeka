import * as Avatar from "@radix-ui/react-avatar";
import { Box, Button, Flex } from "@radix-ui/themes";
import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";

import React from "react";
import { CommentProps } from "@/types";
import Link from "next/link";

function Comment({ item }: { item: CommentProps }) {
  return (
    <Flex gap={"3"}>
      <Avatar.Root className="w-[40px] h-[40px] rounded-full bg-gray-300 relative overflow-hidden">
        <Link href={`/creator/${item.creator._id}`}>
          <Image
            src={item.creator.profilePic}
            alt=""
            layout="fill"
            loading="lazy"
            className="object-cover"
          />
        </Link>
      </Avatar.Root>
      <div className="flex-1 flex flex-col">
        <Flex gap="2" align="center">
          <Link href={`/creator/${item.creator._id}`} className="font-bold">
            {item.creator.name}
          </Link>
          <p className="text-sm text-gray-600 mb-1">2 days ago</p>
        </Flex>
        <p className="my-1">{item.comment}</p>
        <Button variant="ghost" style={{ alignSelf: "start" }}>
          <AiOutlineLike className="text-xl" /> 435
        </Button>
      </div>
    </Flex>
  );
}

export default Comment;
