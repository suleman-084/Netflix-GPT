import React from 'react';
import lang from '../Utils/languageConstants';
import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import openai from '../Utils/openai';
import { API_OPTIONS } from '../Utils/constants';
import { addGptMovieResult } from '../Utils/gptSearchslice';

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
    console.log(gptResults.choices?.[0]?.message?.content);


    const gptMovies = gptResults.choices?.[0]?.message?.content?.split(",")
    // console.log("gptmov", gptMovies);

    const promiseArray = gptMovies.map(movie => searchMovieTmdb(movie))
    const tmdbResults = await Promise.all(promiseArray)
    console.log("res", tmdbResults);
    dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }))
  }


  return (
    <div className=' pt-[8%] flex justify-center'>
      <form className='w-1/2  bg-black grid grid-cols-12 rounded-lg' onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} type="text" placeholder={lang[langSelector].gptPlaceHolder} className='p-4 m-4 col-span-9 rounded-lg' />
        <button className='bg-red-800 text-white rounded-lg col-span-3 py-2 px-4 m-4 ' onClick={handleGptSearchClick}>{lang[langSelector].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;