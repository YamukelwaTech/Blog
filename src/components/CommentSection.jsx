import React, { useState } from "react";

const CommentSection = ({ comments }) => {
  const [newComment, setNewComment] = useState("");

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = () => {
    if (newComment.trim() !== "") {
      const timestamp = new Date().toISOString();
      const user = "JohnDoe"; // Assuming the user is hardcoded for now
      const comment = {
        user: user,
        text: newComment,
        timestamp: timestamp,
      };
      // Handle adding the new comment to your data structure or state here
      console.log("New comment:", comment);
      // Reset the input field
      setNewComment("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Comments</h3>
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <p key={index} className="mb-2">
            <span className="font-semibold">{comment.user}:</span>{" "}
            {comment.text}{" "}
            <span className="text-xs text-gray-500">
              {new Date(comment.timestamp).toLocaleString()}
            </span>
          </p>
        ))
      ) : (
        <p>No comments yet. Be the first to comment!</p>
      )}
      <div className="mt-4">
        <input
          type="text"
          value={newComment}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Add a new comment..."
          className=" p-2 w-full input-no-outline bg-customColor1"
        />
      </div>
    </div>
  );
};

export default CommentSection;
