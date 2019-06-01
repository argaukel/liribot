require("dotenv").config();
console.log('this is loaded');

// exports.spotify = {
//   id: "3bc520d1729648d188cb57359286821b",
//   secret: "66032fddc808407c93c014fc70ac3e2a"
//   // redirectUri: 'myRedirectUri',
// };

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};