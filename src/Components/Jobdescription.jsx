import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Btn from "./Btn";
import { Link } from "react-router-dom";

const Jobdescription = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundJob = data.find((j) => j.id === parseInt(id));
        setJob(foundJob);
      });
  }, [id]);

  if (!job) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="bg-black min-h-screen text-white px-4 sm:px-6 py-10 flex justify-center">
      <div className="w-full max-w-3xl">
        {/* Header Card */}
        <div className="bg-neutral-900 rounded-2xl p-4 sm:p-6 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <img
              src={job.logo}
              alt={job.company}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover bg-white p-1"
            />

            <div>
              <h1 className="text-xl sm:text-2xl font-bold">{job.position}</h1>
              <p className="text-gray-400 text-sm sm:text-base">
                {job.company}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-blue-600 px-3 py-1 rounded-full text-xs sm:text-sm">
              {job.contract}
            </span>

            <span className="bg-green-600 px-3 py-1 rounded-full text-xs sm:text-sm">
              {job.role}
            </span>

            <span className="bg-purple-600 px-3 py-1 rounded-full text-xs sm:text-sm">
              {job.level}
            </span>

            {job.featured && (
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                Featured
              </span>
            )}
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-sm text-gray-300">
            <div>
              <p className="text-gray-500">Location</p>
              <p>{job.location}</p>
            </div>

            <div>
              <p className="text-gray-500">Salary</p>
              <p className="text-yellow-400 font-semibold">{job.salary}</p>
            </div>

            <div>
              <p className="text-gray-500">Experience</p>
              <p>{job.experience}</p>
            </div>

            <div>
              <p className="text-gray-500">Posted</p>
              <p>{job.postedAt}</p>
            </div>
          </div>
        </div>

        {/* Description Card */}
        <div className="bg-neutral-900 rounded-2xl p-4 sm:p-6 mt-6 shadow-lg">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">
            Job Description
          </h2>

          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            {job.description || "No description available"}
          </p>
        </div>

        {/* Skills Card */}
        <div className="bg-neutral-900 rounded-2xl p-4 sm:p-6 mt-6 shadow-lg">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">
            Skills Required
          </h2>

          <div className="flex flex-wrap gap-2">
            {job.languages.map((lang, i) => (
              <span
                key={i}
                className="bg-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
              >
                {lang}
              </span>
            ))}

            {job.tools.map((tool, i) => (
              <span
                key={i}
                className="bg-gray-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <Link to="/">
          <Btn
            text="Close"
            className="w-full bg-blue-600 text-white py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold mt-6 hover:bg-blue-700 transition"
          />
        </Link>
      </div>
    </div>
  );
};

export default Jobdescription;
