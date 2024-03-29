import praikilogo from "../assets/praikilogo.png";

const footer = [
  {
    name: "About Us",
    lists: [
      {
        name: "About",
        path: "About",
      },
      {
        name: "How Praiki Works",
        path: "About",
      },
      {
        name: "Payment Policy",
        path: "About",
      },
      {
        name: "Services",
        path: "About",
      },
      {
        name: "Blog",
        path: "About",
      },
    ],
  },
  {
    name: "Contact Us",
    lists: [
      {
        name: "Contact",
        path: "Contact",
      },
      {
        name: "Help & Support",
        path: "Contact",
      },
      {
        name: "FAQ",
        path: "Contact",
      },
    ],
  },
];

const facebookIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.335938 14.0034C0.337489 20.5626 5.10714 26.1474 11.5853 27.1754V17.8567H8.2026V14.0034H11.5893V11.07C11.4379 9.6801 11.9126 8.29483 12.8848 7.28995C13.8569 6.28507 15.2257 5.76473 16.6199 5.87004C17.6207 5.8862 18.6189 5.97533 19.6066 6.13671V9.41538H17.9213C17.3411 9.33938 16.7577 9.53101 16.3356 9.93627C15.9135 10.3415 15.6983 10.9166 15.7506 11.4994V14.0034H19.4453L18.8546 17.858H15.7506V27.1754C22.7566 26.0682 27.6694 19.6697 26.93 12.6155C26.1905 5.5612 20.0577 0.320616 12.9744 0.690281C5.89109 1.05995 0.337063 6.91045 0.335938 14.0034Z"
      fill="#2E3A59"
    ></path>
  </svg>
);

const instagramIcon = (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.6699 24.0539C9.38992 24.0539 9.00326 24.0365 7.72326 23.9805C6.72508 23.9477 5.73983 23.7448 4.80992 23.3805C3.201 22.7544 1.92878 21.4817 1.30326 19.8725C0.952997 18.9392 0.764079 17.9532 0.744589 16.9565C0.669922 15.6792 0.669922 15.2605 0.669922 12.0059C0.669922 8.71653 0.687255 8.33253 0.744589 7.05919C0.764505 6.06389 0.953417 5.0792 1.30326 4.14719C1.9281 2.5359 3.20239 1.26209 4.81392 0.637859C5.74545 0.286129 6.73038 0.0967184 7.72592 0.0778594C8.99926 0.00585938 9.41792 0.00585938 12.6699 0.00585938C15.9766 0.00585938 16.3566 0.0231927 17.6166 0.0778594C18.6147 0.0968815 19.6022 0.286272 20.5366 0.637859C22.1477 1.2628 23.4217 2.53636 24.0473 4.14719C24.4034 5.09278 24.5933 6.09286 24.6086 7.10319C24.6833 8.38053 24.6833 8.79786 24.6833 12.0512C24.6833 15.3045 24.6646 15.7312 24.6086 16.9939C24.5887 17.9915 24.3994 18.9784 24.0486 19.9125C23.4215 21.5228 22.1473 22.796 20.5366 23.4219C19.6036 23.7714 18.6181 23.9603 17.6219 23.9805C16.3486 24.0539 15.9313 24.0539 12.6699 24.0539ZM12.6246 2.11653C9.36326 2.11653 9.02459 2.13253 7.75126 2.18986C6.99124 2.19993 6.23856 2.34018 5.52592 2.60453C4.47359 3.0072 3.64089 3.83652 3.23392 4.88719C2.96754 5.60759 2.82727 6.3685 2.81926 7.13653C2.74859 8.42853 2.74859 8.76719 2.74859 12.0059C2.74859 15.2059 2.76059 15.5939 2.81926 16.8779C2.83119 17.6381 2.97138 18.3909 3.23392 19.1045C3.64149 20.1545 4.47405 20.9832 5.52592 21.3859C6.23807 21.652 6.99106 21.7923 7.75126 21.8005C9.04192 21.8752 9.38192 21.8752 12.6246 21.8752C15.8953 21.8752 16.2339 21.8592 17.4966 21.8005C18.2571 21.7913 19.0104 21.651 19.7233 21.3859C20.7692 20.9797 21.5965 20.1529 22.0033 19.1072C22.2691 18.3862 22.4094 17.6249 22.4179 16.8565H22.4326C22.4899 15.5819 22.4899 15.2419 22.4899 11.9845C22.4899 8.72719 22.4753 8.38453 22.4179 7.11119C22.406 6.35179 22.2658 5.59987 22.0033 4.88719C21.5974 3.83996 20.77 3.01158 19.7233 2.60453C19.0105 2.33885 18.2572 2.19855 17.4966 2.18986C16.2073 2.11653 15.8699 2.11653 12.6246 2.11653ZM12.6699 18.1645C10.1766 18.1661 7.92781 16.6655 6.97241 14.3625C6.017 12.0594 6.54313 9.40763 8.30543 7.64381C10.0677 5.87998 12.7191 5.35155 15.0229 6.30497C17.3268 7.25838 18.8294 9.50585 18.8299 11.9992C18.8263 15.4006 16.0713 18.1579 12.6699 18.1645ZM12.6699 7.99653C10.4608 7.99653 8.66992 9.78739 8.66992 11.9965C8.66992 14.2057 10.4608 15.9965 12.6699 15.9965C14.8791 15.9965 16.6699 14.2057 16.6699 11.9965C16.6648 9.78952 14.8769 8.00166 12.6699 7.99653ZM19.0699 7.04587C18.2772 7.04292 17.6365 6.39864 17.6379 5.60587C17.6394 4.8131 18.2825 4.1712 19.0753 4.1712C19.868 4.1712 20.5111 4.81309 20.5126 5.60586C20.5129 5.98834 20.361 6.35522 20.0903 6.62543C19.8196 6.89564 19.4524 7.04692 19.0699 7.04587Z"
      fill="#2E3A59"
    ></path>
  </svg>
);

