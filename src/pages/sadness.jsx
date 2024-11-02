import React from 'react'
import { Link } from 'react-router-dom';
import piano from '../assets/Instruments/Piano.png'
import guitar from '../assets/Instruments/Guitar.png'
import harp from '../assets/Instruments/Harp.png'
import eGuitar from '../assets/Instruments/Electric Guitar.png'
import violin from '../assets/Instruments/Violin.png'
import ReactPlayer from 'react-player';
import { Typewriter } from 'react-simple-typewriter';
import { IoMdArrowRoundBack } from "react-icons/io";

function sadness() {
    return (
        <div className='min-h-screen w-full bg-customPurple'>
          <div className='max-w-screen-2xl mx-auto h-full flex flex-col justify-center items-center relative px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col items-center sm:flex-row'>
    
            <ReactPlayer
                url="https://res.cloudinary.com/dpyhkumle/video/upload/v1730524553/Sadness_gdqe1c.mp3"
                playing={true}
                controls={true}
                volume={0.7}
                width="0px"
                height="0px"
            />
    
            <div class="max-w-md bg-white text-gray-800 p-4 rounded-lg shadow-md mt-109">
                <Typewriter
                words={[`Hey there, I’m Sadness. I’m here for those moments when life feels heavy, and I get it—it’s okay to feel down sometimes. I’ll bring you soothing, gentle music, a space where you can just be. Together, we’ll turn these feelings into something beautiful, one note at a time. Ready to explore how powerful sound can be? Let’s take this journey together.`]}
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

              <Link to="/guitar">
                <img src={guitar} alt="handpan" className='h-[60px] sm:h-[88px] transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer' />
              </Link>

              <Link to="/harp">
                <img src={harp} alt="handpan" className='h-[58px] sm:h-[85px] transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer' />
              </Link>

              <Link to="/eGuitar">
                <img src={eGuitar} alt="handpan" className='h-[75px] sm:h-[110px] transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer' />
              </Link>

              <Link to="/violin">
                <img src={violin} alt="handpan" className='h-[60px] sm:h-[88px] transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer' />
              </Link>

            </div>
            <Link to="/emotions">
                <button className='btn my-10'><IoMdArrowRoundBack /> Back to menu</button>
            </Link>
          </div>
        </div>
      );
}

export default sadness
