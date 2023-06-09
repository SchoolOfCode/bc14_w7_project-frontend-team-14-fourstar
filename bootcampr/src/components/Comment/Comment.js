import React from "react";
import "./Comment.css";

function Comment({ category, commentName, commentPost }) {
  return (
    <div className={category}>
      <p id="commentname">{commentName}</p>
      <p id="commentcontent">{commentPost}</p>
    </div>
  );
}

export default Comment;
