// Event listener for search button
$("#search").on("click", function() {

    // Pulls the search term from the input box
    var searchTerm = $("#searchTerm").val();

    // auth key for NYT API
    var authKey = "0c2b441e4990493184fd6c33f32729d8";

    // pulls value from the input box for number of records wanted by user
    var records = $("#numRec").val();

    // pulls value from the input box for the start date wanted by user
    var startDate = $("#startYear").val();

    // pulls value from the input box for the end date wanted by user
    var endDate = $("#endYear").val();

    // API query URL
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
    queryURL += $.param({ 
    		"api-key": authKey, 
    		q: searchTerm, 
    		start_date: startDate + "0101", 
    		end_date: endDate + "0101" 
    	});

    // AJAX call for search parameters
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        // Logs response to the console
        console.log("response");

        // variable holds the response data from the user query
        var results = response;
        // variable that trims the results to the parameters determined by user
        var userSearch = results.response.docs.slice(0, records);
        // logs userSearch results to console
        console.log(userSearch);

        // creates div to store results
        var resultsDiv = $("<div class='results'>");
        // appends search results to created div
        resultsDiv.append(userSearch);
       	// prepends results to designated div 
        $("#searchResults").prepend(resultsDiv);

    });

});

// Event listener for clear button
$("#clear").on("click", function() {

    //empties the input fields
    $("#searchTerm").empty();
    $("#startYear").empty();
    $("#endYear").empty();

    //empties the #searchResults div
    $("#searchResults").empty();

});
