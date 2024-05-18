import React, { Component } from "react";
import axios from "axios";
import Post from "../components/post";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    axios
      .get("http://localhost:5000/posts")
      .then((response) => {
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };

  handleDeletePost = (token) => {
    this.setState((prevState) => ({
      posts: prevState.posts.filter((post) => post.token !== token),
    }));
  };

  render() {
    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.map((post) => (
          <Post key={post.token} post={post} onDelete={this.handleDeletePost} />
        ))}
      </div>
    );
  }
}

export default Home;
