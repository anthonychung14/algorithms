//DO NOT ERASE PLEASE

function assert (expectedBehavior, descriptionOfCorrectBehavior) {
  if (!expectedBehavior) {
    console.log(descriptionOfCorrectBehavior);
  } else{
    console.log('test passed');
  }
}

///////

/*

Design a simplified version of Twitter where users can post tweets, follow/unfollow another user and is able to see the 10 most recent tweets in the user's news feed. Your design should support the following methods:

postTweet(userId, tweetId): Compose a new tweet.
getNewsFeed(userId): Retrieve the 10 most recent tweet Ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
follow(followerId, followeeId): Follower follows a followee.
unfollow(followerId, followeeId): Follower unfollows a followee.

*/

/*

Twitter twitter = new Twitter();

// User 1 posts a new tweet (Id = 5).
twitter.postTweet(1, 5);

// User 1's news feed should return a list with 1 tweet Id -> [5].
twitter.getNewsFeed(1);

// User 1 follows user 2.
twitter.follow(1, 2);

// User 2 posts a new tweet (Id = 6).
twitter.postTweet(2, 6);

// User 1's news feed should return a list with 2 tweet Ids -> [6, 5].
// Tweet Id 6 should precede tweet Id 5 because it is posted after tweet Id 5.
twitter.getNewsFeed(1);

// User 1 unfollows user 2.
twitter.unfollow(1, 2);

// User 1's news feed should return a list with 1 tweet Id -> [5],
// since user 1 is no longer following user 2.
twitter.getNewsFeed(1);


*/

var Twitter = function () {
  this.users = {}
  this.tweets = {}  
  this.follow = {}
}

Twitter.prototype.postTweet = function(userId, postId) {      
  this.tweets[userId] = this.tweets[userId] || []
  let userTweets = this.tweets[userId]
  userTweets.push(postId)
  console.log(userTweets, "here are the tweets")

}

Twitter.prototype.getNewsFeed = (userId) => {

}

Twitter.prototype.follow = (userId, followId) => {

}

Twitter.prototype.unfollow = (userId, followId) => {

}


let twitter = new Twitter()
twitter.postTweet(1,2)

