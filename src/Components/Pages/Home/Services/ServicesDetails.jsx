import { Link, useLoaderData, useParams } from "react-router-dom";
import NavBar from "../../../NavBar/NavBar";

const ServicesDetails = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const service = services.find((service) => service.id == id);
  const { name, image, price, description } = service;
  return (
    <div>
      <NavBar></NavBar>
      <div
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-blue-950 bg-opacity-70 "></div>
      </div>
      <div className=" bg-fuchsia-900 bg-opacity-20">
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className=" relative bottom-40 max-w-5xl mx-auto card card-compact hover:bg-red-800 text-yellow-50
          bg-red-900 bg-opacity-95 border border-fuchsia-950 shadow-xl p-8"
        >
          <div className="card-body ">
            <h2 className="text-5xl font-semibold text-center mx-auto card-title text-amber-200">
              {name}
            </h2>
            <p className="text-center font-light text-xl mt-5 mx-auto w-4/5">
              {description}
            </p>
          </div>
          <div className=" mt-8 card-actions items-center justify-end">
            <h2 className="font-bold">
              Plan starts from : <span className="text-amber-400">{price}</span>{" "}
            </h2>
            <Link to={`/service/${id}`}>
              <button className="btn  hover:bg-blue-600 bg-blue-600 bg-opacity-60 text-white border-fuchsia-950">
                Ask Query
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
