import { formatViews } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomAvatar from "../CustomAvatar";

export type PostProps = {
  _id: string;
  views: number;
  thumbnail: string;
  title: string;
  creator: {
    _id: string;
    name: string;
    profilePic: string;
  };
};

function PostItem({ post }: { post: PostProps }) {
  return (
    <div key={post._id} className="w-full max-w-[550px] mx-auto md:mx-0">
      <div className="w-full h-[250px] lg:h-[200px] relative dark:bg-gray-800 bg-gray-200">
        <Link href={`/videos/${post._id}`}>
          <Image src={post.thumbnail} alt="thumbnail" layout="fill" objectFit="cover" />
        </Link>
        <Link href={`/creator/${post.creator._id}`}>
          <div className="h-[55px] w-[55px] rounded-full overflow-hidden dark:bg-gray-900 bg-gray-200 z-100 absolute right-4 bottom-[-30px] border-[4px] dark:border-gray-900 border-white flex justify-center items-center">
            <CustomAvatar />
          </div>
        </Link>
      </div>
      <div className="p-2.5 flex flex-col">
        <Link href={`/creator/${post.creator._id}`} className="text-sm opacity-60">
          {post.creator.name}
        </Link>
        <Link href={`/videos/${post._id}`} className="text-lg font-semibold">
          {post.title}
        </Link>
        <p className="opacity-50">{formatViews(post.views)} views • 2 day ago</p>
      </div>
    </div>
  );
}

export default PostItem;
