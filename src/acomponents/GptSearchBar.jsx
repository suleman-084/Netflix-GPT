import React from 'react';
import lang from '../aUtils/languageConstants';
import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import openai from '../aUtils/openai';
import { API_OPTIONS } from '../aUtils/constants';
import { addGptMovieResult } from '../aUtils/gptSearchslice';

const GptSearchBar = () => {
  const dispatch = useDispatch()


  const langSelector = useSelector(store => store.config.changeLang)
  const searchText = useRef(null)

  const searchMovieTmdb = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const json = await data?.json()
    return json?.results

  }
  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);



    const gptQuery = "Act as a movie recommendation system & suggest some movie for the query :" + searchText.current.value + "only give the names of five movies. comma separated like the example resule ahead. Example result : Don, Sholay, Tiger, Liger, andaz apna apna "
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    if (!gptResults.choices) {
      console.error("Api limit exceeds");
    }
    // console.log(gptResults.choices?.[0]?.message?.content);


    const gptMovies = gptResults.choices?.[0]?.message?.content?.split(",")
    // console.log("gptmov", gptMovies);

    const promiseArray = gptMovies.map(movie => searchMovieTmdb(movie))
    const tmdbResults = await Promise.all(promiseArray)
    // console.log("res", tmdbResults);
    dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }))
  }


  return (
    <div className='pt-[45%]  md:pt-[8%]  flex justify-center'>
      <form className='w-full  md:w-1/2  bg-black grid grid-cols-12 rounded-lg lg:mt-16' onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} type="text" placeholder={lang[langSelector].gptPlaceHolder} className='p-2 m-3 md:p-4  lg:p-2  md:text-lg md:m-4  text-sm  col-span-8 md:col-span-9 rounded-lg  focus:outline-none' />
        <button className='bg-red-800 text-white rounded-lg md:col-span-3 col-span-4 py-2 px-3 m-3  font-semibold text-lg md:text-2xl lg:text-xl' onClick={handleGptSearchClick}>{lang[langSelector].Search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;