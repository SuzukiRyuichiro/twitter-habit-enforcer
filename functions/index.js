const functions = require("firebase-functions");

exports.tweetTest = functions.https.onRequest((request, response) => {
  const Twitter = require('twitter-lite');

  const client = new Twitter({
    consumer_key: functions.config().twitter.consumer_key,
    consumer_secret: functions.config().twitter.consumer_secret,
    access_token_key: '',
    access_token_secret: ''
  });


  const tweetUpdate = async (status) => {
      const tweet = await client.post("statuses/update", {
        status: status
      });
    }

  // actually run the thing
  tweetThread(status).catch(console.error);
})
