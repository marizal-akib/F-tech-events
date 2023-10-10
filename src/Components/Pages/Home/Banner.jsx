import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/ngVS0JN/event-banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-blue-950 bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className=" md:w-4/5 w-2/4 grid grid-cols-1 md:grid-cols-2  gap-28">
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500">
          
            <img
              className="mt-5 md:max-w-sm w-2xl  "
              src="https://i.ibb.co/fNHHwTH/Banner-Logo-removebg-preview-1-transformed.pnghttps://i.ibb.co/VVSL8yT/Banner-Logo-removebg-preview.png"
              alt=""
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500">
          
            <p className="mb-16 text-right md:mt-28 text-shadow  md:text-left md:text-6xl lg:w-96 text-xl  w-11/12 font-semibold ">
              <span className="text-blue-500">Unl</span>
              <span className="text-blue-300">eash</span> <br />
              <span className="text-blue-500">the</span>{" "}
              <span className="text-yellow-300">Future</span> <br />
              <span className="text-blue-500">of </span>
              <span className="text-blue-200">Gatherings.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
