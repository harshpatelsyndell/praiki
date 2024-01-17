import praikilogo from "../assets/praikilogo.png";
export default function Navbar() {
  return (
    <div className="flex justify-start items-center space-x-5 py-3 px-7">
      {/* -----------logo---------- */}
      <div className="w-24">
        <img className="w-full" src={praikilogo} alt="logo" />
      </div>
      {/* -----------middle sec---------- */}
      <div className=" w-full flex justify-between items-center ps-10 text:medium font-semibold">
        <ul className="flex items-center space-x-0 md:space-x-7 text-greytext">
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
        <a className="ms-end" href="">
          <button>Login</button>
        </a>
      </div>
      {/* -----------middle sec---------- */}
      <div className="w-auto flex">
        <a className="shrink-0" href="">
          <button className="bg-blue text:medium py-2 px-3 text-white rounded hover:bg-white border border-blue hover:text-blue transition-colors duration-100 ease-in-out">
            Sign Up
          </button>
        </a>
      </div>
    </div>
  );
}
