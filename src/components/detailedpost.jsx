import React from "react";
import CommentSection from "./CommentSection";

const Dashboard = ({ detailedPost }) => {
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
        {detailedPost.backgroundimg && (
          <img
            src={detailedPost.backgroundimg}
            alt="Background"
            style={{
              height: "200px",
              width: "600px",
              border: "3px solid black",
              marginBottom: "30px",
            }}
          />
        )}
        <p>{detailedPost.content}</p>
        <CommentSection comments={detailedPost.comments} />
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
                <p className="text-sm mr-4">
                  <strong>Author:</strong> {detailedPost.author.name}
                </p>
                <p className="text-sm">
                  <strong>Email:</strong> {detailedPost.author.email}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
