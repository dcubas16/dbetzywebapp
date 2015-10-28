//for paginations----------------------------------------------------------------------------------------
var is_anim_slider = false;
var MSIE = ($.browser.msie) && ($.browser.version <= 8)
//for resize content delay------
var firstLink=false;
//resize-------------------------------------------------------------------------------------------------
var siteResize = false, content, mh = 0, defMh = 0, h = 0, ind = 0; 
    content, mh = 0, h = 0, defMh = 0;
     
 jQuery(document).ready(function() {
//select form--------------------------------------------------------------------------------------------    
 $('.form-style').jqTransform(); 
//window resize------------------------------------------------------------------------------------------   
    var h_cont=66;
	var h, new_h;
	setHeight();
	h=new_h;
	setSize();
	function setHeight(){
		new_h=$(window).height();
	}
	function setSize(){
		if (h>h_cont) {
			$('#bgControls').stop().animate({paddingTop:~~((h-h_cont)/2)});
            
		} else {
			$('#bgControls').stop().animate({paddingTop:0});
		}
	}
	setInterval(setNew,1);
	function setNew(){
		setHeight();
		if (h!=new_h) {
			h=new_h;
			setSize();
		}
	} 
});     
$(window).load(function(){
mh = parseInt($('body').css('minHeight'));
defMh = mh;
//bgStretch ---------------------------------------------------------------------------------------------
 $('#title .title1, #title .title2, #title .title5, #title .title5, #title .title7, #title .title8, #title .title10, #title .title11').css({opacity:0.7});
   	$('.pags a').each(function(e){
	   $(this).data({num:e})							 
	})
	
	$('#title li').css({'margin-right':-1500})
	$('#title .active').css({'margin-right':-510})
	
	$('.pags a').click(function(){
		var num=$(this).data('num');
		if (!$(this).parent().hasClass('active')) {
			$('#title .active').removeClass('active').stop().animate({'margin-right':-1500},550, 'easeInExpo', function(){
				$('#title li').eq(num).addClass('active').stop().animate({'margin-right':-510},600,'easeInOutExpo')	
			});
		}
	})
    
	var nav=$('nav')
		,content=$('#content')
		,bgStretch=$('<div><img src="images/picture1.jpg"></div>').appendTo('body')
		,glob=$('#glob')
		,splsh=true
	
	$('.thumbs .pags li a').each(function(){
		$('<span class="ovrl" />')
			.appendTo(this)
			.css({
				width:'100%'
				,height:'100%'
				,left:0
				,top:0
				,position:'absolute'
				,backgroundColor:'#ba8b3a'
				,opacity:0.7
			})
	})
	bgStretch
		.bgStretch({
			navs:$('.thumbs .pags')
				.uCarousel({
					show:4
                    ,pageStep:1
					,clickable:true					
				})
				.uCarousel(function(n,_){
					_.me.navs(n)
				})
				.navs({
					hoverIn:function(li){
						$('.ovrl',li).stop().animate({opacity:0})
					}
					,hoverOut:function(li){
						$('.ovrl',li).stop().animate({opacity:0.7})
					}
				})
				.navs(0)
		})
        .sImg({
            sleep: 1000,
            spinner:$('<div class="spinner spinner_bg"></div>').css({opacity:.6}).stop().hide(3000)
        });	
	$('#pags').navs(0)
//for browsers------------------------------------------------------------------------------------------------
    /*if($.browser.msie && $.browser.version == 8){    
        }*/
    /*if($.browser.opera){    
        $('#title #caption1 a').css({'margin-top':'48px'});
        $('#title #caption3 a').css({'margin-top':'65px'});
        }    */ 
//Hover a ----------------------------------------------------------------------------------------------------
    $('.more').hover(function(){
        $(this).stop().animate({color:'#b28a45'},350, "easeOutSine");		 
            }, function(){
        $(this).stop().animate({color:'#252525'},350, "easeOutSine");						 
    })
    $('.box2 .more').hover(function(){
        $(this).stop().animate({color:'#b28a45'},350, "easeOutSine");		 
            }, function(){
        $(this).stop().animate({color:'#fff'},350, "easeOutSine");						 
    })
    $('.list3 li > a > span').css({opacity:0})
    $('.list3 li > a').hover(function(){
        $(this).find('span').stop().animate({opacity:1},350, "easeOutSine");
            }, function(){
        $(this).find('span').stop().animate({opacity:0},350, "easeOutSine");						 
    })
    $('.list4 li > a > span').css({opacity:0})
    $('.list4 li > a').hover(function(){
        $(this).find('span').stop().animate({opacity:1},350, "easeOutSine");
            }, function(){
        $(this).find('span').stop().animate({opacity:0},350, "easeOutSine");						 
    })
    $('.list3 li a.text1').hover(function(){
        $(this).stop().animate({color:'#b28a45'},350, "easeOutSine");		 
            }, function(){
        $(this).stop().animate({color:'#252525'},350, "easeOutSine");						 
    })
    $('.thumbs .arrows .img_act').css({opacity:0})
   	$('.thumbs .arrows a').hover(function(){
		$(this).find('.img_act').stop(true).animate({opacity:1}, 350, 'easeOutSine');				 
	}, function(){
		$(this).find('.img_act').stop(true).animate({opacity:0}, 350, 'easeOutSine');					 
	})
    $('#title .caption1 > a').hover(function(){
        $(this).stop().animate({color:'#393329'},350, "easeOutSine");		 
            }, function(){
        $(this).stop().animate({color:'#fff'},350, "easeOutSine");						 
    })
    $('#title .caption2 > a').hover(function(){
        $(this).stop().animate({color:'#fff'},350, "easeOutSine");		 
            }, function(){
        $(this).stop().animate({color:'#f2ba59'},350, "easeOutSine");						 
    })
    $('#title .caption3 > a').hover(function(){
        $(this).stop().animate({color:'#413b35'},350, "easeOutSine");		 
            }, function(){
        $(this).stop().animate({color:'#b28a45'},350, "easeOutSine");						 
    })
    $('#title .caption4 > a').hover(function(){
        $(this).stop().animate({color:'#413b35'},350, "easeOutSine");		 
            }, function(){
        $(this).stop().animate({color:'#fff'},350, "easeOutSine");						 
    })
    $('footer .list1 .img_act').css({opacity:0});
    $('footer .list1 a').hover(function(){
        $(this).stop().animate({color:'#e1bb79'},350, "easeOutSine");	
        $(this).find('.img_act').stop().animate({opacity:1},350, "easeOutSine");	 
            }, function(){
        $(this).stop().animate({color:'#fff'},350, "easeOutSine");
        $(this).find('.img_act').stop().animate({opacity:0},350, "easeOutSine");						 
    })
    $('footer .compInfo a').hover(function(){
        $(this).stop().animate({color:'#373024'},350, "easeOutSine");		 
            }, function(){
        $(this).stop().animate({color:'#fff'},350, "easeOutSine");						 
    })
    $('.openMenu .img_up').css({opacity:0});
    
    $('.openMenu').hover(function(){
        $(this).stop().animate({opacity:0.5},350, "easeOutSine");		 
            }, function(){
        $(this).stop().animate({opacity:1},350, "easeOutSine");						 
    })
    $('.info a').hover(function(){
        $(this).stop().animate({color:'#252525'},350, "easeOutSine");		 
            }, function(){
        $(this).stop().animate({color:'#b28a45'},350, "easeOutSine");						 
    })
    $('#page_privacy a').hover(function(){
        $(this).stop().animate({color:'#252525'},350, "easeOutSine");		 
            }, function(){
        $(this).stop().animate({color:'#b28a45'},350, "easeOutSine");						 
    })
    
    var actMenu=false;
    $(".openMenu").click(function(){
        if (actMenu==false) {
            $('.thumbs').stop().animate({height:'19px'}, 250, 'easeOutSine');
            $(this).find('.img_up').stop().css({opacity:1});
            $(this).find('.img_down').stop().css({opacity:0});
            actMenu = true;
        }else {
            $('.thumbs').stop().animate({height:'120px'}, 350, 'easeOutSine');
            $(this).find('.img_up').stop().css({opacity:0});
            $(this).find('.img_down').stop().css({opacity:1});
            actMenu = false;
        }
    })
    $('.follow-icon a').hover(function(){
        $(this).stop().animate({opacity:0.5},350, "easeOutSine");		 
            }, function(){
        $(this).stop().animate({opacity:1},350, "easeOutSine");						 
    })
//Content switch---------------------------------------------------------------------------------------------- 
     $('ul#menu').superfish({
          delay:       500,
          animation:   {height:'show'},
          speed:       600,
          autoArrows:  false,
         dropShadows: false,
         	onInit: function(){
  				$("#menu > li > a").each(function(index){
  					var conText = $(this).find('.mText').text();
  				})
  	 		}
        });
    
	content=$('#content'),
		nav=$('.menu');
    //var firstSpl=false;

    	$('#content').tabs({
		preFu:function(_){
			_.li.css({top:"1200px",'display':'none'});      
		}
		,actFu:function(_){			
			if(_.curr){
               h = parseInt( _.curr.outerHeight(true));
               content.children('ul').css({'height':h});
               $(window).trigger('resize');
            if(_.n == 0){
                _.curr.css({'display':'block', top:'1200px'}).stop().delay(300).animate({top:"114px"},650,'easeOutExpo'); 
                firstLink = true  
                }
            if(_.n != 0){ 
                _.curr.css({'display':'block', top:'1200px'}).stop().delay(600).animate({top:"114px"},650,'easeOutExpo'); 
                $('.thumbs').stop().delay(250).animate({height:'19px'}, 450,'easeOutSine');
                $('.openMenu').stop().delay(150).fadeOut (250);
                if (actMenu==false) {
                    $('footer #footerPart').stop().animate({top:'-10px'}, 250,'easeOutSine').animate({top:'0px'}, 150,'easeOutSine');
                    actMenu = true;
                }else{
                    $('footer #footerPart').stop().animate({top:'0px'}, 150,'easeOutSine');
                }
                $('#bg_glob').stop().delay(200).fadeIn(325)
                firstLink = false              
                }
            }
                //h = parseInt( _.curr.outerHeight(true));
               //content.children('ul').animate({'height':h},500,'easeOutCubic');
               //$(window).trigger('resize'); 
			if(_.prev){
			 if(_.n > 0){
			     _.prev.stop().animate({top:"1200px"},450,'easeInExpo',function(){_.prev.css({'display':'none'});});
                }
            if(_.n == 0){
                _.prev.stop().animate({top:"1200px"},450,'easeInExpo',function(){_.prev.css({'display':'none'});});
                $('.thumbs').stop().delay(450).animate({height:'120px'}, 450,'easeOutSine');
                $('.openMenu').stop().fadeIn (250);
                $('footer #footerPart').stop().animate({top:'125px'}, 450,'easeInSine');
                $('#bg_glob').stop().delay(450).fadeOut(350)
                $('.openMenu').find('.img_up').stop().css({opacity:0});
                $('.openMenu').find('.img_down').stop().css({opacity:1});
                actMenu = false;
                }
             }
		}
	})
//Main menu--------------------------------------------------------------------------------------------------- 
	nav.navs({
			useHash:true,
            defHash:'#!/page_main',
             hoverIn:function(li){
                $('span', li).stop(true).animate({color:'#ba8b3a'}, 450,'easeOutSine');
                $('div', li).stop(true).animate({top:'14px', opacity:1}, 200,'easeOutSine');
             },
                hoverOut:function(li){
                    if ((!li.hasClass('with_ul')) || (!li.hasClass('sfHover'))) {
                        $('span', li).stop(true).animate({color:'#252525'}, 450,'easeOutSine');
                        $('div', li).stop(true).animate({top:'24px', opacity:0}, 200,'easeOutSine');
                    } 
                } 
		})
		.navs(function(n){			
			$('#content').tabs(n);
		}) 
//setTimeout(function(){  $('body').css({'overflow':'visible'}); },300);    
$(window).trigger('resize');        
}) 
//resize-------------------------------------------------------------------------------------------------------
$(window).resize(function (){
    if (content) {
        console.log(content);
        var newMh = 0;

        newMh = mh+h-316;
        if (newMh < defMh) { newMh = defMh;}
        $('body').animate({'minHeight':newMh},800,'easeOutSine')
            $(content).parents('.main')
                .stop().animate({'top':(windowH()-h)*.5,'height':h},800,'easeOutSine')
                .css('overflow','visible')
       
    }  
}); 