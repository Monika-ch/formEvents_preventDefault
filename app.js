const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector('#tweets');

tweetForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // const usernameInput = document.querySelectorAll('input')[0];
  // const tweetInput = document.querySelectorAll("input")[1];
  // console.log(usernameInput.value, tweetInput.value);
  // console.log('SUBMIT!!')

  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = ""; // resets input value
  tweetInput.value = ""; // resets input value
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(` - ${tweet}`);
  tweetsContainer.append(newTweet);
}