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
	// private
	var divisorsArr = [];

	function isInt(n) {
	   return n % 1 === 0;
	}

	if (isNaN(number)) {
		throw number + " is not a number.";
	}

	if (!isInt(number)) {
		throw number + " is not an integer.";
	}
	
	// public
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
```
