'use stict'
const Twit = require('twit')
const unique = require('unique-random-array')
const config = require('../config.js')
const T = new Twit(config.twitter);

const retweet = () => {
  let params = {
    q: '#reactjs OR #reduxjs OR #nodejs or #mongodb',
    result_type: 'recent',
    lang: 'en',
    filter: 'safe',
    count: 20
  };
  T.get('search/tweets', params, (err, data, response) => {
    if (err) {
      console.log('ERRORDERP: Cannot Search Tweet!, Description here: ', err)
    } else {
      const rando = Math.floor(Math.random() * params.count) + 1
      let retweetId

      try {
        retweetId = data.statuses[rando].id_str
      } catch (e) {
        console.log('ERRORDERP: Cannot assign retweeID')
        return
      }

      T.post('statuses/retweet/:id', {
        id: retweetId
      }, (err, response) => {
        if (err) {
          console.log('ERRORDERP: Retweet!')
        }
        console.log('SUCCESS: RT: ', data.statuses[rando].text, 'RANDO ID: ', rando)
      })
    }
  })
}

module.exports = retweet
