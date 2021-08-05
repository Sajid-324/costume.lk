import React from "react";
import {
  FaGooglePlay,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

function TestPage() {
  return (
    <div class="row" id="footer-bottom">
      <hr />
      <div class="col-4 first-column">
        <a href="https://firebasestorage.googleapis.com/v0/b/costume-lk.appspot.com/o/app-release.apk?alt=media&token=933f7d0b-8493-4ba6-b693-9ff777b85fbb">
          <div class="footer-list-item" id="android-app-container">
            <FaGooglePlay /> <span>Get Android App</span>
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
        <div id="copyright">© Copyright 2021 Costume.LK</div>
      </div>
    </div>
  );
}

export default TestPage;
