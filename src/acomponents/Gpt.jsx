import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { background_img } from '../Utils/constants';

const Gpt = () => {
  return (
    <>
      <div className='fixed  -z-10'>
        <img className='h-screen object-cover   md:w-full md:h-auto'
          src={background_img} alt="backGround" />
      </div>
      <div className="">

        <GptSearchBar />
        <GptMovieSuggestion />
      </div>

    </>
  );
};

export default Gpt;