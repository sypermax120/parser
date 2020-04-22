// npm install request
// npm install express
// npm install cheerio

var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
var port = 8080;

// var url = "https://www.google.com.ua/search?q=%D0%BA%D0%BE%D1%82%D0%B8%D0%BA%D0%B8&sxsrf=ALeKk00qDRD8Sb02wR3XxEe__b0lbSWOOg:1587478366398&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjajvjg2fnoAhVCrosKHS29BU4Q_AUoAXoECBMQAw&biw=1920&bih=940";
var url = "https://imgur.com/search?q=cat";

var content = [];

request(url, function(err, res, body) {
  var $ = cheerio.load(body);
    $('img').each(function(i, elem) {
    	content.push($(this).attr('src'));
   });
    for (var i = 0; i<content.length; i++) {     
      console.log(content[i]);   
    }
});

app.listen(port);