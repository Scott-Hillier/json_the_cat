const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`;
  request(url, (error, body) => {
    const data = JSON.parse(body.body);
    const desc =  data[0] ? data[0].description : null;
    callback(error, desc);
  });
};


module.exports = { fetchBreedDescription };
