const height = 10000;

setInterval(function() {
	if (document.body.scrollHeight > height) {
		document.body.innerHTML = '<div style="font-size:50pt; position:fixed; top:50%; left: 50%; transform: translateX(-50%) translateY(-50%);">STOP RIGHT THERE!</div>';
	}
}, 1000);