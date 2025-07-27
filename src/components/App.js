import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <aside>
        <About image={blogData.image} about={blogData.about} />
      </aside>
      <main>
        <ArticleList posts={blogData.posts} />
      </main>
    </div>
  );
}

export default App;