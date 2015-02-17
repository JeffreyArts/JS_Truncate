// Execute truncate on document load
$(document).ready(function(){
	truncateAll();
});

// Execute truncate on window resize
$( window ).resize(function() { 
	truncateAll();
});