const linkedInIcon = (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.0003 24H8.66699V8H14.0003V10.6667C15.1372 9.22034 16.8612 8.3581 18.7003 8.316C22.0078 8.33436 24.6766 11.0258 24.667 14.3333V24H19.3337V15C19.1204 13.5102 17.8427 12.4048 16.3377 12.408C15.6794 12.4288 15.058 12.717 14.6169 13.2062C14.1758 13.6953 13.9532 14.3431 14.0003 15V24ZM6.00033 24H0.666992V8H6.00033V24ZM3.33366 5.33333C1.8609 5.33333 0.666992 4.13943 0.666992 2.66667C0.666992 1.19391 1.8609 0 3.33366 0C4.80642 0 6.00033 1.19391 6.00033 2.66667C6.00033 3.37391 5.71937 4.05219 5.21928 4.55229C4.71918 5.05238 4.0409 5.33333 3.33366 5.33333Z"
      fill="#2E3A59"
    ></path>
  </svg>
);

const xIcon = (
  <svg
    width="29"
    height="24"
    viewBox="0 0 29 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.327 3.91797C26.5223 3.20342 27.4166 2.07828 27.843 0.752636C26.7199 1.41904 25.4911 1.88847 24.2097 2.14064C22.4331 0.261339 19.6184 -0.195996 17.3382 1.02418C15.0581 2.24435 13.877 4.83996 14.455 7.36064C9.85449 7.12967 5.5683 4.95652 2.66301 1.38197C1.1468 3.9972 1.92162 7.34035 4.43368 9.02197C3.52529 8.99277 2.63705 8.74682 1.84301 8.30464C1.84301 8.32864 1.84301 8.35264 1.84301 8.37664C1.84354 11.1008 3.76351 13.4474 6.43368 13.9873C5.5911 14.2165 4.70729 14.2503 3.84968 14.086C4.60061 16.4157 6.74775 18.0117 9.19501 18.0593C7.16812 19.6501 4.66498 20.5129 2.08835 20.5086C1.63164 20.5093 1.17529 20.483 0.72168 20.43C3.3382 22.1113 6.38351 23.0038 9.49368 23.0006C13.8207 23.0304 17.9791 21.3245 21.0386 18.2647C24.0982 15.2048 25.8038 11.0463 25.7737 6.7193C25.7737 6.4713 25.7679 6.22464 25.7563 5.9793C26.8769 5.16944 27.8441 4.16617 28.6123 3.01664C27.5684 3.47939 26.461 3.7832 25.327 3.91797Z"
      fill="#2E3A59"
    ></path>
  </svg>
);

export default function Footer() {
  return (
    <div className="font-Mulish bg-bgBlue mt-20 p-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full xl:w-4/5 m-auto gap-5 md:gap-1">
        {footer.map((items, itemsIndex) => (
          <div key={itemsIndex}>
            <h3 className="text-lg font-bold text-blackText1 mb-5">
              {items.name}
            </h3>
            <ul className="space-y-2">
              {items.lists.map((list, listsindex) => (
                <li className="text-greytext1 text-base" key={listsindex}>
                  <a href={list.path}>{list.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="col-span-2 sm:col-span-1">
          <h3 className="text-lg font-bold text-blackText1 md:mb-5">
            Connect With Us
          </h3>
          <ul className="flex items-center justify-start gap-3 my-5">
            <li>
              <a href="">{facebookIcon}</a>
            </li>
            <li>
              <a href="">{instagramIcon}</a>
            </li>
            <li>
              <a href="">{linkedInIcon}</a>
            </li>
            <li>
              <a href="">{xIcon}</a>
            </li>
          </ul>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <h3 className="text-lg font-bold text-blackText1 md:mb-5">
            Newsletter
          </h3>
          <p className="text-greytext1 text-base py-4">
            Keep up to date with content, updates, and offers from Praiki
          </p>
          <div className="h-10 flex items-center">
            <input
              type="text"
              placeholder="Enter Email"
              className="w-full text-sm p-2 h-full rounded-s border border-borderColor"
            />
            <button className="bg-borderColor rounded-e h-full p-2 text-sm text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* -----last footer sec----- */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full xl:w-4/5 m-auto border-t-2 border-borderColor my-20 pt-20 text:xs ">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <div>
            <img src={praikilogo} alt="" />
          </div>
          <div className="hidden sm:block border-s border-borderColor h-10"></div>
          <p className="text-center">
            Connecting professionals to businesses across Africa
          </p>
        </div>
        <div className="py-5 lg:py-0">
          <ul className="flex justify-center lg:justify-end items-center gap-5 text-sm">
            <li className="shrink-0">
              <a href="">Refund Policy</a>
            </li>
            <li className="shrink-0">
              <a href="">Terms of Service</a>
            </li>
            <li className="shrink-0">
              <a href="">Privacy Policy</a>
            </li>
          </ul>
          <p className=" text-center lg:text-right">
            © 2024 praiki - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
