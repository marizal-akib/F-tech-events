import NavBar from "../../NavBar/NavBar";

const About = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/ngVS0JN/event-banner.jpg)",
        }}
      >
        <div className="hero-overlay bg-blue-950 bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <img
              className="mt-5 md:max-w-sm w-2xl  "
              src="https://i.ibb.co/fNHHwTH/Banner-Logo-removebg-preview-1-transformed.pnghttps://i.ibb.co/VVSL8yT/Banner-Logo-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" bg-fuchsia-900 bg-opacity-20">
        <div
          className=" relative bottom-40 max-w-5xl mx-auto card card-compact hover:bg-red-800 text-yellow-50
          bg-red-900 bg-opacity-95 border border-fuchsia-950 shadow-xl p-8"
        >
          <div className="card-body ">
            <h2 className="text-5xl font-semibold text-center mx-auto card-title text-amber-200">About Us</h2>
            <p className="text-center font-light text-xl mt-5 mx-auto w-4/5">We are passionate about crafting unforgettable experiences that leave a lasting impression. Our journey in the world of event management began with a vision to redefine the way events are conceived and executed. Today, we stand as a trusted partner for clients seeking innovation, expertise, and excellence in event planning.</p>

            <h2 className="text-3xl font-semibold text-center mx-auto card-title mt-5 text-amber-200">Our Mission</h2>
            <p className="text-center font-light text-xl mt-5 mx-auto w-4/5">Our mission is simple yet powerful: to transform ordinary gatherings into extraordinary moments. We believe that every event, whether it's a tech conference, gaming convention, or hackathon, has the potential to inspire, educate, and connect people. We're dedicated to making this potential a reality by delivering events that exceed expectations..</p>

            <h2 className="text-3xl font-semibold text-center mx-auto card-title mt-5 text-amber-200">Our Team</h2>
            <p className="text-center font-light text-xl mt-5 mx-auto w-4/5">Behind every successful event is a dedicated and passionate team. Our team is composed of event visionaries, logistics experts, tech enthusiasts, and creative minds who come together to bring your vision to life. We share a common goal: to create events that inspire, engage, and captivate.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
