import {getMovies} from '../tmdb-api';
import {getMovie} from '../tmdb-api';
import {getUpcomingMovies} from '../tmdb-api';
import { getGenres } from '../tmdb-api';
import { getTopRated } from '../tmdb-api';
import { getTrending } from '../tmdb-api';
import { getMovieImages } from '../tmdb-api';
import { getMovieReviews } from '../tmdb-api';
import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    // Parallel execution of counting movies and getting movies using movieModel
    // const [total_results, results] = await Promise.all([
    //     movieModel.estimatedDocumentCount(),
    //     movieModel.find().limit(limit).skip((page - 1) * limit)
    // ]);
    // const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

    // //construct return Object and insert into response object
    // const returnObject = {
    //     page,
    //     total_pages,
    //     total_results,
    //     results
    // };
    const movies = await getMovies({ queryKey: [null, { page }] });
    res.status(200).json(movies);
}));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    // const movie = await movieModel.findByMovieDBId(id);
    const movie = await getMovie(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

// Get movie images
router.get('/:id/images', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const images = await getMovieImages({ queryKey: [null, { id }] });
    res.status(200).json(images);
}));

// Get movie reviews
// router.get('/:id/reviews', asyncHandler(async (req, res) => {
//     const id = parseInt(req.params.id);
//     const review = await getMovieReviews(id);
//     if (review) {
//         res.status(200).json(review);
//     } else {
//         res.status(404).json({message: 'The reviews you requested could not be found.', status_code: 404});
//     }
// }));


// Get upcoming movies
router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; // trick to convert to numeric (req.query will contain string values)

    // Call getUpcomingMovies function with the args parameter
    const upcomingMovies = await getUpcomingMovies({ queryKey: [null, { page }] });
    res.status(200).json(upcomingMovies);
}));

// Get movie genres
router.get('/tmdb/genres', asyncHandler(async (req, res) => {
    const genres = await getGenres();
    res.status(200).json(genres);
}));

// Get top rated movies
router.get('/tmdb/toprated', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    const toprated = await getTopRated({ queryKey: [null, { page }] });
    res.status(200).json(toprated);
}));

// Get trending movies
router.get('/tmdb/trending', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    const trending = await getTrending({ queryKey: [null, { page }] });
    res.status(200).json(trending);
}));

export default router;