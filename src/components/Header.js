import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [buttonNameReact, setButtonNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // Selector is nothing but a hook in our react
  // Subscribing to our store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-orange-400 sm:bg-orange-400 lg:bg-orange-300">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status : {onlineStatus ? "✅" : "🔴"}{" "}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          {/* <li className="px-4">Sign Up/Sign In</li> */}
          <li className="px-4 fot-bold">
            <Link to="/cart">🛒 ({cartItems.length} items)</Link>
          </li>
          <button
            className="px-4"
            onClick={() => {
              buttonNameReact === "Login"
                ? setButtonNameReact("Logout")
                : setButtonNameReact("Login");
            }}
          >
            {buttonNameReact}
          </button>
          <li className="px-4 text-white">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
