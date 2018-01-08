$(document).ready(function() {
var total = 0;
var count = 0;
        // $.ajax({
        //     method: 'GET',
        //     url: 'https://talaikis.com/api/quotes/'
        // }).done(function (response) {
        // });

var programming = function (){
  $.ajax({
            method: 'GET',
            url: 'http://quotes.stormconsultancy.co.uk/quotes.json'
        }).done(function (response) {
        	var randomValue = response[Math.floor(response.length * Math.random())];
        	$(".quote-text").text(randomValue.quote);
        	console.log("random value",randomValue);

            console.log(response);
          
        });      
}


var quotes = function (){
  $.ajax({
            method: 'GET',
            url:"https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?"
        }).done(function (response) {
        	var randomValue = response[Math.floor(response.length * Math.random())];
        	$(".quote-text").text(response);
        	console.log("random value",randomValue);
        	console.log("yes")

            console.log(response);
            $(".twitter-share-button").attr("href", quotes);
          
        });      
}


var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
var getQuote = function(data) {
  $(".quote-text").text(data.quoteText);
  var quot = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?" + data.quoteText + ' Author ' + data.quoteAuthor;
  if (data.quoteAuthor === '') {
    data.quoteAuthor = 'Unknown';
  }
  $(".author-text").text('Author: ' + data.quoteAuthor);
  $(".twitter-share-button").attr("href", quot);
};

  // $.getJSON(url, getQuote, 'jsonp');

// random button
$("#quotes").on("click",function() {
	console.log('onlick');
  // $.getJSON(url, getQuote, 'jsonp');
  quotes();
});

// progamming button
$("#quote").on("click",function() {
	console.log('onlick');
  // $.getJSON(url, getQuote, 'jsonp');
  programming();
});

});