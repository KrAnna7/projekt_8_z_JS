var n = 15;

function drawTree(k) {
	for (var i = 0 ; i < k ; i++) {
		var star = '';
		for (var j = 0; j < k - i ; j++) {
			star += ' ';
		}
		for (var j = 0 ; j <= i * 2 ; j++) {
			star += '*';
		}
		console.log(star);
	}
}

var choinka = drawTree(n);