import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import {FcGoogle} from 'react-icons/fc'

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    
  };
  return (
    <div>
      <NavBar></NavBar>

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/b5FpqVz/social-media-day-media-content-online-chat-multimedia-internet-sharimg-technology-message-likes-subs.png)",
        }}
      >
        <div className="hero-overlay bg-blue-950 bg-opacity-70 "></div>
        <div
          className="card-body max-w-5xl mx-auto card card-compact hover:bg-red-800 text-black
          bg-red-900 hover:bg-opacity-80 bg-opacity-80 border border-fuchsia-950 shadow-xl mt-20 mb-6 "
        >
          <h2 className=" text-4xl my-10 text-center text-amber-200">Login</h2>

          <div className="flex flex-row items-center ">
            <p className="font-semibold text-amber-100">Sign-In with :-</p>
            <button className="btn  hover:bg-blue-500 bg-blue-700 bg-opacity-60 text-white border-fuchsia-950 "><FcGoogle className="text-xl"></FcGoogle> Google</button>
          </div>

          <form onSubmit={handleLogin} className=" w-4/5 mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn  hover:bg-blue-500 bg-blue-700 bg-opacity-60 text-white border-fuchsia-950">
                Login
              </button>
            </div>
          </form>
          <p className="text-center mt-4">
            Do not have an account? Please{" "}
            <Link
              className="text-blue-500 hover:text-blue-700 hover:underline"
              to="/registration"
            >
              Register
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
