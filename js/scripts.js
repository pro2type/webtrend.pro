$(window).on('load', function () {
    $('nav').addClass("loaded").delay(1200).queue(function (){
        $(this).removeClass("loaded").deuque();
    });
	$('.thecube').hide();
    $('body').addClass('loaded');
});

$(document).ready(function(){
	function windowSize(){
		var height = $(window).height();
    	$('ul.slider li').css('height',height);
	}
	$(window).load(windowSize); // при загрузке
	$(window).resize(windowSize); // при изменении размеров

    var owl = $('.slider');
    owl.owlCarousel({
        singleItem: true,
        navigation: true,
        scrollPerPage: true,
        lazyLoad: true,
        autoPlay : true,
        stopOnHover : true,
        slideSpeed: 500
    });
    // Go to the next item
    if (owl.currentItem + 1 === owl.itemsAmount) {
        alert('THE END');
        $(window).unbind('mousewheel');
    }
   
    $(window).bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta > 1)
        {
            console.log('up');
            owl.trigger('owl.prev');
        }
        else
        {
            console.log('down');
            owl.trigger('owl.next');
        }
    });
    
	$(".gamburger").click(function () {
		$(this).toggleClass('active');
		$("nav").toggleClass('active');
	});

	
	
	



});


