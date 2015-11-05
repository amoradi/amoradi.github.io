---

---

// register custom elements
{% for elem in site.customelements %}
	{{ elem.content }}
{% endfor %}

var indexText = $('.index-anchor span').html();

// set loader height
$("#loader").height($(window).height());

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

		if ($(window).width() < 768) {
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

function toggleIndexView() {
	var $index 	= $('.index').first(),
		$body   = $('body'),
	    isOpen 	= $index.hasClass('active') && $body.hasClass('index-view'),
	    $indexTxt = $index.find('span span');

	if (isOpen) {
		$index.removeClass('active');
		$body.removeClass('index-view');
		$indexTxt.html(indexText);
	}
	else {
		$index.addClass('active');
		$body.addClass('index-view');
		$indexTxt.html('&times;');
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
		bookPrev 	= $("figure[is=book-preview][data-title='"+bookTitle+"']");

	toggleIndexView();

	bookPrev.css('top', book.offset().top);
	bookPrev.css('left', book.offset().left);
	bookPrev.addClass('show-book-preview');

	setTimeout(function() {
		bookPrev.css({
			top: 0,
			left: 0,
			width: '100%',
			height: 'auto'
		});
	}, 100);
}

function fadeInPageElements() {
    
    /* Check the location of each desired element */
    $('#content > * > *').not('#loader').each(function(i) {
        
        var bottom_of_object = $(this).offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window > bottom_of_object) {
            
            $(this).animate({'opacity':'1'},500);      
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
	
	$(window).resize(function(e) {
		if ($('#content > article:first').hasClass('grid')) {
			$tiles.css('height', 'auto');
			calcTileHeight($tiles);
		}

		fadeInPageElements();
	});

	$('.navigation .ladder').on('click', toggleNav);
	$('.index-anchor').on('click', toggleIndexView);
	$('.fullscreen').on('click', toggleFullscreen);
	$('.shelf .tile').on('click', function(e) {
		toggleBookPreview(e);
	});
}

$(document).ready(function() {
	docReady();
});


// fade in page elements
$(window).scroll(fadeInPageElements);

// Wait for window load
$(window).load(function() {
	var fdTime = ($('#content > article:first').hasClass('grid')) ? 1500 : 1500;
	// Animate loader off screen
	$("#loader").fadeOut(fdTime);
});