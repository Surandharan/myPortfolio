import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About me!
          </p>
        </div>

        <div className="flex justify-end items-center">
          <p className="text-xl mt-20 mr-8">
            Hello! I'm {' '}<strong className="text-shadow-orange"> Surandharan V</strong>, an
            aspiring Software Developer with a strong focus on Competitive
            Programming and Software Development from Chennai, India. I am
            currently pursuing {' '}
            <strong className="text-shadow-orange">
              Bachelors in Computer Science at College of Engineering, Guindy.
            </strong>
            <br />
            <br />
            Although I'm a beginner in{" "}
            <strong className="text-shadow-orange">
              Competitive Programming
            </strong>
            , I have honed my problem-solving skills by participating in Online
            coding contests in various platforms. I've developed few{" "}
            <strong className="text-shadow-orange">Web Applications</strong> and
            gained some experience. I enjoy exploring new technologies and
            frameworks to enhance my development skills and stay up-to-date with
            industry trends.
          </p>

          <img
            className="w-80 h- rounded-full border-2 border-gray-900"
            alt="Coding"
            src="https://camo.githubusercontent.com/c1dcb74cc1c1835b1d716f5051499a2814c683c806b15f04b0eba492863703e9/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f363538313234332f6176656e746f2e676966"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
