---
title: Standard Deviation Explained
author: Aaron Moradi
layout: post
permalink: /standard-deviation-explained/
categories: probability, statistics
excerpt: <p>How many samples do we need to look at before we can have justified confidence in our answer?</p>
---
How many samples do we need to look at before we can have justified confidence in our answer? This depends on the **variance** in the underlying distribution. Roughly speaking, variance is a measure of how much spread there is in the possible different outcomes.

We can formalize this notion relatively simply by using the concept of **standard deviation**. Informally, the standard deviation tells us what fraction of the values are close to the mean. If many values are relatively close to the mean, the standard deviation is relatively small. If many values are relatively far from the mean, the standard deviation is relatively large. If all values are the same, the standard deviation is zero.

```python
    def stdDev(X):
      """Assumes that X is a list of numbers.
         Returns the standard deviation of X"""
      mean = float(sum(X)/len(X))
      tot = 0.0
      for x in X:
        tot += (x - mean)**2
      return (tot/len(X))**0.5 #Square root of mean difference
``` 

<div class="footnote" id="footnotes">
  <h3>
    Footnotes
  </h3>
  
  <ul>
    <li>
      <a target="_blank" href="https://mitpress.mit.edu/books/introduction-computation-and-programming-using-python-0">Introduction to Computation and Programming Using Python, pp. 160</a>
    </li>
  </ul>
</div>