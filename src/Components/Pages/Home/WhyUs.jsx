const WhyUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 ">
      <div className=" bg-blue-900 bg-opacity-20 col-span-3 ">
        <h2 className="mt-20 ml-4 text-3xl">Why Choose Us?</h2>

        <p className="ml-4 mt-5 w-4/5 text-2xl font-medium">
          Starting from your first thought, we develop an idea into a concept
          and turn it into reality. We create a unique concept for your event.
          We are inspired by the best technologies for creating and implementing
          your special day. Only exclusive solutions for your young couple.
        </p>

        <div className="ml-6 flex flex-row mt-4">
          <img
            className="rounded-full"
            src="https://i.ibb.co/0Y00RH8/Avatar.png"
            alt=""
          />
          <p className="mt-12 ml-5 text-xl font-semibold"><span className="text-green-700">Oliver Schutto </span>/ CEO</p>
    
        </div>
      </div>

      <div
        className="col-span-2  text-indigo-100 min-h-screen text-center rounded-none stats stats-vertical shadow"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/0j6w4PY/blue-wallpaper-with-pattern-cubes-word-cubes-it-900101-31080.jpg)",
            
            backgroundBlendMode:'darken',
            backgroundColor:'slategrey',
            
        }}
      >
        <div className="stat mt-11">
          <div className="stat-value">347</div>
          <div className="stat-desc text-base font-bold text-red-700">
            Ideas developed
          </div>
        </div>

        <div className="stat">
          <div className="stat-value">545</div>
          <div className="stat-desc  text-base font-bold text-red-700">
            Events implemented
          </div>
        </div>

        <div className="stat">
          <div className="stat-value">832</div>
          <div className="stat-desc  text-base font-bold text-red-700">
            Important persons
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
