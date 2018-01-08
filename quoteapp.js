$(document).ready(function(){

    var queryURL = "http://quotes.stormconsultancy.co.uk/quotes.json";
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
         });

var category =”freedom”
var total = 0;
var count = 0;
        $.ajax({
            method: 'GET',
            url: 'https://talaikis.com/api/quotes/'
        }).done(function (response) {
            console.log(response);
            for (i=0;i<response.length;i++) {
                // console.log("cat",response.cat);
                if (response[i].cat == "science") {
                    console.log(response[i].quote);
                    console.log(response[i].cat);
                    console.log("--------------");
                    count++;
                }
                total++;
            }
            console.log("count",count);
            console.log("total",total);

        });

         </script>


