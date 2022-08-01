import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { User } from "./contexts/User";
import Header from "./componets/Header";
import Navbar from "./componets/Navbar";
import Profile from "./componets/Profile";
import Homepage from "./componets/Homepage";
import ArticlePage from "./componets/ArticlePage";
import Comments from "./componets/Comments";

function App() {
  const [user, setUser] = useState({
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  });

  return (
    <BrowserRouter>
      <User.Provider value={{ user, setUser }}>
        <div className="App">
          <header className="App-header">
            <Header />
            <Profile />
            <Navbar />
          </header>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/topics/:topic" element={<Homepage />} />
            <Route path="/articles/:article_id" element={<ArticlePage />} />
            <Route
              path="/articles/:article_id/comments"
              element={<Comments />}
            />
          </Routes>
        </div>
      </User.Provider>
    </BrowserRouter>
  );
}

export default App;
