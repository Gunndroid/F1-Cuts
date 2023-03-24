import PlaceAnOrder from "../placeAnOrder";
import reelImage from "../../media/img/f1Cuts-reel.png";

const Services = () => {
  return (
    <about className="h-screen text-white font-bold text-center">
      {/* About Landing Content */}
      <p className="text-white text-5xl md:text-7xl font-bold text-center font-faster mt-28">
        Services
      </p>
      <div className="mb-28 w-5/6 md:w-3/5 text-lg text-black font-bold text-center m-20 mx-auto border-black border-2 py-10 bg-slate-100 rounded-2xl">
        <br></br>
        <div>
          <img
            src={reelImage}
            alt="contact F1"
            className="w-3/4 mx-auto rounded-md border-2 border-black"
          />
          <ul>
            <li className="m-4 p-4">
              <p className="text-2xl underline">Video Reels</p>
              <br></br>
              Instagram, TikTok, Youtube, Rumble
              <br></br>
              <i>Each video will be an average of 25 seconds</i>
              <br></br>
            </li>
            <br></br>

            <p>
              <p className="text-2xl underline">Packages</p>
              <br></br>3 videos = $250
              <br></br>5 videos = $400
              <br></br>10 videos = $700
            </p>
            <br></br>
            <br></br>

            <p className="text-2xl underline">Add-ons</p>
            <li className="m-4">Text-on-Video = $25/video</li>
            <li className="m-4">Transitions = $30/video</li>
            <li className="m-4">Trendy Music = $10/video</li>
            <li className="m-4">Trendy Filter = $15/video</li>
          </ul>
          <br></br>
        </div>
      </div>
      <PlaceAnOrder />
    </about>
  );
};

export default Services;
