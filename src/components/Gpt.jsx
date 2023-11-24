import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { background_img } from '../Utils/constants';

const Gpt = () => {
  return (
    <div>
      <div>
        <img className=' absolute -z-10' src={background_img} alt="backGround" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default Gpt;