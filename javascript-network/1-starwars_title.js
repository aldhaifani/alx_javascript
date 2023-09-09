#!/usr/bin/node

const request = require('request');
movieID = process.argv[2];
url = 'https://swapi-api.alx-tools.com/api/films/' + movieID;

request(url, function (error, respose, body) {
  console.log(JSON.parse(body).title);
});
