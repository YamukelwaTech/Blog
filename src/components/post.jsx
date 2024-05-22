import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { token } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:5000/posts/${token}`);
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
  }, [token]);

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
        <h1 className="text-4xl font-bold">{article.title}</h1>
        <p className="text-xl">{article.description}</p>
        <div className="author">
          <img
            alt={article.author.name}
            src={article.imageURL || "/images/person/default.jpg"}
            className="h-10 w-10 rounded-full"
          />
          <p>{article.author.name}</p>
          <p>
            {new Date(article.publishedDate).toLocaleDateString()} -{" "}
            {article.readTime} min read
          </p>
        </div>
      </div>
      <div className="content">{article.content}</div>
    </div>
  );
};

export default Post;
