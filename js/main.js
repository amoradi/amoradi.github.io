---

---

// register custom elements
{% for elem in site.customelements %}
	{{ elem.content }}
{% endfor %}

var indexText = $('.index-anchor span').html();

// generate HEX color (light or dark)
function randomColor(light) {
	var color = '';

	if (light) {		
		var lightKey = ['a', 'b', 'c', 'd', 'e', '9'];
		
		while (color.length < 6) {
			var i = Math.floor((Math.random() * 6));
			color += lightKey[i];
		}

		color = color.split('');
		color[2] = 'f';
		color[3] = 'f';
		color = color.join('');
	}
	else {
		var darkKey = ['0', '1', '2', '3', '4', '5'];
		
		while (color.length < 6) {
			var i = Math.floor((Math.random() * 6));
			color += darkKey[i];
		}
	}

	return color;
}

function colorBkgr(elem) {
	$(elem).css('background-color', '#'+randomColor(true));
}

function createPlaceHolderTiles() {
	for (var i =0, ii = 144; i < ii; i++) {
		var html = "<div class=\"tile col-xs-12 col-sm-4 col-md-3 col-lg-3 col-xl-2 col-xxl-eighths\" style=\'background:#"+randomColor(true)+";color:#333;\'><h2>Koere This is a Long Title It Is Dear So Long I Don't Know What to Do With It</h2><time datetime=\"2008-02-14 20:00\">January 18, 2014</time><p>More text here 12345. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat <br /><a href=\"#\">READ MORE &rarr;</a></p></div>";
		
		var content = document.getElementById('content');
		content.insertAdjacentHTML('beforeend', html);
	}
}

function makeRandomColor($elem, cssProp) {
	if ($elem.length > 0) {	
		$elem.each(function(i) {
			$($elem[i]).css(cssProp, '#'+randomColor(true));
		});
	}
}

function colorBkgrDivs(minWidth) {

	if ($(window).width() > minWidth) {
		var $content = $('#content'),
			$pagePost = $content.find('.page, .post').first();

			if ($pagePost.length > 0) {
				$('.bkgr-container').remove();

				var bkgrWidth = $content.outerWidth() - $pagePost.outerWidth() - 239,
					docHeight = $(document).height(),
					numDivs   = Math.ceil(docHeight / 40);

				// create container div
				// style and append
				var divCont 	= document.createElement('div'),
					$divCont	= $(divCont);

				divCont.className = 'bkgr-container';
				divCont.style.width = bkgrWidth+"px";
				$content.append(divCont);

				// create divs
				// and append to container
				for (var i =0; i < numDivs; i++) {
					var randColDiv = document.createElement('div');
					colorBkgr(randColDiv);
					$divCont.append(randColDiv);
				}
			}
	}

}

function colorBlockquote() {
	$('blockquote').each(function() {
		colorBkgr($(this));
	});
}

function calcTileHeight($elem) {
	if ($elem.length > 0) {

		if ($(window).width() < 753) {
			$elem.css('height', 'auto');
		}
		else {	
			var tallest= 0;
			    
			$elem.css('height', 'auto');    
			
			$elem.each(function(i) {
			    var thisHeight = $($elem[i]).outerHeight();
			    	    
			    if (thisHeight > tallest) {
			        tallest = thisHeight;
			    }	
			});
			
			$elem.css('height', tallest);
		}
	}
}

function toggleNav() {
	var $nav 	= $('.navigation').first(),
	    isOpen 	= $nav.hasClass('navOpen');

	if (isOpen) {
		$nav.removeClass('navOpen');
	}
	else {
		$nav.addClass('navOpen');
	}
}

