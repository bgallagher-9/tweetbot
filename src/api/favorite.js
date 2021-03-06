'use strict'
const config = require('../config');
const twit = require('twit');
const T = new twit(config.twitter);
const chalk = require('chalk');

console.log('Hitting favorite.js');

const favorite = () => {
  let params = {
    q: '#HTML5 OR #Sass OR #sass OR #expressjs OR #mongodb OR #vuejs OR #npm OR #angularjs OR #node.js OR #react.js OR #angular.js OR #express.js OR #vue.js OR #CSS OR #webdev',
    result_type: 'recent',
    lang: 'en',
    filter: 'safe',
    count: 20
  };
  T.get('search/tweets', params, (err, data, response) => {
    let tweet = data.statuses;
    let randomTweet = rando(tweet);
    if (err) {
      console.log(chalk.bgRed('ERROR: Cannot Search Tweet!, Description here: '), err)
    }
    else {
      const rando = Math.floor(Math.random() * params.count) + 1;
      let favId
      try {
        favId = data.statuses[rando].id_str
        console.log(chalk.bgCyan('rando: ', rando));
      }
      catch (e) {
        console.log(chalk.bgMagenta('ERROR: Cannot assign retweetId'), e)
        return
      }
      T.post('favorites/create', {
        id: favId
      }, (err, response) => {
        if (err) {
          console.log(chalk.bgRed('ERROR: Cannot Favorite! ', err));
        }
        console.log(chalk.bgGreen('SUCCESS: Favorited: ', randomTweet));
        console.log('SUCCESS: Favorited: ', randomTweet);
      })
    }
  });
}

module.exports = favorite;
