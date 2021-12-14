import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { addPost, deletePost, updatePost } from "./redux/actions/actions";

function App(props) {
  const [showPost, setPost] = useState({
    isVisible: false,
    title: "",
    desc: "",
    updatePost: false,
  });

  return (
    <div
      className="App"
      style={{
        margin: "auto",
        width: "50%",
        border: "3 solid green",
        padding: "10px",
      }}
    >
      <div
        style={{
          backgroundColor: "green",
          height: 100,
        }}
      >
        <h2>Blog Post</h2>
      </div>
      <button
        onClick={() => setPost({ ...showPost, isVisible: !showPost.isVisible })}
      >
        Create Post
      </button>
      {showPost.isVisible ? (
        <div>
          Title:
          <input
            type="text"
            placeholder="Title please"
            onChange={(e) => setPost({ ...showPost, title: e.target.value })}
          ></input>
          <br></br>
          Description:
          <input
            type="text"
            placeholder="Description please"
            onChange={(e) => setPost({ ...showPost, desc: e.target.value })}
          ></input>
          <br></br>
          <button
            type="submit"
            onClick={() => {
              props.addPost({ title: showPost.title, desc: showPost.desc });
              setPost({ ...setPost, title: "", desc: "" });
            }}
          >
            Submit
          </button>
        </div>
      ) : null}
      {props.posts.map((item) => (
        <div class="blogPost" key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
          <button
            type="submit"
            onClick={() => props.deletePost({ id: item.id })}
          >
            Delete Post
          </button>
          <button
            type="submit"
            onClick={() =>
              setPost({ ...showPost, updatePost: !showPost.updatePost })
            }
          >
            Update Post
          </button>
          {showPost.updatePost ? (
            <div>
              <h1>Update Post</h1>
              Title:
              <input
                type="text"
                placeholder="Title please"
                onChange={(e) =>
                  setPost({ ...showPost, title: e.target.value })
                }
              ></input>
              <br></br>
              Description:
              <input
                type="text"
                placeholder="Description please"
                onChange={(e) => setPost({ ...showPost, desc: e.target.value })}
              ></input>
              <br></br>
              <button
                type="submit"
                onClick={() => {
                  props.updatePost({
                    id: item.id,
                    title: showPost.title,
                    desc: showPost.desc,
                  });
                  setPost({ ...setPost, title: "", desc: "" });
                }}
              >
                Submit
              </button>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id));
    },
    addPost: (data) => {
      dispatch(addPost(data));
    },
    updatePost: (data) => {
      dispatch(updatePost(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
