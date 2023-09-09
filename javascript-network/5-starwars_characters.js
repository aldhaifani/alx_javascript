#!/usr/bin/node

const request = require('request');

filmID = process.argv[2];
filmUrl = 'https://swapi-api.alx-tools.com/api/films/' + filmID;

peopleUrl = [];

request(filmUrl, function (error, respose, body) {
  peopleUrl = JSON.parse(body).characters;
  for (let i = 0; i < peopleUrl.length; i++) {
    request(peopleUrl[i], function (error, response, body) {
      console.log(JSON.parse(body).name);
    });
  }
});
