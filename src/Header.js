import "./Header.css";
function Header(props){
   let {toggle} = props 
  return (
    <header className="container">
      <div className="logo">Post App</div>
      <div className="toggleBtn" onClick={toggle} >
        <i className="fa-solid fa-bars"></i>
      </div>
    </header>
  );
}
export default Header;
