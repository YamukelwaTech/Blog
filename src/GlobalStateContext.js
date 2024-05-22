import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [showModal, setShowModal] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const generateRandomPublishTime = () => {
      const start = new Date(2020, 0, 1).getTime();
      const end = new Date().getTime();
      const randomTime = new Date(start + Math.random() * (end - start));
      return randomTime;
    };

    const generateRandomReadTime = () => {
      return Math.floor(Math.random() * 35) + 1;
    };

    axios
      .get("http://localhost:5000/posts")
      .then((response) => {
        const articlesWithTimes = response.data.map((article) => ({
          ...article,
          publishedDate: generateRandomPublishTime(),
          readTime: generateRandomReadTime(),
        }));
        setArticles(articlesWithTimes);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });

    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <GlobalStateContext.Provider
      value={{
        isMobile,
        showModal,
        toggleModal,
        articles,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateContext, GlobalStateProvider };
