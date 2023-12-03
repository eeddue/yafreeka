"use client";
import CustomAvatar from "@/components/CustomAvatar";
import { Button } from "@/components/ui/button";
import { cn, formatFollowers, formatViews } from "@/lib/utils";
import { ArrowDown, ArrowUp, Heart, Repeat } from "lucide-react";
import Link from "next/link";
import * as React from "react";

type QuickProps = {
  _id: string;
  title: string;
  likes: number;
  comments: number;
  video: string;
  creator: {
    _id: string;
    name: string;
    profilePic: string;
    followers: number;
  };
};

function QuicksPlayer({ videos }: { videos: QuickProps[] }) {
  const [currentVideo, setCurrentVideo] = React.useState<QuickProps | null>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    setCurrentVideo(videos[currentIndex]);
  }, [videos, currentIndex]);

  const handleNext = () => {
    if (currentIndex === videos.length - 1) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentIndex === 0) return;
    setCurrentIndex((prev) => prev - 1);
  };

  if (!currentVideo) return null;

  return (
    <div className="w-full flex flex-col h-[calc(100vh-60px)] max-w-[500px] border-border border-[1px] mx-auto">
      <div className="flex-1 flex relative max-h-[calc(100vh-60px-80px)]">
        <video ref={videoRef} src={currentVideo.video} controls loop autoPlay className="w-full h-full object-contain" />

        <div className="absolute bottom-4 right-2.5 flex flex-col gap-4 justify-center rounded-full shadow-2xl p-2.5 bg-[#00000099]">
          <button className="flex flex-col items-center gap-1 text-white">
            <Heart size={30} />
            <p className="text-sm">{formatViews(currentVideo.likes)}</p>
          </button>

          <button className="flex flex-col items-center gap-1 text-white">
            <Repeat size={30} />
            <p className="text-sm">{formatViews(currentVideo.comments)}</p>
          </button>

          <div className="w-[45px] h-[45px] rounded-full bg-muted overflow-hidden">
            <Link href={`/creator/${currentVideo.creator._id}`}>
              <CustomAvatar src={currentVideo.creator.profilePic} name={currentVideo.creator.name} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex gap-2.5 p-2.5 items-center border-t-border border-t-[1px]">
        <Button variant="secondary" className="w-full gap-2.5" disabled={currentIndex === 0} onClick={handlePrevious}>
          <ArrowUp size={20} /> Previous
        </Button>
        <Button variant="secondary" className="w-full gap-2.5" disabled={currentIndex === videos.length - 1} onClick={handleNext}>
          <ArrowDown size={20} /> Next
        </Button>
      </div>
    </div>
  );
}

export default QuicksPlayer;
