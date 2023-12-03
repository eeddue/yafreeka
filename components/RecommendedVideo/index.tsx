import React from "react";
import { PostProps } from "../PostItem";
import Link from "next/link";
import { formatViews } from "@/lib/utils";
import moment from "moment";

function RecommendedVideo({ post }: { post: PostProps }) {
  return (
    <div className="flex gap-2.5">
      <Link href={`/videos/${post._id}`}>
        <div className="bg-muted-rounded-md relative w-[150px] h-[100px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.thumbnail} alt="thumbnail" className="md:rounded-lg w-full h-full object-cover" />
        </div>
      </Link>
      <div className="">
        <Link href={`/creator/${post.creator._id}`} className="text-sm opacity-60 font-semibold">
          {post.creator.name}
        </Link>
        <Link href={`/videos/${post._id}`} className="lg:text-lg font-semibold line-clamp-2">
          {post.title}
        </Link>
        <p className="opacity-50 text-xs lg:text-md">
          {formatViews(post.views)} views • {moment(post.createdAt).fromNow()}
        </p>
      </div>
    </div>
  );
}

export default RecommendedVideo;
