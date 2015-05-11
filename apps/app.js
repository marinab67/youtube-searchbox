$(function(){

	$("#search-term").submit(function(event) { 
		event.preventDefault(); 
		var searchTerm = $("#query").val(); 
		getRequest(searchTerm);
	});

	function getRequest(searchTerm){
	  var params = {
	    part: 'snippet',
	    key: 'AIzaSyDvbQPpghkf9LgPVDBtozsKcnTnM7Uip8M',
	    q: searchTerm
	  };
	  url = 'https://www.googleapis.com/youtube/v3/search';

	 $.getJSON(url, params, function(data) {
		 showResults(data.items.snippet);
	});

	}

	function showResults(results) { 
		$.each(results, function(index, value) { 
			console.log(value.snippet);
		});
	}


});


