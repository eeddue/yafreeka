import { formatViews } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomAvatar from "../CustomAvatar";
import moment from "moment";

export type PostProps = {
  _id: string;
  views: number;
  thumbnail: string;
  title: string;
  likes: number;
  saves: number;
  createdAt: Date;
  creator: {
    _id: string;
    name: string;
    profilePic: string;
    followers: number;
  };
};

function PostItem({ post }: { post: PostProps }) {
  return (
    <div key={post._id} className="w-full max-w-[550px] mx-auto md:mx-0">
      <div className="w-full h-[250px] md:h-[200px] lg:h-[180px] relative bg-muted md:rounded-lg">
        <Link href={`/videos/${post._id}`}>
          <img src={post.thumbnail} alt="thumbnail" className="md:rounded-lg w-full h-full object-cover" />
        </Link>
        <div className="h-[55px] w-[55px] rounded-full overflow-hidden bg-muted z-100 absolute right-4 bottom-[-30px] border-[4px] dark:border-gray-900 border-white">
          <Link href={`/creator/${post.creator._id}`}>
            <CustomAvatar src={post.creator.profilePic} name={post.creator.name} />
          </Link>
        </div>
      </div>
      <div className="px-2.5 pt-2 flex flex-col">
        <Link href={`/creator/${post.creator._id}`} className="text-sm opacity-60 font-semibold">
          {post.creator.name}
        </Link>
        <Link href={`/videos/${post._id}`} className="font-semibold line-clamp-2">
          {post.title}
        </Link>
        <p className="opacity-50 text-sm">
          {formatViews(post.views)} views • {moment(post.createdAt).fromNow()}
        </p>
      </div>
    </div>
  );
}

export default PostItem;
