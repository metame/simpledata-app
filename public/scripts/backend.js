$(document).ready(function() {
	$('#count').on('click',function() {
		var counter = $('.counter p').text();
		var countN = Number(counter);
		countN++;
		$('.counter p').text(countN);
		$.post('/backend', {'count' : countN});
	});
});