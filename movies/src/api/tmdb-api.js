export const getMovies = (args) => {
  const [, idPart] = args.queryKey;
  const { page } = idPart;

  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  }).catch((error) => {
     throw error
  });
};
  
export const getMovie = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;

  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  }).catch((error) => {
    throw error
 });
};
  
  export const getGenres = async () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    }).catch((error) => {
      throw error
   });
  };
  
  export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;

    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    }).catch((error) => {
      throw error
   });
  };

  export const getMovieReviews = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };

export const getUpcomingMovies = (args) => {
  const [, idPart] = args.queryKey;
  const { page } = idPart;
  
  return fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&region=GB&page=${page}`
  ).then((response) => {
    if (!response.ok) throw new Error(response.json().message);
    return response.json();
  }).catch((e) => {
    throw e
  });
};

export const getTrending = (args) => {
  const [, idPart] = args.queryKey;
  const { page } = idPart;

  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&region=GB&page=${page}`
    ).then((response) => {
      if (!response.ok) throw new Error(response.json().message);
      return response.json();
  }).catch((e) => {
      throw e
  });
};

export const getTopRatedMovies = (args) => {
  const [, pageIdPart] = args.queryKey;
  const { page } = pageIdPart;
  
  return fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  }).catch((error) => {
     throw error
  });
};

export const getMovieActors = (args) => {
  console.log('args:', args)
  const [, idPart] = args.queryKey;
  console.log('idPart:', idPart);
  const { page } = idPart;
  console.log('page:', page);

  return fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&region=GB&page=${page}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  }).catch((error) => {
     throw error
  });
};

export const getMovieActor = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;

  return fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&append_to_response=movie_credits`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  }).catch((error) => {
     throw error
  });
};

export const getMovieActorImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;

  return fetch(
    `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  }).catch((error) => {
    throw error
 });
};

export const login = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};

export const signup = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users?action=register', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};




