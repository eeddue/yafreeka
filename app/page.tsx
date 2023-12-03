import { generateVideos } from "../data/index";
import PostItem from "@/components/PostItem";

export default function Home() {
  const videos = generateVideos();
  return (
    <main className="page grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 py-2.5 md:px-2.5">
      {videos.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </main>
  );
}
