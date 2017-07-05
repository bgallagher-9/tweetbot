'use strict'
const config = require('../config.js');
const twit = require('twit');
const T = new twit(config.twitter);

console.log('Hitting follow.js');

// function followed(event) {
const followed = (event) => {
  console.log('Follow event is running');
  let name = event.source.name;
  screenName = event.souce.screen_name;
  tweetNow('Thank you @' + screenName + ' . I hope you get useful information here.');
};


const tweetNow = (tweetText) => {
  let tweet = {
    status: tweetTxt
  };
  T.post('statuses/update', tweet, (err, data, response) => {
    if(err) {
      console.log('ERROR: in Follow TWEET');
    }
    console.log('SUCCESS: Replied to Follower');
  });
}
// function tweetNow(tweetText) {
//
// }

module.exports = followed;
