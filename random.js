// do random
//

var i = 0;
var r = 0;
function doRandom(inter, done) {
	i ++;
	var num = Math.floor(Math.random() * r + 1);
	if (i < 40) {
		inter(num);
		setTimeout(doRandom.bind(null, inter, done), i * 10);
	}
	else
		done(num);
}

var start = function(range, inter, done) {
	i = 0;
	r = range;

	doRandom(inter, done);
};

$(function() {
	var $h1 = $("#number");
	$("#start").on("click", function(e) {
		e.preventDefault();
		$h1.removeClass('done');

		start(12, function(i) {
			$h1.text(i);
		}, function(n) {
			$h1.text(n).addClass('done');
		});
	});
});

