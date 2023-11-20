"use client";
import * as Avatar from "@radix-ui/react-avatar";
import * as Popover from "@radix-ui/react-popover";
import { Box, Button, Flex, Text, TextArea } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

import { AiFillHeart } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaComment } from "react-icons/fa";
import AddComment from "./AddComment";
import Comment from "./Comment";
import { generateComments } from "@/data/videos";

function VideoDetails() {
  const comments = generateComments();
  return (
    <section className="p-[10px] flex flex-col gap-[10px]">
      {/* Post title */}
      <p className="font-bold text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        reiciendis
      </p>

      {/* Creator details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
        <Flex gap="3">
          <Avatar.Root className="w-[40px] h-[40px] rounded-full bg-gray-300 relative">
            <Image
              src="data:image/png;base64,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"
              alt=""
              layout="fill"
              loading="lazy"
            />
          </Avatar.Root>

          <Box>
            <p className="font-bold">John Doe</p>
            <p className="text-xs text-gray-600">153k Subscribers</p>
          </Box>
        </Flex>

        <div className="flex items-center gap-[10px] justify-start sm:justify-end">
          <Button>
            <Text>Subscribe</Text>
          </Button>

          <Popover.Root>
            <Popover.Trigger>
              <Button variant="soft">
                <FaComment className="text-lg" />
              </Button>
            </Popover.Trigger>
            <Popover.Content
              style={{ width: "350px" }}
              className="bg-white border-gray-200 border-[1px] rounded-md p-[10px] mt-[10px] shadow-lg"
            >
              <AddComment />
            </Popover.Content>
          </Popover.Root>
          <Button variant="soft">
            <AiFillHeart className="text-lg" /> 234
          </Button>
          <Button variant="soft">
            <BsFillBookmarkFill className="text-lg" /> 23
          </Button>
        </div>
      </div>

      {/* Post details */}
      <div className="border-b-[1px] border-gray-200 pb-2.5">
        <p className="font-bold">23,803 views • 2 DAYS AGO</p>
        <p className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
          nostrum consequatur labore maxime deserunt et recusandae! Eos
          asperiores tempora eaque, animi qui corporis. Facere illum, asperiores
          explicabo vitae quod repudiandae.
        </p>
      </div>

      {/* Comments sections */}
      <div className="">
        <p className="font-bold text-lg mb-2.5">345 Comments</p>

        <div className="flex flex-col gap-2.5">
          {comments.map((item) => (
            <Comment key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoDetails;
