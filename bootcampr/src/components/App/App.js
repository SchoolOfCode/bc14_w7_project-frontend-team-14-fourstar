import React, { useState } from "react";
import "./App.css";
import InputForm from "../InputForm/InputForm";
import NewPost from "../NewPost/NewPost";
import dummyPosts from "../data/dummyPosts";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  // initial state to show the dummyPosts data on the screen

  const [posts, setPosts] = useState(dummyPosts);
  // console.log(posts);

  const handleNewPost = (name, category, post) => {
    const newPost = {
      postId: posts.length,
      name: name,
      category: category,
      post: post
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div id="main-container">
        <div id="input-form">
          <InputForm handleNewPost={handleNewPost} />
        </div>
        {posts.map((e, index) => (
          <div key={index} id="all-posts">
            <NewPost
              className={e.category}
              id={e.postId}
              name={e.name}
              category={e.category}
              post={e.post}
            />
          </div>
        ))}
      </div>

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
export default App;
