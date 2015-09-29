var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Server is working');
});

function doOperation(operator, number1, number2){
    switch (operator.toLowerCase()) {
    case 'add':
      return number1 + number2; 
    case 'sub':
      return number1 - number2; 
    case 'mult':
      return number1 * number2; 
    case 'div':
      return Math.round(number1 / number2); 
    default:
      return 
  }
}

app.get('/op/:operator/:num1/:num2', function (req, res) {
  var number1 = Number(req.params.num1);
  var number2 = Number(req.params.num2);
  var operator = (req.params.operator).toString();
  var answer = doOperation(operator, number1, number2);
  if (!isNaN(answer)) {
    res.sendStatus(answer);
  }
  if (isNaN(number1) || isNaN(number2) || isNaN(answer)) {
    res.status(404).send("Error 404");
  }
});



/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
