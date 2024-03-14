import React, { useState, useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { news } from "../../json/news.json";
import SliderArrow from "./sliderArrow";
import SliderItem from "./slideritem";
import rightArrow from "../../assets/right_arrow.png";
import leftArrow from "../../assets/left_arrow.png";
import "./slider.css";

const options = { slidesToScroll: "auto", loop: true };

function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true }),
  ]);

  const onClickHandler = () => {
    console.log("click");
  };

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <div className="sliderContainer">
      <SliderArrow id={0} onClick={scrollPrev} img={leftArrow} />
      <div className="outerSliderContainer" ref={emblaRef}>
        <div className="innerSliderContainer">
          {news.map((slide, i) => {
            return (
              <SliderItem
                key={"slide" + i}
                id={slide.id}
                img={slide.image}
                title={slide.title}
                text={slide.text}
                buttontitle={slide["button-text"]}
                onClick={onClickHandler}
              />
            );
          })}
        </div>
      </div>
      <SliderArrow id={1} onClick={scrollNext} img={rightArrow} />
    </div>
  );
}

export default Slider;
