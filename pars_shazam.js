// npm install request
// npm install express
// npm install cheerio

var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
var port = 8080;

var url = "https://www.shazam.com/ru/charts/top-200/ukraine";
// var url = "https://imgur.com/search?q=cat";

var content = [];

request(url, function(err, res, body){

    var $ = cheerio.load(body);

    $('meta').each(function(i, elem) {
        content.push($(this).attr('content'));
    });
    for (var i = 0; i<content.length; i++) {     
        console.log(content[i]);   
        };
    });

app.listen(port);
