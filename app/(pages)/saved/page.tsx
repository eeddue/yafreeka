import PostItem from "@/components/PostItem";
import { generateVideos } from "@/data";
import React from "react";

function SavedPosts() {
  const videos = generateVideos();
  return (
    <main className="page">
      <h2 className="m-2 font-bold md:text-lg">Videos you&apos;ve saved</h2>
      <div className="page grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 py-2.5 md:px-2.5">
        {videos.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </main>
  );
}

export default SavedPosts;
