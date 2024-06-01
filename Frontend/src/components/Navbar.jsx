import "../styles/navbar.css";
import React, { useEffect } from "react";
const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["nav_bar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }
  return (
    <>
      <div className={navbarClasses.join(" ")}>
        <h3>Yugant Gholase</h3>
        <button>Home</button>
        <button>Logout</button>
      </div>
    </>
  );
};

export default Navbar;
