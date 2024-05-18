import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      content: this.props.post.content,
    };
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

  render() {
    const { post } = this.props;
    return (
      <div>
        <h2>{post.title}</h2>
        <textarea
          value={this.state.content}
          onChange={this.handleContentChange}
          rows={4}
          cols={50}
          readOnly={!this.state.editable}
        />
        <p>Author: {post.author.name}</p>
        {post.imageURL && <img src={post.imageURL} alt={post.title} />}
        {!this.state.editable && (
          <>
            <button onClick={this.handleEditPost}>Edit</button>
            <button onClick={this.handleDeletePost}>Delete</button>
          </>
        )}
        {this.state.editable && (
          <button onClick={this.handleUpdatePost}>Update</button>
        )}
      </div>
    );
  }
}

export default Post;
