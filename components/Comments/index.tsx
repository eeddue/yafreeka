import { generateComments } from "@/data";
import commaNumber from "comma-number";
import React from "react";
import SingleComment from "./SingleComment";

function Comments() {
  const comments = generateComments();
  return (
    <div className="border-t-border border-t-[1px] p-2.5">
      <h1 className="text-lg">{commaNumber(comments.length)} comments</h1>

      <div className="mt-3 flex flex-col gap-2.5">
        {comments.map((comment) => (
          <SingleComment key={comment._id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default Comments;
