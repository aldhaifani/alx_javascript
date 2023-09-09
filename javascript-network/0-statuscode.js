#!/usr/bin/node

const request = require('request');
url = process.argv[2];

request(url, function (error, respose, body) {
  console.log('code: ', respose && respose.statusCode);
});
