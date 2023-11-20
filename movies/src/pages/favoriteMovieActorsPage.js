import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieActorsListPage";
import { MovieActorContext } from "../contexts/movieActorContext";
import { useQueries } from "react-query";
import { getMovieActor } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromFavorites from "../components/cardIcons/removeFromMovieActorFavorites";

const FavoriteMovieActorsPage = () => {
  const {favorites: actorsIds } = useContext(MovieActorContext);

  // Create an array of queries and run in parallel.
  const favoriteMovieActorQueries = useQueries(
    actorsIds.map((actorsId) => {
      return {
        queryKey: ["actors", { id: actorsId }],
        queryFn: getMovieActor,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favoriteMovieActorQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

   const actors = favoriteMovieActorQueries.map((q) => {
     return q.data });

  return (
    <PageTemplate
      title="Favorite Movie Actors"
      actors={actors}
      action={(actors) => {
        return (
          <>
            <RemoveFromFavorites actors={actors} />
          </>
        );
      }}
    />
  );
};

export default FavoriteMovieActorsPage;