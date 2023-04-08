import React from "react";
import Slider from "react-slick";

import video from "../media/video/test1.MOV";
import video1 from "../media/video/test2.MOV";
import video2 from "../media/video/test3.MOV";
import poster1 from "../media/img/f1Cuts-ready.png";
import poster2 from "../media/img/f1Cuts-set.png";
import poster3 from "../media/img/f1Cuts-edit2.png";

import "../index.css";

const VideoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="w-5/6 md:w-5/6 mx-auto mb-40">
      <Slider {...settings}>
        {/* Video 1 */}

        <div className="carousel-slide">
          {" "}
          <div className="w-3/4 border-black border-2 py-20 bg-slate-100 rounded-lg md:w-1/3 md:mr-28">
            <p className=" text-center text-bold text-5xl mx-auto text-black font-faster">
              READY
            </p>
            <br></br>
            <p className="w-3/4 text-xl mx-auto text-black text-center">
              We are ready to edit your videos, including:
              <br></br>
              <br></br>
              <ul>
                <li>• Luxury + Sports Cars</li>
                <li>• Restaurants</li>
                <li>• Fashion</li>
                <li>• Motivational</li>
                <li>• Health + Fitness</li>
              </ul>
            </p>
          </div>
          <video
            class="video"
            poster={poster1}
            src={video}
            controls="play"
            className=" border-black border-2 rounded-lg"
          />
        </div>

        {/* Video 2 */}

        <div className="carousel-slide">
          <div className="w-3/4 border-black border-2 py-20 bg-slate-100 rounded-lg md:w-1/3 md:mr-28">
            <p className="text-center text-bold text-5xl mx-auto text-black font-faster">
              SET
            </p>
            <br></br>
            <p className="w-3/4 text-xl mx-auto text-black text-center">
              Share with us your goals and from there F1 Cuts will prepare to
              bring your cinematic vision to life.
              <br></br>
              <br></br>
              We work closely with you to create videos that meets your needs.
            </p>
          </div>
          <video
            class="video"
            poster={poster2}
            src={video1}
            controls="autoplay"
            className=" border-black border-2 rounded-lg"
          />
        </div>
        {/* Video 3 */}

        <div className="carousel-slide">
          <div className="w-3/4 border-black border-2 py-28 bg-slate-100 rounded-lg md:w-1/3 md:mr-28">
            <p className=" text-center text-bold text-5xl mx-auto text-black font-faster">
              EDIT!
            </p>
            <br></br>
            <p className="w-3/4 text-xl mx-auto text-black text-center">
              We begin editing your video in the cutting room.
              <br></br>
              <br></br>
              Before you know it, your shiny new film will be in your hands.
            </p>
          </div>
          <video
            class="video"
            poster={poster3}
            src={video2}
            controls="autoplay"
            className=" border-black border-2 rounded-lg"
          />
        </div>
      </Slider>
    </div>
  );
};

export default VideoCarousel;
