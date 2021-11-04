const fetchBreedDescription = require('./breedFetcher');

const search = process.argv[2];

fetchBreedDescription(search, (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
    process.exit();
  } else {
    console.log(description);
  }
  
});