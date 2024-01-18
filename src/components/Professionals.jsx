import Profe from "../assets/Profe.jpg";
import GlobalOpportunities from "../assets/GlobalOpportunities.png";
import FlexibilityandControl from "../assets/FlexibilityandControl.png";

export default function Professionals() {
  return (
    <div className="font-Inter">
      {/* -------------Professionals section----------- */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-3 sm:gap-14 py-10 sm:py-20 sm:mx-10">
        <div className="w-5/6 md:w-1/2 xl:w-[32%]">
          <img className="w-full" src={Profe} alt="professional" />
        </div>
        <div className="w-5/6 md:w-1/2 xl:w-[32%]">
          <h5 className="text-textBlue font-semibold text-base my-5">
            Professionals
          </h5>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blackText my-8">
            Access global opportunities
          </h2>
          <p className="text-greytext text-base sm:text-lg font-normal my-3 xl:me-10">
            Meet clients from around the world and take your career to new
            heights. Work wherever and whenever suits you. With Praiki, you
            remain in control.
          </p>
          <div className="my-10">
            <button className="bg-blue text-lg font-semibold py-3 px-3 text-white rounded hover:bg-white border border-blue hover:text-blue transition-colors duration-300 ease-in-out">
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* -------------end Professionals section----------- */}
      {/* -------------start----------- */}
      <div className="hidden md:block border-t xl:w-[64%] md:mx-10 xl:m-auto py-20">
        <div className="flex justify-center items-start gap-5">
          <div className="w-[35%] lg:w-[30%]">
            <img src={GlobalOpportunities} alt="Global Opportunities" />
            <h5 className="text-xl text-textBlue font-extrabold py-5">
              Global Opportunities
            </h5>
            <p className="text-blackText text-base">
              Advance your career with access to a global pool of clients and
              projects.
            </p>
          </div>
          <div className=" w-[35%] lg:w-[30%]">
            <img src={FlexibilityandControl} alt="Flexibility and Control" />
            <h5 className="text-xl text-textBlue font-extrabold py-5">
              Flexibility and Control
            </h5>
            <p className="text-blackText text-base">
              Control when, where, and how you work.
            </p>
          </div>
        </div>
      </div>
      {/* -------------end----------- */}
      {/* -------------ready to start hiring section----------- */}
      <div className="bg-bgGray mt-5 py-14 text-center">
        <h1 className="text-3xl lg:text-6xl font-black text-blackText">
          Ready to Start Hiring?
        </h1>
        <p className="py-10 w-4/5 md:w-3/5 lg:w-1/3 m-auto text-greytext font-normal text-lg">
          Turn your ideas into reality with access to vetted professionals. Let
          Praiki support your success today.
        </p>
        <button className="bg-blue text-lg font-semibold py-3 px-3 text-white rounded hover:bg-white border border-blue hover:text-blue transition-colors duration-300 ease-in-out">
          Get Started
        </button>
      </div>
    </div>
  );
}
