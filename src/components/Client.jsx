import client from "./../assets/client.jpg";

const listClient = [
  {
    heading: "Vetted Professionals",
    description:
      "Connect to our network of vetted independent professionals with proven expertise.",
  },
  {
    heading: "Advanced Tools",
    description:
      "Improve your project success and overall productivity with our unique suite of tools for price negotiation, contract and deliverables.",
  },
  {
    heading: "Dedicated Support",
    description:
      "We support you throughout your project to help match you to the right professionals and ensure project success.",
  },
];

const docIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 6.5859375 L 15.414062 2 L 6 2 z M 6 4 L 14 4 L 14 8 L 18 8 L 18 20 L 6 20 L 6 4 z M 8 10 L 8 12 L 16 12 L 16 10 L 8 10 z M 8 13 L 8 15 L 16 15 L 16 13 L 8 13 z M 8 16 L 8 18 L 13 18 L 13 16 L 8 16 z"></path>
  </svg>
);

export default function Client() {
  return (
    <div className="bg-bgBlue mt-5 flex flex-col md:flex-row justify-center items-center font-Inter py-14">
      <div className="w-5/6 md:w-1/2 md:ms-10 xl:w-[32%]">
        <h5 className="text-textBlue text-base my-5">Client</h5>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blackText mb-14">
          Finding talented professionals has never been easier
        </h2>
        <ul className="my-5">
          {listClient.map((item, listIndex) => (
            <li key={listIndex} className="flex gap-3 my-5">
              <p className="h-min bg-blue p-2 rounded">{docIcon}</p>
              <div>
                <h3 className="text-xl lg:text-xl text-blackText font-bold">
                  {item.heading}
                </h3>
                <p className="text-greytext text-base sm:text-lg font-normal my-3 xl:me-10">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="my-10 flex justify-center md:justify-start items-center">
          <button className="bg-blue text-lg font-semibold py-3 px-3 text-white rounded hover:bg-white border border-blue hover:text-blue transition-colors duration-100 ease-in-out">
            Start a Project
          </button>
        </div>
      </div>

      <div className="hidden sm:block w-1/2 mx-10 xl:w-[32%]">
        <img className="w-full" src={client} alt="" />
      </div>
    </div>
  );
}
