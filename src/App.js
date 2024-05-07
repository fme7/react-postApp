import Header from "./Header.js";
import Footer from "./Footer.js";
import Aside from "./Aside.js";
import './App.css'
import { useState } from "react";

function App() {
  let [menuOpen,setMenuOpen]=useState(true);
  function toggleMenu(){
    setMenuOpen(!menuOpen);
  }
  return (
    <div className="App">
      <Header toggle={toggleMenu}></Header>
      <main className="container">
        <Aside open={menuOpen} ></Aside>
        <div className="routeHolder" >Home</div>
      </main>
      <Footer></Footer>
    </div>
  );

}

export default App;
