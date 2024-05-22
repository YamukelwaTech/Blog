import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalStateContext } from "../GlobalStateContext";

const Blog = () => {
  const { articles } = useContext(GlobalStateContext);

  useEffect(() => {
    console.log("Logging article tokens once when articles change:");
    articles.forEach((article) => {
      console.log("Token:", article.token);
    });
  }, [articles]);

  return (
    <div className="w-full p-12 bg-customColor1">
      <div className="flex items-end justify-between mb-12 header">
        <div className="title md:ml-20">
          <p className="mb-4 text-3xl font-bold text-customColor2">
            Latest YamuBlogs
          </p>
          <p className="text-xl font-semibold text-customColor2">
            All articles are verified by 2 experts and validated by Yamukelwa
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
        {articles.map((article) => {
          return (
            <div
              key={article.token}
              className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80"
            >
              <Link to={`/post/${article.token}`} className="block w-full h-full">
                <img
                  alt={article.title}
                  src={article.backgroundimg || "/images/blog/default.jpg"}
                  className="object-cover w-full max-h-40"
                />
                <div className="w-full p-4 dark:bg-customColor5">
                  <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                    {article.title}
                  </p>
                  <p className="font-light text-black dark:text-gray-300 text-md">
                    {article.description}
                  </p>
                  <div className="flex items-center mt-4">
                    <div className="relative block">
                      <img
                        alt={article.author.name}
                        src={article.imageURL || "/images/person/default.jpg"}
                        className="mx-auto object-cover rounded-full h-10 w-10"
                      />
                    </div>
                    <div className="flex flex-col justify-between ml-4 text-sm">
                      <p className="text-black dark:text-white">
                        {article.author.name}
                      </p>
                      <p className="text-gray-400 dark:text-gray-300">
                        {new Date(article.publishedDate).toLocaleDateString()} -{" "}
                        {article.readTime} min read
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
