import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [buttonNameReact, setButtonNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

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
          <li>Online Status : {onlineStatus ? "✅" : "🔴"} </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
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
