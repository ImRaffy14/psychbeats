import React from 'react';
import ReactPlayer from 'react-player';
import handpanImg from '../assets/Instruments/Handpan.png';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'


function Handpan() {
  return (
    <div className="min-h-screen w-full bg-bg bg-no-repeat bg-cover flex items-center justify-center p-4">
      <div className="max-w-md w-full flex flex-col items-center space-y-4">
        <img src={handpanImg} alt="Handpan Instrument" className="h-auto mb-5" />

        <ReactPlayer
          url="https://res.cloudinary.com/dpyhkumle/video/upload/v1730359433/handpan_phsrua.mp3"
          playing
          controls
          volume={0.7}
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

export default Handpan;
