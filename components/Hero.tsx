"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-sky-600 w-full py-20 flex items-center justify-center">
        <div className=" px-4 lg:pl-10 mx-auto">
          <div className="lg:flex justify-between items-center max-lg:mt-24">
            <div className="lg:w-5/12 mb-6 lg:mb-0 lg:pt-6 xl:px-8 lg:ml-14">
              <motion.div
                initial={{ opacity: 0, y: 0, x: -60 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 1, delay: 0 }}
              >
                <span className="inline-block py-1 pr-5 font-sans text-sky-200 font-semibold relative mb-4 before:left-0 before:top-0">
                  {" "}
                  Your Journey, Our Priority.
                </span>
                <h1 className="text-3xl lg:text-4xl font-extrabold text-sky-50 mb-7">
                  Beyond Transportation We Deliver Experiences.
                </h1>

                <p className="leading-relaxed text-gray-50 font-sans mb-7">
                  Welcome to Pool Taxi, the transportation service that is
                  redefining the way we travel.We handpick a team of highly
                  skilled and professional drivers who provide exceptional
                  service from start to finish. Every ride is a delight, with
                  drivers who go above and beyond to exceed customer
                  expectations.have developed a state-of-the-art platform that
                  seamlessly connects passengers with drivers, getting them to
                  their destination in record time. With Pool Taxi, efficiency
                  is guaranteed, and hassle-free travel is a given. Whether
                  you're an individual looking for a convenient way to commute
                  or an organization in need of reliable transportation for your
                  employees, Pool Taxi has got you covered.
                </p>
                <div className="flex max-md:flex-col md:space-x-3 text-center ">
                  <Link
                    href="/"
                    className="text-[16px] max-lg:my-3 py-3 px-10 border-2 border-sky-100 text-gray-50 max-md:text-lg font-bold font-sans rounded-full duration-300 transition-all ease-in-out hover:bg-sky-600 hover:shadow-lg inline-block relative top-0 hover:-top-1"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/"
                    className="text-[16px] max-lg:my-3 py-3 px-10  text-slate-900 max-md:text-lg font-bold font-sans rounded-full duration-300 transition-all ease-in-out bg-sky-200 hover:bg-sky-100 hover:shadow-lg inline-block relative top-0 hover:-top-1"
                  >
                    Download App
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-5/12 flex max-lg:justify-center">
              <motion.div
                initial={{ opacity: 0, y: 0, x: 60 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 1, delay: 0 }}
              >
                <Image
                  src="/phone01.png"
                  width={300}
                  height={200}
                  alt="Image"
                  className="xl:w-[350px] h-[500px]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
