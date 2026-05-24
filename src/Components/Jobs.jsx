import React, { useState } from "react";
import Checkbox from "./Checkbox";
import Btn from "./Btn";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [fullTime, setFullTime] = useState(false);
  const [partTime, setPartTime] = useState(false);
  const [onDemand, setOnDemand] = useState(false);
  const [negotiable, setNegotiable] = useState(false);
  const [noExperience, setNoExperience] = useState(false);
  const [oneYear, setOneYear] = useState(false);
  const [twoYears, setTwoYears] = useState(false);
  const [threeYears, setThreeYears] = useState(false);

  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center py-8 sm:py-10 px-4">
      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-neutral-900 text-white p-6 sm:p-8 rounded-xl text-center w-full max-w-sm">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              🎉 Thank You!
            </h2>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Thanks for contacting us.
            </p>

            <Link to="/joblist">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 w-full sm:w-auto"
              >
                Close
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* TITLE */}
      <h1 className="text-white text-xl sm:text-2xl font-bold mb-6 text-center">
        Create a New Job
      </h1>

      {/* JOB DETAILS */}
      <div className="bg-neutral-900 w-full max-w-2xl rounded-2xl p-5 sm:p-6 text-white shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Job Details</h2>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-gray-400">Job Title</label>
            <input
              type="text"
              className="w-full mt-1 bg-neutral-800 text-white p-3 rounded-lg outline-none border border-neutral-700 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Job Description</label>
            <textarea className="w-full mt-1 bg-neutral-800 text-white p-3 rounded-lg outline-none border border-neutral-700 focus:border-blue-500" />
          </div>
        </div>
      </div>

      {/* PROPERTIES */}
      <div className="bg-neutral-900 w-full max-w-2xl rounded-2xl p-5 sm:p-6 text-white mt-6 shadow-lg">
        <h1 className="font-bold text-xl mb-4">Properties</h1>

        <p className="text-gray-400 mb-2">Employment Type</p>

        <div className="flex flex-wrap gap-3 sm:gap-4 mb-6">
          <Checkbox
            label="Full-time"
            checked={fullTime}
            onChange={(e) => setFullTime(e.target.checked)}
          />
          <Checkbox
            label="Part-time"
            checked={partTime}
            onChange={(e) => setPartTime(e.target.checked)}
          />
          <Checkbox
            label="OnDemand"
            checked={onDemand}
            onChange={(e) => setOnDemand(e.target.checked)}
          />
          <Checkbox
            label="Negotiable"
            checked={negotiable}
            onChange={(e) => setNegotiable(e.target.checked)}
          />
        </div>

        <p className="text-gray-400 mb-2">Experience</p>

        <div className="flex flex-wrap gap-3 sm:gap-4 mb-6">
          <Checkbox
            label="No experience"
            checked={noExperience}
            onChange={(e) => setNoExperience(e.target.checked)}
          />
          <Checkbox
            label="1 year exp"
            checked={oneYear}
            onChange={(e) => setOneYear(e.target.checked)}
          />
          <Checkbox
            label="2 years exp"
            checked={twoYears}
            onChange={(e) => setTwoYears(e.target.checked)}
          />
          <Checkbox
            label="+3 years exp"
            checked={threeYears}
            onChange={(e) => setThreeYears(e.target.checked)}
          />
        </div>
      </div>

      {/* SUBMIT */}
      <div onClick={handleSubmit} className="w-full max-w-2xl">
        <Btn
          text="Submit Job"
          className="w-full bg-blue-600 text-white py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold mt-6 hover:bg-blue-700 transition"
        />
      </div>
    </div>
  );
};

export default Jobs;
