"use client";
import RecommendedVideo from "@/app/ui/RecommendedVideo";
import { generateRecommended } from "@/data/videos";
import React from "react";

function VideoPage() {
  const recommendedVideos = generateRecommended();
  return (
    <div className="page grid grid-cols-1 lg:grid-cols-3 gap-[10px] py-[10px]">
      <div className="h-full max-h-[500px] col-span-2">
        <video
          className="w-full h-full"
          src="https://player.vimeo.com/external/284652268.sd.mp4?s=0bf23f0d69280b20e39fb2dd5501a5b0d4612a77&profile_id=164&oauth2_token_id=57447761"
          autoPlay
          controls
        />
      </div>
      <div className="col-span-1 gap-[10px] hidden lg:flex flex-col">
        {recommendedVideos.map((video) => (
          <RecommendedVideo key={video._id} post={video} />
        ))}
      </div>
    </div>
  );
}

export default VideoPage;
