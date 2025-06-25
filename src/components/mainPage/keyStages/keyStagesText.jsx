import React, { useEffect, useState } from "react";
import AnimationPopUp from "../../animations/AnimationPopup";
import { Button } from "../button/Button";

export const KeyStagesText = () => {
  const [content, setContent] = useState("Loading content...");

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch("https://admin-dashboard-al-madinah-school.vercel.app/api/mainpage/upload");
        const data = await response.json();

        if (data?.introduction) {
          setContent(data.introduction);
        } else {
          setContent("No introduction found.");
        }
      } catch (error) {
        console.error("Error fetching content:", error);
        setContent("Error loading content.");
      }
    };

    fetchContent();
  }, []);

  return (
    <div id="key-Stages" className="mx-auto mt-10 bg-white border-4 border-gray-700 rounded-[40px] max-w-7xl py-8 px-4">
      <div className="flex justify-center">
        <AnimationPopUp>
          <div>
            <Button link={""} title={"INTRODUCTION"} />
          </div>
        </AnimationPopUp>
      </div>
      <div className="text-center pt-6">
        <p className="text-md lg:text-lg font-bold text-[#00477e]">{content}</p>
      </div>
    </div>
  );
};
