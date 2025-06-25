import React, { useEffect, useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import axios from "axios";

export const Features = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const res = await axios.get("https://al-madina-dashboard-backend-production-2642.up.railway.app/api/features"); // Adjust if needed
        setFeatures(res.data);
      } catch (error) {
        console.error("Failed to fetch features:", error);
      }
    };

    fetchFeatures();
  }, []);

  return (
    <div className="pb-15">
      {/* Features Section */}
      <div className="border-4 mx-auto max-w-7xl rounded-[40px] bg-white border-gray-700 py-10">
        <div className="flex flex-wrap gap-8 justify-center w-full">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col w-80 gap-5 items-center text-center">
              <span className="w-16 h-12 bg-sky-600 rounded-full p-3 flex items-center justify-center">
                <IoCheckmarkSharp className="w-6 h-6 text-white" />
              </span>
              <p className="text-xl font-bold text-sky-900">{item.title}</p>
              <p className="text-base font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
