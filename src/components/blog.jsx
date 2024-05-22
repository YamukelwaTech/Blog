import React, { useContext } from "react";
import { GlobalStateContext } from "../GlobalStateContext";

const Blog = () => {
  const { articles } = useContext(GlobalStateContext);

  return (
    <div className="w-full p-12 bg-customColor1">
      <div className="flex items-end justify-between mb-12 header">
        <div className="title">
          <p className="mb-4 text-4xl font-bold text-customColor2">
            Latest Articles
          </p>
          <p className="text-2xl font-light text-customColor2">
            All articles are verified by 2 experts and validated by the CTO
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
        {articles.map((article) => (
          <div
            key={article.id}
            className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80"
          >
            <a href={article.link} className="block w-full h-full">
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
                  <a href="" className="relative block">
                    <img
                      alt={article.author.name}
                      src={article.imageURL || "/images/person/default.jpg"}
                      className="mx-auto object-cover rounded-full h-10 w-10"
                    />
                  </a>
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
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
