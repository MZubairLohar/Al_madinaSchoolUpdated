import React from "react";
import AnimatedComponentLeft from "../../components/animations/AnimationLeft";
import AnimatedComponentRight from "../../components/animations/AnimationRigth";
import { motion } from "framer-motion";
export default function indexSchoolLife() {
  return (
    <div className="my-32  max-w-7xl  mx-auto  ">
      <div className="bg-white place-items-center rounded-[40px] max-w-7xl h-auto border-4 border-gray-700 mx-4 md:mx-0">
        <div className="grid grid-cols-1 mx-auto lg:grid-cols-2 p-10 lg:px-10 gap-6 mt-10 lg:mt-5">
          <AnimatedComponentLeft>
            <div className="flex justify-center">
              <img src="/School.jpg" alt="image" className=" rounded-xl h-[415px]" />
            </div>
          </AnimatedComponentLeft>
          <AnimatedComponentRight>
            <div className="flex flex-col ">
              <div className="flex items-start ">
                <motion.h3
                className="cursor-pointer text-xl sm:text-2xl md:text-3xl border-2 border-gray-700 rounded-lg w-auto p-3 md:p-4 inline-block bg-[rgb(250,204,20)] text-black font-semibold"
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0,
                  delay: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                }}>
                  Introduction
                </motion.h3>
                </div>

              <p className="text-base sm:text-lg md:text-lg mt-4 md:mt-4 text-gray-700 font-bold">
              At Al-Madinah Online School, our mission is to provide a high-quality, structured education through an accessible and flexible online platform. We are committed to nurturing students academically, morally, and spiritually, helping them grow into confident, compassionate individuals.
              <br/>
              As an online school, we deliver expert teaching in core subjects such as English, Maths, and Science, alongside a values-based approach to character development. Our aim is to support students from all communities in reaching their full potential through a balanced curriculum, personalised support, and a strong sense of belonging within our virtual school environment.
              </p>
            </div>
          </AnimatedComponentRight>
        </div>
      </div>
    </div>
  );
}
