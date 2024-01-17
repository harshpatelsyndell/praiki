import carousal1 from "./../assets/carousal1.jpg";
import carousal2 from "./../assets/carousal2.jpg";
import carousal3 from "./../assets/carousal3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function HeroPage() {
  const carouselImages = [carousal1, carousal2, carousal3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="font-Inter flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-1/2 xl:w-2/5 p-5 mt-8 md:p-0 md:mt-0 md:ps-14">
        <h1 className="text-3xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl text-textBlue font-extrabold leading-[2rem] xl:leading-[70px] tracking-tight">
          Hire world-class talent for your projects
        </h1>
        <h5 className="my-10 text-greytext font-medium leading-7 md:text-basic lg:text-lg me-10 lg:me-32">
          Praiki facilitates easy access to professional services in Nigeria and
          other African countries.
        </h5>
        <div className="text-lg font-semibold space-x-10 flex justify-center md:justify-start">
          <button className="bg-blue text:medium w-36 py-3 px-3 text-white rounded hover:bg-white border border-blue hover:text-blue transition-colors duration-100 ease-in-out">
            Find Talent
          </button>
          <button className="text:medium w-36 py-3 px-3 rounded bg-white border border-greytext">
            Find Work
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-3/5 p-5 ">
        {/* <div>
          <img className="w-full rounded-3xl" src={carousal} alt="" />
        </div> */}
        <Slider {...settings}>
          {carouselImages.map((image, index) => (
            <div key={index}>
              <img
                className="w-full rounded-3xl"
                src={image}
                alt={`Carousel ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
