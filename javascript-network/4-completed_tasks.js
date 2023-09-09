#!/usr/bin/node

const request = require('request');
url = process.argv[2];

request(url, function (error, respose, body) {
  tasksList = JSON.parse(body);
  tasksCompleted = {};

  // count each user's completed tasks
  for (let i = 0; i < tasksList.length; i++) {
    userId = tasksList[i].userId;
    if (tasksList[i].completed) {
      if (tasksCompleted.hasOwnProperty(userId)) {
        tasksCompleted[userId] += 1;
      } else {
        tasksCompleted[userId] = 1;
      }
    }
  }

  // delete users with 0 completed tasks
  for (let key in tasksCompleted) {
    if (tasksCompleted.key == 0) {
      delete tasksCompleted.key;
    }
  }
  console.log(tasksCompleted);
});
