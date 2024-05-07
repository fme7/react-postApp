import Header from "./Header.js";
import Footer from "./Footer.js";
import Aside from "./Aside.js";
import './App.css'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className="container">
        <Aside></Aside>
        <div className="routeHolder" >Home</div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
