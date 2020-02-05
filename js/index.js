$('.bxslider').bxSlider({
	controls: false,
	ticker: true,
	speed: 48000,
	minSlides: 1.4,
	maxSlides: 5,
	slideWidth: 465,
	slideMargin: 10
});
$(function(){
	var w=$(window).width();
	if(w>766){
		$("#main .photo").backstretch("img/index/photo08.jpg");
	}else{
		$("#main .photo").backstretch("img/index/sp_photo03.jpg");
	}
	$(window).resize(function() {
		var w=$(window).width();
		if(w>766){
			$("#main .photo").backstretch("img/index/photo08.jpg");
		}else{
			$("#main .photo").backstretch("img/index/sp_photo03.jpg");
		}
	});

	var h = window.innerHeight;
	if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/8./i)=="8."){
		h = document.documentElement.clientHeight;
	}
	$('#main .topBox,#main .fixBox').height(h);
	$(window).resize(function(){
		h = window.innerHeight;
		if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/8./i)=="8."){
			h = document.documentElement.clientHeight;
		}
		$('#main .topBox,#main .fixBox').height(h);
	});

	setTimeout(function(){
		$('#main .topBox h1').animate({'opacity':1},2200);
	});

	setTimeout(function(){
		$('#main .topBox').children().animate({'opacity':1},1200);
		$('.spMenu').animate({'opacity':1},1200);
	},1000);

	if($(window).scrollTop() > h){
		$('#main .mainImg').css('position','absolute');
	}else{
		$('#main .mainImg').css('position','fixed');
	}
	$(window).scroll(function(){
		if($(window).scrollTop() > h){
			$('#main .mainImg').css('position','absolute');
		}else{
			$('#main .mainImg').css('position','fixed');
		}
	});

	$(window).scroll(function(){
        if($(window).scrollTop() > h){
            if(!$( "#gHeader" ).hasClass("showing")
            && !$( "#gHeader" ).hasClass("show")){
                $( "#gHeader" ).addClass("showing");
                $( "#gHeader" ).stop();
                $( "#gHeader" ).animate({
                    top:0
                }, 500, function(){
                    $( "#gHeader" ).removeClass("showing");
                    $( "#gHeader" ).removeClass("hiding");
                    $( "#gHeader" ).removeClass("hide");
                    $( "#gHeader" ).addClass("show");
                } );
            }
        } else {
            if(!$( "#gHeader" ).hasClass("hiding")
            && !$( "#gHeader" ).hasClass("hide")){
                $( "#gHeader" ).addClass("hiding");
                $( "#gHeader" ).stop();
                $( "#gHeader" ).animate({
                    top:-70
                }, 500, function(){
                    $( "#gHeader" ).removeClass("showing");
                    $( "#gHeader" ).removeClass("show");
                    $( "#gHeader" ).removeClass("hiding");
                    $( "#gHeader" ).addClass("hide");
                } );
            }
        }
    });

	$('#main .topBox .shareBox .linkBox').hover(function(){
		$(this).stop(false,true).animate({width:210},500);
		$(this).children('ul').stop(false,true).animate({right:52},500);
	},function(){
		$(this).stop(false,true).animate({width:52},500);
		$(this).children('ul').stop(false,true).animate({right:-106},500);
	});

	function loadPress() {
	    var url = 'https://afuri.com/wp/api/posts.php';
	    var contents = [
	        {"trigger" : "", "targetBox" : ".press", "target" : ".mainBox", "type" : "press", "element" : ""},
	    ];
	    function getContent(content) {
	      $.ajax({
	          type: 'GET',
	          url: url + '?type=' + content["type"],
	          dataType: 'json',
	        //   crossDomain: true,
	          cache: false,
	          success: function(data) {
	              if(data.length){
	                  var elements = '<ul class="textList01 scrollFade clearfix">';
	                  for (var i = 0; i < data.length; i++){
	                      var url = data[i]['url'];
	                      var title = data[i]['title'];
	                      var arrDatetime = data[i]['datetime'].split(' ');
	                      var date = arrDatetime[0].replace(/-/g, '.');

	                      elements = elements + '<li>';
	                      elements = elements + '<a href="' + url + '">';
	                      elements = elements + '<p>';
	                      elements = elements + '<span class="create_dt">' + date + '</span>';
	                      elements = elements + '<span class="tit">' + title + '</span>';
	                      elements = elements + '</p>';
	                      elements = elements + '</a>';
	                      elements = elements + '</li>';
	                  }
	                  elements = elements + '</ul>';
	                  content["elements"] = elements;
					  $(content["targetBox"]).find(content["target"]).prepend(content["elements"]);
	              } else {
	                $(content["targetBox"]).remove();
	              }
	          },
	          error: function(XMLHttpRequest, textStatus, errorThrown) {
	              $(content["target"]).remove();
	              console.error(XMLHttpRequest +'\n'+ textStatus +'\n'+ errorThrown);
	          }
	      });
		}
		getContent(contents[0]);
	}
	loadPress();
});
$(window).load(function(){
	$('#main .topBox .linkList li a img').rollover({ fade: true });
});
