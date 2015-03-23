var socket = io();

$(function() {
	socket.on('counted', function(dbCount) {
		$('.counter p').text(dbCount);
	});
});