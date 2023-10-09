import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/VjkSzV9/404-error-with-portals-concept-illustration-114360-7970.jpg)",
      }}
    >
      <div className="hero-overlay bg-blue-950 bg-opacity-10 "></div>

      <div className="mx-auto mt-56">
        <Link to='/'>
        <button className="btn hover:bg-blue-500 bg-blue-700 bg-opacity-80 text-white  border-fuchsia-950 text-xl ">Return to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
