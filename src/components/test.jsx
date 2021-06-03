import React from 'react'
import Twitter from 'twitter-lite';

const Test = (props) => {
  const client = new Twitter({
    consumer_key: "UR9IJYpuvMf39hz1KcRcGGe20",
    consumer_secret: "06bv9Wl9H08U95mNRrXreLC4LynZwjdAWro0CkuldgNvRtQAPH",
    access_token_key: props.accessToken,
    access_token_secret: props.setAccessTokenScret
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

  return (
    <button className='btn btn-primary' onClick={console.log('hi')}>
      test
    </button>
  )
}

export default Test;
