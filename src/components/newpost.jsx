import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Newpost = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    author: {
      name: "",
      email: "",
    },
    imageURL: null,
    backgroundimg: null,
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleImageChange = (e, field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("content", formData.content);
      formDataToSend.append("author[name]", formData.author.name);
      formDataToSend.append("author[email]", formData.author.email);
      formDataToSend.append("imageURL", formData.imageURL);
      formDataToSend.append("backgroundimg", formData.backgroundimg);

      const response = await axios.post(
        "http://localhost:5000/posts",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Upload successful:", response.data);


      navigate("/blog");
    } catch (error) {
      console.error("Upload failed:", error.message);
    }
  };
  return (
    <div className="w-full p-12 bg-customColor1">
      <form onSubmit={handleSubmit}>
        <div className="mt-10">
          <div className="mb-4 md:mb-0 w-full mx-auto relative">
            <div className="px-4 lg:px-0">
              <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="border-b-2 border-gray-800 focus:outline-none"
                  placeholder="Enter main title"
                />
              </h2>
              <p
                href="#"
                className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
              >
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="border-b-2 border-gray-800 focus:outline-none"
                  placeholder="Enter article title"
                />
              </p>
            </div>

            <label
              htmlFor="imageURL"
              className="block mb-2 font-semibold text-gray-700"
            >
              Upload Main Image:
            </label>
            <input
              type="file"
              accept="image/*"
              id="imageURL"
              onChange={(e) => handleImageChange(e, "imageURL")}
              className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
            />

            <label
              htmlFor="backgroundimg"
              className="block mb-2 font-semibold text-gray-700"
            >
              Upload Background Image:
            </label>
            <input
              type="file"
              accept="image/*"
              id="backgroundimg"
              onChange={(e) => handleImageChange(e, "backgroundimg")}
              className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
            />
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="pb-6 w-full"
                placeholder="Enter text"
                style={{ height: "30em" }}
              ></textarea>
            </div>

            <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
              <div className="p-4 border-t border-b md:border md:rounded">
                <div className="flex py-2">
                  <input
                    type="text"
                    name="author.name"
                    value={formData["author.name"]}
                    onChange={handleChange}
                    placeholder="Name"
                    className="font-semibold text-gray-700 text-sm w-full"
                  />
                  <input
                    type="email"
                    name="author.email"
                    value={formData["author.email"]}
                    onChange={handleChange}
                    placeholder="Email"
                    className="font-semibold text-gray-600 text-xs w-full mt-2"
                  />
                </div>

                <button
                  type="submit"
                  className="px-2 py-1 text-customColor2 font-semibold bg-customColor3 flex w-full items-center justify-center rounded"
                >
                  Upload
                  <i className="bx bx-user-plus ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Newpost;
