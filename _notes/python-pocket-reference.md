---
layout: page
title: Python Pocket Reference, 5th Edition
subtitle:
author: Mark Lutz
publisher: O'Reilly Media (January 2014)
pages: 266
isbn-13: 978-1-4493-5701-6
displayIndex: false
---

## Python Command-Line Usage

```python

python [option*][scriptfile | -c command | -m module | - ][arg*]

```

**python** - denotes the Python interpreter executable with either a full directory path, or the word python that is resolved by the system shell (e.g. via PATH settings).

**option** - command-line options intended for Python itself appear before the specification of the program code to be run.

**arg** - arguments intended for the code to be run appear after the program specification.

## Built-in Types and Operators
```python
# Python 3.X expression operators and precedence

# generator fn result
yield x

# anonymous fn maker (returns x when called)
lambda args: x

# ternary selection (x is evaluated only if y is true)
x if y else z

# logical OR: y is evaluated only if x is false
x or y

# logical AND: y is evaluated only if x is true
x and y

# logical negation
not x

# membership: iterables, sets
x in y, x not in y

# object identity tests
x is y, x is not y

# magnitude comparisons
x < y, x <= y, x > y, x >= y

# equality operators
x == y, x != y

# shift x left, right, by y bits
x << y, x >> y

# addition/concatenation, subtraction/set difference
x + y, x - y

# mulitplication/repetition, remainder/format
x * y, x % y

# division, floor division
x / y, x // y

# power
x**y

# slicing (all 3 bounds optional)
x[i:j:k]

# call (function, method, class, other callable)
x(args)

# attribute reference
x.attr

# tuple, expression, generator expression
(....)

# list, list comprehension
[....]

# dictionary, set, dictionay and set comprehension
{....}
```

## Specific Built-in Types

### Lists

**Lists** are *mutable* sequences of object references accessed by *offset* (position).

```python
# List literals are written as a comma-separated series of values enclosed in square brackets. Various operations construct lists dynamically:

# an empty list
[]

# a 4 item list: indexes 0 through 3
[0, 1, 2, 3]

# nested sublists: L[1][0] fetches 42
L = ['spam', [42, 3.1415], 1.23, {}]

# creates a list of all items in any iterable
L = list('spam')

# creates a list by collecting expression results during it (list comprehension)
L = [x ** 2 for x in range(9)]

# list comprehension expressions anatomy
[ expression | for x in iterable | if condition]
```

**Generator Expressions** - achieve effects similar to list comprehensions, without generating a physical list, instead they create a *generator object* that will return elements one by one in iteration context
```python
ords = (ord(x) for x in aString if x not in skipStr)
```

## Dictionaries

**Dictionaries** are *mutable mappings* of object references accessed by *key*.

In Python 3.X, the keys()/values()/items() methods return iterable *view objects* instead of lists (as in Python 2.X).

```python
# Dictionary literals are written as comma-separated series of key:value pairs inside curly braces.

{}

{'spam': 2, 'eggs': 3}

# d['info'][42] fetches 2
d = {'info': {42: 2, type(''): 2}, 'spam': []}
```

### Tuples
**Tuples** are *immutable* sequences of object references accessed by *offset* (position).

```python
()

(1,2,3,67)

# foo[1][1] fetches 67
foo = (45, ('bar', 67))
```
