import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const navLink =<>
  <li><NavLink to='/' >Home</NavLink></li>
  <li><NavLink to='/about' >About</NavLink></li>
  <li><NavLink to='/career' >Career</NavLink></li>
  </>
  return (
    <div className="absolute navbar max-w-7xl mx-auto bg-base-100 bg-opacity-5">
      <div className="navbar-start mr-3">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="red"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-red-700 bg-opacity-40 text-slate-400 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl"><img className="w-24" src='https://i.ibb.co/cQkNbhV/LOGO.png' alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-red-600 font-semibold px-1">
        {navLink}
        </ul>
      </div>
      <div className="navbar-end gap-2 mr-3">
        <Link to="/login" className="btn hover:bg-red-500 bg-red-700 bg-opacity-60 text-white border-fuchsia-950">Sign-In</Link>
        <Link to="/registration" className="btn hover:bg-blue-500 bg-blue-700 bg-opacity-60 text-white border-fuchsia-950">Sign-Up</Link>
      </div>
    </div>
  );
};

export default NavBar;