import React, { Component } from "react";
import axios from "axios";
import Post from "../components/post";
import Header from "../components/header";
import Dashboard from "../components/detailedpost";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      detailedPost: null,
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

  handleShowDetailedPost = (postToken) => {
    axios
      .get(`http://localhost:5000/posts/${postToken}`)
      .then((response) => {
        this.setState({ detailedPost: response.data });
      })
      .catch((error) => {
        console.error("Error fetching detailed post information:", error);
      });
  };

  render() {
    return (
      <div>
        <Header onRefresh={this.fetchPosts} />

        <div className="flex flex-col md:flex-row mt-16">
          <div className="flex-grow px-2 md:px-0 md:w-1/2">
            {this.state.posts.map((post) => (
              <div key={post.token} className="mb-4">
                <div className="w-full">
                  <Post
                    post={post}
                    onShowDetailedPost={this.handleShowDetailedPost}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:block md:w-1/2 px-4 fixed top-0 right-0">
            <Dashboard detailedPost={this.state.detailedPost} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
