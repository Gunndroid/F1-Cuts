import React from "react";
import Cuts from "../pages/cut";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import orderImage from "../media/img/f1Cuts-race.png";

const PlaceAnOrder = () => {
  return (
    <div className="grid md:grid-cols-2 text-black m-12 w-5/6 md:w-5/6 border-black border-2 py-12 bg-slate-100 rounded-lg text-center mx-auto">
      <img
        src={orderImage}
        alt="contact F1"
        className="w-3/4 mx-auto rounded-lg border-2 border-black"
      />
      <div className="">
        <p className="text-xl font-bold p-10">
          Place an order start your video editing project.
          <br></br>
          <br></br>
          Let's race your content into first place!
        </p>
        <Link to="/makeacut" className="my-auto">
          <button className="rounded-md bg-yellow-500 text-black px-8 py-3 border-black border-2">
            Make a Cut!
          </button>
        </Link>
      </div>

      <Routes>
        <Route path="/makeacut" element={<Cuts />} />
      </Routes>
    </div>
  );
};

export default PlaceAnOrder;
