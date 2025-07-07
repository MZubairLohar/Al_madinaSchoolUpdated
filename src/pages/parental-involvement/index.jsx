"use client"
import React from "react";
import AnimatedComponentLeft from "../../components/animations/AnimationLeft";
import AnimatedComponentRight from "../../components/animations/AnimationRigth";
import { motion } from "framer-motion";
export default function ParentalInvolvement() {
  return (
    <div className="my-32  max-w-7xl  mx-auto  ">
      <div className="bg-white place-items-center rounded-[40px] max-w-7xl h-auto border-4 border-gray-700 mx-4 md:mx-0">
        <div className="grid grid-cols-1 mx-auto lg:pb-8 lg:grid-cols-2 px-6 lg:px-10 gap-6 mt-10">
          <AnimatedComponentLeft>
            <div className="flex justify-center">
              <img
                className="rounded-xl w-full max-w-xs md:max-w-sm lg:max-w-lg h-[350px]"
                src="/Capture.PNG"
                alt="image"
              />
            </div>
          </AnimatedComponentLeft>
          <AnimatedComponentRight>
            <div className="flex flex-col gap-4">
              <div className="flex items-start">
                <motion.h3
                  className="cursor-pointer text-xl sm:text-2xl md:text-3xl border-2 border-gray-700 rounded-lg w-auto p-3 md:p-4 inline-block bg-[rgb(250,204,20)] text-black font-semibold"
                  initial={{ opacity: 0, scale: 0.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0,
                    delay: 0,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  Parental Involvement
                </motion.h3>
              </div>
              <div className="text-base sm:text-lg md:text-lg text-gray-700 font-bold">
                At Al-Madinah Online Secondary School, we believe in strong partnerships between the school and parents.
                <br></br>
                Parents will have access to a third-party portal where they can:
                <br></br>
                <li>View attendance, behaviour, and academic reports</li>
                <li>See homework and assignments</li>
                <li>Contact teachers and school management directly</li>
                <li>We also encourage parents to stay engaged through parent-teacher meetings, newsletters, and volunteering opportunities.</li>
              </div>
              {/* <p className="text-base sm:text-lg md:text-lg mt-4 text-gray-700 font-bold"> */}
              {/* </p> */}
            </div>
          </AnimatedComponentRight>
        </div>
      </div>
    </div>
  );
}
