'use strict';
require('dotenv').config();

const twitter = {
  consumer_key       : process.env.TWITTER_CONSUMER_KEY,
  consumer_secret    : process.env.TWITTER_CONSUMER_SECRET,
  access_token       : process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

module.exports = {
  twitter: twitter,
  retweetRate: 1500000,
  favoriteRate: 1500000
};
