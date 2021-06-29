$(document).ready(function() {
	let today = new Date();
	let hourNow = today.getHours();
	let greeting;

	if(hourNow > 18) {
		greeting = 'Добрый вечер, уважаемые экзаменаторы!';
	} else if(hourNow > 12) {
		greeting = 'Добрый день, уважаемые экзаменаторы!';
	} else if(hourNow > 0) {
		greeting = 'Доброе утро, уважаемые экзаменаторы!';
	} else {
		greeting = 'Приветствую!';
	}
	
	
	$('#grid').text( greeting );
	$('#grid').fadeIn(8000);
	$('#grid').fadeOut(8000);
});