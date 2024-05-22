import React from "react";

const Comment = ({ comment }) => {
  return (
    <div className=" p-1 mb-1">
      <p className="font-semibold">{comment.user}: {comment.text}</p>
    </div>
  );
};

export default Comment;
