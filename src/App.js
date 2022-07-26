import "./App.css";
// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componets/Header";
import Home from "./componets/Home";
import ArticlePage from "./componets/ArticlePage";
import User from "./componets/User";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Header />
          <User />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Home />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
