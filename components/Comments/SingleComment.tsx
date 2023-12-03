import Link from "next/link";
import React from "react";
import CustomAvatar from "../CustomAvatar";
import moment from "moment";
import { Button } from "../ui/button";
import { Repeat, ThumbsUpIcon } from "lucide-react";
import { formatViews } from "@/lib/utils";

import CommentReply from "./CommentReply";

export type CommentProps = {
  _id: string;
  likes: number;
  replies: number;
  comment: string;
  createdAt: Date;
  creator: {
    _id: string;
    name: string;
    profilePic: string;
  };
};

function SingleComment({ comment }: { comment: CommentProps }) {
  return (
    <div className="flex gap-2.5">
      <div className="w-[40px] h-[40px] bg-muted rounded-full overflow-hidden">
        <Link href={`/creator/${comment.creator._id}`}>
          <CustomAvatar src={comment.creator.profilePic} name={comment.creator.name} />
        </Link>
      </div>
      <div className="flex-1">
        <Link href={`/creator/${comment.creator._id}`} className="text-sm opacity-70">
          {comment.creator.name} • <span className="text-xs">{moment(comment.createdAt).fromNow()}</span>
        </Link>
        <p className="text-left">{comment.comment}</p>
        <div className="flex gap-2.5 mt-2.5">
          <Button variant="outline" className="flex gap-2.5">
            <ThumbsUpIcon size={20} /> <span className="text-xs">{formatViews(comment.likes)}</span>
          </Button>

          <Button variant="outline" className="flex gap-2.5">
            <Repeat size={20} />
            <span className="text-xs">{formatViews(comment.replies)}</span>
          </Button>

          <CommentReply comment={comment} />
        </div>
      </div>
    </div>
  );
}

export default SingleComment;
