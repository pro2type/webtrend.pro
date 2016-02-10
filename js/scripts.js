$(document).ready(function(){

	function windowSize(){
		var height = $(window).height();
    	//console.log(height);
    	$('ul.slider li').css('height',height);
	}
	$(window).load(windowSize); // при загрузке
	$(window).resize(windowSize); // при изменении размеров

	//Main page slider
    /*
    $('.slider').owlCarousel({
	    singleItem: true,
	    navigation: true,
        scrollPerPage: true,
        lazyLoad: true,
        autoPlay : true,
        stopOnHover : true,
        slideSpeed: 500
	});
    */
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
    /*
    owl.on('changed.owl.carousel', function(event) {
        
    })
    */
    $(window).bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta > 1000000)
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

	/*
	//Прокрутка
	$("a.scrollto").click(function () {
        elementClick = jQuery(this).attr("href");
        destination = jQuery(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination-69}, 1100);
        return false;
    });

	//Всплывашки
	$(".popup").colorbox({inline:true});
	//$(".popup").colorbox({inline:true, width:'60%'});

	$(".photo").colorbox({rel:'group1'});
	
    //Табы
    $(".tabs").lightTabs();

	//Смена изображений
	$('.vygoda_item').hover(function() {
		console.log('foto');
	    var src = $(this).find("img").attr("src").match(/[^\.]+/) + "_a.png";
	    $(this).find("img").attr("src", src);
	}, function() {
	    var src = $(this).find("img").attr("src").replace("_a.png", ".png");
	    $(this).find("img").attr("src", src);   
	});

	//Загрузка карты Яндекса
	ymaps.ready(init);
	function init() {
	    var myMap = new ymaps.Map('map', {
	        center: [55.753994, 37.622093],
	        zoom: 6,
	        controls: []
	    });
	    ymaps.geocode('г. Москва, д. Ликова, влад. 85 ', {
	        results: 1
	    }).then(function (res) {
	            var firstGeoObject = res.geoObjects.get(0),
	                coords = firstGeoObject.geometry.getCoordinates(),
	                bounds = firstGeoObject.properties.get('boundedBy');
	            myMap.geoObjects.add(firstGeoObject);
	            myMap.setBounds(bounds, {
	                checkZoomRange: true
	            });


	             var myPlacemark = new ymaps.Placemark(coords, {
	             iconContent: 'Petsafety',
	             balloonContent: '111123 г. Москва, ш. Энтузиастов, 31 (здание ТЦ) 3 этаж, офис №5'
	             }, {
	             preset: 'islands#violetStretchyIcon'
	             });

	             myMap.geoObjects.add(myPlacemark);

	        });
	}

	*/

	
	



});