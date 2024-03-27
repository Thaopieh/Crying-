import React from "react";
import PropTypes from "prop-types";
import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer.js";
import FAQ from "../../Components/FAQ/FAQ.js";
import InfoHotel from "../../Components/InfoHotel/InfoHotel.js";
import RecommendHomePage from "../../Components/RecommendHomePage/RecommendHomePage.js";
import CarouselItem from "../../Components/CarouselItem/CarouselItem.js";
import RightFloatIcon from "../../Components/RightFloatIcon/RightFloatIcon.js";

function MainPage(props) {
  return (
    <div>
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <FAQ />
      <InfoHotel />
      <RecommendHomePage />
      <Footer />
      <RightFloatIcon />
    </div>
  );
}

MainPage.propTypes = {};

export default MainPage;
