require("dotenv").config();
var axios = require("axios");
var momnt = require("moment");
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);

var bandNameOne = process.argv[3];
var bandNameTwo = process.argv[4];





function concertThis(bandNameOne, bandNameTwo) {

    if (bandNameTwo !== 'undefined' && bandNameTwo) {
axios.get("https://rest.bandsintown.com/artists/" + bandNameOne + bandNameTwo + "/events?app_id=codingbootcamp").then(
    function(response) {
      // console.log(response);
      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        console.log(results[i].id);
      }
    }
  );
} else {
    axios.get("https://rest.bandsintown.com/artists/" + bandNameOne + "/events?app_id=codingbootcamp").then(
    function(response) {
      console.log(response.id);
    }
    );
}
    
}

concertThis(bandNameOne, bandNameTwo)