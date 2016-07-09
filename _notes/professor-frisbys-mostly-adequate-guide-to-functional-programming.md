---
layout: page
title: Professor Frisby's Mostly Adequate Guide to Functional Programming
displayIndex: false
---
## chapter 02 - First Class Functions

When we say functions are "first class", we mean they are just like everyone else... so normal class (coach?). We can treat functions like any other data type and there is nothing particularly special about them - they may be stored in arrays, passed around, assigned to variables, what have you.

## chapter 03 - Pure Functions

**pure function** - function that, given the same input, will always return the same output and does not have any observable side effect.

**side effect** - as anything that occurs in our computation other than the calculation of a result. Immutatble variables within functions (as opposed to mutable variables outside functions) help ensure consistant output and no side effects.

**example: slice vs splice**
+ slice does not MUTATE the obj it is acting upon, thus has no side effect
+ splice MUTATES the obj it is acting upon -- an observable side effect.

## chapter 04 - Currying

+ creates a closure, returning a fn,
+ and passing one parameter per fn, one can pass one or more less parameters to the function, "initializating" or "starting the function off" at the parameter(s) passed

```javascript
// curry example
var curry = function(x) {
  return function(y) {
    return x + y;
  }
}

curry(7); // curried
curry(7)(4); // not surried
```

## chapter 05 - Compostion

**Composition** feels like function husbandry. You, breeder of functions, select two with traits you'd like to combine and mash them together to spawn a brand new one.

+ takes two functions as params
+ x is piped through the 2 fns
+ returning one function as a composition of the two
+ executes parameters from right to left

```javascript
var compose = function(f,g) {
  return function(x) {
    return f(g(x));
  }
}
```

## chapter 06 - Declarative Programming

Declarative, as opposed to imperative, means that we will write expressions, as opposed to step by step instructions

```javascript

// imperative
var makes = [];
for (var i = 0; i < cars.length; i++) {
  makes.push(cars[i].make);
}
// declarative
var makes = cars.map(function(car) { return car.make; });

// imperative
var authenticate = function(form) {
  var user = toUser(form);
  return logIn(user);
};

// declarative
var authenticate = compose(logIn, toUser);
```

// >>>>>> chapter 07 - Hindley-Milner <<<<<<
// -----------------

// >>>>>> chapter 08 - Tupperware <<<<<<
// -----------------

// >>>>>> chapter 09 - Monads <<<<<<
// -----------------

// >>>>>> chapter 10 - Applicative Functors <<<<<<
// -----------------
