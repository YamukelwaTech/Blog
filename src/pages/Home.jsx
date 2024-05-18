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
        <div className="fixed top-0 left-0 w-full bg-white p-4 border-b border-gray-300 z-10">
          <h1>Blog Posts</h1>
        </div>
        <div className="pt-20 px-4 md:px-0 md:container md:mx-auto">
          {this.state.posts.map((post) => (
            <Post key={post.token} post={post} onDelete={this.handleDeletePost} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
