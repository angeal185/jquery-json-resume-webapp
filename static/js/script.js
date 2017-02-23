$('<div></div>').prependTo('body').addClass('mainContent'),
$('.mainContent').compile(mainTplData,mainTpl),
$('.navTpl').compile(navTplData,navTpl),
$('.skills').compile(skillzTplData,skillzTpl),
$('.infoTpl').compile(infoTplData,infoTpl),
$('.innerEm').compile(exTplData,exTpl),
$('.innerEd').compile(eduTplData,eduTpl),
$('.testimonialContent').compile(testimonialsTplData,testimonialsTpl),
$('#category').compile(portfolioNavTplData,portfolioNavTpl),
$('#portData').compile(portfolioItemTplData,portfolioItemTpl),		
$('#wrapper').compile(footerTplData,footerTpl);

var contactTpl = ("<div class='secTitle'><h1>contact</h1><p>Lorem ipsum dolor sit amet, consectetur selin du adipisicing elit<br>sed do eiusmod. Ut enim ad minim veniam.</p></div><div class='holder960 clearfix'><div class='contactContainer'><div class='innerTitle'><h1>get in touch with me</h1><p data-lorem='1s'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div><div class='contactHolder top'><div class='contactForm clearfix'><form class='form clearfix' method='post' action='send.php'><div class='inputBox'><label>Name *</label><input type='text' id='name' name='name'></div><div class='inputBox'><label>Email *</label><input type='text' name='email' id='email'></div><div class='inputBox last'><label>Subject</label><input type='text' name='subject'></div><div class='inputBox msg'><label>Message *</label><textarea name='message' id='message'></textarea></div><input type='submit' class='submit' id='submit' value='Send Message' name='submit'></form><div id='success'><h2>Your message has been sent. Thank you!</h2></div><div id='error'><h2>Sorry your message can not be sent.</h2></div></div><div class='clearfix'></div></div></div></div>");

$('#contact').prepend(contactTpl);

jQuery(window).load(function() {
		jQuery("#loaderInner").fadeOut();
		jQuery("#loader").delay(400).fadeOut("slow");
		jQuery("#loaderInner p").removeClass("loading");

});

$(document).ready(function(){

$("#mainNav ul a,.cta a").click(function(e){


	var full_url = this.href;
	var parts = full_url.split("#");
	var trgt = parts[1];
	var target_offset = $("#"+trgt).offset();
	var target_top = target_offset.top;



	$('html,body').animate({scrollTop:target_top -66}, 800);
		return false;

});

	var sections = $("section");
		var navigation_links = $("#mainNav a");

		sections.waypoint({
			handler: function(event, direction) {

				var active_section;
				active_section = $(this);
				if (direction === "up") active_section = active_section.prev();

				var active_link = $('#mainNav a[href="#' + active_section.attr("id") + '"]');
				navigation_links.removeClass("active");
				active_link.addClass("active");

			},
			offset: '35%'
		});


$('.testimoniaContainer .testimonialContent .icoQuote').css({opacity:0.2});

		$('a.prev').magnificPopup({
		  type: 'image'
		});
		
	var $portfolioClone = $('.portfolio').clone();

	$('.filter a').click(function(e){
		$('.filter li').removeClass('current');
		var $filterClass = $(this).parent().attr('class');
		if ( $filterClass == 'all' ) {
			var $filteredPortfolio = $portfolioClone.find('li');
		} else {
			var $filteredPortfolio = $portfolioClone.find('li[data-type~=' + $filterClass + ']');
		}
		$('.portfolio').quicksand( $filteredPortfolio, {
			duration: 800,
			easing: 'easeInOutQuad'
		}, function(){

		$('a.prev').magnificPopup({
		  type: 'image',
		  gallery:{
		    enabled:true
		  }
		});

	});

		$(this).parent().addClass('current');
		e.preventDefault();
	});

$('#submit').click(function(){

	$('input#name').removeClass("errorForm");
	$('textarea#message').removeClass("errorForm");
	$('input#email').removeClass("errorForm");

	var error = false;
	var name = $('input#name').val();
	if(name == "" || name == " ") {
		error = true;
		$('input#name').addClass("errorForm");
	}


		var msg = $('textarea#message').val();
		if(msg == "" || msg == " ") {
			error = true;
			$('textarea#message').addClass("errorForm");

		}

	var email_compare = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
	var email = $('input#email').val();
	if (email == "" || email == " ") {
		$('input#email').addClass("errorForm");
		error = true;
	}else if (!email_compare.test(email)) {
		$('input#email').addClass("errorForm");
		error = true;
	}

	if(error == true) {
		return false;
	}

	var data_string = $('.contactForm form').serialize();


	$.ajax({
		type: "POST",
		url: $('.contactForm form').attr('action'),
		data: data_string,

		success: function(message) {
				if(message == 'SENDING'){
					$('#success').fadeIn('slow');
				}
				else{
					$('#error').fadeIn('slow');
				}
					}



	});

	return false;
});

var fade=false;
$('.mobileBtn').click(function() {
		if(fade==false){
        	$('#mainNav ul').slideDown("slow");
			$('#mainNav ul').css({"display":"block"});
			fade=true;
			return false;

		}else{

			$('#mainNav ul').slideUp("faste");
			fade=false;
			return false;
		}
});

$("#teaser").parallax("100%", 0.3);
$(".testimoniaContainer").parallax("100%", 0.3);
$('.testimoniaContainer').slides({
	preload: false,
	generateNextPrev: false,
	play: 6500,
	container: 'testimonialContent'
});

$(".rotate").textrotator({
        animation: "fade",
		separator: ",",
    	speed: 2000
});



$(".loading").textrotator({
        animation: "fade",
    	speed: 1000
});


(function($) {
    $.fn.scrollToTop = function(options) {
        var defaults = {
                text: '<i class="icon-up-open-mini"></i>',
                min: 200,
                inDelay: 600,
                outDelay: 400,
                containerID: 'toTop',
                containerHoverID: 'toTopHover',
                scrollSpeed: 1200,
                easingType: 'linear'
            },
            settings = $.extend(defaults, options),
            containerIDhash = '#' + settings.containerID,
            containerHoverIDHash = '#' + settings.containerHoverID;
        $('body').append('<a href="#" id="' + settings.containerID + '">' + settings.text + '</a>');
        $(containerIDhash).hide().on('click.scrollToTop', function() {
            $('html, body').animate({
                scrollTop: 0
            }, settings.scrollSpeed, settings.easingType);
            $('#' + settings.containerHoverID, this).stop().animate({
                'opacity': 0
            }, settings.inDelay, settings.easingType);
            return false;
        }).prepend('<span id="' + settings.containerHoverID + '"></span>').hover(function() {
            $(containerHoverIDHash, this).stop().animate({
                'opacity': 1
            }, 600, 'linear');
        }, function() {
            $(containerHoverIDHash, this).stop().animate({
                'opacity': 0
            }, 700, 'linear');
        });
        $(window).scroll(function() {
            var sd = $(window).scrollTop();
            if (typeof document.body.style.maxHeight === "undefined") {
                $(containerIDhash).css({
                    'position': 'absolute',
                    'top': sd + $(window).height() - 50
                });
            }
            if (sd > settings.min)
                $(containerIDhash).fadeIn(settings.inDelay);
            else
                $(containerIDhash).fadeOut(settings.Outdelay);
        });
    };
})(jQuery);

$().scrollToTop({ easingType: 'easeOutQuart' });

});
