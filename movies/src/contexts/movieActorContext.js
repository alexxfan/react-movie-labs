import React, { useState } from "react";

export const MovieActorContext = React.createContext(null);

const MovieActorContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] ) 
  console.log("MovieActorContextProvider - Favorites:", favorites);

  const addToActorFavorites = (actors) => {
    let newFavorites = [];
    if (!favorites.includes(actors.id)){
      newFavorites = [...favorites, actors.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };

   const removeFromActorFavorites = (actors) => {
    setFavorites( favorites.filter(
      (mId) => mId !== actors.id
    ) )
  };


 return (
    <MovieActorContext.Provider
      value={{
        favorites,
        addToActorFavorites,
        removeFromActorFavorites,
      }}
    >
      {props.children}
    </MovieActorContext.Provider>
  );
};

export default MovieActorContextProvider;