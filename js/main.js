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

function colorBody() {
	$('body').css('background-color', '#'+randomColor(true));
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

$(document).on('ready', function() {
	colorBody();
	colorTiles();
	calcTileHeight();
	$(window).resize(calcTileHeight);
	$('.navigation .ladder').on('click', toggleNav)
});
