import React from "react";
import pic1 from "../assets/imgs/carol-magalhaes-dSsXm15D9hg-unsplash.jpg";
import pic2 from "../assets/imgs/gilles-lambert-pb_lF8VWaPU-unsplash.jpg";
import pic3 from "../assets/imgs/psk-slayer-8Syeat16I-g-unsplash.jpg";
import pic4 from "../assets/imgs/toa-heftiba-QnUywvDdI1o-unsplash.jpg";

const Hero = () => {
  return (
    <div className="relative max-w-screen-xl p-4 px-4 mx-auto bg-customColor1 sm:px-6 lg:px-8 py-26 lg:mt-20">
      <div className="relative">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
            <p className="text-base font-bold leading-6 text-customColor2 uppercase">
              The Blogging Site You need
            </p>
            <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-customColor5 sm:text-3xl sm:leading-9">
              At Yamukelwa Blogs, we provide a simple and powerful collaborative
              space for yourself. Track, share, measure—you have full control.
            </h4>
            <p className="mt-4 text-lg leading-6 font-bold text-customColor2">
              Interactivity between is the key to success.
            </p>
            <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
              <li className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-customColor1 bg-customColor4 rounded-full ">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-4 text-base font-bold leading-6 text-customColor2 ">
                    Live modifications
                  </span>
                </div>
              </li>
              <li className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6  text-customColor1 bg-customColor4 rounded-full ">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-4 text-base font-bold leading-6 text-customColor2 ">
                    Data tracker
                  </span>
                </div>
              </li>
              <li className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-customColor1 bg-customColor4 rounded-full ">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-4 text-base font-bold leading-6 text-customColor2 ">
                    24/7 support
                  </span>
                </div>
              </li>
              <li className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-customColor1 bg-customColor4 rounded-full ">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-4 text-base font-bold leading-6 text-customColor2 ">
                    Free tips
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
            <div className="relative space-y-4">
              <div className="flex items-end justify-center space-x-4 lg:justify-start">
                <img
                  className="w-32 rounded-lg shadow-lg md:w-56"
                  width="200"
                  src={pic1}
                  alt="1"
                />
                <img
                  className="w-40 rounded-lg shadow-lg md:w-64"
                  width="260"
                  src={pic2}
                  alt="2"
                />
              </div>
              <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                <img
                  className="w-24 rounded-lg shadow-lg md:w-40"
                  width="170"
                  src={pic3}
                  alt="3"
                />
                <img
                  className="w-32 rounded-lg shadow-lg md:w-56"
                  width="200"
                  src={pic4}
                  alt="4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
