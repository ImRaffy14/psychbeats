import React from 'react'
import { Link } from 'react-router-dom';
import piano from '../assets/Instruments/Piano.png'
import acoustic from '../assets/Instruments/Acoustic.png'
import cello from '../assets/Instruments/Cello.png'
import harp from '../assets/Instruments/Harp.png'
import violin from '../assets/Instruments/Violin.png'
import ReactPlayer from 'react-player';
import { Typewriter } from 'react-simple-typewriter';
import { IoMdArrowRoundBack } from "react-icons/io";

function ennui() {
    return (
        <div className='h-screen w-full bg-customPurple'>
          <div className='max-w-screen-2xl mx-auto h-full flex flex-col justify-center items-center relative px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col items-center sm:flex-row'>
    
            <ReactPlayer
                url="https://res.cloudinary.com/dpyhkumle/video/upload/v1730525477/Ennui_utmolb.mp3"
                playing={true}
                controls={true}
                volume={0.7}
                width="0px"
                height="0px"
            />
    
            <div class="max-w-md bg-white text-gray-800 p-4 rounded-lg shadow-md mt-10">
              <Typewriter
                words={[`Hey, I’m Ennui! When everything feels a bit dull, and boredom starts to creep in, I’m here to brighten things up. I’ll bring inspiring and uplifting music to reignite that spark within you. With melodic tunes crafted to stir your mind and creativity, together, we’ll break free from the monotony and discover joy in the little moments. Ready to shake things up?`]}
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
                <img src={acoustic} alt="handpan" className='h-[62px] sm:h-[90px] transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer' />
              </Link>

              <Link to="/harp">
                <img src={harp} alt="handpan" className='h-[58px] sm:h-[85px] transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer' />
              </Link>

              <Link to="/cello">
                <img src={cello} alt="handpan" className='h-[55px] sm:h-[80px] transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer' />
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

export default ennui
