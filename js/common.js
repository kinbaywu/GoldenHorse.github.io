jQuery(function($){
	$('.scrollFade').scrollFade();
});

$(function(){
	$('#container .spMenu a').click(function(){
		if($(this).hasClass('active')){
			$('.spMenuList').animate({right: -108},300,function(){
				$('.spMenuList').hide();
				$('#container .spMenu a').removeClass('active');
			});
		}else{
			$(this).addClass('active');
			$('.spMenuList').show().animate({right: 0},300);
		}
    var handle = $(this).find('.handle');
    handle.toggleClass('close');
		return false;
	});
	$('#container').click(function(){
		var menu = $('#container .spMenu a')
		if(menu.hasClass('active')) {
			menu.removeClass('active');
	    var handle = menu.find('.handle');
	    handle.toggleClass('close');
			$('.spMenuList').animate({right: -78},300,function(){
				$('.spMenuList').hide();
			});
		}
	});

	$('.fade').hover(function(){
		$(this).find('img').stop(false,true).animate({opacity:0.7},500);
	},function(){
		$(this).find('img').stop(false,true).animate({opacity:1},500);
	});
});

$(window).load(function(){
	$('#gHeader .link a img').rollover({ fade: true });
	$('#gNavi li img').rollover({ fade: true });
});

$(window).load(function(){
	if($(window).width() > 766){
		$("#cover").fadeOut("slow");
	}
});

$(window).resize(function() {
	if($(window).width() > 766){
		$("#cover").fadeOut("slow");
	}
});

window.onunload = function(){}

$(function(){
	$(window).bind("load", function(){
		if($(window).width() > 766){
			openFade();
			naviFade();
		}
	});

	//FADE OPEN
	function openFade(){
		//$("#content, #footer, #toTop").css("display", "block");
		$("#cover").fadeOut("slow");
	}


	//NAVI OPEN
	function naviFade(){

		$(".pageChange").bind("click", function(){

			var nextUrl = $(this).attr("href");

			$("#cover").fadeIn("fast", function(){

				//$("#content, #footer, #toTop").css("display", "none");
				location.href = nextUrl;

			});

			return false;


		});

	}

});
