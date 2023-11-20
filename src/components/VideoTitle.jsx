import React from 'react'

const VideoTitle = ({title, overview}) => {
    // console.log("title", title);
  return (
    <div className="pt-36 px-12">
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
        <button className='bg-gray-800 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg  font-semibold' > ▶️ Play</button>
        <button className='mx-2 bg-gray-800 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg font-semibold '> More Info</button>
        </div>
        
    </div>
  )
}

export default VideoTitle



