---
title: What Do You Mean, Arithmetic or Geometric?
author: Aaron Moradi
layout: post
permalink: /arithmetic-geometric-means-explained/
categories: probability, statistics
excerpt: <p>Arithmetic Mean and Geometric Mean explained.</p>
---

## Arithmetic Mean

This is the type of mean or average which comes to mind first for most people, quants aside. This calculation is the sum of a series of all numbers divided by the length or count of the series.


```python
    def arithmeticMean(X):
      """Assumes that X is a list of numbers.
         Returns the average (arithmetic mean) of X"""
      mean = float(sum(X)/len(X))
      return mean
``` 

## Geometric Mean

"The central number in a geometric progression (e.g., 9 in 3, 9, 27 ), also calculable as the nth root of a product of n numbers."

Ex. Geometric Mean = 3√(10 × 51.2 × 8) = 16

"Consider your investment returns, for example. Suppose you have invested your savings in the stock market for five years. If your returns each year were 90%, 10%, 20%, 30% and -90%, what would your average return be during this period? Well, taking the simple arithmetic average, you would get an answer of 12%. Not too shabby, you might think.

However, when it comes to annual investment returns, the numbers are not independent of each other. If you lose a ton of money one year, you have that much less capital to generate returns during the following years, and vice versa...

Let's calculate the geometric average: Our returns were 90%, 10%, 20%, 30% and -90%, so we plug them into the formula as [(1.9 x 1.1 x 1.2 x 1.3 x 0.1) ^ 1/5] - 1 (added 1 to annual results b/c of negative %). This equals a geometric average annual return of -20.08%. That's a heck of a lot worse than the 12% arithmetic average we calculated earlier."

```python
    def geometricMean(X):
    """Assumes that X is a list of numbers.
        Returns the geometric average of X"""
    
    n = len(X)
    tot = 1.0
    for x in X:
        tot *= x
      
    return tot**(1/n)
``` 

<div class="footnote" id="footnotes">
  <h3>
    Footnotes
  </h3>
  
  <ul>
    <li>
      <a target="_blank" href="http://www.investopedia.com/terms/a/arithmeticmean.asp">Arithmetic Mean, Investopedia</a>
    </li>
    <li><a target="_blank" href="http://www.investopedia.com/ask/answers/06/geometricmean.asp#ixzz3wCborAub">What is the difference between arithmetic and geometric averages?, Investopedia</a>
    </li>
    <li>
      <a target="_blank" href="https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=geometric%20mean%20definition">Google</a>
    </li>
    <li>
      <a href="https://www.mathsisfun.com/numbers/geometric-mean.html" target="_blank">Math is Fun</a>
    </li>
  </ul>
</div>