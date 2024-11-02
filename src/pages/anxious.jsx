import React from 'react'
import { Link } from 'react-router-dom';
import piano from '../assets/Instruments/Piano.png'
import acoustic from '../assets/Instruments/Acoustic.png'
import cello from '../assets/Instruments/Cello.png'
import harp from'../assets/Instruments/Harp.png'
import violin from '../assets/Instruments/Violin.png'
import ReactPlayer from 'react-player';
import { Typewriter } from 'react-simple-typewriter';
import { IoMdArrowRoundBack } from "react-icons/io";

function anxious() {
    return (
        <div className='min-h-screen w-full bg-orange-400'>
          <div className='max-w-screen-2xl mx-auto h-full flex flex-col justify-center items-center relative px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col items-center sm:flex-row'>
    
            <ReactPlayer
                url="https://res.cloudinary.com/dpyhkumle/video/upload/v1730523096/Anxious_zlea1s.mp3"
                playing={true}
                controls={true}
                volume={0.7}
                width="0px"
                height="0px"
            />
    
            <div class="max-w-md bg-white text-gray-800 p-4 rounded-lg shadow-md mt-10">
              <Typewriter
                words={[`Hey there, I’m Anxious. When life feels overwhelming and those anxious thoughts start to creep in, I’m here with calming, grounding music just for you. Together, we’ll create a safe space to breathe, relax, and find your focus again. Let’s navigate those tough moments side by side and find peace in the chaos.`]}
                cursor
                cursorStyle='_'
                typeSpeed={60}
                deleteSpeed={0}
                delaySpeed={500}
              />
            </div>
    
            </div>
    
            <div className='max-w-2xl flex flex-wrap justify-center items-center gap-4 mt-6'>
              <Link to="/piano">
                <img src={piano} alt="handpan" className='h-[60px] sm:h-[90px] transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer' />
              </Link>

              <Link to="/acoustic">
                <img src={acoustic} alt="handpan" className='h-[61px] sm:h-[92px] transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer' />
              </Link>

              <Link to="/cello">
                <img src={cello} alt="handpan" className='h-[54px] sm:h-[80px] transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer' />
              </Link>

              <Link to="/harp">
                <img src={harp} alt="handpan" className='h-[57px] sm:h-[85px] transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer' />
              </Link>

              <Link to="/violin">
                <img src={violin} alt="handpan" className='h-[60px] sm:h-[90px] transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer' />
              </Link>
            </div>
            <Link to="/emotions">
                <button className='btn my-10'><IoMdArrowRoundBack /> Back to menu</button>
            </Link>
          </div>
        </div>
      );
}

export default anxious
