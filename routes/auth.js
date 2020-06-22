//For routes
const router = require('express').Router();
const {getLeaderboard} = require('../controllers/auth');



router.get('/leaderboard', getLeaderboard);
router.post('/leaderboard', postLeaderboard);