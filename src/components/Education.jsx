import React from "react";

const Education = () => {
  const educationDetails = [
    {
      id: 1,
      institution: "College Name",
      course: "Course Name",
      grade: "CGPA",
      year: "Year (from - to)",
    },
    {
      id: 2,
      institution: "School Name",
      course: "Course Name",
      grade: "Grade",
      year: "Year (from - to)",
    },
    // Add more education details as needed
  ];

  return (
    <div>
      <div name="experience"
      className="bg-gradient-to-b from-gray-800 to-black min-h-screen"
      style={{ paddingTop: "5rem" }}>
        <h2 className="text-4xl font-bold border-b-4 border-gray-500 mb-4">
          Education
        </h2>
        {educationDetails.map(({ id, institution, course, grade, year }) => (
          <div key={id} className="mb-8">
            <h3 className="text-2xl font-bold">{institution}</h3>
            <p className="text-lg mb-2">{course}</p>
            <p className="text-lg mb-2">{grade}</p>
            <p className="text-lg">{year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
