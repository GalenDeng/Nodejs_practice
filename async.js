//回调函数调用方式
var c = 0;
function printIt() {
	console.log(c);
}

function plus(callback) {
	setTimeout(function () {
		c += 1;
		callback();
	},
		1000);

}


plus(printIt);
