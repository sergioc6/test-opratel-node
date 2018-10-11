var request = require('request');

var options = {
  uri: 'http://localhost:8080/desactivateUser',
  method: 'POST',
  json: {
    "username": "sergioc"
  }
};

request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the response
  }
});