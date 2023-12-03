import React from "react";
import { generateQuicks } from "@/data";
import QuicksPlayer from "./QuicksPlayer";

function Quicks() {
  const videos = generateQuicks();

  return (
    <div className="page">
      <QuicksPlayer videos={videos} />
    </div>
  );
}

export default Quicks;
