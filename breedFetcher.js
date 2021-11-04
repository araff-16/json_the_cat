const request = require('request');

const fetchBreedDescription = function(query, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${query}`,(error, response, body) => {
    if (error) {
      console.log('URL INVALID');
      console.log(error);
      process.exit();
    }
    let description = JSON.parse(body);
  
    if (description.length === 0) {
      error = 'BREED DOES NOT EXIST';
      description = null;
    } else {
      description = description[0].description;
    }

    callback(error, description);
  });
};


module.exports = fetchBreedDescription;