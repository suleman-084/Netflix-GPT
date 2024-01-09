import React from 'react'

const VideoTitle = ({title, overview}) => {
    // console.log("title", title);
  return (
    <div className="w-screen aspect-video pt-[13%] md:px-[45px] px-6 absolute text-white bg-gradient-to-r from-black">
        <h1 className='text-xl lg:text-3xl md:text-5xl md:mt-[30px] mt-[4rem] font-bold'>{title}</h1>
        <p className='hidden md:block  py-6 text-md w-1/4 lg:text-sm'>{overview}</p>
        <div className='flex my-2'>
        <button className='bg-white py-1 text-black md:p-4 md:px-12 px-3 text-xl  rounded-lg  font-semibold hover:bg-opacity-80  ' > ▶ Play</button>
        <button className='mx-4 bg-white text-black p-4 px-12 text-xl  rounded-lg font-semibold hover:bg-opacity-80 hidden md:block '> More Info</button>
        </div>
        
    </div>
  )
}

export default VideoTitle



