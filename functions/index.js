const functions = require("firebase-functions");




exports.tweetTest = functions.https.onRequest((request, response) => {
  const Twitter = require('twitter-lite');

  const client = new Twitter({
    consumer_key: functions.config().twitter.consumer_key,
    consumer_secret: functions.config().twitter.consumer_secret,
    access_token_key: '',
    access_token_secret: ''
  });


  async function tweetThread(thread) {
    let lastTweetID = "";
    for (const status of thread) {
      const tweet = await client.post("statuses/update", {
        status: status,
        in_reply_to_status_id: lastTweetID,
        auto_populate_reply_metadata: true
      });
      lastTweetID = tweet.id_str;
    }
  }

  const thread = ["First tweet", "Second tweet", "Third tweet"];
  tweetThread(thread).catch(console.error);
})
