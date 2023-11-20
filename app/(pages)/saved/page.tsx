import PostItem from "@/app/ui/PostItem";
import { generateVideos } from "@/data/videos";

export default function SavedPosts() {
  const videos = generateVideos();

  return (
    <div className="page grid gap-[10px] md:p-[10px] py-[10px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {videos.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
}
