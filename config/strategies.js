const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const authHelpers = require('../helpers').AUTH;
const secret = require('../secret');

const handleOAuth = authHelpers.HANDLE_OAUTH;
const port = secret.PORT || 3000;

const googleStrategy = new GoogleStrategy({
  clientID: secret.GOOGLE_CLIENT_ID,
  clientSecret: secret.GOOGLE_CLIENT_SECRET,
  callbackURL: `${process.env.HOSTNAME || `http://localhost:${port}`}/auth/google/callback`,
  passReqToCallback: true,
}, handleOAuth);

const facebookStrategy = new FacebookStrategy({
  clientID: secret.FACEBOOK_CLIENT_ID,
  clientSecret: secret.FACEBOOK_CLIENT_SECRET,
  callbackURL: `${process.env.HOSTNAME || `http://localhost:${port}`}/auth/facebook/callback`,
  passReqToCallback: true,
  profileFields: ['id', 'displayName', 'email', 'birthday', 'friends', 'first_name', 'last_name', 'middle_name', 'gender', 'link'],
}, handleOAuth);

module.exports.GOOGLE = googleStrategy;
module.exports.FACEBOOK = facebookStrategy;