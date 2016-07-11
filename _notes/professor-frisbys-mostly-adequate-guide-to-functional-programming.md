---
layout: page
title: Professor Frisby's Mostly Adequate Guide to Functional Programming
displayIndex: false
---
## chapter 01 - What ever are we doing?

#### General Programming Principles
+ DRY (don't repeat yourself)
+ YAGNI (ya ain't gonna to need it)
+ Loose coupling, high cohesion
+ Principle of least surprise
+ Single responsibility

## chapter 02 - First Class Functions

When we say functions are "first class", we mean they are just like everyone else... so normal class (coach?). We can treat functions like any other data type and there is nothing particularly special about them - they may be stored in arrays, passed around, assigned to variables, what have you.

## chapter 03 - Pure Functions

**pure function** - function that, given the same input, will always return the same output and does not have any observable side effect.

**side effect** - as anything that occurs in our computation other than the calculation of a result. Immutatble variables within functions (as opposed to mutable variables outside functions) help ensure consistant output and no side effects.

#### Pure & Impure Example in JS

**slice** - (pure) does not mutate the obj it is acting upon, thus has no side effect.<br />
**splice** - (impure) mutates the obj it is acting upon -- an observable side effect.

## chapter 04 - Currying

**Currying** creates a closure, returning a fn, and passing one parameter per fn, one can pass one or more less parameters to the function, "initializating" or "starting the function off" at the parameter(s) passed.

```javascript
// curry example
var curry = function(x) {
  return function(y) {
    return x + y;
  }
}

curry(7); // curried
curry(7)(4); // not curried
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

Composition is straight from the math books. In fact, perhaps it's time to look at a property that holds for any composition.

```javascript
 // associativity
var associative = compose(f, compose(g, h)) == compose(compose(f, g), h);
```
**Associative property** is a property of some binary operations (mathematics) and is a valid rule of replacement for expressions in logical proofs (propositional logic). Within an expression containing two or more occurrences in a row of the same associative operator (addition & multiplication), the order in which the operations are performed does not matter as long as the sequence of the operands is not changed.

ex. (2 + 3) + 4 = 2 + (3 + 4) = 9<br/>
[source](https://en.wikipedia.org/wiki/Associative_property)

### Pointfree

**Pointfree** style means never having to say your data. Excuse me. It means functions that never mention the data upon which they operate.

```javascript
//pointful
//not pointfree because we mention the data: word
var snakeCase = function(word) {
  return word.toLowerCase().replace(/\s+/ig, '_');
};

//pointfree
var snakeCase = compose(replace(/\s+/ig, '_'), toLowerCase);
```

What we're doing is piping our data through each function of 1 argument. Currying allows us to prepare each function to just take its data, operate on it, and pass it along.

### Category Theory

**Category theory** is an abstract branch of mathematics that can formalize concepts from several different branches such as set theory, type theory, group theory, logic, and more. It primarily deals with objects, morphisms, and transformations.

In category theory, we have something called **a category**. It is defined as a collection with the following components:

+ A collection of **objects**
  + [JS] Data types - For instance, String, Boolean, Number, Object, etc. We often view data types as sets of all the possible values. One could look at Boolean as the set of [true, false] and Number as the set of all possible numeric values.
+ A collection of **morphisms**
  + [JS] Pure functions
+ A notion of **composition** on the morphisms
  + [JS] Compose function
+ A distinguished morphism called **identity**
  + [JS] Identity function

```javascript
var id = function(x) {
  return x;
};

// identity property holds true for every unary fn f
compose(id, f) == compose(f, id) == f;
```

### Exercises
```javascript
var _ = require('ramda');

// Use _.compose() to rewrite the function below.
var isLastInStock = function(cars) {
  var last_car = _.last(cars);
  return _.prop('in_stock', last_car);
};

// curried pointfree composition
var isLastInStock = _.compose(_.prop('in_stock'), _.last);

isLastInStock(cars);

// Use _.compose(), _.prop() and _.head() to retrieve the name of the first car.
var nameOfFirstCar = _.compose(_.prop('name'), _.head);

// Use the helper function _average to refactor averageDollarValue as a composition.
var _average = function(xs) {
  return _.reduce(_.add, 0, xs) / xs.length;
}; // <- leave be

var averageDollarValue = function(cars) {
  
  var dollar_values = _.map(function(c) {
    return c.dollar_value;
  }, cars);

  return _average(dollar_values);
};

var averageDollarValue = _.compose(_average, _.map(function(c) {return c.dollar_value;}));

// Write a function: sanitizeNames() using compose that returns a list of lowercase and underscored car's names: e.g: sanitizeNames([{name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true}]) //=> ['ferrari_ff'].

var _underscore = _.replace(/\W+/g, '_'); //<-- leave this alone and use to sanitize

var sanitizeNames = _.compose(R.map(_underscore()), _.map(function(c) {return c.name;}));
```

## chapter 06 - Declarative Programming

Declarative, as opposed to imperative, means that we will write expressions, as opposed to step by step instructions, specifying *what* not *how*.

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

## chapter 07 - Hindley-Milner Type Signatures

In **Hindley-Milner**, functions are written as **a -> b** where **a and b are variables for any type**.

```javascript
//  strLength :: String -> Number
var strLength = function(s) {
  return s.length;
}
```
Once a type variable is introduced, there emerges a curious property called [parametricity](http://en.wikipedia.org/wiki/Parametricity). This property states that a function will act on all types in a uniform manner.

Hindley-Milner type signatures are ubiquitous in the functional world. Though they are simple to read and write, it takes time to master the technique of understanding programs through signatures alone. We will add type signatures to each line of code from here on out.

// >>>>>> chapter 08 - Tupperware <<<<<<
// -----------------

// >>>>>> chapter 09 - Monads <<<<<<
// -----------------

// >>>>>> chapter 10 - Applicative Functors <<<<<<
// -----------------
