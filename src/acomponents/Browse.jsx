
import { useSelector } from 'react-redux'
import useNowPlayingmovies from '../hooks/useNowPlayingMovies'
import useOnTheAirMovies from '../hooks/useOnTheAirMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRated from '../hooks/useTopRated'
import Gpt from './Gpt'

import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'


const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.toggleGptSearchView)
  useNowPlayingmovies()
  usePopularMovies()
  useTopRated()
  useOnTheAirMovies()
  return (
    <div>
      <Header />
      {
        showGptSearch ? <Gpt /> : <>
          <MainContainer />
          <SecondaryContainer />

        </>
      }


    </div>
  )
}

export default Browse