function toggleIndexView(dontShowFirstItem) {
	var $index 		= $('.index').first(),
	indexAnchor		= $index.find('.index-anchor').first(),
    	$body   		= $('body'),
	isOpen 			= $index.hasClass('active') && $body.hasClass('index-view'),
	$indexTxt 		= $index.find('span span'),
	dontShowFirstItem 	= (dontShowFirstItem === true);

	if (isOpen) {
		indexAnchor.addClass('leaving');
		$index.removeClass('active opaque');
		$body.removeClass('index-view');
		setTimeout(function() {
			$indexTxt.html(indexText);
			indexAnchor.removeClass('leaving');
		}, 1000);
	}
	else {
		$index.addClass('active opaque');
		$body.addClass('index-view');
		//$indexTxt.html('<img src=\"/images/close-x.png\" class=\"close-x\"/>');
		indexAnchor.removeClass('leaving');
		$indexTxt.html('<div class="x x-top"></div><div class="x x-btm"></div>');
		
		// show first item when index area is empty (on first index click)
		if (!dontShowFirstItem && $('#content > .shelf').length > 0) {
			if ($('.index-content').find('figure[is=book-preview].show-book-preview').length < 1) {
				bookTransition($('.index-content').find('figure[is=book-preview]').first(), 'fadein');
			}
		}
	}
}

function toggleFullscreen() {
	// if is in fullscrn mode, exit

	// else
	// put document into full screen mode
}

function toggleBookPreview(e) {
	var book 		= $(e.target).closest('[data-title]'),
		bookTitle 	= book.attr('data-title'),
		bookPrev 	= $("figure[is=book-preview][data-title='"+bookTitle+"']"),
		$index 		= $('.index').first(),
		books 		= $('.index-content').find('figure[is=book-preview]');

	toggleIndexView(true);
	$index.addClass('book-detail-live');

	books.removeClass('show-book-preview'); 
	bookPrev.css('top', book.offset().top);
	bookPrev.css('left', book.offset().left);
	bookPrev.addClass('show-book-preview');
	bookTransition(bookPrev);
}

function pageinateBookPreview(direction) {
	var books 		= $('.index-content').find('figure[is=book-preview]'),
		liveBook 	= $('.index-content').find('figure[is=book-preview].show-book-preview'),
		$nextBook 	= ($(liveBook).next('figure').length > 0) ? $($(liveBook).next('figure')) : $(books[0]),
		$prevBook 	= ($(liveBook).prev('figure').length > 0) ? $($(liveBook).prev('figure')) : $(books[books.length-1]),
		$nextArrow  = $('.next-arrow'),
		$prevArrow  = $('.prev-arrow');

	if (direction === 'next') {
		$nextArrow[0].src = '/images/index-arrow-right-live.png';
		$nextArrow.animate({left: '10px'}, 'fast');
		$nextArrow.animate({left: '0px'}, 'fast', function() {
			$nextArrow[0].src = '/images/index-arrow-right.png';
			bookTransition($nextBook, 'fadein');
		});
	} else if (direction === 'prev') {
		$prevArrow[0].src = '/images/index-arrow-left-live.png';
		$prevArrow.animate({right: '10px'}, 'fast');
		$prevArrow.animate({right: '0px'}, 'fast', function() {
			$prevArrow[0].src = '/images/index-arrow-left.png';
			bookTransition($prevBook, 'fadein');
		});		
	}
}

function bookTransition($elem, fadein) {
	setTimeout(function() {
		$elem.css({
			top: 0,
			left: 0,
			width: '100%',
			height: 'auto'
		});
	}, 100);

	if (fadein === 'fadein') {

		$elem.addClass('fadein');

		setTimeout(function() {
			var books 		= $('.index-content').find('figure[is=book-preview]');

			$(books).removeClass('show-book-preview');
			$elem.addClass('show-book-preview');
		}, 200);
	}

	$('.index').animate({ scrollTop: 0 }, 0);
}

function fadeInPageElements() {
    
    /* Check the location of each desired element */
    $('#content > * > *').not('#loader, .index-anchor').each(function(i) {
        
        var bottom_of_object = $(this).offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window > bottom_of_object) {
            
            $(this).animate({'opacity':'1'}, 50);      
        }
    });
}

