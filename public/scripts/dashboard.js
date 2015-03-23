var socket = io();

$(function() {
	socket.on('counted', function(dbCount) {
		$('.counter').text(dbCount);
	});
});