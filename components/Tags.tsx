import React from "react";
import { IoShieldCheckmark } from "react-icons/io5";
import { ImCheckboxChecked } from "react-icons/im";
import { FaHandshakeSimple } from "react-icons/fa6";
import { PiMapPinLineFill } from "react-icons/pi";
import { MdHeadsetMic } from "react-icons/md";
import { FaUser } from "react-icons/fa";

function index() {
  return (
    <div style={{ fontFamily: '"Lato", sans-serif' }} className="">
      <section className="mx-auto container pt-8 rounded-2xl">
        <div>
          <div className="flex items-center flex-col px-4">
            <p className="uppercase text-lg font-semibold text-center text-slate-900">
              Why you should choose us?
            </p>
          </div>
          <div className="focus:outline-none mt-16 flex flex-wrap justify-center gap-10 px-4">
            <div className="focus:outline-none flex sm:w-full md:w-5/12 pb-10">
              <div className="w-20 h-20 relative mr-5">
                <div className="absolute top-0 right-0 bg-sky-100 rounded w-16 h-16 mt-2 mr-1" />
                <div className="absolute text-white bottom-0 left-0 bg-sky-600 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                  <IoShieldCheckmark size={40} />
                </div>
              </div>
              <div className="w-10/12">
                <h2 className="focus:outline-none text-lg font-bold leading-tight text-gray-800">
                  Reliability and Safety
                </h2>
                <p className="focus:outline-none text-sm text-gray-600 leading-normal pt-2">
                  Our commitment to your safety is unwavering. All our vehicles
                  undergo rigorous maintenance checks, ensuring a secure and
                  reliable journey every time. Our licensed drivers adhere to
                  strict safety protocols, prioritizing your well-being
                  throughout your ride..
                </p>
              </div>
            </div>
            <div className="focus:outline-none flex sm:w-full md:w-5/12 pb-10">
              <div className="w-20 h-20 relative mr-5">
                <div className="absolute top-0 right-0 bg-sky-100 rounded w-16 h-16 mt-2 mr-1" />
                <div className="absolute text-white bottom-0 left-0 bg-sky-600 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                  <ImCheckboxChecked size={40} />
                </div>
              </div>
              <div className="w-10/12">
                <h2 className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">
                  Comfort
                </h2>
                <p className="focus:outline-none text-sm text-gray-600 leading-normal pt-2">
                  Enjoy the ride in absolute comfort. Our taxis boast spacious
                  and clean interiors, equipped with climate control for your
                  convenience. Sit back, relax, and experience a journey
                  tailored for your comfort.
                </p>
              </div>
            </div>
            <div className="focus:outline-none flex sm:w-full md:w-5/12 pb-10">
              <div className="w-20 h-20 relative mr-5">
                <div className="absolute top-0 right-0 bg-sky-100 rounded w-16 h-16 mt-2 mr-1" />
                <div className="absolute text-white bottom-0 left-0 bg-sky-600 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                  <FaHandshakeSimple size={40} />
                </div>
              </div>
              <div className="w-10/12">
                <h2 className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">
                  Professionalism
                </h2>
                <p className="focus:outline-none text-sm text-gray-600 leading-normal pt-2">
                  Experience professionalism at its finest. Our team of drivers
                  exemplifies expertise and courtesy, ensuring a seamless and
                  respectful interaction from start to finish. Trust in our
                  professionalism for a superior travel experience
                </p>
              </div>
            </div>
            <div className="focus:outline-none flex sm:w-full md:w-5/12 pb-10">
              <div className="w-20 h-20 relative mr-5">
                <div className="absolute top-0 right-0 bg-sky-100 rounded w-16 h-16 mt-2 mr-1" />
                <div className="absolute text-white bottom-0 left-0 bg-sky-600 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                  <PiMapPinLineFill size={40} />
                </div>
              </div>
              <div className="w-10/12">
                <h2 className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">
                  Convenience
                </h2>
                <p className="focus:outline-none text-sm text-gray-600 leading-normal pt-2">
                  Booking your ride has never been easier. With our
                  user-friendly interface, booking a taxi is just a click away.
                  Transparent fare structures, multiple payment options, and
                  accurate arrival estimates guarantee a hassle-free experience
                </p>
              </div>
            </div>
            <div className="focus:outline-none flex sm:w-full md:w-5/12 pb-10">
              <div className="w-20 h-20 relative mr-5">
                <div className="absolute top-0 right-0 bg-sky-100 rounded w-16 h-16 mt-2 mr-1" />
                <div className="absolute text-white bottom-0 left-0 bg-sky-600 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                  <FaUser size={40} />
                </div>
              </div>
              <div className="w-10/12">
                <h2 className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">
                  Personalized Experience
                </h2>
                <p className="focus:outline-none text-sm text-gray-600 leading-normal pt-2">
                  Tailored to your preferences, our service aims to make each
                  ride unique. Benefit from personalized features that remember
                  your favorite locations and offer special perks for our valued
                  repeat customers.
                </p>
              </div>
            </div>
            <div className="focus:outline-none flex sm:w-full md:w-5/12 pb-10">
              <div className="w-20 h-20 relative mr-5">
                <div className="absolute top-0 right-0 bg-sky-100 rounded w-16 h-16 mt-2 mr-1" />
                <div className="absolute text-white bottom-0 left-0 bg-sky-600 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                  <MdHeadsetMic size={40} />
                </div>
              </div>
              <div className="w-10/12">
                <h2 className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">
                  Customer Service
                </h2>
                <p className="focus:outline-none text-sm text-gray-600 leading-normal pt-2">
                  Your satisfaction is our priority. Our dedicated support team
                  is readily available to address any queries or concerns. We
                  value your feedback and strive to provide exceptional customer
                  service throughout your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default index;
