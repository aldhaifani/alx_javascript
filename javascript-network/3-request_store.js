#!/usr/bin/node

const fs = require('fs');

const request = require('request');
url = process.argv[2];
fileName = process.argv[3];

request(url, function (error, respose, body) {
  fs.writeFile(fileName, body, (err) => {
    if (err) throw err;
  });
});
