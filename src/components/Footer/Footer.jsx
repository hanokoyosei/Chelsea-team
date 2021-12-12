import React from "react";
import "./Footer.css";
import {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="first-footer">
      <div className="back">
        <a style={{ color: "#2554C7" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          BACK TO TOP
        </a>
      </div>
      <div className="footer">
        <div className="foot">
          <h3 style={{ color: "whitesmoke" }}>CUSTOMER CAR</h3>
          <a style={{ color: "white" }}>ContactUs</a>
          <a style={{ color: "white" }}>Luxury Services</a>
          <a style={{ color: "white" }}>Delivery Information</a>
          <a style={{ color: "white" }}>Click & Collect</a>
          <a style={{ color: "white" }}>Affirm Finance</a>
          <a style={{ color: "white" }}>WOS Credit Card</a>
          <a style={{ color: "white" }}>Return Policy</a>
          <a style={{ color: "white" }}>Frequently Asked Questions</a>
          <a style={{ color: "white" }}>Your Feedback</a>
        </div>

        <div className="foot">
          <h3 style={{ color: "whitesmoke" }}>INFORMATION</h3>
          <a style={{ color: "whitesmoke" }}>Your Security</a>
          <a style={{ color: "whitesmoke" }}>Terms Of Service</a>
          <a style={{ color: "whitesmoke" }}>Privacy Policy</a>
          <a style={{ color: "whitesmoke" }}>Cookie Policy</a>
          <a style={{ color: "whitesmoke" }}>Accessibility</a>
          <a style={{ color: "whitesmoke" }}>Corporate Social Responsibility</a>
          <a style={{ color: "whitesmoke" }}>PayByLink Terms</a>
          <a style={{ color: "whitesmoke" }}>Calibre</a>
        </div>

        <div className="foot">
          <h3 style={{ color: "whitesmoke" }}>ABOUT WOS US</h3>
          <a style={{ color: "whitesmoke" }}>About Us</a>
          <a style={{ color: "whitesmoke" }}>Press Room</a>
          <a style={{ color: "whitesmoke" }}>Careers</a>
          <a style={{ color: "whitesmoke" }}>Newsletter Sign Up</a>
        </div>

        <div className="foot">
          <h3 style={{ color: "whitesmoke" }}>CATEGORIES</h3>
          <a style={{ color: "whitesmoke" }}>Watches</a>
          <a style={{ color: "whitesmoke" }}>Brands</a>
        </div>

        <div className="foot">
          <h3 style={{ color: "whitesmoke" }}>FOLLOW US ON</h3>
          <div className="ins">
            <a>
              <InstagramOutlined />
            </a>
            <a>
              <FacebookOutlined />
            </a>
            <a>
              <TwitterOutlined />
            </a>
            <a>
              <YoutubeOutlined />
            </a>
            <a>
              <WhatsAppOutlined />
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;