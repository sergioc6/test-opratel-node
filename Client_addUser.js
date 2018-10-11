var request = require('request');

var options = {
  uri: 'http://localhost:8080/addUser',
  method: 'PUT',
  json: {
    "username": "sergioc",
    "password": "123456", 
    "email": "sergiocabral.1990@gmail.com"
  }
};

request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the response
  }
});