'use stict'
const twit = require('twit');
const config = require('../config.js');
const T = new twit(config.twitter);
const rando = require('./random.js');
const chalk = require('chalk');

console.log('Hitting retweet.js');

const retweet = () => {
  let params = {
    q: '#HTML5 OR #Sass OR #sass OR #expressjs OR #mongodb OR #vuejs OR #npm OR #angularjs OR #node.js OR #react.js OR #angular.js OR #express.js OR #vue.js OR #CSS OR #webdev',
    result_type: 'recent',
    lang: 'en',
    filter: 'safe',
    count: 20
  };
  T.get('search/tweets', params, (err, data, response) => {
    let tweet = data.statuses;
    console.log(chalk.bgBlue('data: ', data));
    console.log('data: ', data);
    if (err) {
      console.log(chalk.bgRed('ERROR: Cannot Search Tweet!, Description here: '), err)
    }
    else {
      const rando = Math.floor(Math.random() * params.count) + 1;
      let retweetId
      try {
        retweetId = data.statuses[rando].id_str
        console.log(chalk.bgWhite('retweetId: ', retweetId));
        console.log(chalk.bgYellow('rando: ', rando));
      }
      catch (e) {
        console.log(chalk.bgMagenta('ERROR: Cannot assign retweetId'), e)
        return
      }
      T.post('statuses/retweet/:id', {
        id: retweetId
      }, (err, response) => {
        if (err) {
          console.log(chalk.bgRed('ERROR: Issue with Retweeting! Error: '), err, 'ID: ', retweetId)
        }
          console.log(chalk.bgGreen('SUCCESS: RT: '), tweet[rando].text, chalk.bgCyan('RANDO ID: '), rando)
      })
    }
  })
}

module.exports = retweet
