
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
  const [flag, setFlag] = useState("hidden");

  const menuOptionClass =
    "block py-2 pl-3 pr-4 text-white bg-blue-700 hover:text-blue-200 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent ";

  const signInButtonClass =
    "md:w-auto md:ml-auto focus:outline-none";

  return (
    <nav className="border-gray-200 bg-gray-900 dark:border-gray-700 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/iplteaminfowebapp.appspot.com/o/logo-removebg-preview.png?alt=media&token=b696dca4-f219-4372-bcc4-d360a1e4c239"
            width={80}
            height={80}
            alt=""
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            {"Nirala-Fitness-Center"}
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          onClick={() => {
            setFlag(flag === "hidden" ? "block" : "hidden");
          }}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            flag === "hidden" ? "hidden" : "block"
          } w-full md:flex md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col gap-3 font-medium p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  md:bg-gray-900 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/">
                <li className={menuOptionClass} aria-current="page">
                  Home
                </li>
              </Link>
            </li>

            <li>
              <Link to="/schedules">
                <li className={menuOptionClass} aria-current="page">
                  Schedules
                </li>
              </Link>
            </li>

            <li>
              <Link to="/services">
                <li className={menuOptionClass} aria-current="page">
                  Services
                </li>
              </Link>
            </li>
            <li>
              <Link to="/About">
                <li className={menuOptionClass} aria-current="page">
                  About us
                </li>
              </Link>
            </li>

            <li className={signInButtonClass}>
              <Link to="/signin">
                <li className={menuOptionClass} aria-current="page">
                  <button>SignIn</button>
                </li>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

