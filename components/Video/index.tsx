import React from "react";

function VideoComponent({ url }: { url: string }) {
  return <video src={url} autoPlay controls className="w-full" />;
}

export default VideoComponent;
