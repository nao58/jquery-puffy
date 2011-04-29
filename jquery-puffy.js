/*
 * jQuery Puffy 1.0.2
 *
 * Copyright (c) 2011 Naohiko MORI
 * Dual licensed under the MIT and GPL licenses.
 *
 * Depends:
 *   effects.core.js
 *   effects.puff.js
 */
(function($){
	$.fn.puffy = function(option){
		var opt = $.extend({
			effect: 'puff',
			options: {},
			duration: 500,
			callback: null
		}, (option||{}));
		return this.each(function(){
			var e = $(this);
			var pos = e.offset();
			var ef = e.clone();
			ef.css({
				left: pos.left,
				top:  pos.top,
				position: 'absolute'
			}).insertAfter(e);
			if(ef.effect){
				ef.effect(opt.effect, opt.options, opt.duration, function(){
					ef.remove();
					if(opt.callback){opt.callback.apply(e);}
				});
			}
		});
	}
})(jQuery);
