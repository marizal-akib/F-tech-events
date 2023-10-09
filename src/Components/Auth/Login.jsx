import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/b5FpqVz/social-media-day-media-content-online-chat-multimedia-internet-sharimg-technology-message-likes-subs.png)",
      }}
    >
      <div className="hero-overlay bg-blue-950 bg-opacity-70 "></div>
      <div className="card-body max-w-5xl mx-auto card card-compact hover:bg-red-800 text-yellow-50
          bg-red-900 bg-opacity-95 border border-fuchsia-950 shadow-xl ">
        <h2 className=" text-2xl my-10 text-center">Login</h2>

        <form className=" md:w-3 lg:w-4/5 mx-auto">
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
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mt-4">
          Do not have an account? Please
          <Link
            className="text-blue-500 hover:text-blue-700 hover:underline"
            to="/register"
          >
            Register
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
