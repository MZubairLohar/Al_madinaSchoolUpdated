import React, { useEffect, useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import AnimatedComponentLeft from "../../animations/AnimationLeft";
import AnimatedComponentRight from "../../animations/AnimationRigth";
import AnimationPopUp from "../../animations/AnimationPopup";
import { Button } from "../button/Button";

export const FamiliesLoveSec = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://al-madina-dashboard-backend-production-2642.up.railway.app/api/whychoose');
        const data = await res.json();
        if (data && data.length > 0) {
          setContent(data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch Why Choose content", error);
      }
    };

    fetchData();
  }, []);

  if (!content) return null;

  return (
    <div className="pb-15">
      <div className="border-4 border-gray-700 bg-white grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center justify-center rounded-[40px] lg:gap-10 mx-auto my-20 py-10 max-w-7xl">
        <AnimatedComponentLeft>
          <div className="grid grid-cols-2 gap-2 justify-between lg:relative">
            <img
              className="h-60 sm:w-80 sm:h-80 lg:w-60 md:-rotate-3"
              src={content.image?.[0]}
              alt="Left Image"
            />
            <img
              className="h-60 sm:w-80 sm:h-80 lg:w-60 md:rotate-12 top-5 lg:absolute left-56"
              src={content.image?.[1]}
              alt="Right Image"
            />
          </div>
        </AnimatedComponentLeft>
        <AnimatedComponentRight>
          <div className="flex flex-col gap-2">
            <AnimationPopUp>
              <div>
                <Button
                  link={""}
                  title={content.title}
                />
              </div>
            </AnimationPopUp>
            <p className="text-lg pt-5 font-bold ml-2 tracking-tight text-gray-900 md:text-xl lg:text-lg">
              {content.description}
            </p>
          </div>
        </AnimatedComponentRight>
      </div>

      {/* You can keep your static features below or make those dynamic too */}
    </div>
  );
};
