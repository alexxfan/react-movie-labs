import express from 'express';
import User from './userModel';
import Movie from '../movies/movieModel';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';


const router = express.Router(); // eslint-disable-line

// Custom password validation middleware
const validatePassword = (req, res) => {
  const { password } = req.body;

  // Define the password validation regular expression
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  // Check if the password meets the requirements
  if (!passwordRegex.test(password)) {
    return res.status(400).json({ success: false, msg: 'Password must be at least 8 characters long and contain at least one letter, one digit, and one special character.' });
  }

};

// Get all users
router.get('/', async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

// register(Create)/Authenticate User
router.post('/', asyncHandler(async (req, res) => {
    try {
        if (!req.body.username || !req.body.password) {
            return res.status(400).json({ success: false, msg: 'Username and password are required.' });
        }
        if (req.query.action === 'register') {
            validatePassword(req, res);
            await registerUser(req, res);
        } else {
            // if the action is not register, authenticate the user
            await authenticateUser(req, res);
        }
    } catch (error) {
        // Log the error and return a generic error message
        console.error(error);
        return res.status(500).json({ success: false, msg: 'Internal server error.' });
    }
}));

// Update a user
router.put('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;
    const result = await User.updateOne({
        _id: req.params.id,
    }, req.body);
    if (result.matchedCount) {
        res.status(200).json({ code: 200, msg: 'User Updated Sucessfully' });
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to Update User' });
    }
});

async function registerUser(req, res) {
    if (await User.findByUserName(req.body.username)) {
        return res.status(400).json({ success: false, msg: 'Username already exists.' });
    }   
    // Add input validation logic here
    await User.create(req.body);
    return res.status(201).json({ success: true, msg: 'User successfully created.' });
    // check if the user already exists in mongodb
}

async function authenticateUser(req, res) {
    const user = await User.findByUserName(req.body.username);
    if (!user) {
        return res.status(401).json({ success: false, msg: 'Authentication failed. User not found.' });
    }

    const isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
        const token = jwt.sign({ username: user.username }, process.env.SECRET);
        res.status(200).json({ success: true, token: 'BEARER ' + token });
    } else {
        res.status(401).json({ success: false, msg: 'Wrong password.' });
    }
}

router.get('/:userName/favorites', async (req, res) => {
    const userName = req.params.userName
    const findAll = await User.findAllFavorites(userName);
    res.status(200).json(findAll);
});

router.post('/:userName/favorites/:id', async (req, res) => {
    const userName = req.params.userName;
    const movieId = await Movie.findByMovieDBId(req.params.id);
    try {
        const user = await User.findByUserName(userName);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        // check if movie is already in favorites
        if (!user.favorites.includes(movieId)) {
            user.favorites.push(movieId);
            await user.save();
            return res.status(204).send(); // 204 No Content
        } else {
            // Movie is already in favorites
            return res.status(200).json({ message: 'Movie is already in favorites' });
        }
    } catch (error) {
        console.error('Error adding movie to favorites:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



export default router;