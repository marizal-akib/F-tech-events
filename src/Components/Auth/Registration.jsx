import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Registration = () => {
  const handleRegister = (e) => { 
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name")
    const photo = form.get("photo")
    const email = form.get("email")
    const password = form.get("password")
    console.log(name, photo, email,password);

  };
  return (
    <div>
      <NavBar></NavBar>

    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/m6NTtFq/online-registration-form-modish-form-filling-31965-54570-1.jpg)",
      }}
    >
      <div className="hero-overlay bg-blue-950 bg-opacity-70 "></div>
      <div className="card-body max-w-5xl mx-auto card card-compact hover:bg-red-800 text-black
          bg-red-900 hover:bg-opacity-80 bg-opacity-80 border border-fuchsia-950 shadow-xl mt-20 mb-6 ">
        <h2 className=" text-4xl  text-center text-amber-200">Register</h2>

        <form onSubmit={handleRegister}  className=" w-4/5 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder=" your name"
              className="input input-bordered"
              required
            />
          </div>
          <div  className="form-control ">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="photo URL"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
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
            <button className="btn  hover:bg-blue-500 bg-blue-700 bg-opacity-60 text-white border-fuchsia-950">Register</button>
          </div>
        </form>
        <p className="text-center mt-4">
          Already have an account? Please {' '}
          <span>
            <Link
              className="text-blue-500 hover:text-blue-700 hover:underline"
              to="/login"
            >
              Login
            </Link>
            .
          </span>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Registration;
