import "./App.css";
import logo from "./assets/logo-removebg.png";
import toy from "./assets/toy.jpeg";
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
              <a href="https://www.youtube.com/@crraftybunny" target="_blank">
                TUTORIALS
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/crafftybunny/?hl=en"
                target="_blank"
              >
                SHOP
              </a>
            </li>
            <li>
              <a
                href="https://www.thesprucecrafts.com/crochet-definition-what-is-crochet-978572"
                target="_blank"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const Body = () => {
    return (
      <div className="store">
        <div className="searchBar">
          <input type="search" placeholder="Search your products here ..." />
        </div>
        <div className="store-container">
          <Toys />
          {/* My CrafftyBunny Store-body. All Toys, gifts & clothing will be shown
          here */}
          <Toys />
          <Toys />
          <Toys />
          <Toys />
          <Toys />
          <Toys />
          <Toys />
          <Toys />
          <Toys />
          <Toys />
          <Toys />
          <Toys />
          <Toys />
        </div>
      </div>
    );
  };

  const Toys = () => {
    return (
      <div className="toy-container">
        <div className="toy-image-container">
          <img src={toy} alt="toy card" className="toy-image" />
        </div>
        <div className="toy-details">
          <p>Handmade Crochet Colourful Snoopy Boy</p>
          <p>
            ₹ 1,500 <span style={{ color: "pink", fontSize: "14px" }}>❤️ </span>
          </p>
        </div>
      </div>
    );
  };
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default App;
