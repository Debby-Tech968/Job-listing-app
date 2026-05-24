import React from "react";
import Btn from "./Btn";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 sm:px-6">
      {/* Hero Card */}
      <div className="bg-neutral-900 w-full max-w-md rounded-2xl p-6 sm:p-10 text-center shadow-xl border border-neutral-800">
        {/* Icon / Badge */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg sm:text-xl">
          JB
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Job Board
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 mb-6 sm:mb-8 text-sm leading-relaxed">
          Create, explore and manage job listings easily. Find your next
          opportunity faster.
        </p>

        {/* Button */}
        <Link to="/jobs">
          <Btn
            text="Create Job"
            className="w-full bg-blue-600 text-white px-5 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-blue-700 active:scale-95 transition"
          />
        </Link>
      </div>

      {/* Bottom info */}
      <div className="mt-5 sm:mt-6 text-center px-4">
        <p className="text-gray-600 text-xs">Built with React + Tailwind</p>
        <p className="text-gray-700 text-xs mt-1">
          Your personal job management system
        </p>
      </div>
    </div>
  );
};

export default Home;
