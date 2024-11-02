import React from 'react';
import HomepageGIF from '../assets/GIF/homepage.gif';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="h-screen w-full bg-customPurple">
      <div className="max-w-screen-2xl mx-auto h-full flex flex-col justify-center items-center relative">
        <div className="flex flex-col justify-center items-center">
          <img src={HomepageGIF} alt="psychbeats" className="w-full h-full object-cover" />
          <div className="mt-[-80px]">
            <Link to="/emotions">
              <button className="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out">
                <span className="font-medium text-[#333] group-hover:text-white">Let's start!</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
