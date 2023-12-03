import React from "react";
import { PostProps } from "../PostItem";
import CustomAvatar from "../CustomAvatar";
import Link from "next/link";
import { formatFollowers } from "@/lib/utils";
import { Button } from "../ui/button";
import { Bookmark, Share, ThumbsUp } from "lucide-react";

function PostDetails({ post }: { post: PostProps }) {
  return (
    <div className="p-2.5">
      <h1 className="lg:text-lg">{post.title}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 items-center py-2.5">
        {/* Creator details */}
        <section className="flex gap-2.5 items-center">
          <div className="w-[50px] h-[50px] rounded-full bg-muted overflow-hidden">
            <Link href={`/creator/${post.creator._id}`}>
              <CustomAvatar src={post.creator.profilePic} name={post.creator.name} />
            </Link>
          </div>
          <Link href={`/creator/${post.creator._id}`}>
            <div>
              <p className="line-clamp-1">{post.creator.name}</p>
              <p className="opacity-80 text-sm">{formatFollowers(post.creator.followers)} followers</p>
            </div>
          </Link>
          <Button variant="secondary" className="w-full max-w-[150px] ml-auto">
            <p className="">Follow</p>
          </Button>
        </section>

        {/* Action buttons */}
        <section className="flex gap-2.5 lg:justify-end">
          <Button variant="outline" className="gap-2.5">
            <ThumbsUp size={20} />
            <span className="">235</span>
          </Button>
          <Button variant="outline" className="gap-2.5">
            <Bookmark size={20} />
            <span className="">126</span>
          </Button>
          <Button variant="outline" className="gap-2.5">
            <Share size={20} />
          </Button>
        </section>
      </div>
    </div>
  );
}

export default PostDetails;
