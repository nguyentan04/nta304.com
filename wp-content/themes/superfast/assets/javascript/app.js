//AIzaSyA5Uthpy_4HHhKZFeIox3ucI07vg_pFLkg
(function($) {

// OFFSET Feststellen für die Navi

		var $hamburger = $(".mobile-menu-icon");
		$hamburger.on("click", function(e) {
		    
//			$("#off").removeClass("blllllllaaaaa");
//			if ($hamburger.hasClass("is-active")) {
//			//$(".off-canvas-wrapper > div").attr('class', 'hi');
//				//$("#off").removeClass('is-off-canvas-open');
//				$("#off").addClass('blllllllaaaaa');
//				console.log('gelöscht ');
//			}
//			$hamburger.toggleClass("is-active");
//			
//			
			console.log('nhamburger aktiv');
		    // Do something else, like open/close menu
			$('html, body').animate({scrollTop: '0px'}, 300);
		});
		
		$('.menu-item a').click(function(event){
			
			$(".off-canvas").removeClass('is-open');
			$(".off-canvas-wrapper-inner").removeClass('is-off-canvas-open');
			$(".off-canvas-wrapper-inner").removeClass('is-open-left');
		});
//		var $hamburger2 = $(".js-off-canvas-exit");
//		$hamburger2.on("click", function(e) {
//		    $hamburger.removeClass("is-active");
//			console.log('nhamburger inaktiv');
//		    // Do something else, like open/close menu
//		});
	



/*

ID Quelle: #menu-item-964
CLASS Ziel: .off-canvas.is-off-canvas-open

*/

	$("#menu-item-964").click(function(event){
		$('#mobile-menu').removeClass('is-open');	
		$('.off-canvas-wrapper-inner').removeClass('is-open-left');
		$('.off-canvas-wrapper-inner').removeClass('is-off-canvas-open');
		//$('#masthead .top-bar').css({"background":"red"});
		//$('#masthead .top-bar').css({"left":"0"});
		//$('#masthead .top-bar').style.left('0px!important');
		//event.preventDefault();
		console.log('klicke auf kontakt1');
	});
	
	$("#close").click(function(event){
		//$('#infobox2').style.display('none');
		$('#resModal').addClass('closed');
		//event.preventDefault();
		console.log('klicke auf close');
	});
	$("#closeInfobox").click(function(event){
		//$('#infobox2').style.display('none');
		$('#infobox2').addClass('closeme');
		//event.preventDefault();
		console.log('klicke auf close');
	});


/*
*  fn.isOnScreen
*
*  Ist das Element noch sichtbar ?
*/	
//
//$.fn.isOnScreen = function(){
//    
//    var win = $(window);
//    
//    var viewport = {
//        top : win.scrollTop(),
//        left : win.scrollLeft()
//    };
//    viewport.right = viewport.left + win.width();
//    viewport.bottom = viewport.top + win.height();
//    
//    var bounds = this.offset();
//    bounds.right = bounds.left + this.outerWidth();
//    bounds.bottom = bounds.top + this.outerHeight();
//    
//    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
//    
//};





$(document).ready(function(){
	$(document).foundation();
});



})(jQuery);

