import React from "react";
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/jd-mockup-removebg.png";
import { FiArrowRight } from "react-icons/fi";
import Logo from "../assets/Logo.svg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <img src={Logo} alt="" className="logo" />
          <h1 className="primary-heading">
            Buy And Sell Your Items To <span>Anyone.</span>
          </h1>
          <p className="primary-text">
            Tired 😩 of not been able to sell items to your customers that are
            far off. Do you want to increase your sales, join our wait list now
            to get notified when we launch.
          </p>
          <div className="button-flex">
            <a href="https://bit.ly/JDWaitList">
              <button className="secondary-button mr-10">
                Join Wait List <FiArrowRight />{" "}
              </button>
            </a>
          </div>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      <div className="home-image2-section">
        <img src={BannerImage} alt="" />
      </div>
    </div>
  );
};

export default Home;
