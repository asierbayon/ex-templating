// Iteration 3: import tweets data
const tweetsDB = require('../data/tweets')

// Iteration 3: list tweets from file
module.exports.list = (req, res, next) => {
  const { user } = req.query;

  const tweets = tweetsDB
  
  res.render('tweets/list', {
    tweets: tweets,
    user: user
  });

  // Order tweets desc by date
  // Iteration 4: filter tweets by user checking the query param 'name'
}

// Iteration 5: Create tweet validating body params
module.exports.create = (req, res, next) => {}

// Iteration 6: find tweet by id path param and delete it if exists
module.exports.delete = (req, res, next) => {}
