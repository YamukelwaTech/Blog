import React, { Component } from "react";
import axios from "axios";
import { ReactComponent as EditIcon } from "../assets/Icons/edit.svg";
import { ReactComponent as DeleteIcon } from "../assets/Icons/delete.svg";
import { ReactComponent as UpdateIcon } from "../assets/Icons/update.svg";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      content: this.props.post.content,
    };
    this.containerRef = React.createRef();
  }

  handleEditPost = () => {
    this.setState({ editable: true });
  };

  handleUpdatePost = () => {
    const { post } = this.props;
    axios
      .put(`http://localhost:5000/posts/${post.token}`, {
        content: this.state.content,
      })
      .then(() => {
        this.setState({ editable: false });
      })
      .catch((error) => {
        console.error("Error updating post:", error);
      });
  };

  handleDeletePost = () => {
    const { post, onDelete } = this.props;
    axios
      .delete(`http://localhost:5000/posts/${post.token}`)
      .then(() => {
        onDelete(post.token);
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  handleContentChange = (e) => {
    this.setState({ content: e.target.value });
  };

  handleScroll = () => {
    const container = this.containerRef.current;
    const scrollOffset = container.scrollLeft;
    const containerWidth = container.clientWidth;
    const tweets = container.children;

    for (let tweet of tweets) {
      const tweetWidth = tweet.offsetWidth;
      const tweetOffsetLeft = tweet.offsetLeft;
      const tweetVisibilityThreshold = tweetWidth / 2; // Adjust as needed

      if (
        tweetOffsetLeft + tweetWidth - scrollOffset <
        containerWidth - tweetVisibilityThreshold
      ) {
        tweet.style.visibility = "hidden";
      } else {
        tweet.style.visibility = "visible";
      }
    }
  };

  render() {
    const { post } = this.props;
    const contentLength = this.state.content.length;
    const iconSize = "0.6rem";

    const calculateMinHeight = () => {
      return contentLength <= 80 ? "40px" : "110px";
    };

    return (
      <div
        className="p-1 border border-red-300 rounded-md shadow-md mb-4 max-w-xl mx-auto mt-20 md:ml-10 overflow-x-scroll"
        onScroll={this.handleScroll}
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
            {!this.state.editable && (
              <div className="flex space-x-2">
                <button
                  className="bg-blue-500 text-white p-1 rounded-md flex items-center justify-center"
                  onClick={this.handleEditPost}
                >
                  <EditIcon width={iconSize} height={iconSize} />
                </button>
                <button
                  className="bg-red-500 text-white p-1 rounded-md flex items-center justify-center"
                  onClick={this.handleDeletePost}
                >
                  <DeleteIcon width={iconSize} height={iconSize} />
                </button>
              </div>
            )}
            {this.state.editable && (
              <button
                className="bg-green-500 text-white p-1 rounded-md flex items-center justify-center"
                onClick={this.handleUpdatePost}
              >
                <UpdateIcon width={iconSize} height={iconSize} />
              </button>
            )}
          </div>
        </div>
        <h2 className="text-lg font-semibold mb-2 p-2 ">{post.title}</h2>
        <textarea
          className="w-full p-2 mb-2 resize-none text-sm md:text-base rounded-md"
          value={this.state.content}
          onChange={this.handleContentChange}
          style={{ height: calculateMinHeight(), border: "none" }}
          readOnly={!this.state.editable}
        />
      </div>
    );
  }
}

export default Post;
