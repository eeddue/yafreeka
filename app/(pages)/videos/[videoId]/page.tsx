import PostDetails from "@/components/PostDetails";
import RecommendedVideo from "@/components/RecommendedVideo";
import VideoComponent from "@/components/Video";
import { ScrollArea } from "@/components/ui/scroll-area";
import { generateRecommended, generateVideos } from "@/data";
import React from "react";

function WatchVideo() {
  const recommendeVideos = generateRecommended();
  const post = generateVideos()[0];
  return (
    <div className="page grid grid-cols-1 lg:grid-cols-3 gap-2.5 py-2.5 ">
      {/* Post details */}
      <section className="col-span-3 lg:col-span-2 h-4">
        {/* Post Video */}
        <div className="w-full">
          <VideoComponent url="https://v3.cdnpk.net/videvo_files/video/free/2019-11/large_watermarked/190301_1_25_11_preview.mp4" />
        </div>

        {/* Post Details */}
        <PostDetails post={post} />
      </section>

      {/* Recommended videos */}
      <section className="hidden lg:inline lg:col-span-1 pr-2.5">
        <ScrollArea className="h-full">
          <div className="flex flex-col gap-2.5">
            {recommendeVideos.map((post) => (
              <RecommendedVideo key={post._id} post={post} />
            ))}
          </div>
        </ScrollArea>
      </section>
    </div>
  );
}

export default WatchVideo;
