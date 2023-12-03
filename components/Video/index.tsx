import React from "react";

function VideoComponent({ url }: { url: string }) {
  return <video src={url} autoPlay muted controls playsInline className="w-full" />;
}

export default VideoComponent;
