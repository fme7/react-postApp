import Header from "./Header.js";
import Footer from "./Footer.js";
import Aside from "./Aside.js";
import Home from "./Home.js";
import Posts from "./Posts.js";
import Users from "./Users.js";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let [menuOpen, setMenuOpen] = useState(true);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Header toggle={toggleMenu}></Header>
        <main className="container">
          <Aside open={menuOpen}></Aside>
          <div className="routeHolder">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<Posts a={menuOpen} />} />
              <Route path="/users" element={<Users />} />
              <Route path="*" element={<div>404, Page Not Found :(</div>} />
            </Routes>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
