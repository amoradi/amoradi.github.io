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

function calcTileHeight() {
	// get tallest tile
	// set all tiles to tallest tile height
	var $tiles = $('#content').find('.tile'),
	    tallest= 0;
	    
	$tiles.each(function(i) {
	    var thisHeight = $($tiles[i]).height();
	    
	    if (thisHeight > tallest) {
	        tallest = thisHeight;
	    }	
	});
	console.log('tallest: '+ tallest);
	$tiles.css('height',tallest);
	
	// do this on window.resize
	// on mobile (1 col) tiles should have height:auto in all instances
}

$(document).on('ready', function() {
	// add 24 divs of random colored bkgr and txt
	//createPlaceHolderTiles();
	calcTileHeight();
	$('window').on('resize', calcTileHeight);
});
