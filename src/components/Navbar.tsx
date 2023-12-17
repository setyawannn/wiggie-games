import { Link } from "react-router-dom";
import WrapperSpace from "./WrapperSpace";

const Navbar = () => {
  return (
    <WrapperSpace>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl">WIGGIE</a>
        </div>
        <div className="flex-none hidden md:block">
          <ul className="menu menu-horizontal px-1 text-lg">
            <Link to={"/"}>
              <li>
                <a>Menu</a>
              </li>
            </Link>
            <Link to={"/games"}>
              <li>
                <a>Games</a>
              </li>
            </Link>
            <Link to={"/tutorial"}>
              <li>
                <a>Tutorial</a>
              </li>
            </Link>
            <Link to={"/developer"}>
              <li>
                <a>Developer</a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="md:hidden">
          <div className="dropdown dropdown-end">
            <div className="flex-none">
              <button className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-7 h-7 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg"
            >
              <Link to={"/"}>
                <li>
                  <a>Menu</a>
                </li>
              </Link>
              <Link to={"/games"}>
                <li>
                  <a>Games</a>
                </li>
              </Link>
              <Link to={"/tutorial"}>
                <li>
                  <a>Tutorial</a>
                </li>
              </Link>
              <Link to={"/developer"}>
                <li>
                  <a>Developer</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </WrapperSpace>
  );
};

export default Navbar;
