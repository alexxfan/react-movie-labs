# Assignment 2 - Web API.
Scroll to bottom for Assignment 1 read.me

Name: Alex Fan

## Features.

 
 + Created genres and actors collections and schemas for mongo. Mongo mainly handles users and genres.
 + Made my back end call the TMDB API for movies and actors and other. Front end calls the back end for nearly everything.
 + Displays registering errors on the front end.
 + New accounts are saved into the MongoDB

## Setup requirements.

```bash
$ npm install
$ npm run dev
$ npm start
````
## API Configuration
______________________
NODEENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

### Movies
- /api/movies | GET | Gets a list of movies 
- /api/movies/{movieid} | GET | Gets a single movie
- /api/movies/tmdb/genres | GET | Gets a list of genres
- /api/movies/tmdb/upcoming | GET | Gets a list of upcoming movies
- /api/movies/tmdb/toprated | GET | Gets a list of top rated movies
- /api/movies/tmdb/trending | GET | Gets a list of trending movies

### Actors
- /api/actors | GET | Gets a list of actors
- /api/actors/{actorid} | GET | Gets a single actor

### Users
- /api/users | GET | Gets a list of users
- /api/users | POST | Creates a user
- /api/users/{userid} | PUT | Updates a user by ID
- /api/users/{username}/favorites/{movieid} | POST | Adds a movie to user favorites array
- /api/users/{username}/favorites | GET | Gets the user favorites array
  
## Security and Authentication

All Routes are protected excepted for the following
+ Login
+ Sign up

All pages need a bearer token to be accessed which you can retrieve upon signing up. Passwords require a minimum of 8 characters including one number and one unique character.

## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.
I integrated my React app with my API by linking nearly all of my endpoints on the React app to endpoints on my Web API. The users and genres are called directly from the Web API's mongo database and brought into the front end. The actors and movies are also calling the Web API but it is not interacting with the MongoDB, it is calling an endpoint in which the Web API is calling the TMDB API.
I also created a login and sign up page which navigate you once signed up or logged in. Error handling is displayed on the front end if you misspell a password etc.

# Assignment 1 - ReactJS app.

Name: Alex Fan

## Overview.

This is a React project movie app made for Web App Dev 2 which is similar to IMDB.

### Features.
 
+ Trending movies page.
+ Upcoming movies page.
+ Top rated movies page.
+ Actors list page.
+ Actors details page.
+ Search through actors.
+ Movie credits on every actor page.
+ Must Watch movies playlist page.
+ Favourite movies page.
+ Search movies by name or filter by genre.
+ Read and write reviews of movies.

## Setup requirements.
```bash
$ npm install
$ npm start
````
## API endpoints.

+ Discover list of movies - /
+ Movie details - movies/:id
+ Favourite movies - /movies/favorites
+ Upcoming movies - /movies/upcoming
+ Must watch movies - /movies/playlist
+ Top rated - /movies/toprated
+ Full review /reviews/:id
+ Trending movies - /movies/trending
+ Actor list - /actors
+ Actor details - /actors/:id

## Routing.

+ Upcoming movies - https://api.themoviedb.org/3/movie/upcoming
+ Movie reviews - https://api.themoviedb.org/3/movie/
+ Movies - https://api.themoviedb.org/3/discover/movie
+ Trending movies - https://api.themoviedb.org/3/trending/movie
+ Actors -  https://api.themoviedb.org/3/person/popular
+ Top rated movies - https://api.themoviedb.org/3/movie/top_rated



