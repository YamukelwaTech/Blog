import React, { useState } from "react";

const Newpost = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    imageURL: "",
    backgroundimg: "",
    author: {
      name: "",
      email: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // Reset form fields after submission
    setFormData({
      title: "",
      description: "",
      content: "",
      imageURL: "",
      backgroundimg: "",
      author: {
        name: "",
        email: "",
      },
    });
  };

  return (
    <div className="w-full p-12 bg-customColor1">
      <form onSubmit={handleSubmit}>
        <div className="header"></div>
        <div className="mt-10">
          <div className="mb-4 md:mb-0 w-full mx-auto relative">
            <div className="px-4 lg:px-0">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                className="text-4xl font-semibold text-gray-800 leading-tight w-full"
              />
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                className="py-2 text-green-700 inline-flex items-center justify-center mb-2 w-full"
              />
            </div>
            <input
              type="url"
              name="backgroundimg"
              value={formData.backgroundimg}
              onChange={handleChange}
              placeholder="Background Image URL"
              className="w-full object-cover lg:rounded mt-4"
            />
          </div>
          <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full">
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Content"
              className="border-t border-gray-300 mt-8 pt-8 w-full"
            ></textarea>
            <input
              type="text"
              name="author[name]"
              value={formData.author.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border-t border-gray-300 mt-8 pt-8 w-full"
            />
            <input
              type="email"
              name="author[email]"
              value={formData.author.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="border-t border-gray-300 mt-8 pt-8 w-full"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Newpost;
