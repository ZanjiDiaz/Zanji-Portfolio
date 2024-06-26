import React from "react";
import mos from "../../assets/image/certifications/MOS.png";
import its from "../../assets/image/certifications/its.png";
import word from "../../assets/image/certifications/word.png";
import pp from "../../assets/image/certifications/pp.png";
import excel from "../../assets/image/certifications/excel.png";
import tday from "../../assets/image/certifications/3day.png";
import dict from "../../assets/image/certifications/dict.png";
const content = () => {
  const certifications = [
    {
      name: "Microsoft Word (2019)",
      image: word,
      details: "June 2023",
    },
    {
      name: "Microsoft Excel (2019)",
      image: excel,
      details: "June 2023",
    },
    {
      name: "Microsoft PowerPoint (2019)",
      image: pp,
      details: "June 2023",
    },
    {
      name: "Microsoft Office Specialist - Associate",
      image: mos,
      details: "June 2023",
    },
    {
      name: "3-Day Digital Literacy Training: Website and MobileApp Creation",
      image: tday,
      details: "January 2023",
    },
    {
      name: "Using HTML and CSS to Design a Website",
      image: dict,
      details: "July 2022",
    },
    {
      name: "ITS - Network Security",
      image: its,
      details: "June 2022",
    },
  ];
  return (
    <>
      {" "}
      <section className="relative bg-gray-50 py-12 sm:py-16 lg:py-20 xl:py-24 dark:bg-darkBG">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-700 dark:text-darkLight">
              How I started
            </p>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-lightBG">
              <span className=" text-blue-300 font-league text-6xl text-center">
                My Story
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-gray-700 lg:text-xl lg:leading-8 dark:text-darkLight">
              Why would you choose{" "}
              <span className=" font-league font-bold text-2xl text-gray-900 dark:text-lightBG">
                jizandev
              </span>
              ?
            </p>
          </div>

          <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-full lg:grid-cols-4">
            <li className="flex-start group relative flex lg:flex-col">
              <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)] dark:bg-dark"
                aria-hidden="true"
              ></span>
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900 dark:bg-dark dark:border-0 dark:group-hover:text-lightBG dark:group-hover:bg-darkLight">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600 group-hover:text-white dark:text-lightBG"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500 dark:text-lightBG">
                  What, When and Where
                </h3>
                <h4 className="mt-2 text-left text-gray-700 text-sm dark:text-darkLight">
                  My name is Jizan, and my journey into web development began
                  during my college days, particularly during our capstone
                  project. Prior to delving into web development, I was immersed
                  in learning Unity game development techniques.
                </h4>
              </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
              <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)] dark:bg-dark"
                aria-hidden="true"
              ></span>
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900 dark:bg-dark dark:border-0 dark:group-hover:text-lightBG dark:group-hover:bg-darkLight">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-gray-600 group-hover:text-white dark:text-lightBG"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500 dark:text-lightBG">
                  The problem
                </h3>
                <h4 className="mt-2 text-left text-gray-700 text-sm dark:text-darkLight">
                  When beginning my capstone project, I identified the problem
                  of unresponsiveness in the project's websites across various
                  devices. Similarly, I've faced challenges such as
                  responsiveness issues, slow loading times, and unattractive
                  user interfaces in my own projects.
                </h4>
              </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
              <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)] dark:bg-dark"
                aria-hidden="true"
              ></span>
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900 dark:bg-dark dark:border-0 dark:group-hover:text-lightBG dark:group-hover:bg-darkLight">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-5 w-5 text-gray-600 group-hover:text-white dark:text-lightBG"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500 dark:text-lightBG">
                  The solution
                </h3>
                <h4 className="mt-2 text-left text-gray-700 text-sm dark:text-darkLight">
                  In certain projects, I employ a "mobile-first" strategy for
                  web app development, emphasizing optimization for both mobile
                  and desktop devices using ReactJS and TailwindCSS.
                </h4>
              </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900 dark:bg-dark dark:border-0 dark:group-hover:text-lightBG dark:group-hover:bg-darkLight">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-5 w-5 text-gray-600 group-hover:text-white dark:text-lightBG"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500 dark:text-lightBG">
                  Present
                </h3>
                <h4 className="mt-2 text-left text-gray-700 text-sm dark:text-darkLight">
                  Continuously honing my skills, I stay updated on the latest
                  front-end development trends to meet industry standards. My
                  commitment to excellence ensures I consistently exceed
                  expectations, driving user engagement with exceptional web
                  designs.
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <div className="bg-white py-24 sm:py-32 dark:bg-darkBG dark:border-y-[.1rem] dark:border-dark">
        <div className="text-center mb-24">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-700 dark:text-darkLight">
            Credentials
          </p>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-lightBG">
            <span className=" text-blue-300 font-league text-6xl text-center">
              Trainings and Certifications
            </span>
          </h2>
        </div>
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 col-span-1 sm:gap-y-16 md:grid-cols-2 md:col-span-2 lg:grid-cols-3 lg:col-span-3"
          >
            {certifications.map((certifications) => (
              <li>
                <div className="flex items-center gap-x-6 max-w-7xl">
                  <img
                    className=" h-40 w-52 rounded-md object-fill"
                    src={certifications.image}
                    alt=""
                  ></img>
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-lightBG">
                      {certifications.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-primary dark:text-darkLight">
                      {certifications.details}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default content;
