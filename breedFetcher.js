const request = require('request');

const search = process.argv[2];


request(`https://api.thecatapi.com/v1/breeds/search?q=${search}`,(error, response, body) => {
  if (error) {
    console.log('URL INVALID');
    console.log(error);
    process.exit();
  }
  const data = JSON.parse(body);
  
  if (data.length === 0) {
    console.log('BREED NAME NOT FOUND');
    process.exit();
  }

  console.log(data[0]);
});