import React from "react";

const Dashboard = ({ detailedPost }) => {
  if (!detailedPost) {
    return <div className="flex justify-center items-center mt-6 h-screen">Select a post to see details</div>;
  }

  return (
    <div className="flex justify-center items-center mt-6 h-screen">
      <div className="p-4 border border-red-300 rounded-md w-full h-128 relative">
        <h2 className="text-lg font-semibold mb-2">{detailedPost.title}</h2>
        <div className="h-full flex flex-col justify-between">
          <p>{detailedPost.content}</p>
          <div className="flex items-center absolute bottom-4 left-4">
            {detailedPost.author.imageURL && (
              <img
                src={detailedPost.author.imageURL}
                alt={detailedPost.author.name}
                className="w-12 h-12 rounded-full mr-4"
              />
            )}
            <div className="flex">
              <p className="text-sm mr-2">
                <strong>Author:</strong> {detailedPost.author.name}
              </p>
              <p className="text-sm">
                <strong>Email:</strong> {detailedPost.author.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
