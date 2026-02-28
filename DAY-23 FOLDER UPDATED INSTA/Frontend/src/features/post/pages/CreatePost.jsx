import React from "react";
import "../styles/createPost.scss";
import { FaRegImage } from "react-icons/fa6";

const CreatePost = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="createPostWrapper">
      <div className="form-wrapper">
        <div className="child">
          <p>Let's create a post</p>

          <form onSubmit={handleSubmit}>
            <div className="image">
              <label htmlFor="file">
                Select an image <FaRegImage className="img-icon" />
              </label>
              <input hidden type="file" id="file" />
            </div>
            <div className="description">
              <textarea rows={6} placeholder="write caption here"></textarea>
            </div>

            <div className="button">
              <button>POST</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
