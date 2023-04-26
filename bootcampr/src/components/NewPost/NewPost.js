import React, { useState } from "react";
import "./NewPost.css";

// props needed from app to show name, category and post from InputForm.
function NewPost({ name, category, post }) {
  return (
    <div className="NewPost">
      <h3>{name}</h3>
      <h6>{category}</h6>
      <p>{post}</p>
    </div>
  );
}

export default NewPost;