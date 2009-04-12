(function($){
	$.fn.puffy = function(option){
		var opt = $.extend({
			effect: 'puff',
			options: {},
			speed: 500,
			finish: null
		}, (option||{}));
		return this.each(function(){
			var e = $(this);
			var pos = e.offset();
			var ef = e.clone();
			ef.css({
				left: pos.left,
				top:  pos.top,
				position: 'absolute'
			}).appendTo(document.body);
			if(ef.effect){
				ef.effect(opt.effect, opt.options, opt.speed, function(){
					ef.remove();
					if(opt.finish){opt.finish();}
				});
			}
		});
	}
})(jQuery);
