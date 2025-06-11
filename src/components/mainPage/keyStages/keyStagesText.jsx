import React, { useEffect, useState } from "react";
import AnimationPopUp from "../../animations/AnimationPopup";
import { Button } from "../button/Button";


export const KeyStagesText = () => {
  const [content, setContent] = useState('Loading content...');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('https://al-madina-dashboard-backend-production-2642.up.railway.app/api/mainpage');
        const data = await response.json();

        console.log("Fetched content:", data); // should log an array

        if (Array.isArray(data) && data.length > 0 && data[0].introduction) {
          setContent(data[0].introduction);
        } else {
          setContent('No content found.');
        }
      } catch (error) {
        console.error('Error fetching content:', error);
        setContent('Error loading content.');
      }
    };

    fetchContent();
  }, []);

  return (
    <div id="key-Stages" className="mx-auto mt-10 bg-white border-4 border-gray-700 rounded-[40px] max-w-7xl py-8">
      <div className="flex justify-center">
        <AnimationPopUp>
          <div>
            <Button link={''} title={'Introduction'} />
          </div>
        </AnimationPopUp>
      </div>
      <div className="text-center gap-8 pt-3 mt-5 rounded-[40px]">
        <p className="mt-4 text-md lg:text-lg font-bold leading-8 text-[#00477e] transition duration-300 transform hover:scale-105">
          {content}
        </p>
      </div>
    </div>
  );
};
