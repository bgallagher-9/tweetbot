'use strict'
const config = require('../config');
const rando = require('./random');
const twit = require('twit');
const T = new twit(config.twitter);

console.log('Hitting favorite.js');

const favorite = () => {
  let params = {
    q: '#reactjs OR #reduxjs OR #nodejs or #mongodb',
    result_type: 'recent',
    lang: 'en'
  };

  T.get('search/tweets', params, (err, data, response) => {
    let tweet = data.statuses;
    let randomTweet = rando(tweet);

    if (err) {
      console.log('ERROR: Cannot Search Tweet!, Description here: ', err)
    }

    if(typeof randomTweet != 'undefined') {
      T.post('favorite/create', {
        id: randomTweet.id_str
      }, (err, response) => {
        if(err) {
          console.log('ERROR: Cannot Favorite!');
        }
        console.log('SUCCESS: Favorited: ', randomTweet.id_str.text);
      });
    }
  });
}

module.exports = favorite;
