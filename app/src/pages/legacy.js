import PlaceAnOrder from "../components/placeAnOrder";
import image1 from "../media/img/f1-clients-1.png";
import image2 from "../media/img/f1-clients-5.png";
import image3 from "../media/img/f1-clients-3.png";
// import image4 from "../../media/img/f1-clients-7.png";
import image5 from "../media/img/f1-clients-6.png";
import image6 from "../media/img/f1-clients-charity.png";
import image7 from "../media/img/f1-clients-hilton.png";
// import image8 from "../../media/img/f1-clients-wgci.png";
import image9 from "../media/img/f1-clients-wndr.png";
import image10 from "../media/img/f1-clients-att.png";
import image11 from "../media/img/f1-clients-underarmour.png";
import chicagoImage from "../media/img/f1Cuts-chicago2.png";
import worldImage from "../media/img/f1Cuts-earth.png";

const Legacy = () => {
  return (
    <about className="h-screen text-white font-bold text-center ">
      {/* About Landing Content */}
      <p className="text-white text-5xl md:text-7xl font-bold text-center font-faster my-28">
        Our Legacy
      </p>

      <div className="bg-black py-24 border-white border-y-2 px-10">
        {/* portfolio images */}
        <div className="grid md:grid-cols-3 grid-rows-3 gap-y-24 gap-x-10">
          <div className="w-5/6 md:w-2/3 mx-auto">
            <p className="text-xl font-bold">Charity4Life</p>
            <br></br>

            <img
              src={image6}
              alt=""
              className=" border-white border-2 rounded-xl  "
            />
            <br></br>
            <i>
              Documenting the stories of children living in the streets of Haiti
              and Nicaragua
            </i>
          </div>
          <div className="w-5/6 md:w-2/3 mx-auto">
            <p className="text-xl font-bold">AT&T</p>
            <br></br>
            <img
              src={image10}
              alt=""
              className=" border-white border-2 rounded-xl  "
            />
            <br></br>

            <i>Event marketing videos for the USA communcations giant</i>
          </div>

          <div className="w-5/6 md:w-2/3 mx-auto">
            <p className="text-xl font-bold">Hilo Palace Theatre</p>
            <br></br>
            <img
              src={image1}
              alt=""
              className=" border-white border-2 rounded-xl  "
            />
            <br></br>

            <i>Live music events at this historic Hawaiian Theater.</i>
          </div>
          {/* <div className="w-5/6 md:w-2/3 mx-auto">
            <p className="text-xl font-bold">Dimend Scaasi</p>
            <br></br>
            <img
              src={image4}
              alt=""
              className=" border-white border-2 rounded-xl  "
            />
            <br></br>

            <i>Jewelry commercials for the diamond-makers</i>
          </div> */}
          <div className="w-5/6 md:w-2/3 mx-auto">
            <p className="text-xl font-bold">Madison Beer</p>
            <br></br>
            <img
              src={image3}
              alt=""
              className=" border-white border-2 rounded-xl  "
            />
            <br></br>

            <i>Live show recordings for the world-renowned pop singer</i>
          </div>
          <div className="w-5/6 md:w-2/3 mx-auto">
            <p className="text-xl font-bold">Under Armour</p>
            <br></br>
            <img
              src={image11}
              alt=""
              className=" border-white border-2 rounded-xl  "
            />
            <br></br>
          </div>
          <div className="w-5/6 md:w-2/3 mx-auto">
            <p className="text-xl font-bold">Hilton Hotels & Suites</p>
            <br></br>
            <img
              src={image7}
              alt=""
              className=" border-white border-2 rounded-xl  "
            />
            <br></br>
          </div>

          {/* <div className="w-5/6 md:w-2/3 mx-auto">
            <p className="text-xl font-bold">WGCI Radio</p>
            <br></br>
            <img
              src={image8}
              alt=""
              className=" border-white border-2 rounded-xl "
            />
            <br></br>
          </div> */}

          <div className="w-5/6 md:w-2/3 mx-auto">
            <p className="text-xl font-bold">Sunsets Swimwear</p>
            <br></br>
            <img
              src={image2}
              alt=""
              className=" border-white border-2 rounded-xl "
            />
            <br></br>

            <i>Swim Fashion films in Los Angeles, CA</i>
          </div>

          <div className="w-5/6 md:w-2/3 mx-auto">
            <p className="text-xl font-bold">Depaul School of Music</p>
            <br></br>
            <img
              src={image5}
              alt=""
              className=" border-white border-2 rounded-xl  "
            />
            <br></br>

            <i>
              Capturing performances for the savant-like young musicians of
              Depaul
            </i>
          </div>
          <div className="w-5/6 md:w-2/3 mx-auto">
            <p className="text-xl font-bold">WNDR Museum</p>
            <br></br>
            <img
              src={image9}
              alt=""
              className=" border-white border-2 rounded-xl "
            />
            <br></br>

            <i>
              Marketing and promotions for the Chicago Art museum featuring
              Japanese icon Yayoi Kusama
            </i>
          </div>

          {/* <div className="w-5/6 md:w-2/3 mx-auto">
            <p className="text-xl font-bold">text</p>
            <br></br>
            <img
              src={image7}
              alt=""
              className=" border-white border-2 rounded-xl"
            />
            <br></br>
          </div> */}
        </div>
      </div>
      <div className="mb-28 w-4/5 md:w-5/6 text-lg text-black font-bold m-20 mx-auto border-black border-2 py-8 bg-slate-100 rounded-2xl">
        <img
          src={chicagoImage}
          alt="contact F1"
          className="w-5/6 md:w-3/4 mx-auto rounded-lg border-2 border-black m-2 mt-10"
        />
        <p className="px-16 md:mx-24 text-left">
          <br></br>
          <br></br>
          F1 Cuts is a video editing agency founded in Chicago by Hakan and
          Gunnar, both with a passion for fast, cool, and trendy video edits. We
          believe that video editing is an art form that requires creativity,
          technical skills, and a deep understanding of storytelling.
          <br></br>
          <br></br>
          We specialize in producing high-quality video content that engages,
          entertains, and inspires audiences. We serve clients from all over the
          world. Our mission is to help businesses, brands, and individuals
          bring their visions to life through the power of video.
          <br></br>
          <br></br>
          Our team of experienced editors is passionate about creating visually
          stunning videos that leave a lasting impression on viewers. If you're
          looking for a video editing agency that can bring your ideas to life,
          then look no further than F1 Cuts.
          <br></br>
          <br></br>
          Contact us today to discuss your next project and let's make something
          amazing together!
          <br></br>
          <br></br>
        </p>
        <br></br>
      </div>
      <PlaceAnOrder />
    </about>
  );
};

export default Legacy;
