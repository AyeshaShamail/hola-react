import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [buttonNameReact, setButtonNameReact] = useState("Login");

  useEffect(() => {
    console.log("UseEffect called");
  }, [buttonNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Sign Up/Sign In</li>
          <li>Cart</li>
          <button
            className="login-logout"
            onClick={() => {
              buttonNameReact === "Login"
                ? setButtonNameReact("Logout")
                : setButtonNameReact("Login");
            }}
          >
            {buttonNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
