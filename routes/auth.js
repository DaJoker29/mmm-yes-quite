const express = require('express');
const passport = require('passport');

const router = express.Router();

const googleParams = { scope: ['profile'] };

router.get('/google', passport.authenticate('google', googleParams));
router.get('/google/callback', passport.authenticate('google', { 
  successRedirect: '/', 
  failureRedirect: '/login',
}));

module.exports = router;