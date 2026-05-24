import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Joblist = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const query = search.toLowerCase();

    return (
      job.position.toLowerCase().includes(query) ||
      job.company.toLowerCase().includes(query) ||
      job.role.toLowerCase().includes(query) ||
      job.level.toLowerCase().includes(query)
    );
  });

  return (
    <div className="bg-black min-h-screen flex flex-col items-center py-6 sm:py-10 px-3 sm:px-4">
      {/* Header */}
      <div className="bg-neutral-900 w-full max-w-3xl rounded-xl p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Job List
        </h1>

        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-neutral-800 text-white placeholder-gray-400 px-3 sm:px-4 py-2 sm:py-3 rounded-lg outline-none border border-neutral-700 focus:border-blue-500 text-sm sm:text-base"
        />
      </div>

      {/* Jobs */}
      <div className="w-full max-w-3xl mt-6 sm:mt-8 space-y-4 sm:space-y-6">
        {filteredJobs.map((job) => (
          <Link key={job.id} to={`/job/${job.id}`} className="block">
            <div className="bg-neutral-900 p-4 sm:p-6 rounded-xl text-white shadow-lg hover:scale-[1.02] transition cursor-pointer">
              {/* Top */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover bg-white p-1"
                />

                <div>
                  <h2 className="text-lg sm:text-xl font-bold">
                    {job.position}
                  </h2>

                  <p className="text-gray-400 text-xs sm:text-sm">
                    {job.company} • {job.location}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3 sm:mt-4">
                <span className="bg-blue-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                  {job.contract}
                </span>

                <span className="bg-green-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                  {job.role}
                </span>

                <span className="bg-purple-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                  {job.level}
                </span>
              </div>

              {/* Salary */}
              <p className="mt-3 sm:mt-4 text-yellow-400 font-semibold text-sm sm:text-base">
                {job.salary}
              </p>

              {/* Experience */}
              <p className="text-gray-400 mt-1 text-xs sm:text-sm">
                {job.experience}
              </p>

              {job.featured && (
                <span className="inline-block mt-2 text-green-400 text-xs sm:text-sm font-semibold">
                  Featured
                </span>
              )}

              {/* Languages */}
              <div className="mt-3">
                {job.languages.map((language, i) => (
                  <span
                    key={i}
                    className="inline-block bg-gray-700 text-white px-2 py-1 rounded mr-2 mt-2 text-xs sm:text-sm"
                  >
                    {language}
                  </span>
                ))}
              </div>

              {/* Tools */}
              <div>
                {job.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="inline-block bg-gray-700 text-white px-2 py-1 rounded mr-2 mt-2 text-xs sm:text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Joblist;
