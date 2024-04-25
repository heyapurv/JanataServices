import React, { useState } from "react";

export default  () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const sections = [
    {
      title: "Personal Information",
      content: (
        <div>
            <div className="m-5 p-5 section" id="section-1">
                <div className="flex flex-wrap -mx-3 mb-6 mt-8">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                    >
                        First Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        name="firstname"
                        type="text"
                        placeholder="Enter Your First Name "
                    />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-last-name"
                    >
                        Last Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        name="lastname"
                        type="text"
                        placeholder="Enter Your Last Name"
                    />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-5">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                    >
                        Email
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        name="email"
                        type="text"
                        placeholder="Enter Your Email "
                    />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mt-5">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-last-name"
                    >
                        Mobile Number
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        name="mobile"
                        type="text"
                        placeholder="Enter Mobile Number"
                    />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mt-5">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-last-name"
                    >
                        Whatsapp Number
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        name="whatsapp"
                        type="text"
                        placeholder="Enter whatsapp Number"
                    />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mt-5">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-last-name"
                    >
                        Aadhar Number
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        name="aadhar"
                        type="text"
                        placeholder="Enter Aadhar Number"
                    />
                    </div>
                </div>
    
            </div>

        </div>
      ),
    },
    {
      title: "Location Information",
      content: (
        <div>
        
        <div className="m-5 p-5 section" id="section-1">
                <div className="flex flex-wrap -mx-3 mb-6 mt-8">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                    >
                        First Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        name="firstname"
                        type="text"
                        placeholder="Enter Your First Name "
                    />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-last-name"
                    >
                        Last Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        name="lastname"
                        type="text"
                        placeholder="Enter Your Last Name"
                    />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-5">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                    >
                        Email
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        name="email"
                        type="text"
                        placeholder="Enter Your Email "
                    />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mt-5">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-last-name"
                    >
                        Mobile Number
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        name="mobile"
                        type="text"
                        placeholder="Enter Mobile Number"
                    />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mt-5">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-last-name"
                    >
                        Whatsapp Number
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        name="whatsapp"
                        type="text"
                        placeholder="Enter whatsapp Number"
                    />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mt-5">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-last-name"
                    >
                        Aadhar Number
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        name="aadhar"
                        type="text"
                        placeholder="Enter Aadhar Number"
                    />
                    </div>
                </div>
    
            </div>
        </div>
      ),
    },
    {
      title: "Location Information",
      content: (
        <div>
  

        </div>
      ),
    },
    // Add more sections as needed
  ];

  const showSection = (index) => {
    setCurrentSectionIndex(index);
  };

  const showNextSection = () => {
    setCurrentSectionIndex((prevIndex) =>
      prevIndex < sections.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const showPreviousSection = () => {
    setCurrentSectionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    // e.g., send form data to backend
  };

  return (
   <div className="grid place-items-center">
     <form
      className="w-full md:max-w-3xl mx-auto shadow-2xl md:m-12 rounded-2xl"
      id="multi-section-form"
      name="submit-to-google-sheet"
    >
      {/* Sections */}
      {sections.map((section, index) => (
        <div
          key={index}
          className={`m-5 p-5 section ${index !== currentSectionIndex && 'hidden'}`}
        >
          <div className="flex justify-center">
            <h2 className="text-2xl font-bold text-gray-600">{section.title}</h2>
          </div>
          {section.content}
        </div>
      ))}

      {/* Buttons */}
      <div className="flex justify-between mt-5">
        {currentSectionIndex > 0 && (
          <button
            type="button"
            onClick={showPreviousSection}
            className="py-1 px-4 bg-gray-700 hover:bg-slate-600 rounded-xl text-white"
          >
            Previous
          </button>
        )}
        {currentSectionIndex < sections.length - 1 && (
          <button
            type="button"
            onClick={showNextSection}
            className="py-1 px-4 bg-gray-700 hover:bg-slate-600 rounded-xl text-white"
          >
            Next
          </button>
        )}
        {currentSectionIndex === sections.length - 1 && (
          <button
            type="submit"
            onClick={handleSubmit}
            className="py-1 px-4 bg-gray-700 hover:bg-slate-600 rounded-xl text-white"
          >
            Submit
          </button>
        )}
      </div>
    </form>
   </div>
  );
};




