import React, { useState } from "react";
import PageTemplate from "../components/templateMovieActorsListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getMovieActors } from "../api/tmdb-api";
import { Pagination } from "@mui/material";

const MovieActorsPage = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isLoading, isError, refetch } = useQuery(
    ["actors", { page: currentPage }],
    getMovieActors
  );

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const actors = data.results;

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    refetch({ currentPage });
  };

  return (
    <>
      <PageTemplate 
      title="Actors" 
      actors={actors} 
      />
      {/* count manually here as API has a limit of 500 pages */}
      <Pagination
        style={{ marginTop: "25px", display: "flex", justifyContent: "center" }}
        count={500}
        color="secondary"
        onChange={handlePageChange}
        page={currentPage}
        size="large"
      />
    </>
  );
};
export default MovieActorsPage;
