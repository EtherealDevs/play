import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import ModalPosts from "../ModalPosts";
import "pure-react-carousel/dist/react-carousel.es.css";

function CarrouselLg({ blogs }) {
  return (
    <CarouselProvider
      className="lg:block hidden"
      naturalSlideWidth={100}
      isIntrinsicHeight={true}
      totalSlides={blogs.length}
      visibleSlides={4}
      step={1}
      infinite={true}
    >
      <div className="w-full relative flex items-center justify-center">
        <ButtonBack
          role="button"
          aria-label="slide backward"
          className="absolute z-30 left-0 ml-8 focus:outline-none cursor-pointer"
          id="prev"
        >
          <svg
            width={8}
            height={14}
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 1L1 7L7 13"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ButtonBack>
        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
          <Slider>
            <div
              id="slider"
              className="h-full w-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
            >
              {blogs.map((blog) => (
                <Slide index={blog.id}>
                  <div className="flex flex-shrink-0 relative w-full h-[400px] sm:w-auto">
                    <div className="relative w-full h-full overflow-hidden bg-white rounded-md">
                      <div className="flex justify-center h-1/2">
                        <img
                          src={
                            "http://localhost:8000/img/" + blog.Image.filename
                          }
                          alt="bla"
                          className="object-contain object-center p-3 "
                        />
                      </div>
                      <div className="bg-opacity-30 absolute w-full h-1/2 p-6 grid content-between">
                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-black">
                          {blog.title}
                        </h2>
                        <div className="grid justify-center">
                          <ModalPosts className="" blog={blog} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
              ))}
            </div>
          </Slider>
        </div>
        <ButtonNext
          role="button"
          aria-label="slide forward"
          className="absolute z-30 right-0 mr-7 focus:outline-none"
          id="next"
        >
          <svg
            width={8}
            height={14}
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7 7L1 13"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
}

export default CarrouselLg;
