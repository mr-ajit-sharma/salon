import React from "react";
import logo from "../assets/logo-white.png";
const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-overview">
        <div>
            <div className="footer-container">
              <div className="first">
                <img src={logo}   alt="business logo" />
              </div>
              <div className="second">
                <i>
                  <box-icon name="meta" type="logo" color="#cd4dca"></box-icon>
                </i>
                <i>
                  <box-icon
                    name="twitter"
                    type="logo"
                    color="#cd4dca"
                  ></box-icon>
                </i>
                <i>
                  <box-icon
                    name="youtube"
                    type="logo"
                    color="#cd4dca"
                  ></box-icon>
                </i>
              </div>
            </div>
        </div>
        <div className="testimonal">
          <div className="description-container">
            <p className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              ipsum modi possimus sit deleniti molestiae, maxime repellat illum
              illo. Maxime aliquam explicabo omnis, voluptatum necessitatibus
              amet repellendus maiores, quae in aliquid ut dolorum facilis
              culpa!
            </p>
            <button>Book your Place</button>
          </div>
          <div className="local">
            <div className="item">
              <h4>About Us</h4>
              <p>Our History</p>
              <p>Our Salone</p>
              <p>Our Team</p>
              <p>Testimonals</p>
              <p>Awards & Achievements</p>
            </div>
            <div className="item">
              <h4>Our Services</h4>
              <p>Hair Care</p>
              <p>Hair Styling</p>
              <p>Hair Cut</p>
              <p>Hair Coloring</p>
              <p>Straightening</p>
            </div>
            <div className="item">
              <h4>Our Salone</h4>
              <p>Mumbai-MH</p>
              <p>Navi-Mumbai-MH</p>
              <p>Thane-MH</p>
              <p>Gorakhpur-UP</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p className="">
          Copyright &#169; 2020 Design by <span>Ajit Sharma</span>{" "}
        </p>
        <p>Powered by Hairdressers and Hair Salons</p>
      </div>
    </div>
  );
};

export default Footer;
