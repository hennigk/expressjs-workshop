var express = require('express');
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser());

var entries = {
  1: {
    firstName: "Kayla",
    lastName: "Hennig",
    emails: [
      {type: "home", address: "kayla@home.com"},
      {type: "work", address: "kayla@work.com"},
    ]
  },
  2: {
    firstName: "David",
    lastName: "Fortin",
    emails: [
      {type: "home", address: "dave@home.com"},
      {type: "work", address: "dave@work.com"},
    ]
  },
  3: {
    firstName: "Beijo",
    lastName: "The Dog",
    addresses: [
      {type: "home", address: "2 crate lane"},
      {type: "work", address: "dog park lane"}]
  },
  4: {
    firstName: "Boots",
    lastName: "The Cat",
    addresses: [
      {type: "home", address: "the blanket in the closet"},
      {type: "work", address: "the blanket by the window"}]
  },
  5: {
    firstName: "Wallie",
    lastName: "Hennig",
    addresses: [
      {type: "work", address: "13 wallaby lane"}]
  }
}

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/entry/', function (req, res) {
  console.log(req.body)
  var count = 0;
    for (var key in entries) {
      count +=1;
    }
    var position = count + 1;
  entries[position] = (req.body);
  console.log(entries)
 res.send('Got a POST request');
});

app.get('/entry/search/', function(req, res){
  var results = [];
  for (var reqkey in req.query) {
    for (var entKey in entries) {
      if (entries[entKey].hasOwnProperty(reqkey) && entries[entKey][reqkey] === req.query[reqkey]) {
        if (results.indexOf(entries[entKey]) === -1) {
            results.push(entries[entKey]);
        }
      }
      if (entries[entKey].hasOwnProperty("emails")) {
        var email = entries[entKey].emails;
        for (var emailKey in email) {
          var entEmail = email[emailKey].address;
          var reqEmail = req.query[reqkey];
            if (entEmail.indexOf(reqEmail) >= 0) {
              if (results.indexOf(entries[entKey]) === -1) {
                results.push(entries[entKey]);
              }
            } 
        }
      }
    }
  }
  if (results.length < 1) {
    res.send("No matches found");
  }
  else {
    res.send(results);
  }
});



/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
