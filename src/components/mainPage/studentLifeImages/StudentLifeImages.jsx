import React, { useEffect, useState } from "react";
import AnimatedComponentLeft from "../../animations/AnimationLeft";
import AnimationBottom from "../../animations/AnimationBottom";
import AnimatedComponentRight from "../../animations/AnimationRigth";

export const StudentLifeImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://al-madina-dashboard-backend-production-2642.up.railway.app/api/learningjourney") // Your GET endpoint
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setImages(data[0].image || []); // Assuming you're using the first document
        }
      })
      .catch((err) => {
        console.error("Error fetching learning journey images:", err);
      });
  }, []);

  return (
    <div>
      <div className="grid md:grid-cols-2 place-items-center max-w-7xl mx-auto lg:grid-cols-4 pt-20 pb-32 px-5">
        {images.map((img, index) => (
          <div key={index} className="animation-wrapper">
            {index === 0 ? (
              <AnimatedComponentLeft>
                <img className="h-64 w-64 rotate-6" src={img} alt={`journey-${index}`} />
              </AnimatedComponentLeft>
            ) : index === 1 || index === 2 ? (
              <AnimationBottom>
                <img
                  className={`h-64 w-72 ${index === 1 ? "-rotate-3" : "rotate-6"}`}
                  src={img}
                  alt={`journey-${index}`}
                />
              </AnimationBottom>
            ) : (
              <AnimatedComponentRight>
                <img className="h-64 w-72 -rotate-6" src={img} alt={`journey-${index}`} />
              </AnimatedComponentRight>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
