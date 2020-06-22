//For routes
const router = require('express').Router();
const {register} = require('../controllers/auth');



router.post('/register', register);
router.get('/leaderboard', getLeaderboard);
//router.post('/fileupload', upLoadFile);
