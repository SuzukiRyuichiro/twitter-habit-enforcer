const functions = require("firebase-functions");

const runtimeOpts = {
  timeoutSeconds: 300,
  memory: '1GB'
}

exports.tweetTest = functions.runWith(runtimeOpts).https.onRequest(async (request, response) => {
  const Twitter = require('twitter-lite');

  const client = new Twitter({
    consumer_key: functions.config().twitter.consumer_key,
    consumer_secret: functions.config().twitter.consumer_secret,
    access_token_key: '',
    access_token_secret: '',
  });

    // async function tweetThread(thread) {
    //   let lastTweetID = "";
    //   for (const status of thread) {
    //     const tweet = await client.post("statuses/update", {
    //       status: status,
    //       in_reply_to_status_id: lastTweetID,
    //       auto_populate_reply_metadata: true
    //     });
    //     lastTweetID = tweet.id_str;
    //   }
    // }

    // const thread = ["rewhuiorewrewrw tweet", "rwqer rewrewtweet", "Thirrewqrewrerwewrewewqrd tweeerewet"];
    // await tweetThread(thread).catch(console.error);


  const tweetUpdate = async (content) => {
      const tweet = await client.post("statuses/update", {
        status: content
      });
    }

  // actually run the thing
  tweetUpdate('Test. hello from firebase').catch(console.error);
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

      console.log(newValue.twitter_access_token);
      console.log(newValue.twitter_access_secret);
      console.log(client);

      const tweetUpdate = async (content) => {
          await client.post("statuses/update", {
            status: content
          });
        }

      // actually run the thing
      tweetUpdate("Firebase Functions からのテスト").catch(console.error);
    });
