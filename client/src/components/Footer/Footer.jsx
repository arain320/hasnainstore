import React from "react";
import "./Footer.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
    const date = new Date().getFullYear();
    
  return (
    <>
      <div className="footer">
        <div className="top">
          <div className="main-brands">
            <div className="brand-heading">
              <span>brands</span>
            </div>
            <div className="brand-links">
              <div className="left">
                <li>
                  <NavLink to="/">samsung</NavLink>
                </li>
                <li>
                  <NavLink to="/">apple</NavLink>
                </li>
                <li>
                  <NavLink to="/">huawei</NavLink>
                </li>
                <li>
                  <NavLink to="/">canon</NavLink>
                </li>
                <li>
                  <NavLink to="/">nike</NavLink>
                </li>
              </div>
              <div className="right">
                <li>
                  <NavLink to="/">nikon</NavLink>
                </li>
                <li>
                  <NavLink to="/">adidas</NavLink>
                </li>
                <li>
                  <NavLink to="/">xaiomi</NavLink>
                </li>
                <li>
                  <NavLink to="/">puma</NavLink>
                </li>
                <li>
                  <NavLink to="/">haier</NavLink>
                </li>
              </div>
            </div>
          </div>
          <div className="main-category">
            <div className="category-heading">
              <span>categories</span>
            </div>
            <div className="category-links">
              <div className="left">
                <li>
                  <NavLink to="/">men</NavLink>
                </li>
                <li>
                  <NavLink to="/">women</NavLink>
                </li>
                <li>
                  <NavLink to="/">kids</NavLink>
                </li>
                <li>
                  <NavLink to="/">camera</NavLink>
                </li>
                <li>
                  <NavLink to="/">mobile</NavLink>
                </li>
                <li>
                  <NavLink to="/">laptop</NavLink>
                </li>
                <li>
                  <NavLink to="/">watch</NavLink>
                </li>
                <li>
                  <NavLink to="/">smart TV</NavLink>
                </li>
              </div>
              <div className="right">
                <li>
                  <NavLink to="/">facewash</NavLink>
                </li>
                <li>
                  <NavLink to="/">beauty cream</NavLink>
                </li>
                <li>
                  <NavLink to="/">hair products</NavLink>
                </li>
                <li>
                  <NavLink to="/">shoes</NavLink>
                </li>
                <li>
                  <NavLink to="/">fast charger</NavLink>
                </li>
                <li>
                  <NavLink to="/">airpods</NavLink>
                </li>
                <li>
                  <NavLink to="/">jacket</NavLink>
                </li>
                <li>
                  <NavLink to="/">hands free</NavLink>
                </li>
              </div>
            </div>
          </div>
          <div className="social-links">
            <div className="wrapper">
              <div className="toggle">
                <i className="fa-solid fa-share-nodes"></i>
              </div>
              <div className="facebook">
                <li>
                  <a href="">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
              </div>
              <div className="whatsapp">
                <li>
                  <a href="">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </li>
              </div>
              <div className="twitter">
                <li>
                  <a href="">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
              </div>
              <div className="dribbble">
                <li>
                  <a href="">
                    <i className="fa-brands fa-dribbble"></i>
                  </a>
                </li>
              </div>
              <div className="linkedin">
                <li>
                  <a href="">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </div>
              <div className="instagram">
                <li>
                  <a href="">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </div>
              <div className="pinterest">
                <li>
                  <a href="">
                    <i className="fa-brands fa-pinterest"></i>
                  </a>
                </li>
              </div>
              <div className="youtube">
                <li>
                  <a href="">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
            <p>copyright <i class="fa-regular fa-copyright"></i> {date}, <i class="fa-solid fa-at"></i> Hasnain,Pir mahal,All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;