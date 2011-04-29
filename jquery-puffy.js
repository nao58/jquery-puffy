/*
 * jQuery Puffy 1.0.3
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
			}).appendTo(document.body);
			if(e.parent().get(0).tagName == 'A'){
				var anc = e.parent().clone().empty();
				ef.wrap(anc);
			}
			if(ef.effect){
				ef.effect(opt.effect, opt.options, opt.duration, function(){
					ef.remove();
					if(anc){ anc.remove(); }
					if(opt.callback){opt.callback.apply(e);}
				});
			}
		});
	}
})(jQuery);
