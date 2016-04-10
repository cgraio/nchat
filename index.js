var app  = require('express')();
var http = require('http').Server(app);

app.get('/', function(request, response) {
  response.send('<h1>Hej världen!');
});

http.listen(3000, function() {
  console.log('Listening on port 3000');
});
