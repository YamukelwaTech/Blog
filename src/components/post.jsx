import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GlobalStateContext } from "../GlobalStateContext";
import loading from "../assets/Icons/loading.png";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Post = () => {
  const { token } = useParams();
  const { article, setArticle } = useContext(GlobalStateContext);
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${backendUrl}/posts/${token}`);
        setArticle(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [token, setArticle]);

  const handleCommentSubmit = async () => {
    if (newComment.trim() !== "") {
      try {
        const comment = {
          user: "Current User",  // Replace with actual user data
          text: newComment,
          timestamp: new Date().toISOString(),
        };

        const response = await axios.post(`${backendUrl}/posts/${token}/comments`, comment);
        setArticle((prevArticle) => ({
          ...prevArticle,
          comments: [...prevArticle.comments, response.data],
        }));
        setNewComment("");
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img
          src={loading}
          alt="Loading Icon"
          style={{ width: "10%", height: "auto" }}
        />
      </div>
    );
  }

  if (!article) return null;

  return (
    <div className="w-full p-12 bg-customColor1">
      <div className="header">
        <button
          onClick={() => window.history.back()}
          className="block mt-4 text-sm text-black hover:text-customColor4 font-extrabold"
        >
          ← Back
        </button>
      </div>
      <div className="mt-5 sm:mt-6 md:mt-9 lg:mt-10 xl:mt-10">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <h2 className="lg:text-4xl font-semibold text-gray-800 leading-tight text-xl">
              {article.description}
            </h2>
            <p
              href="#"
              className="py-2 text-green-700 inline-flex items-center justify-center mb-2 text-lg font-bold"
            >
              {article.title}
            </p>
          </div>

          <img
            src={article.backgroundimg}
            className="w-full h-auto lg:rounded object-cover"
            style={{ height: "23em" }}
            alt={article.title}
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="px-4 lg:px-0 mt-12 text-gray-700 text-base lg:text-lg leading-relaxed w-full lg:w-3/4">
            <p className="pb-6 text-sm lg:text-lg font-semibold">{article.content}</p>
            <div className="border-t border-gray-300 mt-8 pt-8">
              <h2 className="text-2xl font-semibold mb-4">Comments</h2>
              {article.comments.map((comment, index) => (
                <div key={index} className="border p-4 mb-4">
                  <h3 className="font-semibold text-sm lg:text-base">{comment.user}</h3>
                  <p className="text-sm lg:text-base">{comment.text}</p>
                  <p className="text-sm lg:text-base">{comment.timestamp}</p>
                </div>
              ))}
              <div className="p-1 mb-10">
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add your comment..."
                  className="border border-gray-300 p-1 mb-2 bg-inherit text-sm lg:text-base"
                />
                <button
                  onClick={handleCommentSubmit}
                  className="bg-customColor3 text-black px-4 py-1 rounded ml-2 font-bold text-sm lg:text-base"
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
