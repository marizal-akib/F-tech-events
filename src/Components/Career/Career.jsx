import NavBar from "../NavBar/NavBar";

const Career = () => {
  return (
    <div>
      <NavBar></NavBar>
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
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
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
            <h2 className="text-5xl font-semibold text-center mx-auto card-title text-amber-200">
              About Us
            </h2>
            <div className="card-body mt-5 bg-amber-300 bg-opacity-30 ">
              <h2 className="text-3xl font-semibold text-center mx-auto card-title text-amber-200">
                Event Planner/Coordinator
              </h2>
              <h2>Requirements</h2>
              <ol className="text-start font-light text-xl mt-5 mx-auto w-4/5">
                <li>
                  Bachelor's degree in Event Management, Hospitality, or a
                  related field (or equivalent experience).
                </li>
                <li>Proven experience in event planning or coordination.</li>
                <li>Excellent communication and negotiation abilities.</li>
                <li>Strong organizational and multitasking skills.</li>
                <li>Attention to detail and problem-solving skills.</li>
              </ol>
            </div>
            <div className="card-body mt-5 bg-amber-300 bg-opacity-30 ">
              <h2 className="text-3xl font-semibold text-center mx-auto card-title text-amber-200">
                Event Manager
              </h2>
              <h2>Requirements</h2>
              <ol className="text-start font-light text-xl mt-5 mx-auto w-4/5">
                <li>
                  Bachelor's degree in Event Management, Business, or a related
                  field.
                </li>
                <li>Several years of experience in event management.</li>
                <li>Proficiency in event management software and tools.</li>
                <li>Leadership and team management skills.</li>
                <li>Budgeting and financial management expertise.</li>
              </ol>
            </div>
            <div className="card-body mt-5 bg-amber-300 bg-opacity-30 ">
              <h2 className="text-3xl font-semibold text-center mx-auto card-title text-amber-200">
                Event Designer/Creative Director
              </h2>
              <h2>Requirements</h2>
              <ol className="text-start font-light text-xl mt-5 mx-auto w-4/5">
                <li>Degree in Design, Fine Arts, or a related field.</li>
                <li>Proven experience in event design and decor.</li>
                <li>Creative portfolio showcasing design concepts.</li>
                <li>
                  Proficiency in design software (e.g., Adobe Creative Suite).
                </li>
                <li>Strong conceptual and artistic abilities.</li>
              </ol>
            </div>
            <div className="card-body mt-5 bg-amber-300 bg-opacity-30 ">
              <h2 className="text-3xl font-semibold text-center mx-auto card-title text-amber-200">
                Technical Director/AV Specialist
              </h2>
              <h2>Requirements</h2>
              <ol className="text-start font-light text-xl mt-5 mx-auto w-4/5">
                <li>
                  Degree in Audiovisual Technology, Technical Production, or
                  related field.
                </li>
                <li>
                  Extensive experience in AV setup and equipment operation.
                </li>
                <li>Proficiency in audio and visual software and tools.</li>
                <li>Knowledge of lighting and sound design.</li>
                <li>Problem-solving skills for technical issues.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
