import React from "react";
import { PostProps } from "../PostItem";
import Image from "next/image";
import Link from "next/link";
import { formatViews } from "@/lib/utils";

function RecommendedVideo({ post }: { post: PostProps }) {
  return (
    <div className="flex gap-2.5">
      <Link href={`/videos/${post._id}`}>
        <div className="bg-muted-rounded-md relative w-[150px] h-[100px] overflow-hidden">
          <Image src={post.thumbnail} alt="thumbnail" layout="fill" objectFit="cover" />
        </div>
      </Link>
      <div className="">
        <Link href={`/creator/${post.creator._id}`} className="text-sm opacity-60 font-semibold">
          {post.creator.name}
        </Link>
        <Link href={`/videos/${post._id}`} className="lg:text-lg font-semibold line-clamp-2">
          {post.title}
        </Link>
        <p className="opacity-50 text-xs lg:text-md">{formatViews(post.views)} views • 2 day ago</p>
      </div>
    </div>
  );
}

export default RecommendedVideo;
