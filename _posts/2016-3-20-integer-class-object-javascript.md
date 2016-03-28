---
title: My Humble Example of a JS Integer <strike>Class</strike> Object
author: Aaron Moradi
layout: post
permalink: /integer-class-object-javascript/
categories: javascript, programming
excerpt: <p>JavaScript code example</p>
---

```javascript

function Integer(number) {
	
	// validate parameter
	if (isNaN(number)) {
		throw number + " is not a number.";
	}

	if (!isInt(number)) {
		throw number + " is not an integer.";
	}

	// private members & methods
	var divisorsArr = [];

	function isInt(n) {
	   return n % 1 === 0;
	}

	// public members
	this.number = number;
	this.isEven = (number % 2 === 0);
	this.isOdd = !this.isEven;

	this.divisors = function() {
		
		for (var i = 1, ii = number; i <= ii; i++) {
			if (ii % i === 0) {
				divisorsArr.push(i);
			}
		};

		return divisorsArr;
	}();

	this.isPrime = function() {
		if (number <= 1) return false;
		
		if (this.isEven && number > 2) return false;

		if (divisorsArr.length > 2) return false;

		return true;
	}();
	
	this.timesTen = function() {
		return number * 10;
	}();

	this.squared = function() {
		return number * number;
	}();

	this.squareRoot = function() {
		return Math.sqrt(number);
	}();

	this.absoluteValue = function() {
		return Math.abs(number);
	}();
}

// public methods
Integer.prototype.add = function(int) {
	return this.number + int;
}

Integer.prototype.subtract = function(int) {
	return this.number - int;
}

Integer.prototype.multiply = function(int) {
	return this.number * int;
}

Integer.prototype.divide = function(int) {
	return this.number / int;
}
```

```javascript
// new Integer instance
var seven = new Integer(7);

seven.isEven
// returns false

seven.isPrime
// returns true

seven.squared
// returns 49

seven.squareRoot
// returns 2.6457513110645907

seven.absoluteValue
// returns 7

seven.timesTen
// returns 70

var fiveAndAHalf = new Integer(5.5);
// throws error "Uncaught 5.5 is not an integer."

var uncleSam = new Integer('Uncle Sam');
// throws error "Uncaught Uncle Sam is not a number."
```
