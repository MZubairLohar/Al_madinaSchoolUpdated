import React, { useEffect, useState } from "react";
import AnimatedComponentLeft from "../../animations/AnimationLeft";
import AnimationTop from "../../animations/AnimationTop";
import AnimatedComponentRight from "../../animations/AnimationRigth";

export const SchoolTrust = () => {
  const [content, setContent] = useState({
    title: "",
    sub1: "",
    sub2: "",
    sub3: "",
  });

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await fetch("https://admin-dashboard-al-madinah-school.vercel.app/api/teachlearn/upload");
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          const entry = data[0];
          setContent({
            title: entry.title || "",
            sub1: entry.sub1 || {},
            sub2: entry.sub2 || {},
            sub3: entry.sub3 || {},
          });
        }
      } catch (err) {
        console.error("Error fetching content:", err);
      }
    };

    fetchContent();
  }, []);
  
  
  return (
    <div className="mx-auto max-w-7xl py-16 px-5">
      <div className="">
        <div className="flex justify-center">{/* Optional button */}</div>
        <div className="text-center mt-6 rounded-lg border-4 border-gray-700 bg-white pt-6 pb-5">
          <h1 className="text-xl font-semibold tracking-tight text-gray-900 md:text-2xl lg:text-2xl">
            {content.title || "Building Brighter Futures through Faith and Virtual Learning."}
          </h1>
        </div>
        <div className="flex justify-center mt-9">{/* Optional button */}</div>
      </div>

      <div className="grid grid-cols-1 place-items-center gap-5 md:grid-cols-3 lg:gap-8 pt-10">
        <AnimatedComponentLeft>
          <div className="bg-[#00477e] text-gray-800 gap-5 border-4 border-[#ffa500] p-8 rounded-lg w-64 h-64 lg:w-96 lg:h-96 flex flex-col justify-center items-center">
            <p className="text-xl lg:text-3xl text-white font-semibold text-center">
              {content.sub1 || "Experienced Teachers Building Strong Islamic Foundations"}
            </p>
          </div>
        </AnimatedComponentLeft>

        <AnimationTop>
          <div className="bg-[#ffa500] text-gray-100 border-4 border-[#00477e] gap-5 p-8 rounded-lg w-64 h-64 lg:w-96 lg:h-96 flex flex-col justify-center items-center">
            <p className="text-xl lg:text-3xl font-semibold text-center">
              {content.sub2 || "Interactive and Engaging Islamic Learning"}
            </p>
          </div>
        </AnimationTop>

        <AnimatedComponentRight>
          <div className="bg-sky-400 text-gray-100 gap-5 border-4 border-white p-8 rounded-lg w-64 h-64 lg:w-96 lg:h-96 flex flex-col justify-center items-center">
            <p className="text-xl lg:text-2xl font-semibold text-center">
              {content.sub3 ||
                "Backed by 10+ Years of Experience in UK Schools Now Bringing Interactive Islamic Learning Online"}
            </p>
          </div>
        </AnimatedComponentRight>
      </div>
    </div>
  );
};