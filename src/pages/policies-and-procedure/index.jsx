import React from "react";

export default function PolicyAndProcedure() {
  const policies = [
    { 
      title: "Tapestry Policy", 
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      filename: "tapestry-policy.pdf" 
    },
    { 
      title: "Staff Tapestry Agreement", 
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      filename: "staff-tapestry-agreement.pdf" 
    },
    { 
      title: "Anti-Bullying Policy", 
      icon: "M12 15l8-8m0 0l-8-8m8 8H4m6 6a6 6 0 0012 0v-4m-12 4a6 6 0 01-12 0v-4",
      filename: "anti bullying policy.pdf" 
    },
    { 
      title: "Anti Racism Policy", 
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      filename: "anti racism policy.pdf" 
    },
    { 
      title: "Behaviour Policy", 
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      filename: "Behaviour Policy.pdf" 
    },
    { 
      title: "Complaints Policy", 
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
      filename: "Complaints policy.pdf" 
    },
    { 
      title: "E Safety Policy", 
      icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
      filename: "E Safety Policy.pdf" 
    },
    { 
      title: "Exclusions Policy", 
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      filename: "Exclusions Policy.pdf" 
    },
    { 
      title: "Health and Safety Policy", 
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
      filename: "Health and Safety Policy.pdf" 
    },
    { 
      title: "Managing Allegations against Staff Policy", 
      icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z",
      filename: "Managing allegations against staff.pdf" 
    }
  ];

  // Function to handle download
  const handleDownload = (filename) => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = `/${filename}`; // Path to your PDF files
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white mt-40 mb-10 gap-6 flex flex-col border-4 border-gray-700 rounded-[40px] justify-between mx-4 md:mx-24 p-8">
      {/* Heading at the top */}
      <div className="text-center mx-auto md:text-left text-lg md:text-3xl font-bold mb-8">
        <div className="rounded-[10px] cursor-pointer text-3xl w-auto p-4 inline-block bg-[rgb(250,204,20)] text-black font-semibold">
          Policies
        </div>
      </div>

      {/* Main content with grid layout */}
      <div className="-mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {policies.map((policy, index) => (
          <div 
            key={index}
            className="bg-white items-center border-2 border-gray-300 text-black p-6 rounded-2xl flex flex-col justify-center text-center hover:border-[rgb(250,204,20)] hover:shadow-md transition-all duration-300"
          >
            <div className="bg-[rgb(250,204,20)] p-3 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={policy.icon} />
              </svg>
            </div>
            <h2 className="text-lg font-bold mb-4">{policy.title}</h2>
            <button
              onClick={() => handleDownload(policy.filename)}
              className="inline-block px-4 py-2 bg-[rgb(250,204,20)] text-black rounded-md text-xs font-semibold hover:bg-opacity-80 transition-colors"
            >
              Download PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}










// import React from "react";

// import { motion } from "framer-motion";
// export default function PolicyAndProcedure() {
//   return (
    
//     <div className="bg-white mt-40 mb-10 gap-6 flex flex-col border-4 border-gray-700 rounded-[40px] justify-between mx-4 md:mx-20 p-6">
//       {/* Heading at the top */}
//       <div className="text-center bg-[rgb(250,204,20)]  mx-auto md:text-left border-2 p-3 border-gray-700 rounded-[40px] text-lg md:text-3xl font-bold mb-6">
//         <motion.h3
//           className="   cursor-pointer text-3xl  w-auto p-4 inline-block bg-[rgb(250,204,20)] text-black font-semibold "
//           initial={{ opacity: 0, scale: 0.2 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{
//             duration: 20, // removed quotes around the duration
//             delay: 0.3,
//             ease: [0, 0.71, 0.2, 1.01],
//           }}
//         >
//           Policy and procedure
//         </motion.h3>
//       </div>

//       {/* Main content with flex-row on larger screens */}
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* First div */}
//         <div className=" bg-[rgb(250,204,20)] items-center border-4 border-gray-700 text-black p-10 md:p-20 rounded-[40px] w-full md:w-1/2 mb-6 md:mb-0 flex flex-col justify-center text-center">
//           <h2 className="text-lg md:text-xl font-bold">Tapestry Policy</h2>
//           <a
//             href="/Tapestry-Policy.pdf"
//             download
//             className="inline-block mt-4 text-black font-bold underline"
//           >
//             Download File from here
//           </a>
//         </div>

//         {/* Second div */}
//         <div className=" bg-[rgb(250,204,20)] items-center border-4 border-gray-700 text-black p-10 md:p-20 rounded-[40px] w-full md:w-1/2 mb-6 md:mb-0 flex flex-col justify-center text-center">
//           <h2 className="text-lg md:text-xl font-bold">
//             Staff Tapestry Agreement
//           </h2>
//           <a
//             href="/Staff_Tapestry_Agreement.pdf"
//             download
//             className="inline-block mt-4 text-black font-bold underline"
//           >
//             Download File from here
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
