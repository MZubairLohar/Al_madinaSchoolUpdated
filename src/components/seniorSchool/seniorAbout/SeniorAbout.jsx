import Image from "next/image";
import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import AnimatedComponentLeft from "../../animations/AnimationLeft";
import AnimatedComponentRight from "../../animations/AnimationRigth";
import { motion } from "framer-motion";
export default function SeniorAbout() {
  return (
    <div className=" mt-28 pb-10 px-5">
      <div className="grid grid-cols-1 lg:grid-cols-1 border-4 border-gray-700 rounded-[40px]  bg-white gap-10 lg:gap-5 mx-auto my-20 py-20 pb-18 max-w-7xl">
        <div className="flex flex-col place-items-center  gap-5 px-5">
          <motion.h3
            className=" border-2 border-gray-700 rounded-[40px]  cursor-pointer text-3xl  w-auto p-4 inline-block bg-[rgb(250,204,20)] text-black font-semibold "
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 20, // removed quotes around the duration
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Key Stage 4 Subjects
          </motion.h3>
          <h2 className="text-2xl text-center md:text-2xl lg:text-2xl p-4 text-[#00477e] hover:text-[#ffa500] font-medium">
            In Years 10 to 11, our students engage in a broad range of subjects
            <br /> that form the foundation of their secondary education. These
            subjects include
          </h2>
          <p className="text-lg font-semibold"></p>
          {/* <div className="border-4  mx-28 mt-36 mb-6 rounded-[40px] border-gray-700  bg-white "> */}
          <div className="  flex flex-col gap-8 md:flex-cols-2 w-full ">
            {/* Text Section */}
            <div className="flex-1 mt-6 text-black   p-6">
              <div className="space-y-7">
                {[
                  {
                    color: "bg-sky-600",
                    title: "English Language and Literature ",
                    description:
                      "Students develop advanced reading, writing, and analytical skills, exploring a variety of literary genres and texts.",
                  },
                  {
                    color: "bg-orange-600",
                    title: "Mathematics ",
                    description:
                      "Our mathematics program focuses on developing strong numeracy skills, logical reasoning, and problem-solving abilities.",
                  },
                  {
                    color: "bg-yellow-600",
                    title: "Science",
                    description:
                      "The science curriculum covers Biology, Chemistry, and Physics, encouraging students to explore the natural world through experiments and inquiry-based learning.",
                  },
                  {
                    color: "bg-green-600",
                    title: "Arabic",
                    description:
                      " As part of our modern language oering, students will study Arabic, focusing on reading, writing, comprehension, basic conversational skills, and foundational grammar.",
                  },
                  {
                    color: "bg-sky-600",
                    title: " Religious Education",
                    // description:
                    //   "The study of physical and human geography helps students understand the complexities of our world and the environment. ",
                  },
                  {
                    color: "bg-yellow-600",
                    title: "Physical Education",
                    description:
                      " Regular physical activity promotes health and well-being, with a focus on teamwork. ",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex pt-10  items-center">
                    <span
                      className={`${item.color} w-24 h-24 rounded-full p-6 flex items-center justify-center shadow-lg`}
                    >
                      <IoCheckmarkSharp className="w-16 h-16 text-white" />
                    </span>
                    <div className="px-2 ">
                      <p className="text-xl text-left lg:text-xl font-bold text-gray-800">
                        {item.title}
                      </p>
                      <p className="text-base mt-1 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 lg:grid-cols-1 border-4 border-gray-700 rounded-[40px]  bg-white gap-10 lg:gap-5 mx-auto my-20 py-20 pb-18 max-w-7xl">
        <div className="flex flex-col place-items-center  gap-5 px-5">
          <motion.h3
            className=" border-2 border-gray-700 rounded-[40px]  cursor-pointer text-3xl  w-auto p-4 inline-block bg-[rgb(250,204,20)] text-black font-semibold "
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 20, // removed quotes around the duration
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Integration with Islamic Studies
          </motion.h3>
          <h2 className="text-2xl text-center md:text-2xl lg:text-2xl p-6 text-[#00477e] hover:text-[#ffa500] font-medium">
            Our curriculum seamlessly integrates Islamic studies, ensuring that
            students receive a balanced education that nurtures their spiritual
            and moral development. Key Islamic subjects include
          </h2>
          <p className="text-lg font-semibold"></p>
          <div className="  flex flex-col gap-8 md:flex-cols-2 w-full ">



            <div className="flex-1 mt-5 text-black   p-6">
              <div className="space-y-7">
                {[
                  {
                    color: "bg-sky-600",
                    title: "Quranic Studies",
                    description:
                      "Students understand the Quran, learning its application in daily life. ",
                  },
                  {
                    color: "bg-orange-600",
                    title: "Islamic History",
                    description:
                      "Lessons on the life of the Prophet Muhammad (Peace and blessings be upon them) and significant events in Islamic history.",
                  },
                  {
                    color: "bg-yellow-600",
                    title: "Fiqh and Aqeedah ",
                    description:
                      "Understanding Islamic jurisprudence and beliefs.",
                  },
                  {
                    color: "bg-green-600",
                    title: "Arabic Language ",
                    description:
                      "Emphasis on proficiency in Arabic to enhance Quranic understanding and communication.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex pt-10  items-center">
                    <span
                      className={`${item.color} w-24 h-24 rounded-full p-6 flex items-center justify-center shadow-lg`}
                    >
                      <IoCheckmarkSharp className="w-16 h-16 text-white" />
                    </span>
                    <div className="px-2 ">
                      <p className="text-xl text-left lg:text-xl font-bold text-gray-800">
                        {item.title}
                      </p>
                      <p className="text-base mt-1 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
