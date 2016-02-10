(function($){				
	jQuery.fn.lightTabs = function(options){
		var createTabs = function(){
			tabs = this;
			i = 0;
			
			showPage = function(i){
				$('.tabs').children("div").children("div").hide();
				$('.tabs').children("div").children("div").eq(i).show();
				$('.tabs').children("ul").children("li").children("a").removeClass("active");
				$('.tabs').children("ul").children("li").children("a").eq(i).addClass("active");
			}
								
			showPage(0);				
			
			$('.tabs').children("ul").children("li").each(function(index, element){
				$(element).attr("data-page", i);
				i++;                        
			});
			
			$('.tabs').children("ul").children("li").click(function(){
				showPage(parseInt($(this).attr("data-page")));
			});				
		};		
		return this.each(createTabs);
	};	

	jQuery.fn.lightTabs2 = function(options){
		var createTabs2 = function(){
			tabs2 = this;
			i2 = 0;
			
			showPage2 = function(i2){
				$('.tabs2').children("div").children("div").hide();
				$('.tabs2').children("div").children("div").eq(i2).show();
				$('.tabs2').children("ul").children("li").children("a").removeClass("active");
				$('.tabs2').children("ul").children("li").children("a").eq(i2).addClass("active");
			}
								
			showPage2(0);				
			
			$('.tabs2').children("ul").children("li").each(function(index, element){
				$(element).attr("data-page", i2);
				i2++;                        
			});
			
			$('.tabs2').children("ul").children("li").click(function(){
				showPage2(parseInt($(this).attr("data-page")));
			});				
		};		
		return this.each(createTabs2);
	};	
})(jQuery);
