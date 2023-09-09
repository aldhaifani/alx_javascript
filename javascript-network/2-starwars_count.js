#!/usr/bin/node

const request = require('request');
url = process.argv[2];

request(url, function (error, respose, body) {
  films = JSON.parse(body).results;

  count = 0;
  for (let i = 0; i < films.length; i++) {
    if (
      films[i].characters.includes(
        'https://swapi-api.alx-tools.com/api/people/18/'
      ) ||
      films[i].characters.includes('http://swapi.co/api/people/18/')
    ) {
      count++;
    }
  }

  console.log(count);
});
