import React from "react";

function VideoComponent({ url }: { url: string }) {
  return <video src={url} autoPlay controls playsInline className="w-full" />;
}

export default VideoComponent;
