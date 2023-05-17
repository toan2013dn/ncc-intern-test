import "./NavBar.styles.scss";
import { useState } from "react";

function NavBar() {
  const [activeButton, setActiveButton] = useState("Home");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <nav className="navbar">
      <button
        className={activeButton === "Home" ? "active" : ""}
        onClick={() => handleButtonClick("Home")}
      >
        <p>Home</p>
      </button>
      <button
        className={activeButton === "Services" ? "active" : ""}
        onClick={() => handleButtonClick("Services")}
      >
        <p>Services</p>
      </button>
      <button
        className={activeButton === "News" ? "active" : ""}
        onClick={() => handleButtonClick("News")}
      >
        <p>News</p>
      </button>
      <button
        className={activeButton === "Blog" ? "active" : ""}
        onClick={() => handleButtonClick("Blog")}
      >
        <p>Blog</p>
      </button>
      <button
        className={activeButton === "Contact" ? "active" : ""}
        onClick={() => handleButtonClick("Contact")}
      >
        <p>Contact</p>
      </button>
    </nav>
  );
}

export default NavBar;
