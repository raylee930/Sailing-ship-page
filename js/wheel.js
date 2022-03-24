$(function() {

	$.fx.step.degree = function(fx) {
		if (!fx.deg) {
			fx.deg = 0;
			if ($(fx.elem).data("degree")) {
				fx.deg = $(fx.elem).data("degree");
			}
		}
		$(fx.elem).css({
			"WebkitTransform" : "rotate(" + Math.floor(fx.deg + (fx.end * fx.pos)) + "deg)",
			"-moz-transform" : "rotate(" + Math.floor(fx.deg + (fx.end * fx.pos)) + "deg)",
			"-ms-transform" : "rotate(" + Math.floor(fx.deg + (fx.end * fx.pos)) + "deg)"
		});
		$(fx.elem).data("degree", Math.floor(fx.deg + (fx.end * fx.pos)));
	};
	rotate(Math.floor(Math.random() * 720) - 360);
	function rotate(r) {
		var random = Math.floor(Math.random() * 720) - 360;
		$("#wheel").animate({
			"degree" : r
		}, 2000, function() {
			rotate(random);
		});
	}

}); 