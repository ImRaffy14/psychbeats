import React from 'react';
import ReactPlayer from 'react-player';
import xylophoneImg from '../assets/Instruments/Xylophone.png'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'

function xylophone() {
    return (
        <div className="min-h-screen w-full bg-bg bg-no-repeat bg-cover flex items-center justify-center p-4">
          <div className="max-w-md w-full flex flex-col items-center space-y-4">
            <img src={xylophoneImg} alt="Handpan Instrument" className="h-auto mb-5" />
    
            <ReactPlayer
              url="https://res.cloudinary.com/dpyhkumle/video/upload/v1730522651/Xylophone_tgkm2m.mp3"
              playing
              controls
              volume={1}
              width="100%"
              height="50px"
              className="rounded-md"
              
            />
    
            <div>
                <Link to="/emotions">
                    <button className='btn my-10'><IoMdArrowRoundBack /> Back to menu</button>
                </Link>
            </div>
    
          </div>
        </div>
      );
}

export default xylophone