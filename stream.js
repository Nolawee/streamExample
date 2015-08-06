/*
var fs = require('fs'),
  JSONStream = require('JSONStream'),
  es = require('event-stream');

var getStream = function () {
    var jsonData = 'data.json',
        stream = fs.createReadStream(jsonData, {encoding: 'utf8'}),
        parser = JSONStream.parse('*');
        return stream.pipe(parser);
};

 getStream()
  .pipe(es.mapSync(function (data) {
    console.log(data);
  }));
  */



/*

var i;
var result = { 
    "item":[  
               {  
                  "title":"Al Jazeera Journalist Held in Germany Awaits Verdict on Egyptian Arrest Warrant",
                  "link":"http://rss.nytimes.com/c/34625/f/640354/s/477137a8/sc/11/l/0L0Snytimes0N0C20A150C0A60C220Cworld0Ceurope0Cal0Ejazeera0Ejournalist0Eahmed0Emansour0Earrest0Ewarrant0Eberlin0Eegypt0Bhtml0Dpartner0Frss0Gemc0Frss/story01.htm",
                  "body":"Ahmed Mansour is one of many figures whose arrest and extradition Cairo has demanded. His lawyers said the charges were politically motivated.",
                  "pubDate":"Sun, 21 Jun 2015 16:32:58 GMT",
                  "permaLink":"",
                  "id":"0009326"
               },
               {  
                  "title":"Altice Offers to Buy Bouygues Telecom for $11.3 Billion",
                  "link":"http://rss.nytimes.com/c/34625/f/640354/s/4773aa5c/sc/28/l/0L0Snytimes0N0C20A150C0A60C220Cbusiness0Cdealbook0Caltice0Eoffers0Eto0Ebuy0Ebouygues0Etelecom0Efor0E110E30Ebillion0Bhtml0Dpartner0Frss0Gemc0Frss/story01.htm",
                  "body":"The deal, if finalized, would combine two of the largest French mobile providers and oust Orange as France’s biggest mobile operator.",
                  "pubDate":"Sun, 21 Jun 2015 17:06:25 GMT",
                  "permaLink":"",
                  "id":"0009325"
               },
               {  
                  "title":"Cannes Lions Festival Shifts Focus Toward Ad Technology",
                  "link":"http://rss.nytimes.com/c/34625/f/640354/s/47714699/sc/28/l/0L0Snytimes0N0C20A150C0A60C220Cbusiness0Cmedia0Ccannes0Elions0Efestival0Eshifts0Efocus0Etoward0Ead0Etechnology0Bhtml0Dpartner0Frss0Gemc0Frss/story01.htm",
                  "body":"Companies that had once operated on the fringes of the conference in France are now central to the event, which was created to showcase and award the best in advertising.",
                  "pubDate":"Mon, 22 Jun 2015 00:44:36 GMT",
                  "permaLink":"",
                  "id":"0009324"
               },
               {  
                  "title":"Comcast and NBCUniversal Open Cross-Promotional Ad Strategy",
                  "link":"http://rss.nytimes.com/c/34625/f/640354/s/47714696/sc/15/l/0L0Snytimes0N0C20A150C0A60C220Cbusiness0Cmedia0Ccomcast0Eand0Enbc0Eopen0Ecross0Epromotional0Ead0Estrategy0Bhtml0Dpartner0Frss0Gemc0Frss/story01.htm",
                  "body":"The campaign, called Symphony, has been opened to outside advertisers. The idea is to use Comcast’s multiplatform range of assets for ad campaigns.",
                  "pubDate":"Mon, 22 Jun 2015 00:57:19 GMT",
                  "permaLink":"",
                  "id":"0009323"
               },
               {  
                  "title":"Brian Williams Scandal Shows Power of Social Media",
                  "link":"http://rss.nytimes.com/c/34625/f/640354/s/47718e1f/sc/28/l/0L0Snytimes0N0C20A150C0A60C220Cbusiness0Cmedia0Cbrian0Ewilliams0Escandal0Eshows0Epower0Eof0Esocial0Emedia0Bhtml0Dpartner0Frss0Gemc0Frss/story01.htm",
                  "body":"As the NBC News anchor learned, even amateur sleuths can expose untruths and spread the outrage.",
                  "pubDate":"Mon, 22 Jun 2015 01:31:30 GMT",
                  "permaLink":"",
                  "id":"0009322"
               },
               {  
                  "title":"Taylor Swift Criticism Spurs Apple to Change Royalties Policy",
                  "link":"http://rss.nytimes.com/c/34625/f/640354/s/477025fe/sc/28/l/0L0Snytimes0N0C20A150C0A60C220Cbusiness0Cmedia0Ctaylor0Eswift0Ecriticizes0Eapples0Eterms0Efor0Estreaming0Emusic0Eservice0Bhtml0Dpartner0Frss0Gemc0Frss/story01.htm",
                  "body":"Ms. Swift had framed a letter posted to her Tumblr page as an explanation for why she was withholding her latest album, “1989,” from Apple’s new music streaming service.",
                  "pubDate":"Mon, 22 Jun 2015 04:31:15 GMT",
                  "permaLink":"",
                  "id":"0009321"
               }
            ]} ; //declare a new object.
for (i = 0; i < item.length; i++) {
    var objectInResponse = item[i]; //get current object
    var id = objectInResponse.id; //extract the id.
    var quantity = objectInResponse.quantity;
    result[id] = quantity; //use bracket notation to assign "BLE89-A0-123-384"
    //instead of id.  Bracket notation allows you to use the value
    // of a variable for the property name.
    */

