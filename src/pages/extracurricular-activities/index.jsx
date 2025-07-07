import React from "react";
import AnimatedComponentLeft from "../../components/animations/AnimationLeft";
import AnimatedComponentRight from "../../components/animations/AnimationRigth";
import { motion } from "framer-motion";
export default function ExtracurricularActivites() {
  return (
    <div className="my-32  max-w-7xl  mx-auto  ">
      
      <div className="bg-white place-items-center rounded-[40px] max-w-7xl h-auto border-4 border-gray-700 mx-4 md:mx-0">
        <div className="grid grid-cols-1 mx-auto lg:pb-6 lg:grid-cols-2 px-6 lg:px-10 gap-6 mt-10 lg:mt-10">
          <AnimatedComponentLeft>
            <div className="flex justify-center items-center h-[630px] w-full">
              <img
                // className="rounded-xl w-full h-auto max-w-xs md:max-w-sm lg:max-w-md"
                className="rounded-2xl w-[320px] -mt-4 sm:w-[400px] md:w-[480px] lg:w-[600px] h-[610px]"
                //className="rounded-xl "
                src="/extraActivites.jpg"
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
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  Extracurricular Activities
                </motion.h3>
              </div>
              <div className="text-base sm:text-lg md:text-lg space-y-4 mt-4 mb-5 text-gray-700 font-bold">
              At Al-Madinah Online Secondary School, we believe learning goes beyond the classroom. Our extracurricular activities are designed to enrich students' spiritual, creative, and social development.
              Students will have the opportunity to take part in a variety of engaging activities such as:
              <li className="mt-4">
                Bi-Monthly Robotic Workshops (In-Person) – Held in major cities across the UK, these sessions give students a chance to engage in hands-on STEM activities while socialising and building friendships with their peers.
              </li>
              {/* <li>
              Naat and Qur’an Recitation Competitions – Encouraging confidence, spiritual growth, and love for Islamic expression through beautiful recitation and praise of the Prophet ﷺ.
              </li> */}
              <li>
              Online Challenges & Projects – Including creative writing, presentations, and academic contests to enhance skills in a fun and supportive environment.
              </li>
              <li>
              These activities not only nurture key life skills like teamwork, public speaking, and creativity, but also give students valuable opportunities to connect with others, express themselves, and grow in confidence — all within an Islamic environment.
              </li>
              </div>
              {/* <ul className="list-disc ml-5 gap-4">
                <li>
                  <span className="font-semibold">Clubs</span>: Quran Club,
                  Science Club, Debate Club, Art Club.
                </li>
                <li>
                  <span className="font-semibold">Community Service</span>:
                  Volunteer programs, charity drives, environmental projects.
                </li>
              </ul> */}
            </div>
          </AnimatedComponentRight>
        </div>
      </div>

      
    </div>
  );
}
