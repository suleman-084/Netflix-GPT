import React from 'react'

const VideoTitle = ({title, overview}) => {
    // console.log("title", title);
  return (
    <div className="w-screen aspect-video pt-[13%] px-[45px] absolute text-white bg-gradient-to-r from-black">
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-md w-1/4'>{overview}</p>
        <div>
        <button className='bg-white  text-black p-4 px-12 text-xl  rounded-lg  font-semibold hover:bg-opacity-80' > ▶ Play</button>
        <button className='mx-2 bg-white text-black p-4 px-12 text-xl  rounded-lg font-semibold hover:bg-opacity-80 '> More Info</button>
        </div>
        
    </div>
  )
}

export default VideoTitle



