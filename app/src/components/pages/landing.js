import video from "../../media/video/test1.MOV";
import video1 from "../../media/video/test2.MOV";
import video2 from "../../media/video/test3.MOV";
import imageMain from "../../media/img/f1TeamDarkRed.jpg";
import "../../index.css";
import PlaceAnOrder from "../placeAnOrder";

const Landing = () => (
  <main className="text-white font-bold">
    {/* Main Landing Content */}
    <div className="">
      <p className="text-white text-5xl md:text-7xl font-bold text-center mb-14 mt-28 font-faster">
        Welcome to F1 Cuts!
      </p>
      <img
        src={imageMain}
        alt="two men in a formula 1 racecar"
        className="w-3/4 mx-auto"
      />
      {/* <div>
        <VerticalVideoCarousel />
      </div> */}
      <p className="text-white p-7 text-xl md:text-2xl font-bold text-center m-20 mx-auto border-white border-y-2 py-32 bg-black">
        F1 Cuts brings speed and style to your videos.
        <br></br>
        <br></br>
        We are your one-stop-shop for high-quality video products.
        <br></br>
        <br></br>
        Our team of experienced editors are dedicated to delivering stunning,
        engaging, and impactful videos that tell your story with the most
        captivating vision.
      </p>
    </div>
    {/* Row 1 */}
    <div className="grid md:grid-cols-2 grid-rows-1 justify-items-center items-center m-7 my-40">
      <div className=" border-black border-2 py-20 bg-slate-100 rounded-xl w-2/3">
        <p className="w-3/4 text-center align-middle text-bold text-5xl mx-auto text-black font-faster">
          READY
        </p>
        <br></br>
        <p className="w-3/4 text-lg mx-auto text-black">
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
        src={video}
        controls="play"
        className=" border-black border-2 rounded-2xl"
      />
    </div>
    {/* Row 2 */}
    <div className="grid md:grid-cols-2 grid-rows-1 justify-items-center items-center  m-7 my-40 ">
      <div className=" border-black border-2 py-20 rounded-2xl bg-slate-100 w-2/3 ">
        <p className="w-3/4 text-center text-bold text-5xl mx-auto text-black font-faster">
          SET
        </p>
        <br></br>
        <p className="w-3/4 text-xl mx-auto text-black text-center">
          Share with us your goals and from there F1 Cuts will prepare to bring
          your cinematic vision to life.
          <br></br>
          <br></br>
          We work closely with you to create videos that meets your needs.
        </p>
      </div>
      <video
        class="video"
        src={video1}
        controls="autoplay"
        className=" border-black border-2 rounded-2xl"
      />
    </div>
    {/* Row 3 */}
    <div className="grid md:grid-cols-2 grid-rows-1 justify-items-center items-center  m-7 my-40 ">
      <div className=" border-black border-2 py-20 bg-slate-100 rounded-2xl w-2/3 text-black">
        <p className="w-3/4 text-center text-bold text-5xl mx-auto font-faster">
          EDIT!
        </p>
        <br></br>
        <p className="w-3/4 text-xl mx-auto text-center">
          We begin editing your video in the cutting room.
          <br></br>
          <br></br>
          Before you know it, your shiny new film will be in your hands.
        </p>
      </div>
      <video
        class="video"
        src={video2}
        controls="autoplay"
        className=" border-black border-2 rounded-2xl"
      />
    </div>
    {/* Row 4 */}
    <PlaceAnOrder />
  </main>
);

export default Landing;
