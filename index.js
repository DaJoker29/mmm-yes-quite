const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const helmet = require('helmet');

const config = require('./config');
const secret = require('./secret');
const routes = require('./routes');
const helpers = require('./helpers');

const authRoutes = routes.AUTH;
const rootRoutes = routes.ROOT;
const userRoutes = routes.USER;

/**
 * Mmm, Yes, Quite - An entertainment podcast created by Dewitt and Bjorn
 * @module myq
 */

console.log('Going up...');

const port = secret.PORT || 3000;
const sessionSecret = secret.SESSION_SECRET || 'twentyfourkarat';

mongoose.Promise = global.Promise;
const sessionSettings = {
  resave: false,
  secret: sessionSecret,
  saveUninitialized: false,
  store: new RedisStore({ host: 'localhost', port: 6379 }),
};

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(morgan('development' === process.env.NODE_ENV ? 'dev' : 'combined'));
app.use(helmet());
app.use(session(sessionSettings));
app.use(passport.initialize());
app.use(passport.session());

passport.use(config.STRATEGIES.GOOGLE);
passport.use(config.STRATEGIES.FACEBOOK);

passport.serializeUser(helpers.AUTH.SERIALIZE_USER);
passport.deserializeUser(helpers.AUTH.DESERIALIZE_USER);

// Add Routes
app.use('/', rootRoutes);
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

// Start Server
mongoose.connect(config.DATABASE.MONGOOSE_URL);
app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});