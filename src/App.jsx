import "./App.css";
import logo from "./assets/logo-removebg.png";
function App() {
  const Header = () => {
    return (
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="logo" className="logo"></img>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <a href="https://www.youtube.com/@crraftybunny"> TUTORIALS</a>
            </li>
            <li>
              <a href="#">SHOP</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  return (
    <>
      <Header />
    </>
  );
}

export default App;
