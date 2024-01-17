import praikilogo from "../assets/praikilogo.png";
import menu from "../assets/menu.png";
import { useState } from "react";

const subHeaderList = [
  {
    name: "Graphics Design",
    path: "Graphics Design",
  },
  {
    name: "Web/Mobile App development",
    path: "Web/Mobile App development",
  },
  {
    name: "Legal Services",
    path: "Legal Services",
  },
  {
    name: "Digital Marketing",
    path: "Digital Marketing",
  },
  {
    name: "Accounting",
    path: "Accounting",
  },
  {
    name: "Architecture & Design",
    path: "Architecture & Design",
  },
  {
    name: "Consulting (Management & Strategy)",
    path: "Consulting (Management & Strategy)",
  },
  {
    name: "Product/Project Management",
    path: "Product/Project Management",
  },
];

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="bg-white sticky top-0 border z-50">
      {/* -------------------nav-header------------- */}
      <div className="flex justify-between md:justify-start items-center space-x-5 py-3 px-7 relative">
        {/* -----------left (logo)---------- */}
        <div className="w-24">
          <img className="w-full" src={praikilogo} alt="logo" />
        </div>
        {/* -----------middle ---------- */}
        <div
          className={` bg-white md:bg-transparent  md:flex flex-col md:flex-row ${
            isMenuOpen ? "absolute top-16 -left-5 right-0" : "hidden w-full"
          }  md:justify-between items-center ps-10 text:medium font-semibold py-4 md:py-0  `}
        >
          <ul className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 space-x-0 md:space-x-7 text-greytext">
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
          </ul>
          <a className="md:ms-end" href="">
            <button className="text:medium md:w-24 py-2 md:px-3 md:rounded md:bg-white md:border md:border-greytext">
              Login
            </button>
          </a>
        </div>
        {/* -----------last (sigup-btn)---------- */}
        <div className="w-auto flex">
          <a className="shrink-0" href="">
            <button className="bg-blue text:medium w-24 py-2 px-3 text-white rounded hover:bg-white border border-blue hover:text-blue transition-colors duration-100 ease-in-out">
              Sign Up
            </button>
          </a>
          <button
            onClick={() => handleMenuToggle()}
            className="md:hidden w-6 ms-4"
          >
            <img src={menu} alt="menu" />
          </button>
        </div>
      </div>
      {/* ----------------submenu-------------- */}
      <div className="py-3 hidden md:block">
        <ul className="submenu flex flex-wrap justify-center items-center gap-1 text-greytext1 font-Inter">
          {subHeaderList.map((item, index) => (
            <li key={index}>
              <a
                className="px-2 py-2 hover:bg-bgBlue transition-colors duration-100 ease-in-out cursor-pointer rounded text-sm"
                href=""
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
