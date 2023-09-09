#!/usr/bin/node

const request = require('request');
url = 'https://swapi-api.alx-tools.com/api/people/18';

request(url, function (error, respose, body) {
  console.log(JSON.parse(body).films.length);
});
