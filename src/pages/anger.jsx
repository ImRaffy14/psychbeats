import React from 'react';
import echo from '../assets/echo.png';
import { Link } from 'react-router-dom';
import handpan from '../assets/Instruments/Handpan.png';
import harp from '../assets/Instruments/Harp.png';
import flute from '../assets/Instruments/Flute.png';
import xylophone from '../assets/Instruments/Xylophone.png';
import sitar from '../assets/Instruments/Sitar.png';
import ReactPlayer from 'react-player';
import { Typewriter } from 'react-simple-typewriter';
import { IoMdArrowRoundBack } from "react-icons/io";

function Anger() {
  return (
    <div className='min-h-screen w-full bg-customPurple'>
      <div className='max-w-screen-2xl mx-auto h-full flex flex-col justify-center items-center relative px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center sm:flex-row'>

        <ReactPlayer
            url="https://res.cloudinary.com/dpyhkumle/video/upload/v1730509141/Anger_l7ojt3.mp4"
            playing={true}
            controls={true}
            volume={0.7}
            width="0px"
            height="0px"
        />

        <div class="max-w-md bg-white text-gray-800 p-4 rounded-lg shadow-md mt-10">
        <Typewriter
            words={[`Hey! I’m Anger. When life feels overwhelming, I’m here to help you regain your strength. With calm, and soothing music, we’re going to channel that energy into something powerful. Let’s face these challenges and let the music be our release. 
            Ready to unleash that cool sound?
            `]}
            cursor
            cursorStyle='_'
            typeSpeed={60}
            deleteSpeed={0}
            delaySpeed={500}
          />
        </div>

        </div>

        <div className='max-w-2xl flex flex-wrap justify-center items-center gap-4 mt-6'>
          <Link to="/handpan">
            <img src={handpan} alt="handpan" className='h-[60px] sm:h-[90px] transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer' />
          </Link>

          <Link to="/harp">
          <img src={harp} alt="harp" className='h-[60px] sm:h-[90px] transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer' />
          </Link>

          <Link to="/flute">
          <img src={flute} alt="flute" className='h-[60px] sm:h-[90px] transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer' />
          </Link>

          <Link to="/xylophone">
          <img src={xylophone} alt="xylophone" className='h-[70px] sm:h-[103px] transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer' />
          </Link>

          <Link to="/sitar">
          <img src={sitar} alt="sitar" className='h-[60px] sm:h-[90px] transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer' />
          </Link>

        </div>
        <Link to="/emotions">
            <button className='btn my-10'><IoMdArrowRoundBack /> Back to menu</button>
        </Link>
      </div>
    </div>
  );
}

export default Anger;
