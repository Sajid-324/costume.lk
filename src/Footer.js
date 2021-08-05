import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  FaGooglePlay,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import "./Footer.css";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function Footer() {
  return (
    <div class="container-fluid" className="Footer__container">
      <div>
        <a href="#top">
          <div class="row" id="fRow">
            <b>Back to top</b>
          </div>
        </a>
      </div>
      <div class="row" id="secRow">
        <div class="col" id="secRowCol1">
          <h6>Get to Know Us</h6>
          <h6>
            <a href="#">Careers</a>
          </h6>
          <h6>
            <a href="#">Blog</a>
          </h6>
          <h6>
            <a href="#">About Costume.Lk</a>
          </h6>
          <h6>
            <a href="#">Costume.Lk investors</a>
          </h6>
        </div>
        <div class="col" id="secRowCol2">
          <h6>Make Money with Us</h6>
          <h6>
            <a href="#">Sell Products on Costume.Lk</a>
          </h6>
          <h6>
            <a href="#">Sell Apps on Costume.Lk</a>
          </h6>
          <h6>
            <a href="#">Sell Become an Affiliate</a>
          </h6>
          <h6>
            <a href="#">Advertise Your Product</a>
          </h6>
        </div>
        <div class="col" id="secRowCol3">
          <h6>Costume Payment Products</h6>
          <h6>
            <a href="#">Shop with Points</a>
          </h6>
          <h6>
            <a href="#">Reload your Points</a>
          </h6>
          <h6>
            <a href="#">Costume Currency Converter</a>
          </h6>
          <h6>
            <Link to="/TestPage">Test Page</Link>
          </h6>
        </div>
      </div>
      <div id="borderBottom"></div>
      <div class="row" id="footer-bottom">
        <div class="col-4 first-column">
          <a href="https://firebasestorage.googleapis.com/v0/b/costume-lk.appspot.com/o/app-release.apk?alt=media&token=933f7d0b-8493-4ba6-b693-9ff777b85fbb">
            <div id="android-app-container">
              <FaGooglePlay />
              <span>Get Android App</span>
            </div>
          </a>
        </div>
        <div class="col-4">
          <div id="social-media-container">
            <a class="social-media-link-footer" href="#" target="-blank">
              <FaInstagram fontSize="large" />
            </a>
            <a class="social-media-link-footer" href="#" target="-blank">
              <FaTwitter />
            </a>
            <a class="social-media-link-footer" href="#" target="-blank">
              <FaYoutube />
            </a>
            <a class="social-media-link-footer" href="#" target="-blank">
              <FaFacebookF />
            </a>
          </div>
        </div>

        <div class="col-4">
          <div id="copyright">
            <h6>© Copyright 2021 Costume.LK</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
