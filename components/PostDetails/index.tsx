import React from "react";
import Link from "next/link";
import { formatFollowers, formatViews } from "@/lib/utils";
import { Bookmark, Repeat, Share, ThumbsUp } from "lucide-react";

import { PostProps } from "../PostItem";
import CustomAvatar from "../CustomAvatar";
import { Button } from "../ui/button";
import commaNumber from "comma-number";
import moment from "moment";
import AddComment from "./AddComment";

function PostDetails({ post }: { post: PostProps }) {
  return (
    <div className="p-2.5">
      <h1 className="lg:text-lg font-semibold">{post.title}</h1>
      <p className="text-sm opacity-70 mt-2">
        {commaNumber(post.views)} views • {moment(post.createdAt).fromNow()}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 items-center py-3">
        {/* Creator details */}
        <section className="flex gap-2.5 items-center">
          <div className="w-[45px] h-[45px] rounded-full bg-muted overflow-hidden">
            <Link href={`/creator/${post.creator._id}`}>
              <CustomAvatar src={post.creator.profilePic} name={post.creator.name} />
            </Link>
          </div>
          <Link href={`/creator/${post.creator._id}`}>
            <div>
              <p className="line-clamp-1">{post.creator.name}</p>
              <p className="opacity-70 text-sm">{formatFollowers(post.creator.followers)} followers</p>
            </div>
          </Link>
          <Button variant="secondary" className="w-full max-w-[150px] ml-auto">
            <p>Follow</p>
          </Button>
        </section>

        {/* Action buttons */}
        <section className="flex gap-2.5 lg:justify-end">
          <Button variant="outline" className="gap-2.5">
            <ThumbsUp size={20} />
            <span className="opacity-80">{formatViews(post.likes)}</span>
          </Button>
          <Button variant="outline" className="gap-2.5">
            <Bookmark size={20} />
            <span className="opacity-80">{formatViews(post.saves)}</span>
          </Button>
          <AddComment post={post} />
          <Button variant="outline" className="gap-2.5">
            <Share size={20} />
          </Button>
        </section>
      </div>

      {/* More data */}
    </div>
  );
}

export default PostDetails;
