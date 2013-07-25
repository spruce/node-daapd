var request = require('request');
var mdns = require('mdns');

request('http://127.0.0.1:3689/server-info', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("server-info: ", body);
    request('http://127.0.0.1:3689/login', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log("login: ", body);
        
      }
    })
  }
});




/*var browser = mdns.createBrowser(mdns.tcp('daap'));

browser.on('serviceUp', function(service) {
  console.log("service up: ", service);
});
browser.on('serviceDown', function(service) {
  console.log("service down: ", service);
});

browser.start();*/