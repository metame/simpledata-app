var socket = io();

$(function() {
	socket.on('counted', function(count) {
		$('.counter').text(count);
	});
});