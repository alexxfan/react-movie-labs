import React,{useContext} from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { MoviesContext } from "../contexts/moviesContext";
import { useParams } from "react-router-dom"

const HomePage = (props) => {

  const {setPageNumber, setMovieType} = useContext(MoviesContext);
  const {pageNumber} = useParams();

  const {  data, error, isLoading, isError }  = useQuery(['discover',{pageNum:pageNumber}], getMovies)
  setPageNumber(pageNumber);
  setMovieType('now')

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
  );
};

export default HomePage;