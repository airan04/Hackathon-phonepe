import React from "react";
import { useNavigate } from "react-router-dom";
import sampleImage from "../assets/home-image.png";
import backgroundImage from "../assets/canva-1.png";
import backgroundImage2 from "../assets/main-2.png";
import maxProd from "../assets/max-prod.png";

const Home = () => {
  const navigate = useNavigate();

  function handleStart() {
    console.log("Start button clicked");
    navigate("/form");
  }
  const codeSample = `
    const greeting = "Hello, world!";
    console.log(greeting);
  `;

  return (
    <div className="w-full p-4">
      <section
        className="w-full p-20 rounded-lg mb-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-10">
          <div className="flex flex-col w-full md:w-1/2 text-left space-y-6">
            <h1 className="text-4xl font-bold text-black leading-tight">
              Hire the right talent <br /> With the right set of questions
            </h1>
            <h4 className="text-xl text-black opacity-80">
              In the fast-moving world of product companies, great products need
              great execution. Hiring the right engineers is vital but shouldn’t
              slow you down.
            </h4>
            <button
              className="btn-neutral bg-blue-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 w-[20%]"
              onClick={handleStart}
            >
              Start
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={sampleImage}
              alt="heelooo"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="mb-10 mr-16 ml-16 p-40">
        <h1 className="text-3xl font-bold mb-12">Challenges Faced</h1>
        <div className="flex flex-col md:flex-row mb-20 mt-20">
          <div className="flex flex-col mr-10 w-full md:w-1/2 mb-10 md:mb-0">
            <svg width="80" height="80" fill="none">
              <rect width="80" height="80" fill="#201F1F" rx="10"></rect>
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="m25.2 34.6 1.1-5.7a.9.9 0 1 1 .9.2L25.6 35l.2.2c1.6 1.9 2.5 8.3 3.2 9.8.6 1.2 1 3 3.7 4.2a13.6 13.6 0 0 1 9.5-23v-.8h-.9v-.9H44v.9h-1v.9c3.3 0 6.3 1.3 8.6 3.4l.4-.4-.6-.7.6-.6 2 1.9-.7.6-.6-.6-.4.4a13.6 13.6 0 0 1-2.3 21h2.7c1.8-1.3 3-1.3 3.5 0 .5 1.4 1.3 2.8 2.2 4.2h-34c-2.7-.2-2.8-5.8-2.8-7 0-5.6.4-8.7.4-10 0-1.2.3-2.2.8-3l-.9-4.4a.9.9 0 1 1 .9-.2l.5 4c.5-.4 1.2-.6 1.8-.3Zm17 4.5.3-9.3h.3l.3 9.3a.9.9 0 1 1-.9 0Zm.5 12.3a11.4 11.4 0 1 0 0-23 11.4 11.4 0 0 0 0 23Z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <h4 className="text-xl text-left mt-5">
              Time-consuming hiring processes
            </h4>
            <p className="text-gray-500 text-left text-sm">
              Long hiring cycles leave key roles unfilled for weeks or months,
              stalling progress. Startups need quicker, smarter hiring solutions
              to stay ahead.
            </p>
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <svg width="80" height="80" fill="none">
              <rect width="80" height="80" fill="#000" rx="10"></rect>
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M35.9 30.8v7.7c0 .3-.3.5-.5.5H28a.5.5 0 0 1-.5-.5c0-.2.3-.5.5-.5h7v-7.2c0-.7 1-.7 1 0ZM49.5 42c-.4 0-.7.4-.7.7a3 3 0 0 1-4.6 2.6.8.8 0 0 0-1 .2 6 6 0 0 0-1.5 2.4c-.2.3 0 .7.3 1a3 3 0 0 1-.1 5.2 1 1 0 0 0-.4 1c.4.9.8 1.7 1.4 2.4.3.4.7.4 1 .3a3 3 0 0 1 4.6 2.7c0 .4.3.7.7.8H52c.4 0 .7-.3.7-.7a3 3 0 0 1 4.6-2.6c.4.2.8.1 1-.2.7-.7 1.1-1.5 1.5-2.4.2-.3 0-.7-.3-1a3 3 0 0 1 0-5.2c.4-.2.6-.6.4-1a7 7 0 0 0-1.3-2.4.8.8 0 0 0-1-.3A3 3 0 0 1 53 43c0-.4-.3-.7-.7-.8a10 10 0 0 0-2.8 0Zm.3 5.8a4 4 0 0 1 3 .5 4 4 0 0 1 1.4 5.4 4 4 0 0 1-5.5 1.4 4 4 0 0 1 1-7.3ZM43 31.1c-.5.9.1 1.9 1 1.9h14c1 0 1.6-1 1.1-1.9l-7-12c-.4-.8-1.6-.8-2.1 0l-7 12Zm8-.9a.5.5 0 0 1-.4-.5v-.2c0-.7 1-.7 1 0v.2c0 .3-.3.5-.5.5Zm.6-3c0 .7-1 .7-1 0v-3.7c0-.7 1-.7 1 0v3.8ZM20 38.6A15.3 15.3 0 0 0 42.5 52a2 2 0 0 0-1-2.2c-.8-.5-1-1.4-.7-2.2.4-1 1-1.8 1.6-2.6.5-.7 1.5-.9 2.3-.4a2 2 0 0 0 3.1-1.8c0-.9.7-1.6 1.6-1.7h1.1c.4-2.4.2-4.9-.5-7.1h-5.8a2.2 2.2 0 0 1-2-3.4l2.5-4.2c-2.7-2-6-3-9.3-3a15 15 0 0 0-15.4 15ZM35.9 50v1.6c0 .6-1 .6-1 0V50c0-.7 1-.7 1 0Zm11-10.9c-.7 0-.7-1 0-1h1.5c.7 0 .7 1 0 1h-1.6Zm-11-13.4v1.6c0 .6-1 .6-1 0v-1.6c0-.6 1-.6 1 0Zm-11.5 13c0 .2-.2.4-.5.4h-1.6c-.6 0-.6-1 0-1H24c.3 0 .5.3.5.5Z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <h4 className="text-xl text-left mt-5">
              Limited engineering bandwidth
            </h4>
            <p className="text-gray-500 text-left text-sm">
              Relying on engineering teams for interviews takes them away from
              building products and meeting deadlines.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-20 mt-20">
          <div className="flex flex-col mr-10 w-full md:w-1/2 mb-10 md:mb-0">
            <svg width="80" height="80" fill="none">
              <rect width="80" height="80" fill="#201F1F" rx="10"></rect>
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="m25.2 34.6 1.1-5.7a.9.9 0 1 1 .9.2L25.6 35l.2.2c1.6 1.9 2.5 8.3 3.2 9.8.6 1.2 1 3 3.7 4.2a13.6 13.6 0 0 1 9.5-23v-.8h-.9v-.9H44v.9h-1v.9c3.3 0 6.3 1.3 8.6 3.4l.4-.4-.6-.7.6-.6 2 1.9-.7.6-.6-.6-.4.4a13.6 13.6 0 0 1-2.3 21h2.7c1.8-1.3 3-1.3 3.5 0 .5 1.4 1.3 2.8 2.2 4.2h-34c-2.7-.2-2.8-5.8-2.8-7 0-5.6.4-8.7.4-10 0-1.2.3-2.2.8-3l-.9-4.4a.9.9 0 1 1 .9-.2l.5 4c.5-.4 1.2-.6 1.8-.3Zm17 4.5.3-9.3h.3l.3 9.3a.9.9 0 1 1-.9 0Zm.5 12.3a11.4 11.4 0 1 0 0-23 11.4 11.4 0 0 0 0 23Z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <h4 className="text-xl text-left mt-5">
              Inconsistent interview standards
            </h4>
            <p className="text-gray-500 text-left text-sm">
              Without a structured interview process, startups may struggle with
              inconsistent evaluations, leading to mismatches in hiring.
            </p>
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <svg width="80" height="80" fill="none">
              <rect width="80" height="80" fill="#000" rx="10"></rect>
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M35.9 30.8v7.7c0 .3-.3.5-.5.5H28a.5.5 0 0 1-.5-.5c0-.2.3-.5.5-.5h7v-7.2c0-.7 1-.7 1 0ZM49.5 42c-.4 0-.7.4-.7.7a3 3 0 0 1-4.6 2.6.8.8 0 0 0-1 .2 6 6 0 0 0-1.5 2.4c-.2.3 0 .7.3 1a3 3 0 0 1-.1 5.2 1 1 0 0 0-.4 1c.4.9.8 1.7 1.4 2.4.3.4.7.4 1 .3a3 3 0 0 1 4.6 2.7c0 .4.3.7.7.8H52c.4 0 .7-.3.7-.7a3 3 0 0 1 4.6-2.6c.4.2.8.1 1-.2.7-.7 1.1-1.5 1.5-2.4.2-.3 0-.7-.3-1a3 3 0 0 1 0-5.2c.4-.2.6-.6.4-1a7 7 0 0 0-1.3-2.4.8.8 0 0 0-1-.3A3 3 0 0 1 53 43c0-.4-.3-.7-.7-.8a10 10 0 0 0-2.8 0Zm.3 5.8a4 4 0 0 1 3 .5 4 4 0 0 1 1.4 5.4 4 4 0 0 1-5.5 1.4 4 4 0 0 1 1-7.3ZM43 31.1c-.5.9.1 1.9 1 1.9h14c1 0 1.6-1 1.1-1.9l-7-12c-.4-.8-1.6-.8-2.1 0l-7 12Zm8-.9a.5.5 0 0 1-.4-.5v-.2c0-.7 1-.7 1 0v.2c0 .3-.3.5-.5.5Zm.6-3c0 .7-1 .7-1 0v-3.7c0-.7 1-.7 1 0v3.8ZM20 38.6A15.3 15.3 0 0 0 42.5 52a2 2 0 0 0-1-2.2c-.8-.5-1-1.4-.7-2.2.4-1 1-1.8 1.6-2.6.5-.7 1.5-.9 2.3-.4a2 2 0 0 0 3.1-1.8c0-.9.7-1.6 1.6-1.7h1.1c.4-2.4.2-4.9-.5-7.1h-5.8a2.2 2.2 0 0 1-2-3.4l2.5-4.2c-2.7-2-6-3-9.3-3a15 15 0 0 0-15.4 15ZM35.9 50v1.6c0 .6-1 .6-1 0V50c0-.7 1-.7 1 0Zm11-10.9c-.7 0-.7-1 0-1h1.5c.7 0 .7 1 0 1h-1.6Zm-11-13.4v1.6c0 .6-1 .6-1 0v-1.6c0-.6 1-.6 1 0Zm-11.5 13c0 .2-.2.4-.5.4h-1.6c-.6 0-.6-1 0-1H24c.3 0 .5.3.5.5Z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <h4 className="text-xl text-left mt-5">
              Lack of access to top talent
            </h4>
            <p className="text-gray-500 text-left text-sm">
              Competing with big companies for skilled professionals is tough.
              Startups need efficient ways to attract top candidates.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white p-12 rounded-lg shadow-lg mb-20">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-12">
          How It Empowers Hiring
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* First Card */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={maxProd}
                alt="Productivity"
                className="rounded-lg shadow-md mb-6 md:mb-0 md:mr-8 w-full md:w-2/5"
              />
              <div className="flex flex-col w-full md:w-3/5">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Save Engineering Bandwidth, Maximize Productivity
                </h3>
                <p className="text-gray-600">
                  Your engineers are your most valuable resource. Don’t let
                  interviews take up your time. With Intervue, you can automate
                  the interview process and focus on what matters most.
                </p>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex flex-col w-full md:w-3/5">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Streamline the Hiring Process, Reduce Time to Hire
                </h3>
                <p className="text-gray-600">
                  Time is money, especially in startups. Intervue helps
                  streamline your hiring process so that you can bring in top
                  talent faster without compromising quality.
                </p>
              </div>
              <img
                src={maxProd}
                alt="Hiring Process"
                className="rounded-lg shadow-md mb-6 md:mb-0 md:ml-8 w-full md:w-2/5"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
