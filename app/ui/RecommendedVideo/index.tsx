import { VideoProps } from "@/types";
import { formatViews } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function RecommendedVideo({ post }: { post: VideoProps }) {
  return (
    <div className="flex gap-[10px]">
      <Link href={`/video/${post._id}`}>
        <div className="relative bg-gray-300 h-[100px] w-[200px] ">
          <Image
            src={post.thumbnail}
            alt=""
            layout="fill"
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 300px) 100vw"
          />
        </div>
      </Link>
      <div>
        <Link href={`/video/${post._id}`}>
          <p className="font-bold text-clamp-2">{post.title}</p>
        </Link>
        <Link href={`/creator/${post.creator._id}`}>
          <p className="text-gray-700">{post.creator.name}</p>
        </Link>
        <p className="text-gray-700 text-sm">
          {formatViews(post.views)} views • 2 DAYS AGO
        </p>
      </div>
    </div>
  );
}

export default RecommendedVideo;
