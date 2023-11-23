import React from 'react';

const GptSearchBar = () => {
  return (
    <div className=' pt-[8%] flex justify-center'>
      <form className='w-1/2  bg-black grid grid-cols-12 rounded-lg'>
        <input type="text" placeholder="What would you like to watch today?" className='p-4 m-4 col-span-9 rounded-lg' />
        <button className='bg-red-800 text-white rounded-lg col-span-3 py-2 px-4 m-4 '>Search</button>
      </form>
    </div>
  );
};

export default GptSearchBar;