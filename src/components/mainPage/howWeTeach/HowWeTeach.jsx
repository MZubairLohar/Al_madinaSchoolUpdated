import React, { useEffect, useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { Button } from "../button/Button";
import AnimationPopUp from "../../animations/AnimationPopup";

export const HowWeTeach = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://al-madina-dashboard-backend-production-2642.up.railway.app/api/teachingmethodology")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  if (!data) return <div className="text-white text-center py-10">Loading...</div>;

  return (
    <div className="pb-10">
      <div
        className="max-w-7xl border-4 border-gray-700 rounded-[40px] relative mx-auto"
        style={{
          backgroundImage: `url(${data.image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-[40px]"></div>

        <div className="relative mx-auto w-9/12 grid grid-cols-1 gap-20 lg:gap-5 lg:grid-cols-5 py-20 lg:py-32">
          <div className="lg:col-span-2 flex flex-col place-items-start justify-center">
            <div>
              <AnimationPopUp>
                <Button link={"#"} title={"Teaching Methodology"} />
              </AnimationPopUp>
            </div>
            <div className="text-start pt-5">
              <p className="mt-6 text-xl font-semibold leading-8 text-gray-200">
                {data.sidebar}
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col py-10 bg-white rounded-xl px-7 lg:px-10">
            <p className="text-2xl text-gray-700 font-semibold lg:font-bold">
              {data.timetable}
            </p>

            {Array.isArray(data.methods) &&
              data.methods.map((m, index) => (
                <div key={index}>
                  <div className="flex justify-between py-3">
                    <div className="flex flex-col">
                      <span className="mt-3 font-bold text-gray-700">
                        {m.title}
                      </span>
                      <span className="mt-1 font-base text-gray-700">
                        {m.desc}
                      </span>
                    </div>
                    <span className="mt-3 w-12 h-12 bg-green-600 rounded-full p-3">
                      <IoCheckmarkSharp className="w-6 h-6 text-white" />
                    </span>
                  </div>
                  <hr className="h-[1px] bg-gray-300" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
