$(function(){
	$('#submit').click(function(){
		if($('#password').val() === 'admin'){
			window.open("http://www2.hawaii.edu/~omarenri/researchwebsiteprototype/admin_most_recent.html","_self");
		}else{
			window.open("http://www2.hawaii.edu/~omarenri/researchwebsiteprototype/logged_in_most_recent.html","_self");
		}
	});
});