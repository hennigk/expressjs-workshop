var express = require('express');
var app = express();

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
    address: [
      {type: "home", address: "2 crate lane"},
      {type: "work", address: "dog park lane"}]
  },
  4: {
    firstName: "Boots",
    lastName: "The Cat",
    address: [
      {type: "home", address: "the blanket in the closet"},
      {type: "work", address: "the blanket by the window"}]
  }
}

var count = 0;
for (var key in entries) {
  count +=1;
}
  
app.get('/', function (req, res) {
  res.send("welcome to my address book server!");
});

/*
app.get('/entry/:entryId', function (req, res) {
  var entry = Number(req.params.entryId)
  if (isNaN(entry)) {
    res.status(404).send("Error 404: invalid entry number");
  }
  else if ((entry > count) || (entry < 1) ){
    res.status(404).send("Error: Enter a number between 1 and " + count);
  }
  else {
    res.json(entries[entry]);
  }
});
*/

app.get('/entry/search/', function(req, res){
  var results = [];
  for (var reqkey in req.query) {
    for (var entKey in entries) {
      if (entries.entKey.hasOwnProperty(reqkey) && entries.entKey.reqkey === req.query.reqkey) {
        if (results.indexOf(entries.entKey) === -1) {
            results.push(entries.entKey);
        }
      }
      if (entries.entKey.hasOwnProperty("emails")) {
        var entEmail = entKey.entKey.emails.address.toLowerCase();
        var reqEmail = req.query.reqkey.toLowerCase()
          if (entEmail.indexOf(reqEmail) >= 0) {
            if (results.indexOf(entries.entKey) === -1) {
              results.push(entries.entKey);
            }
          } 
      }
    }
  }
  (req.query);
});




/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
