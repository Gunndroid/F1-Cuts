import React from "react";
// import "../../index.css";
import contactImage from "../../media/img/f1Cuts-contact.png";

const ContactUs = () => {
  return (
    <main id="contactPage">
      <p className="text-white text-5xl md:text-7xl font-bold text-center font-faster mt-28">
        Contact F1
      </p>
      <div className="text-black m-12 w-5/6 border-black border-2 py-12 bg-slate-100 rounded-2xl text-center mx-auto my-32">
        <img
          src={contactImage}
          alt="contact F1"
          className="w-3/4 mx-auto rounded-lg border-2 border-black"
        />
        <div className="m-20">
          <p className="text-xl font-bold">
            Contact us to start your video editing project.
            <br></br>
            <br></br>
            Let's get a head start,
            <br></br>
            you don't want to lose the race!
          </p>
        </div>
        <div className="my-auto">
          <button
            onClick={() => (window.location = "mailto:f1cuts@gmail.com")}
            className="rounded-lg bg-black text-white px-8 py-3 border-white border-2 "
          >
            Contact Us
          </button>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
