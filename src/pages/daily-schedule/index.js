import React from "react";
import AnimatedComponentLeft from "../../components/animations/AnimationLeft";
import AnimatedComponentRight from "../../components/animations/AnimationRigth";
import { motion } from "framer-motion";

export default function DailySchedule() {
  return (
    <div className="pt-32 pb-16 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
      <div className="bg-white rounded-[30px] border-4 border-gray-700 p-4 sm:p-6 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <AnimatedComponentLeft>
            <div className="flex justify-center">
              <img
                className="rounded-2xl w-[320px] sm:w-[400px] md:w-[480px] lg:w-[520px] h-[500px] scale-y-105"
                src="/schedule.jpg"
                alt="Schedule"
              />
            </div>
          </AnimatedComponentLeft>

          <AnimatedComponentRight>
            <div className="flex flex-col">
              <motion.h3
                className="cursor-pointer text-2xl sm:text-3xl md:text-4xl border-2 border-gray-700 rounded-lg w-fit px-4 py-2 sm:px-6 sm:py-3 bg-yellow-400 text-black font-semibold"
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 20,
                  delay: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                Daily Schedule
              </motion.h3>

              <p className="text-base sm:text-lg mt-4 text-gray-700 font-bold leading-relaxed">
                A typical school day runs from 8:50 AM to 3:00 PM, with regular breaks including time for lunch and salah. All classes are delivered live online via Microsoft Teams, allowing students to engage in real time with qualified teachers and classmates in a structured, interactive environment.
                <br /><br />
                Throughout the day, students will have direct access to their teachers for any academic support or questions. Whether during lessons, break times, or designated support slots, our staff are available to assist and guide students whenever needed.
                <br /><br />
                The daily timetable includes a balanced mix of core subjects, Islamic Studies, and character development, providing a holistic and enriching educational experience.
              </p>
            </div>
          </AnimatedComponentRight>
        </div>
      </div>
    </div>
  );
}






// import React from "react";
// import AnimatedComponentLeft from "../../components/animations/AnimationLeft";
// import AnimatedComponentRight from "../../components/animations/AnimationRigth";
// import { motion } from "framer-motion";
// export default function DailySchedule() {
//   return (
//     <div className="my-32  max-w-7xl  mx-auto  ">
//       <div className="bg-white h-[580px] place-items-center rounded-[40px] max-w-7xl border-4 border-gray-700 mx-4 md:mx-0">
//         <div className="grid grid-cols-1 mx-auto lg:pb-4 lg:grid-cols-2 px-6 lg:px-10 gap-6 mt-10 lg:mt-20">
//           <AnimatedComponentLeft>
//             <div className="flex justify-center">
//               <img
//                 className="rounded-xl w-full h-[360px] max-w-xs md:max-w-sm lg:max-w-md"
//                 src="/schedule.jpg"
//                 alt="image"
//               />
//             </div>
//           </AnimatedComponentLeft>
//           <AnimatedComponentRight>
//             <div className="flex flex-col">
//               <div className="flex items-start">
//                 <motion.h3
//                   className="cursor-pointer text-xl sm:text-2xl md:text-3xl border-2 border-gray-700 rounded-lg w-auto p-3 md:p-4 inline-block bg-[rgb(250,204,20)] text-black font-semibold"
//                   initial={{ opacity: 0, scale: 0.2 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{
//                     duration: 20,
//                     delay: 0.3,
//                     ease: [0, 0.71, 0.2, 1.01],
//                   }}
//                 >
//                   Daily Schedule
//                 </motion.h3>
//               </div>

//               <p className="text-base sm:text-lg md:text-lg mt-4 text-gray-700 font-bold">
//               A typical school day runs from 8:50 AM to 3:00 PM, with regular breaks including time for lunch and salah. All classes are delivered live online via Microsoft Teams, allowing students to engage in real time with qualified teachers and classmates in a structured, interactive environment.
//               Throughout the day, students will have direct access to their teachers for any academic support or questions. Whether during lessons, break times, or designated support slots, our staff are available to assist and guide students whenever needed.
//               The daily timetable includes a balanced mix of core subjects, Islamic Studies, and character development, providing a holistic and enriching educational experience.
//               </p>
//             </div>
//           </AnimatedComponentRight>
//         </div>
//       </div>
//     </div>
//   );
// }
