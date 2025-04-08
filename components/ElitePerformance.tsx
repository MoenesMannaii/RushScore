import { BiFootball } from "react-icons/bi";
import { GiWhistle, GiBabyfootPlayers } from "react-icons/gi";
import { FaUserTie } from "react-icons/fa6";
import { IoFootball } from "react-icons/io5";

export const ElitePerformance = () => {
  return (
    <div className="container mx-auto">
      <h2 className="bg-[#8A38F4] flex items-center px-2 py-2 text-2xl font-semibold">
        <BiFootball />
        &nbsp;Elite Performance
      </h2>
      <div className="w-full grid py-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4 lg:px-0">
        <div className="bg-white dark:bg-[#0e0e0e] border border-[#8a34f4] shadow px-8 py-4 flex items-center">
          <div className="p-4 bg-[#8a34f4]">
            <GiBabyfootPlayers className="w-8 h-auto" />
          </div>
          <div className="ml-6">
            <h3 className="mb-1 leading-5 text-white uppercase font-bold text-2xl">
              Top Players
            </h3>
          </div>
        </div>
        <div className="bg-white dark:bg-[#0e0e0e] border border-[#8a34f4] shadow px-8 py-4 flex items-center">
          <div className="p-4 bg-[#8a34f4] text-white">
            <FaUserTie className="w-8 h-auto" />
          </div>
          <div className="ml-6">
            <h3 className="mb-1 leading-5 text-white uppercase font-bold text-2xl">
              Top Coaches
            </h3>
          </div>
        </div>
        <div className="bg-white dark:bg-[#0e0e0e] border border-[#8a34f4] shadow px-8 py-4 flex items-center">
          <div className="p-4 bg-[#8a34f4] text-white">
            <GiWhistle className="w-8 h-auto" />
          </div>
          <div className="ml-6">
            <h3 className="mb-1 leading-5 text-white uppercase font-bold text-2xl">
              Top Refrees
            </h3>
          </div>
        </div>
        <div className="bg-white dark:bg-[#0e0e0e] border border-[#8a34f4] shadow px-8 py-4 flex items-center">
          <div className="p-4 bg-[#8a34f4] text-white">
            <IoFootball className="w-8 h-auto" />
          </div>
          <div className="ml-6">
            <h3 className="mb-1 leading-5 text-white uppercase font-bold text-2xl">
              Top Goals
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
