'use stict'
const twit = require('twit');
// const unique = require('unique-random-array');
const config = require('../config.js');
const T = new twit(config.twitter);
const rando = require('./random');

console.log('Hitting retweet.js');

const retweet = () => {
  let params = {
    q: '#reactjs OR #reduxjs OR #nodejs or #mongodb',
    result_type: 'recent',
    lang: 'en',
    filter: 'safe'
    // count: 20
  };
  T.get('search/tweets', params, (err, data, response) => {
    let tweet = data.statuses;
    let randomTweet = rando(tweet);

    if (err) {
      console.log('ERROR: Cannot Search Tweet!, Description here: ', err)
    }

    if(typeof randomTweet != 'undefined') {
      T.post('statuses/retweet/:id', {
        id: randomTweet.id_str
      }, (err, response) => {
        if (err) {
          console.log('ERROR: Issue with Retweeting!')
          }
        else {
          console.log('SUCCESS: RT: ', randomTweet.id_str.text)
        };
      })
    }
    // else {
    //   // const random = (arr) => {
    //   //   let index = Math.floor(Math.random() * arr.length);
    //   //   return arr[index];
    //   // }
    //   const rando = Math.floor(Math.random() * params.count) + 1;
    //   let retweetId;
    //   try {
    //     retweetId = data.statuses[rando].id_str
    //   }
    //   catch (e) {
    //     console.log('ERROR: Cannot assign retweeID')
    //     return
    //   }
    //
    //   T.post('statuses/retweet/:id', {
    //     id: retweetId
    //   }, (err, response) => {
    //     if (err) {
    //       console.log('ERROR: Retweet!')
    //     }
    //     else {
    //       console.log('SUCCESS: RT: ', data.statuses[rando].text, 'RANDO ID: ', rando)
    //     };
    //   })
    // }
  })
}

module.exports = retweet
