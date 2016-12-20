const mongoose = require('mongoose');

const models = require('./models');
const config = require('./config');

/**
 * Mmm, Yes, Quite - An entertainment podcast created by Dewitt and Bjorn
 * @module myq
 */

console.log('Going up...');

mongoose.Promise = global.Promise;
mongoose.connect(config.MONGOOSE_URL);

