const express = require("express");
const app = express();

// URL to access TMDB and default search parameters
webUrl = 'https://api.themoviedb.org/3/search/movie?';
apiKey = 'api_key=97a5d09107febb99e4110eefe87dd826';
language = '&language=en-US&query=';
begining = webUrl + apiKey + language;
end = '&page=1&include_adult=false';

// Function to take movie search term
exports.movieSearch = function (movieSubject) {
  // Replace spaces in movieSubject with '%20' for the url

  // Build query to supply movie subject to TMDB
  fullWebString = begining + movieSubject + end;

  // - Edit array of returned movie objects -

  // Only include the first 10 movies (if less than 10 include all)

  // Parse movie arrar to include desired content
  //   id,title,poster_path,popularity

  // -

  // Return movie list
  return movieListBackend;
};


