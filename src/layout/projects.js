import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectSlide from "../components/project-slide";
import { ChevronLeft, ChevronRight } from "react-feather";

const Projects = () => {
  const LeftArrow = (props) => {
    const { currentSlide, slideCount, ...rest } = props;
    return <ChevronLeft {...rest} />;
  };
  const RightArrow = (props) => {
    const { currentSlide, slideCount, ...rest } = props;
    return <ChevronRight {...rest} />;
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 2500,
    dotsClass: "button__bar",
    prevArrow: <LeftArrow className="arrows" />,
    nextArrow: <RightArrow className="arrows" />,
  };

  return (
    <div id="projects" className="projects">
      <div className="u-container">
        <h1 className="section-header">Project</h1>
        <Slider {...settings}>
          <ProjectSlide />
          <ProjectSlide />
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
