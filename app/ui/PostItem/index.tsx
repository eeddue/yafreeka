import { VideoProps } from "@/types";
import Image from "next/image";
import React from "react";
import { formatViews } from "@/utils";
import Link from "next/link";
import * as Avatar from "@radix-ui/react-avatar";

function PostItem({ post }: { post: VideoProps }) {
  return (
    <div className="w-full mx-auto max-w-[500px]">
      {/* Thumbanil, time and user profile */}
      <div className="relative h-[250px] bg-gray-300">
        <Link href={`/video/${post._id}`}>
          <Image
            src={post.thumbnail}
            layout="fill"
            alt="thumbnail"
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 500px) 100vw"
          />
        </Link>

        <div className="bg-gray-900 absolute bottom-[10px] left-[10px]">
          <p className="text-white text-sm px-1">21:23</p>
        </div>
        <Link href={`/creator/${post.creator._id}`}>
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-white border-2 absolute bottom-[-25px] right-2 bg-gray-400">
            <Image
              src={post.creator.profilePic}
              layout="fill"
              alt="thumbnail"
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 50px) 100vw"
            />
          </div>
        </Link>
      </div>

      {/* Post details */}
      <div className="p-[5px]">
        <Link href={`/creator/${post.creator._id}`}>
          <p className="text-gray-700">{post.creator.name}</p>
        </Link>

        <Link href={`/video/${post._id}`}>
          <p className="font-bold">{post.title}</p>
          <p className="text-gray-700 text-sm">
            {formatViews(post.views)} views • 2DAYS AGO
          </p>
        </Link>
      </div>
    </div>
  );
}

export default PostItem;
