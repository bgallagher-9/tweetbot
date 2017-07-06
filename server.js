'use strict';

const twit = require('twit');
const config = require('./src/config');
const T = new twit(config.twitter);
const retweet = require('./src/api/retweet');
const favorite = require('./src/api/favorite');
const followed = require('./src/api/follow');

setInterval(retweet, config.retweetRate);
setInterval(favorite, config.favoriteRate);
const stream = T.stream('user') ;
stream.on('follow', followed);

console.log('starting tweets');
