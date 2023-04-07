import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const Cuts = () => {
  return (
    <>
      <p className="text-white text-5xl md:text-7xl font-bold text-center font-faster my-28">
        Make a Cut
      </p>

      <div className="grid  text-black m-12 w-5/6 md:w-5/6 border-black border-2 py-12 my-28 bg-slate-100 rounded-2xl text-center mx-auto">
        <div className="text-xl p-4">
          <p className="text-3xl underline font-bold">Video Reels</p>
          <br></br>
          <p className="">Instagram, TikTok, Youtube, Rumble</p>
          <i className="">Each video will be an average of 25 seconds</i>
          <br></br>
          <br></br>
          <p className="font-bold">Videos include:</p>
          <p>Color Correction</p>
          <p>Trendy Music</p>
          <p>Transitions</p>
          <br></br>
          <br></br>
          <p className="font-bold">Choose your Package:</p>
          <br></br>
        </div>
        <div className="grid gap-6 mb-10">
          <a
            href="https://buy.stripe.com/5kA3cv1Rb3UkgZa9AC"
            target="_blank"
            className="border-2 border-black w-60 mx-auto rounded-lg p-5 bg-yellow-500"
          >
            Gold Package (10 Videos) for $700.00
          </a>
          <a
            href="https://buy.stripe.com/28o5kDfI1fD2cIU8wx"
            target="_blank"
            className="border-2 border-black w-60 mx-auto rounded-lg p-5 bg-gray-400"
          >
            Silver Package (5 Videos) for $400.00
          </a>
          <a
            href="https://buy.stripe.com/6oE7sL7bv0I85gs9AA"
            target="_blank"
            className="border-2 border-black w-60 mx-auto rounded-lg p-5 bg-orange-700"
          >
            Bronze Package (3 Videos) for $250.00
          </a>
        </div>
      </div>
    </>
  );
};

export default Cuts;
