import React, {useState} from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTrending} from '../api/tmdb-api'
import AddToPlaylistIcon from '../components/cardIcons/addToMustWatch'
import { Pagination } from "@mui/material";

const TrendingMoviesPage = (props) => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const {  data, error, isLoading, isError, refetch }  = useQuery(['trending',{ page: currentPage}], getTrending)

    if (isLoading) return <Spinner/>
    if (isError) return <h1>{error.message}</h1>
    
    const movies = data.results;


    const mustWatch = movies.filter(m => m.mustWatch)
    localStorage.setItem('mustWatch', JSON.stringify(mustWatch))

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
        refetch({ currentPage });
      };

    return (
        <>
        <PageTemplate
            title="Trending Movies"
            movies={movies}
            action={(movie) => {
                return <AddToPlaylistIcon movie={movie} />
            }}
        />
        {/* count manually here as API has a limit of 500 pages */}
        <Pagination style={{ marginTop: '25px', display: 'flex', justifyContent: 'center' }} count={500} color="secondary" onChange={handlePageChange} page={currentPage} size="large"/>
        </>
    );
};
export default TrendingMoviesPage;