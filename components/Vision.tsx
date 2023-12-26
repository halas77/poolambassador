import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Vision = () => {
  return (
    <div>
      <motion.div
        className=""
        initial={{ opacity: 0, y: 50, x: 0 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <div className="container mx-auto md:flex bg-blue-100 max-md:pb-2">
          <div className="flex space-x-10">
            <div className="w-14 shrink-0 max-md:mb-5">
              <span className="inline-flex items-center justify-center w-[70px] h-[70px] lg:border-b border-sky-700">
                <Image src={"/goal.jpg"} width={50} height={50} alt="Image" />
              </span>
            </div>
            <div className="max-w-md">
              <h3 className="text-slate-950 font-bold text-lg mb-1">Goal</h3>
              <p className="leading-relaxed text-gray-700 text-sm font-sans">
                Transforming travel with reliable, enjoyable, and efficient taxi
                services.
              </p>
            </div>
          </div>
          <div className="flex space-x-10  max-md:mb-5">
            <div className="w-14 shrink-0">
              <span className="inline-flex items-center justify-center w-[70px] h-[70px] lg:border-b border-sky-700">
                <Image src={"/vision.png"} width={50} height={50} alt="Image" />
              </span>
            </div>
            <div className="max-w-md">
              <h3 className="text-slate-950 font-bold text-lg mb-1">Vision</h3>
              <p className="leading-relaxed text-gray-700 text-sm font-sans">
                Redefine transportation, setting new industry standards for
                convenience and delight.
              </p>
            </div>
          </div>
          <div className="flex space-x-10">
            <div className="w-14 shrink-0">
              <span className="inline-flex items-center justify-center w-[70px] h-[70px] lg:border-b border-sky-700">
                <Image
                  src={"/mission.png"}
                  width={50}
                  height={50}
                  alt="Image"
                />
              </span>
            </div>
            <div className="max-w-md">
              <h3 className="text-slate-950 font-bold text-lg mb-1">Mission</h3>
              <p className="leading-relaxed text-gray-700 text-sm font-sans">
                Prioritize safety, comfort, and satisfaction, connecting people
                to memorable journeys.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Vision;
