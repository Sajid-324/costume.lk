import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

document.addEventListener("DOMContentLoaded", function () {
  var x = window.screen.width;
  window.addEventListener("scroll", function () {
    if (x < 900 && window.scrollY > 85) {
      document.getElementById("navbar_top").classList.add("fixed-top");
      // add padding top to show content behind navbar
      var navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar_top").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});
// DOMContentLoaded  end

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header container__1 sticky-top" id="top">
      <Link to="/">
        <div className="header__logo row__1 ">
          <img src="/images/logos.png" />
        </div>
      </Link>

      <div className="header__search row__1">
        <input id="header__searchInput" type="text" />
        <SearchIcon id="header__searchIcon" />
      </div>

      <div className="header__nav row__1 navbar" id="navbar_top">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option col__1">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option col__1">
            <span className="header__optionLineOne">Retuns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="#">
          <div className="header__option col__1">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Profile</span>
          </div>
        </Link>

        <Link to="/Checkout">
          <div className="header__optionBasket header__optionLineOne col__1">
            <ShoppingCartRoundedIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
      {/* <hr /> */}
    </div>
  );
}
export default Header;
