import React from "react";
import Header from "./Header";
import About from "./About";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";
import Article from "./Article";

console.log(blogData);

function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <Header>{blogData.name}</Header>
      <About>{blogData.image} {blogData.about}</About>
      <ArticleList posts={blogData.posts}>
        {blogData.posts.map((post, index) => (
          <Article key={index} post={post} />
        ))}
      </ArticleList>
    </div>
  );
}

export default App;