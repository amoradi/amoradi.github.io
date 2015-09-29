var $tiles = $('#content').find('.tile');

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
		console.log(color);
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

function colorTiles() {
	$tiles.each(function(i) {
		$($tiles[i]).css('background-color', '#'+randomColor(true));
	});
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

function calcTileHeight() {
		
	var tallest= 0;
	    
	$tiles.css('height', 'auto');    
	
	$tiles.each(function(i) {
	    var thisHeight = $($tiles[i]).outerHeight();
	    console.log(thisHeight);
	    
	    if (thisHeight > tallest) {
	        tallest = thisHeight;
	    }	
	});
	
	$tiles.css('height', tallest);
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

function toggleFullscreen() {
	// if is in fullscrn mode, exit

	// else
	// put document into full screen mode
}

$(document).on('ready', function() {
	colorTiles();
	calcTileHeight();
	colorBlockquote();

	// events
	$(window).resize(calcTileHeight);

	$('.navigation .ladder').on('click', toggleNav);
	$('.fullscreen').on('click', toggleFullscreen);
});
