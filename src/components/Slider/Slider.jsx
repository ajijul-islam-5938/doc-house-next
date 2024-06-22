import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaAngleLeft, FaChevronRight } from "react-icons/fa6";
import ReviewCard from "../ReviewCard/ReviewCard";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      breakpoints: {
        "(min-width: 768px)": {
          slides: {
            perView: 2,
            spacing : 15
          },
        },
      },
      loop: true,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },

      created() {
        setLoaded(true);
      },
      slides: {
        perView: 1,
      },
    },

    [
      slider => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div className="navigation-wrapper   py-16 px-3 md:px-16">
        <h2 className="text-2xl text-center font-semibold my-16">What Our Patients Says</h2>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <ReviewCard />
          </div>
          <div className="keen-slider__slide number-slide1">
            <ReviewCard />
          </div>
          <div className="keen-slider__slide number-slide1">
            <ReviewCard />
          </div>
          <div className="keen-slider__slide number-slide1">
            <ReviewCard />
          </div>
          <div className="keen-slider__slide number-slide1">
            <ReviewCard />
          </div>
          <div className="keen-slider__slide number-slide1">
            <ReviewCard />
          </div>
          <div className="keen-slider__slide number-slide1">
            <ReviewCard />
          </div>
        </div>
        {loaded && instanceRef.current && (
          <div className="flex justify-between items-center  relative">
            <div className="absolute -top-20 left-0">
              <Arrow
                left
                onClick={e =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />
            </div>
            <div className="absolute -top-20 right-0">
              <Arrow
                onClick={e =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </div>
          </div>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map(idx => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );

  function Arrow(props) {
    const disabled = props.disabled ? " arrow--disabled" : "";
    return (
      <div
        onClick={props.onClick}
        className={`arrow text-xl ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabled}`}
        viewBox="0 0 24 24"
      >
        {props.left && (
          <div className="bg-warning-500 text-white p-2 rounded-full">
            <FaAngleLeft />
          </div>
        )}
        {!props.left && (
          <div className="bg-warning-500 text-white p-2 rounded-full">
            <div>
              <FaChevronRight />
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default Slider;
