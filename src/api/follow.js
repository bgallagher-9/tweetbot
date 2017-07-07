'use strict'
const config = require('../config.js');
const twit = require('twit');
const T = new twit(config.twitter);
const chalk = require('chalk');

console.log('Hitting follow.js');

// function followed(event) {
const followed = (event) => {
  console.log('Follow event is running');
  let name = event.source.screen_name;
  console.log(event.source.screen_name);
  // screenName = event.souce.screen_name;
  tweetNow('Thank you @' + name + ' . I hope you get useful information here.');
  // console.log(tweetNow('Thank you @' + name + ' . I hope you get useful information here.'));
};


const tweetNow = (tweetTxt) => {
  // console.log('tweetNow');
  let tweet = { status: tweetTxt }
  T.post('statuses/update', tweet, (err, data, response) => {
    // console.log('data-post', data);
    if(err) {
      console.log(chalk.bgRed('ERROR: in Follow TWEET', err));
    }
    console.log(chalk.bgGreen('SUCCESS: Replied to Follower'));
  });
};

module.exports = followed;
