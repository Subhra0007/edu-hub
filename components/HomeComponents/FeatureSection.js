"use client";

import { FaPlayCircle, FaUserGraduate, FaBookOpen } from "react-icons/fa";

export default function FeatureSection() {
  return (
      <div className="max-w-7xl mx-auto mt-15 px-6 lg:px-0">
    <section className="bg-sky-500 text-white py-15 rounded-3xl  mt-12 relative overflow-hidden shadow-md p-6">
      {/* Subtle background circle design */}
      <div className="absolute right-10 top-10 w-40 h-40 bg-white/10 rounded-full"></div>
      <div className="absolute right-0 bottom-0 w-72 h-72 bg-white/10 rounded-full"></div>

      <div className=" flex flex-col md:flex-row justify-between items-center gap-10  relative z-10 px-6">
        {/* Card 1 */}
        <div className="flex items-center gap-4">
          <FaPlayCircle size={50} className="text-orange-600" />
          <div>
            <h3 className="text-lg font-semibold  text-black">Explore 1,000</h3>
            <p className="text-slate-900 font-medium">online courses</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center gap-4">
          <FaUserGraduate size={50} className="text-orange-600" />
          <div>
            <h3 className="text-lg font-semibold text-black">Find the right</h3>
            <p className="text-slate-900 font-medium">instructor for you</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center gap-4">
          <FaBookOpen size={50} className="text-orange-600" />
          <div>
            <h3 className="text-lg font-semibold text-black ">Lifetime access</h3>
            <p className="text-slate-900 font-medium">Learn on your schedule</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
