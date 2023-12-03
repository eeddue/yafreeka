"use client";

import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { PopoverClose } from "@radix-ui/react-popover";
import { CommentProps } from "./SingleComment";

function CommentReply({ comment }: { comment: CommentProps }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="opacity-80">
          Reply
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-2.5 w-[300px] shadow-lg">
        <Label>Reply to {comment.creator.name}</Label>
        <Textarea placeholder="Type to reply..." />

        <PopoverClose>
          <Button variant="secondary" className="w-full">
            Send
          </Button>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
}

export default CommentReply;
