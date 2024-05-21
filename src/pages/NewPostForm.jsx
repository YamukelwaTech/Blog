import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 

class NewPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      content: '',
      authorName: '',
      authorEmail: '',
      imageURL: '',
      backgroundimg: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    const newPost = {
      title: this.state.title,
      description: this.state.description,
      content: this.state.content,
      author: {
        name: this.state.authorName,
        email: this.state.authorEmail
      },
      imageURL: this.state.imageURL,
      backgroundimg: this.state.backgroundimg
    };
    axios
      .post("http://localhost:5000/posts", newPost)
      .then((response) => {
        console.log("New post created:", response.data);
        // Optionally, you can clear the form fields after successful submission
        this.setState({
          title: '',
          description: '',
          content: '',
          authorName: '',
          authorEmail: '',
          imageURL: '',
          backgroundimg: ''
        });
      })
      .catch((error) => {
        console.error("Error creating new post:", error);
      });
  };

  render() {
    return (
      <div>
        <header>
          <h1>Create New Post</h1>
          <Link to="/">Home</Link> {/* Link to navigate back to home */}
        </header>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title:</label><br />
          <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange} /><br />

          <label htmlFor="description">Description:</label><br />
          <textarea id="description" name="description" value={this.state.description} onChange={this.handleChange}></textarea><br />

          <label htmlFor="content">Content:</label><br />
          <textarea id="content" name="content" value={this.state.content} onChange={this.handleChange}></textarea><br />

          <label htmlFor="authorName">Author Name:</label><br />
          <input type="text" id="authorName" name="authorName" value={this.state.authorName} onChange={this.handleChange} /><br />

          <label htmlFor="authorEmail">Author Email:</label><br />
          <input type="email" id="authorEmail" name="authorEmail" value={this.state.authorEmail} onChange={this.handleChange} /><br />

          <label htmlFor="imageURL">Image URL:</label><br />
          <input type="text" id="imageURL" name="imageURL" value={this.state.imageURL} onChange={this.handleChange} /><br />

          <label htmlFor="backgroundimg">Background Image:</label><br />
          <input type="text" id="backgroundimg" name="backgroundimg" value={this.state.backgroundimg} onChange={this.handleChange} /><br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewPostForm;
