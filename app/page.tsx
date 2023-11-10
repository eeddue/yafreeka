import { generateVideos } from "@/data/videos";
import PostItem from "./ui/PostItem/index";

export default function Home() {
  const videos = generateVideos();

  return (
    <main className="page grid gap-[10px] md:p-[10px] py-[10px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {videos.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </main>
  );
}
