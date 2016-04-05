---
title: My Humble Example of a JS Integer <strike>Class</strike> Object
author: Aaron Moradi
layout: post
permalink: /integer-class-object-javascript/
categories: javascript, programming
excerpt: <p>JavaScript code example</p>
---

```javascript

var integer = function(number) {
	var that = {};

	// private members & methods
	var divisorsArr = [];

	var number = number || 0;

	function isInt(n) {
	   return n % 1 === 0;
	}

	// privileged methods
	that.setInteger = function(int) {
		
		// validate parameter
		if (isNaN(int)) {
			throw int + " is not a number.";
		}

		if (!isInt(int)) {
			throw int + " is not an integer.";
		}

		number = int;

	};

	that.getInteger = function() {
		return number;
	};

	that.isEven = function() {
		return (number % 2 === 0);
	};

	that.isOdd = function() {
		return !that.isEven();
	};

	that.divisors = function() {
		divisorsArr = [];

		for (var i = 1, ii = number; i <= ii; i++) {
			if (ii % i === 0) {
				divisorsArr.push(i);
			}
		};

		return divisorsArr;
	};

	that.isPrime = function() {
		console.log(number);

		if (number <= 1) return false;
		
		if (that.isEven() && number > 2) return false;

		that.divisors(); // recalc divisors

		if (divisorsArr.length > 2) return false;

		return true;
	};

	that.isComposite = function() {
		return !that.isPrime();
	}
	
	// mutators
	that.timesTen = function() {
		return number *= 10;
	};

	that.squared = function() {
		return number *= number;
	};

	that.squareRoot = function() {
		return number = Math.round(Math.sqrt(number));
	};

	that.absoluteValue = function() {
		return number = Math.abs(number);
	};

	that.add = function(int) {
		return number += Math.round(int);
	}

	that.subtract = function(int) {
		return number -= Math.round(int);
	}

	that.multiply = function(int) {
		return number *= Math.round(int);
	}

	that.divide = function(int) {
		return number /= Math.round(int);
	}

	return that;
}
```

```javascript
// new Integer instance
var seven = integer(7);

seven.isEven();
// false

seven.isPrime();
// true

seven.squared();
// 49

seven.squareRoot();
// 2.6457513110645907

seven.absoluteValue();
// 7

seven.timesTen();
// 70

var fiveAndAHalf = integer(5.5);
// throws error "Uncaught 5.5 is not an integer."

var uncleSam = integer('Uncle Sam');
// throws error "Uncaught Uncle Sam is not a number."
```
