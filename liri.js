var concert = require("./concert")
var keys = require("./keys.js");
// var axios = require("axios");
var Spotify = require('node-spotify-api');
// var moment = require("moment");
require("dotenv").config();

var spotify = new Spotify(keys.spotify);



var search = process.argv[2];
var term = process.argv.slice(3).join(" ");

if (search === "concert") {
  console.log("looking for shows");
  concert.findConcert(term);
}


if (search === "spotify") {
  
  
spotify.search({ type: 'track', query: term }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
jsonData = JSON.parse(data) 
console.log(jsonData); 
});
}