import React from "react";
import fb from "../../images/fb.png";
import insta from "../../images/insta.png";
import tiktok from "../../images/tiktok.png";
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div className="d-flex justify-content-around">
        <div>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://facebook.com/kljmerkem"
                rel="noreferrer"
              >
                <img src={fb} width="24px" alt="Facebook" />
                Facebook
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://instagram.com/kljmerkem"
                rel="noreferrer"
              >
                <img src={insta} width="24px" alt="Instagram" />
                Instagram
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://tiktok.com/@kljmerkem"
                rel="noreferrer"
              >
                <img src={tiktok} width="24px" alt="TikTok" />
                TikTok
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p>
            Kouterstraat 26b <br /> 8650 Merkem
          </p>
        </div>
      </div>
      <p style={{ textAlign: "right" }}>
        All rights reserved to KLJ Merkem &copy; 2024
      </p>
    </footer>
  );
};

export default Footer;
