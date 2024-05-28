import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../GlobalStateContext";

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
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const { setArticles } = useContext(GlobalStateContext);
  const navigate = useNavigate();
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("author.")) {
      const [, field] = name.split("."); // Replace `_` with `_`
      setFormData((prevData) => ({
        ...prevData,
        author: { ...prevData.author, [field]: value },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleImageChange = (e, field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: e.target.files[0],
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Main title is required";
    if (!formData.description)
      newErrors.description = "Article title is required";
    if (!formData.content) newErrors.content = "Content is required";
    if (!formData.author.name) newErrors.authorName = "Author name is required";
    if (!formData.author.email)
      newErrors.authorEmail = "Author email is required";
    if (!formData.imageURL) newErrors.imageURL = "Main image is required";
    if (!formData.backgroundimg)
      newErrors.backgroundimg = "Background image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("content", formData.content);
      formDataToSend.append("author[name]", formData.author.name);
      formDataToSend.append("author[email]", formData.author.email);
      formDataToSend.append("imageURL", formData.imageURL);
      formDataToSend.append("backgroundimg", formData.backgroundimg);

      const response = await axios.post(`${backendUrl}/posts`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Upload successful:", response.data);

      // Update global articles state
      setArticles((prevArticles) => [...prevArticles, response.data]);

      setLoading(false);
      navigate("/blog");
    } catch (error) {
      console.error("Upload failed:", error.message);
      setLoading(false);
    }
  };

  return (
    <div className="w-full p-4 md:p-8 lg:p-12 bg-customColor1 mt-8">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="title"
              className="block mb-2 font-semibold text-gray-700"
            >
              Main Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className=" focus:outline-none bg-inherit w-full py-2"
              placeholder="Enter main title"
            />
            {errors.title && <p className="text-red-500">{errors.title}</p>}
          </div>
          <div>
            <label
              htmlFor="description"
              className="block mb-2 font-semibold text-gray-700"
            >
              Article Title:
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className=" focus:outline-none bg-inherit w-full py-2"
              placeholder="Enter article title"
            />
            {errors.description && (
              <p className="text-red-500">{errors.description}</p>
            )}
          </div>
          <div className="col-span-2">
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
            {errors.imageURL && (
              <p className="text-red-500">{errors.imageURL}</p>
            )}
          </div>
          <div className="col-span-2">
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
            {errors.backgroundimg && (
              <p className="text-red-500">{errors.backgroundimg}</p>
            )}
          </div>
          <div className="col-span-2">
            <label
              htmlFor="content"
              className="block mb-2 font-semibold text-gray-700"
            >
              Content:
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              className=" focus:outline-none bg-inherit w-full py-2"
              placeholder="Enter text"
              style={{ height: "10em" }}
            />
            {errors.content && <p className="text-red-500">{errors.content}</p>}
          </div>
          <div>
            <input
              type="text"
              name="author.name"
              value={formData.author.name}
              onChange={handleChange}
              placeholder="Name"
              className="font-semibold text-gray-700 text-sm w-full focus:outline-none bg-inherit py-2"
            />
            {errors.authorName && (
              <p className="text-red-500">{errors.authorName}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="author.email"
              value={formData.author.email}
              onChange={handleChange}
              placeholder="Email"
              className="font-semibold text-gray-600 text-xs w-full mt-2  focus:outline-none bg-inherit py-2"
            />
            {errors.authorEmail && (
              <p className="text-red-500">{errors.authorEmail}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-customColor3 text-black px-4 py-2 rounded font-semibold"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
};

export default Newpost;
