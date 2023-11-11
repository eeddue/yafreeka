import React from "react";

function VideoPlayer() {
  return (
    <video
      className="w-full"
      src="https://player.vimeo.com/external/392289251.sd.mp4?s=0b80dc8802ce4e423dc5cfac641b046e2eac208b&profile_id=164&oauth2_token_id=57447761"
      // autoPlay
      controls
      muted
    />
  );
}

export default VideoPlayer;
