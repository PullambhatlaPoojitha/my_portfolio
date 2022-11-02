import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import logoms from "../../img/logoms.jpg";
import { themeContext } from "../../Context";
import flipr from "../../img/flipr.png"
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>My Achievements</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={logoms} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={flipr} alt="" />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Portfolio;
