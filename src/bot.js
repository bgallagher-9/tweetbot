'use strict'
const twit = require('twit');
const config = require('./config');
const T = new twit(config.twitter);
const retweet = require('./api/retweet');
const favorite = require('./api/favorite');
const followed = require('./api/follow');

setInterval(retweet, config.retweetRate);
setInterval(favorite, config.favoriteRate);
const stream = T.stream('user') ;
stream.on('follow', followed);
