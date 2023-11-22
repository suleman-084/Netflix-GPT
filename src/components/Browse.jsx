
import useNowPlayingmovies from '../hooks/useNowPlayingMovies'
import useOnTheAirMovies from '../hooks/useOnTheAirMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRated from '../hooks/useTopRated'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'


const Browse = () => {
  useNowPlayingmovies()
  usePopularMovies()
  useTopRated()
  useOnTheAirMovies()
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse
