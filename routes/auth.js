const express = require('express');
const passport = require('passport');

const router = express.Router();

const facebookParams = { authType: 'rerequest', scope: ['user_friends', 'email', 'public_profile'] };
const googleParams = { scope: ['profile'] };

router.get('/facebook', passport.authenticate('facebook', facebookParams));
router.get('/facebook/callback', passport.authenticate('facebook', { 
  successRedirect: '/', 
  failureRedirect: '/login',
}));

router.get('/google', passport.authenticate('google', googleParams));
router.get('/google/callback', passport.authenticate('google', { 
  successRedirect: '/', 
  failureRedirect: '/login',
}));

module.exports = router;