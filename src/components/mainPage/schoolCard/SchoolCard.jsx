import React, { useEffect, useState } from "react";
import { Button } from "../button/Button";
import AnimationBottom from "../../animations/AnimationBottom";
import AnimationPopUp from "../../animations/AnimationPopup";

export const SchoolCard = () => {
  const [schoolCardList, setSchoolCardList] = useState([]);

  useEffect(() => {
    const fetchSchoolData = async () => {
      try {
        const middleRes = await fetch("https://admin-dashboard-al-madinah-school.vercel.app/api/middleschool/upload");
        const middleData = await middleRes.json();

        const seniorRes = await fetch("https://admin-dashboard-al-madinah-school.vercel.app/api/seniorschool/upload");
        const seniorData = await seniorRes.json();

        const combinedData = [];

        if (middleData && middleData.section) {
          combinedData.push({
            studentImg: middleData.image?.[0] || "./fallback.png",
            schoolName: middleData.section,
            key_stage: middleData.keystage,
            year: middleData.years,
            link: "/middleSchool",
            linkTitle: "Middle School",
          });
        }

        if (seniorData && seniorData.section) {
          combinedData.push({
            studentImg: seniorData.image?.[0] || "./fallback.png",
            schoolName: seniorData.section,
            key_stage: seniorData.keystage,
            year: seniorData.years,
            link: "/seniorSchool",
            linkTitle: "Senior School",
          });
        }

        setSchoolCardList(combinedData);
      } catch (error) {
        console.error("Error fetching school data:", error);
      }
    };

    fetchSchoolData();
  }, []);

  return (
    <AnimationBottom>
      <div className="flex flex-wrap gap-16 mt-7 justify-center">
        {schoolCardList.length === 0 ? (
          <p className="text-white">Loading or no data found...</p>
        ) : (
          schoolCardList.map((item, index) => (
            <div
              key={index}
              className={`${
                item.schoolName?.includes("Middle") ? "bg-[#153254]" : "bg-[#397bce]"
              } w-full py-10 max-w-xl border-8 rounded-[40px] border-[#ffa500] shadow`}
            >
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center">
                  <img
                    className="w-34 h-40 object-cover"
                    src={item.studentImg}
                    alt={`${item.schoolName || "School"} student`}
                  />
                </div>
                <h5 className="py-3 text-4xl font-bold text-white">{item.schoolName}</h5>
                <span className="text-xl font-medium py-3 text-gray-200">{item.key_stage}</span>
                <span className="text-sm text-gray-200 py-3">{item.year}</span>
                <div className="flex justify-center items-center mt-4 md:mt-6">
                  <AnimationPopUp>
                    <div>
                      <Button link={item.link} title={item.linkTitle} />
                    </div>
                  </AnimationPopUp>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </AnimationBottom>
  );
};