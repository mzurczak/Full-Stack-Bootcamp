const request = require('request');
const cheerio = require("cheerio");
const async = require("async");
const loki = require("lokijs");
const lfsa = require('lokijs/src/loki-fs-structured-adapter.js');
var propulsion;
const queue = async.queue(crawn, 2);
var db = new loki('a.json', { 
  adapter : new lfsa(),
  autoload: true,
  autoloadCallback : databaseInitialize, // will be called once DB is loaded
  autosave: true, 
  autosaveInterval: 4000 // save every 4000ms (4s)
});

function databaseInitialize() {
  console.log("Database is initialized, let's start working...");
  propulsion = db.getCollection('propulsion');
  if (propulsion === null) {
    propulsion = db.addCollection('propulsion');
  }
  var url = 'https://propulsionacademy.com/';
  queue.push(url);
  queue.drain = function(){
    queue.kill();
    process.exit(0)
  };
}

function crawn(adr, callback){
  var arrOfLinks = [];
  var currentPageTitle;

  request(adr, function (error, response, body) {
    var $ = cheerio.load(body);
    currentPageTitle = $("title").text();
    var link = $("a");
    if (link.length>0){
      for (var i =0; i<link.length; i++){
        var newAdr = link[i].attribs.href;
        if ((newAdr !== undefined) 
          && ((newAdr.startsWith('https://')) || (newAdr.startsWith('http://'))) 
          && (arrOfLinks.indexOf(newAdr) === -1)){
            arrOfLinks.push(newAdr);
        }
      }
    }
    var reducedArr = arrOfLinks.filter(function(el){
      return !checkInDatabase(el);
    })
    if (reducedArr.length>0){
      propulsion.insert({name: currentPageTitle, addres: newAdr, pages: reducedArr});
    }
    reducedArr.forEach(function(el){
      queue.push(el);
    });
    var added = propulsion.find({});
    console.log(added);
    callback();
  });
}

function checkInDatabase(el){
  var checker = propulsion.find({'pages': {'$contains' : el}}); 
  if (checker.length>0) return true;
  else return false;
}


