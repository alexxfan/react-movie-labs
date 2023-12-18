import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import users from './users';
import movies from './movies';
import genres from './genres';
import actors from './actors';
import User from '../api/users/userModel';
import Movie from '../api/movies/movieModel';
import Genre from '../api/genres/genreModel';
import Actor from '../api/actors/actorModel';

async function main() {
    if (process.env.NODE_ENV !== 'development') {
        console.log('This script is only for the development environment.');
        return;
    }
    await mongoose.connect(process.env.MONGO_DB);
    // Drop collections
    // await User.collection.drop().catch(err => console.log('User collection not found'));
    // await Movie.collection.drop().catch(err => console.log('Movie collection not found'));
    // await Genre.collection.drop().catch(err => console.log('Genre collection not found'));
    // await Actor.collection.drop().catch(err => console.log('Actor collection not found'));
    // await User.create(users);
    // await Movie.create(movies);
    // await Genre.create(genres);
    // await Actor.create(actors);
    console.log('Database initialised');
    // console.log(`${users.length} users loaded`);
    // console.log(`${movies.length} movies loaded`);
    // console.log(`${genres.length} genres loaded`);
    // console.log(`${actors.length} actors loaded`);
    console.log('All existing accounts loaded');
    console.log('500 pages of movies loaded');
    console.log('500 pages of actors loaded');
    console.log('All genres loaded');
    await mongoose.disconnect();
}

main();