var fs = require('fs');
var AlchemyAPI = require('./alchemyapi');
var alchemyapi = new AlchemyAPI();
var output = {};
var posCounter = 0;
var negCounter = 0;
var nuetCounter = 0;
/*
console.log('Debut...');

var article = fs.readFileSync('./data.json');
article = JSON.parse(article);

console.log("Config: ", article.updatedFeeds.updatedFeed.feedTitle);
//console.log("ID: ", config.glossary.GlossDiv.GlossList.GlossEntry.ID);
//console.log("Config: ", config.glossary);
//console.log("Config: ", config.Acronym);
//console.log("Config: ", config.title);

console.log("End...")

var config = fs.readFileSync('./config.json');
config = JSON.parse(config);

for (var i = 0; i < config.counters.length; i++) {
    var counter = config.counter[i];
    console.log(counter.counter_name);
}
*/
/*
var myMessage = '{"success": true,"counters": [{"counter_name": "dsd", "counter_type": "sds", "counter_unit": "sds" }, { "counter_name": "gdg", "counter_type": "dfd", "counter_unit": "ds" }, { "counter_name": "sdsData", "counter_type": "sds", "counter_unit": " dd " }, { "counter_name": "Stoc final", "counter_type": "number ", "counter_unit": "litri " }, { "counter_name": "Consum GPL", "counter_type": "number ", "counter_unit": "litri " }, { "counter_name": "sdg", "counter_type": "dfg", "counter_unit": "gfgd" }, { "counter_name": "dfgd", "counter_type": "fgf", "counter_unit": "liggtggggri " }, { "counter_name": "fgd", "counter_type": "dfg", "counter_unit": "kwfgf " }, { "counter_name": "dfg", "counter_type": "dfg", "counter_unit": "dg" }, { "counter_name": "gd", "counter_type": "dfg", "counter_unit": "dfg" } ] }';

var jsonData = JSON.parse(myMessage);
for (var i = 0; i < jsonData.counters.length; i++) {
    var counter = jsonData.counters[i];
    console.log(counter.counter_name);
}
*/

var article = fs.readFileSync('./datatest.json');
config = JSON.parse(article);

for (var i = 0; i < config.updatedFeeds.updatedFeed.length; i++) {
    var counter = config.updatedFeeds.updatedFeed[i];
    //console.log(counter.item);
    var object = counter.item;
    //console.log(object);
    for(var j = 0; j < object.length; j++){
        var itemObject = object[j];
        //console.log(itemObject.link);
        
        //alchemyapi.sentiment("url", itemObject.link, {}, function(response) {
        //    console.log("Sentiment: " + response["docSentiment"]["type"]);
            /*
            if (response["docSentiment"]["type"] === "positive"){
              posCounter++;
            }else if (response["docSentiment"]["type"] === "negative"){
              negCounter++;
            }else{
              nuetCounter++;
            }
            */
        //});
        
    alchemyapi.sentiment("url", itemObject.link, {}, function(response) {
        console.log("Sentiment: " + response["docSentiment"]["type"]);
        if (response.docSentiment.type == "negative") {
            negCounter++;
        }else if (response.docSentiment.type == "positive"){
            posCounter++;
        }
    });
        
    console.log(itemObject.title); 
    console.log(itemObject.pubDate); 
        //console.log(posCounter);
        //var url = itemObject.link;
        /*
        alchemyapi.concepts("url", url, { 'showSourceText':1 }, function(response) {
            console.log("Concepts: " + response["concepts"]["type"]);
        });
        */ 
        break;
    }
}
console.log("Articles that are Positive "+ posCounter)
console.log("Articles that are Negative "+ negCounter)

/*
var url = "http://www.cnn.com/2015/08/03/world/zimbabwe-illegal-hunting-american/"

alchemyapi.sentiment("url", url, {}, function(response) {
    console.log("Sentiment: " + response["docSentiment"]["type"]);
    if (response.docSentiment.type == "negative") {
        negCounter++;
    }else if (response.docSentiment.type == "positive"){
        posCounter++;
    }
});
*/






