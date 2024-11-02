import React from 'react';
import { useState, useEffect } from 'react';
import anger from '../assets/emotions/anger.png';
import anxious from '../assets/emotions/anxious.png';
import ennui from '../assets/emotions/ennui.png';
import sadness from '../assets/emotions/sadness.png';
import echo from '../assets/echo.png';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import ReactPlayer from 'react-player';


function Emotions() {

    const [isTypingDone, setIsTypingDone] = useState(false);

    const handleTypingComplete = () => {
      console.log("Typing complete!");
      sessionStorage.setItem('isTypingDone', 'true');
    };
  
    useEffect(() => {
        
        const typingDone = sessionStorage.getItem('isTypingDone');
        if (typingDone === 'true') {
            setIsTypingDone(true);
            return
        }
        
        const textLength = 580;
        const typeSpeed = 60; 
        const delay = textLength * typeSpeed;
    
        const timer = setTimeout(() => {
            setIsTypingDone(true);
            handleTypingComplete();
        }, delay);
    
        return () => clearTimeout(timer);
    }, []);

    
  return (
    <>
      <ReactPlayer
        url="https://res.cloudinary.com/dpyhkumle/video/upload/v1730355653/Echo_ermgwp.mp3"
        playing={true}
        controls={true}
        volume={0.7}
        width="0px"
        height="0px"
      />

      <div className='min-h-screen w-full bg-customPurple flex flex-col items-center'>
        <div className='max-w-screen-2xl mx-auto flex flex-col justify-center items-center relative p-4 sm:p-8'>
          <div className='flex flex-col sm:flex-row items-center'>
            <img src={echo} alt='echo' className='h-40 sm:h-[250px] mt-4 sm:mt-11 animate-pulse' />
            
            <div class="max-w-md bg-white text-gray-800 p-4 rounded-lg shadow-md">
                <Typewriter
                words={[`Hey there, I’m Echo!
                Welcome to PsychBeats, your personal space for emotional growth and balance. I’m here to guide you through the soothing world of AI-generated music. Whether you’re feeling stressed, need a focus boost, or just want to lift your mood, I’ve got the perfect track for you.
                Join me in exploring how music can make a difference in your well-being. Together, we’ll discover how different sounds can strengthen your emotional resilience. Ready to tune into your best self? Let’s get started!
                `]}
                cursor
                cursorStyle='_'
                typeSpeed={60}
                deleteSpeed={0}
                delaySpeed={500}
            />
            </div>


          </div>

          {isTypingDone && (
            <div className={`fade-in ${isTypingDone ? 'fade-in-active' : ''}`}>
              <h1 className="text-white mt-10 mb-5 text-xl text-center">
                <strong>What are you feeling today?</strong>
              </h1>

              <div className="flex flex-wrap justify-center items-center gap-4 ">
                <Link to="/anger">
                  <img
                    src={anger}
                    alt="anger"
                    className="h-40 sm:h-[300px] transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                  />
                </Link>

                <Link to="/anxious">
                  <img
                    src={anxious}
                    alt="anxious"
                    className="h-40 sm:h-[300px] transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                  />
                </Link>

                <Link to="/sadness">
                  <img
                    src={sadness}
                    alt="sadness"
                    className="h-40 sm:h-[300px] transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                  />
                </Link>

                <Link to="/ennui">
                  <img
                    src={ennui}
                    alt="ennui"
                    className="h-40 sm:h-[300px] transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          )}



        </div>
      </div>
    </>
  );
}

export default Emotions;
