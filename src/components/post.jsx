import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalStateContext } from "../GlobalStateContext";
const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Post = () => {
  const { token } = useParams();
  const { article, setArticle } = useContext(GlobalStateContext);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${backendUrl}/posts/${token}`);
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
        const data = await response.json();
        setArticle(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [token, setArticle]);

  const handleCommentSubmit = async () => {
    if (newComment.trim() !== "") {
      try {
        const updatedArticle = { ...article };
        updatedArticle.comments.push({
          user: "Current User",
          text: newComment,
          timestamp: new Date().toISOString(),
        });

        const response = await fetch(`${backendUrl}/posts/${token}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedArticle),
        });

        if (!response.ok) {
          throw new Error("Failed to update post");
        }

        setArticle(updatedArticle);
        setNewComment("");
      } catch (error) {
        console.error("Error updating post:", error);
      }
    }
  };

  if (!article) return <div>Loading...</div>;

  return (
    <div className="w-full p-12 bg-customColor1">
      <div className="header">
        <button
          onClick={() => window.history.back()}
          className="block mt-4 text-sm text-gray-500 hover:text-gray-700"
        >
          ← Back
        </button>
      </div>
      <div className="mt-10">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
              {article.description}
            </h2>
            <p
              href="#"
              className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
            >
              {article.title}
            </p>
          </div>

          <img
            src={article.backgroundimg}
            className="w-full object-cover lg:rounded"
            style={{ height: "23em" }}
            alt={article.title}
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
            <p className="pb-6">{article.content}</p>
            {/* Comments Section */}
            <div className="border-t border-gray-300 mt-8 pt-8">
              <h2 className="text-2xl font-semibold mb-4">Comments</h2>
              {/* Display existing comments */}
              {article.comments.map((comment, index) => (
                <div key={index} className="border border-gray-300 p-4 mb-4">
                  <h3 className="font-semibold">{comment.user}</h3>
                  <p>{comment.text}</p>
                  <p>{comment.timestamp}</p>
                </div>
              ))}
              {/* Input field for adding new comment */}
              <div className="p-1 mb-1">
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add your comment..."
                  className="border border-gray-300 p-1 mb-1"
                />
                <button
                  onClick={handleCommentSubmit}
                  className="bg-blue-500 text-white px-4 py-1 rounded"
                >
                  Add Comment
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
            <div className="p-4 border-t border-b md:border md:rounded">
              <div className="flex py-2">
                <img
                  src={article.imageURL}
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                  alt={article.author.name}
                />
                <div>
                  <p className="font-semibold text-gray-700 text-sm">
                    {article.author.name}
                  </p>
                  <p className="font-semibold text-gray-600 text-xs">
                    {article.author.email}
                  </p>
                </div>
              </div>

              <button className="px-2 py-1 text-customColor2 font-semibold bg-customColor3 flex w-full items-center justify-center rounded">
                Follow
                <i className="bx bx-user-plus ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
