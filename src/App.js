import "./App.css";
// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componets/Header";
import Home from "./componets/Home";
import Article from "./componets/Article";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/:article_id" element={<Article />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
