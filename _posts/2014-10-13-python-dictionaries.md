---
title: Python Dictionaries
author: Aaron Moradi
layout: post
permalink: /python-dictionaries/
categories: python, programming
excerpt: <p>Python, in addition to those nifty data structures&#8211;tuples and arrays&#8211;, provides another...</p>
---
Python, in addition to those nifty data structures&#8211;tuples and arrays&#8211;, provides another way of collecting complex data. Wait for it&#8230; Dictionaries! Not to be confused with the type of book used to look up word definitions, dictionaries, are actual data structures. The *key* difference is that they use KEYS to assign values instead of indices.

### Example
```python
    listA = [1,2,3,4]
    dictA = {"one":1, "two":2, "three":3, "four":4}

    print listA[1], dictA["one"]
```
### Syntax
```python
    dictX = {"KEY":VALUE, "KEY":VALUE, "KEY":VALUE}
```

Where KEY is an immutable type, e.g. a String, tuple, int, float.  
And VALUE can be of any type.

## Methods

dict.clear()
:   Removes all elements of dictionary dict

dict.copy()
:   Returns a shallow copy of dictionary dict

dict.fromkeys()
:   Create a new dictionary with keys from seq and values set to value.

dict.get(key, default=None)
:   For key key, returns value or default if key not in dictionary

dict.has_key(key)
:   Returns true if key in dictionary dict, false otherwise

dict.items()
:   Returns a list of dict&#8217;s (key, value) tuple pairs

dict.keys()
:   Returns list of dictionary dict&#8217;s keys

dict.setdefault(key, default=None)
:   Similar to get(), but will set dict[key]=default if key is not already in dict

dict.update(dict2)
:   Adds dictionary dict2&#8217;s key-values pairs to dict

dict.values()
:   Returns list of dictionary dict&#8217;s values

## Functions

cmp(dict1, dict2)
:   Compares elements of both dict.

len(dict)
:   Gives the total length of the dictionary. This would be equal to the number of items in the dictionary.

str(dict)
:   Produces a printable string representation of a dictionary

type(variable)
:   Returns the type of the passed variable. If passed variable is dictionary, then it would return a dictionary type.

## Looping
```python
    
    for k in ID.keys():
        print ID[k]   # prints number associated with each key.
    
    for key,value in ID.items():
        print key,":", value      # prints each key-value pair.
```
<div class="footnote">
  <h3>
    Footnotes
  </h3>
  
  <ul>
    <li>
      <a href="http://www.cs.hofstra.edu/~cscccl/csc15p/hashtables.py" target="_blank">http://www.cs.hofstra.edu/~cscccl/csc15p/hashtables.py</a>
    </li>
    <li>
      <a href="http://www.tutorialspoint.com/python/python_dictionary.htm" target="_blank">http://www.tutorialspoint.com/python/python_dictionary.htm</a>
    </li>
  </ul>
</div>