function docReady() {
	
	var $tiles = $('#content').find('.tile'),
		$books  = $('#content').find('.book-side');
		$blockq= $('blockquote');

	if ($tiles.length > 0 ) {

		if ($('#content > article:first').hasClass('shelf')) {
			makeRandomColor($books, 'background-color');

		} else if ($('#content > article:first').hasClass('grid')) {
			makeRandomColor($tiles, 'background-color');
			calcTileHeight($tiles);
		}
	}

	// code highlighting
	$('pre code').each(function(i, block) {
    	hljs.highlightBlock(block);
  	});

  	// fade page elems
  	fadeInPageElements();

  	function calcIndexPos() {
  		var nH = $('.navigation').outerHeight() / 2;
  		var lH = $('.top-links').outerHeight();

  		$('.index-anchor-nav').css('margin-top', (nH - lH)-20 + 'px');
  	}

  	calcIndexPos();

  	function stickyHeader(elem) {
	  	var element_position = $(elem).offset().top;
	  		

		$(window).on('scroll', function() {
			var windowWidth = $(window).outerWidth();
		    var y_scroll_pos = window.pageYOffset;
		    var scroll_pos_test = element_position;
		    var isSticky = $('body').hasClass('sticky-header');
		
			if (windowWidth > 620) {
		    	if (!isSticky && (scroll_pos_test - y_scroll_pos) <= 235) {
			        $('body').addClass('sticky-header');
			        $(window).scrollTop(1);
		    	} else if (y_scroll_pos === 0 && isSticky) {
		    		$('body').removeClass('sticky-header');
		    	}
		    }
		});
	}

	var homePage = ($('.welcome-links').length > 0);

	if (homePage) stickyHeader('.welcome-links');
	
	$(window).resize(function(e) {
		if ($('#content > article:first').hasClass('grid')) {
			$tiles.css('height', 'auto');
			calcTileHeight($tiles);
		}

		fadeInPageElements();
		calcIndexPos();
	});

	$('.navigation .ladder').on('click', toggleNav);
	$('.index-anchor').on('click', toggleIndexView);
	$('.index-anchor-nav').on('click', toggleIndexView);
	$('.fullscreen').on('click', toggleFullscreen);
	$('.shelf .tile').on('click', function(e) {
		toggleBookPreview(e);
	});

	// index arrows
	$('.next-arrow').on('click', function() {
		pageinateBookPreview('next');
	});
	$('.prev-arrow').on('click', function() {
		pageinateBookPreview('prev');
	});

	$(document).keydown(function(e) {

		if ($('.index.active').length > 0) {
		    switch(e.which) {
		        case 37: // left
		        pageinateBookPreview('prev');
		        break;

		        case 39: // right
		        pageinateBookPreview('next');
		        break;

		        case 27: // esc
		        toggleIndexView();

		        default: return; // exit this handler for other keys
		    }
		    e.preventDefault(); // prevent the default action (scroll / move caret)
		}
	});

	// fullscrn
	fullScrn('.fullscreen', 'html');
}

function fullScrn(elem, fullscrnElem) {
	
	var fullscrnElem = $(fullscrnElem)[0];

	$(elem).on('click', function() {
		
		if (fullscrnElem.requestFullscreen) {
		  fullscrnElem.requestFullscreen();
		} else if (fullscrnElem.msRequestFullscreen) {
		  fullscrnElem.msRequestFullscreen();
		} else if (fullscrnElem.mozRequestFullScreen) {
		  fullscrnElem.mozRequestFullScreen();
		} else if (fullscrnElem.webkitRequestFullscreen) {
		  fullscrnElem.webkitRequestFullscreen();
		}
	});	
}

$(document).ready(function() {
	docReady();
});

// fade in page elements
$(window).scroll(fadeInPageElements);

// Wait for window load
$(window).load(function() {
	$("html, body").animate({ scrollTop: 0 }, 'fast');

	var fdTime = 15000;
	
	$('.loader-img').css({'display': 'block', 'margin-top': $(window).height()/2 - 100});
	setTimeout(function() {
		
		$('#loader').addClass('reveal');
	}, 700);

	setTimeout(function() {
		$('.navigation').addClass('reveal');
		$('#loader').fadeOut();
	}, 1300);
});
