import React from "react";
import { ReactComponent as EditIcon } from "../assets/Icons/edit.svg";
import { ReactComponent as DeleteIcon } from "../assets/Icons/delete.svg";
import { ReactComponent as UpdateIcon } from "../assets/Icons/update.svg";

const Dashboard = ({
  detailedPost,
  onEditPost,
  onUpdatePost,
  onDeletePost,
}) => {
  // Function to handle edit post
  const handleEdit = () => {
    onEditPost(detailedPost);
  };

  // Function to handle update post
  const handleUpdate = () => {
    onUpdatePost(detailedPost);
  };

  // Function to handle delete post
  const handleDelete = () => {
    onDeletePost(detailedPost.token);
  };

  if (!detailedPost) {
    return (
      <div className="flex justify-center items-center mt-6 h-screen">
        Select a post to see details
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center mt-6 h-screen">
      <div className="p-4 border-4 border-black rounded-md w-full h-128 relative bg-customColor1">
        <h2 className="text-lg font-semibold mb-2">{detailedPost.title}</h2>
        <div className="h-full flex flex-col justify-between">
          <p>{detailedPost.content}</p>
          <div className="flex items-center absolute bottom-4 left-4">
            {detailedPost.author && detailedPost.imageURL && (
              <img
                src={detailedPost.imageURL}
                alt={detailedPost.author.name}
                className="w-12 h-12 rounded-full mr-4"
              />
            )}
            <div className="flex">
              {detailedPost.author && (
                <>
                  <p className="text-sm mr-2">
                    <strong>Author:</strong> {detailedPost.author.name}
                  </p>
                  <p className="text-sm">
                    <strong>Email:</strong> {detailedPost.author.email}
                  </p>
                </>
              )}
            </div>
            <button
              className="bg-green-500 text-white p-1 rounded-md flex items-center justify-center ml-auto mr-2"
              onClick={handleUpdate}
            >
              <UpdateIcon width="0.7rem" height="0.7rem" />
            </button>
            <button
              className="bg-blue-500 text-white p-1 rounded-md flex items-center justify-center mr-2"
              onClick={handleEdit}
            >
              <EditIcon width="0.7rem" height="0.7rem" />
            </button>
            <button
              className="bg-red-500 text-white p-1 rounded-md flex items-center justify-center"
              onClick={handleDelete}
            >
              <DeleteIcon width="0.7rem" height="0.7rem" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
