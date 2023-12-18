import React from "react";
import Grid from "@mui/material/Grid";
import { getMovieActorImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import MovieActorHeader from "../headerMovieActor";

const TemplateMovieActorsPage = ({ actors, children }) => {
  const { data , error, isLoading, isError } = useQuery(
    ["images", { id: actors.id }],
    getMovieActorImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const images = data.profiles

  return (
    <>
      <MovieActorHeader actors={actors} />

      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={3}>
        {images.length > 0 && (
          <img
            src={`https://image.tmdb.org/t/p/w500/${images[0].file_path}`}
            alt={images[0].poster_path}
            style={{ width: "100%", height: "auto" }}
          />
        )}
          {/* <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
            <ImageList 
                cols={1}>
                {images.map((image) => (
                    <ImageListItem key={image.file_path} cols={1}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                        alt={image.poster_path}
                    />
                    </ImageListItem>
                ))}
            </ImageList>
          </div> */}
        </Grid>
          <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateMovieActorsPage;