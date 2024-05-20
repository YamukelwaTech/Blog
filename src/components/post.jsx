import React, { Component } from "react";
import { ReactComponent as DetailIcon } from "../assets/Icons/eye.svg";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      description: this.props.post.description,
    };
    this.containerRef = React.createRef();
  }

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };

  render() {
    const { post, onShowDetailedPost } = this.props;
    const iconSize = "0.7rem";

    return (
      <div
        className="p-2 border-4 border-black rounded-md bg-customColor1 shadow-md mb-4 max-w-xl mx-auto mt-20 md:ml-10 overflow-x-scroll"
        ref={this.containerRef}
      >
        <div className="flex items-center mb-2">
          {post.imageURL && (
            <img
              className="w-9 h-9 rounded-full mr-2"
              src={post.imageURL}
              alt={post.title}
            />
          )}
          <span className="text-sm md:text-base">{post.author.name}</span>
          <div className="ml-auto mr-4">
            <div className="flex space-x-2">
              <button
                className="bg-gray-500 text-white p-1 rounded-md flex items-center justify-center"
                onClick={() => onShowDetailedPost(post.token)}
              >
                <DetailIcon width={iconSize} height={iconSize} />
              </button>
            </div>
          </div>
        </div>
        <h2 className="text-lg font-semibold mb-2 p-2">{post.title}</h2>
        <div className="p-2">
          <p
            className="w-full h-10 mb-2 resize-none text-sm md:text-base rounded-md bg-customColor1"
            style={{ border: "none" }}
          >
            {this.state.description}
          </p>
        </div>
      </div>
    );
  }
}

export default Post;
