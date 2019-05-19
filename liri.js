var concert = require("./concert")
require("dotenv").config();
// var axios = require("axios");
// var moment = require("moment");

// var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);


var search = process.argv[2];
var term = process.argv.slice(3).join(" ");

if (search === "concert") {
  console.log("looking for shows");
  concert.findConcert(term);
}


// function findConcert(band) {
//   // var divider = "\n------------------------------------------------------------\n\n";
//   var URL = "https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp";
//   axios.get(URL).then(
//     function(response) {
//       var jsonData = response.data
//         console.log(jsonData);
//         for (var i = 0; i < jsonData.length; i++) {
//           console.log(jsonData[i].venue.name);
//           console.log(jsonData[i].venue.city + ", " + jsonData[i].venue.region + ", " + jsonData[i].venue.country);
//           var jsonDate = jsonData[i].datetime
//           console.log(moment(jsonDate).format('MM-DD-YYYY'));
//         }
//     }
//   )}