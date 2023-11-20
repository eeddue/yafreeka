"use client";
import RecommendedVideo from "@/app/ui/RecommendedVideo";
import VideoPlayer from "@/app/ui/video";
import VideoDetails from "@/app/ui/video/VideoDetails";
import { generateRecommended } from "@/data/videos";
import React from "react";

function VideoPage() {
  const recommendedVideos = generateRecommended();
  return (
    <div className="page grid grid-cols-1 lg:grid-cols-3 gap-[10px] lg:py-[10px]">
      <div className="h-full max-h-[500px] col-span-2">
        <VideoPlayer />
        <VideoDetails />
      </div>
      <div className="col-span-1 gap-[10px] hidden lg:flex flex-col">
        {recommendedVideos?.map((video) => (
          <RecommendedVideo key={video._id} post={video} />
        ))}
      </div>
    </div>
  );
}

export default VideoPage;
