$(function(){
/*	$(window).load(function(){
		var $deferredAnim = $.Deferred( function( deferredAnim ){
			deferredAnim.then(anim_01)
			.then(anim_02)
			.then(anim_03);
		});
		$deferredAnim.resolve();
		function anim_01(){
			return $('#title_comment').fadeIn(2000);
		}
		function anim_02(){
			return $('#title_comment').fadeOut(2000);
		}
		function anim_03(){
			return $('#ttl_wrap').fadeOut(2000);
		}
	});*/
	var window_width = $(window).width();
	var window_height = $(window).height();
	var main_width = $("#main").width();
	var scroll_limit = main_width - window_width;
	var wheel_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
	var current = 0;

	$(window).on(wheel_event, function(e){
		//この記述に変更したら一応いきました
		var delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);
		e.preventDefault();
		if(current <= 0 && current > -scroll_limit ){
			if(delta < 0){
				current -= window_width;
				$('#main').css('transform', 'translateX(' + current + 'px)');
			}else{
				current += window_width;
				$('#main').css('transform', 'translateX(' + current + 'px)');
				console.log (scroll);
			}
		}else{
			current += 0;
			console.log (scroll_limit);
		}
//		console.log(delta);
/*		current += delta;
		current = current < -scroll_limit ? -scroll_limit : current;
		current = current > 0 ? 0 : current;*/
		//$('#main').css('transform', 'translateX('+ current +'px)');
	});
});