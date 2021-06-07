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
  tweetUpdate(status).catch(console.error);
})

exports.createUser = functions.firestore
    .document('users/{userId}')
    .onCreate((snap, context) => {
      // Get an object representing the document
      // e.g. {'name': 'Marie', 'age': 66}
      const newValue = snap.data();
      const Twitter = require('twitter-lite');

      const client = new Twitter({
        consumer_key: functions.config().twitter.consumer_key,
        consumer_secret: functions.config().twitter.consumer_secret,
        access_token_key: newValue.twitter_access_token,
        access_token_secret: newValue.twitter_access_secret
      });


      const tweetUpdate = async (status) => {
          const tweet = await client.post("statuses/update", {
            status: status
          });
        }

      // actually run the thing
      tweetUpdate(newValue.createdAt).catch(console.error);
    });
