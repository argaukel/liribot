require("dotenv").config();
var axios = require("axios");
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);

var bandNameOne = process.argv[2];
var bandNameTwo = process.argv[3];


if (bandNameTwo !== 'undefined' && bandNameTwo) {
axios.get("https://rest.bandsintown.com/artists/" + bandNameOne + bandNameTwo + "/events?app_id=codingbootcamp").then(
    function(response) {
      console.log(response);
    }
  );
} else {
    axios.get("https://rest.bandsintown.com/artists/" + bandNameOne + "/events?app_id=codingbootcamp").then(
    function(response) {
      console.log(response);
    }
    );
}


// function concertThis(bandNameOne, bandNameTwo) {
//     console.log("https://rest.bandsintown.com/artists/" + bandNameOne + bandNameTwo + "/events?app_id=codingbootcamp");
//     console.log(bandNameOne + bandNameTwo);
// }

// concertThis(bandNameOne, bandNameTwo)