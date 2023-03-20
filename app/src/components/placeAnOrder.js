import React from "react";
import Cuts from "./pages/cut";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const PlaceAnOrder = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-1 text-black m-12 w-5/6 border-black border-2 py-12 bg-slate-100 rounded-2xl text-center mx-auto">
      <div className="m-20">
        <p className="text-xl font-bold">
          Place an order start your video editing project.
          <br></br>
          <br></br>
          Let's race your content into first place!
        </p>
      </div>
      <Link to="/makeacut" className="my-auto">
        <button className="rounded-lg bg-black text-white px-8 py-3 border-white border-2 ">
          Make a Cut!
        </button>
      </Link>
      <Routes>
        <Route path="/makeacut" element={<Cuts />} />
      </Routes>
    </div>
  );
};

export default PlaceAnOrder;
