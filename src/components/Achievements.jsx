import React from "react";
import leetcode from "../assets/achievements/leetcode.png";
import codeforces from "../assets/achievements/codeforces.png";
import codechef from "../assets/achievements/codechef1.png";
import atcoder from "../assets/achievements/atcoder.png";
import geeksforgeeks from "../assets/achievements/geeksforgeeks.png";
import hackerrank from "../assets/achievements/hackerrank.png";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      src: leetcode,
      alt: "LeetCode",
      visitLink : "https://leetcode.com/suren-yeager",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: codeforces,
      alt: "Codeforces",
      visitLink : "https://codeforces.com/profile/suren_13",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: codechef,
      alt: "Codechef",
      visitLink : "https://codechef.com/users/suren_v",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: atcoder,
      alt: "AtCoder",
      visitLink : "https://atcoder.com/suren_yeager",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: geeksforgeeks,
      alt: "GeeksforGeeks",
      visitLink : "//auth.geeksforgeeks.org/user/surenphoenix13",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: hackerrank,
      alt: "HackerRank",
      visitLink : "https://hackerrank.com/surenphoenix13",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="achievements"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      style={{ paddingTop: "5rem" }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Achievements in Programming
          </p>
          <p className="py-6">
            I'm a Beginner in Competitive Programming. Below are a few of my Coding Profiles
          </p>
        </div>
  
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {achievements.map(({ id, src, alt, visitLink, style }) => (
            <div key={id} className={`shadow-md shadow-gray-600 rounded-lg self-center ${style}`}>
            <div>
              <img
                src={src}
                alt={alt}
                className="rounded-md w-40 h-40 object-contain duration-200 hover:scale-105 flex mx-auto"
              />
              </div>

              <div className="flex items-center justify-center">
                <a
                  href={visitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/4 px-2 py-1 m-4 duration-200 hover:scale-105 bg-white text-black rounded-lg text-center font-semibold hover:bg-blue-500 hover:text-white"
                >
                  Visit
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default Achievements;
