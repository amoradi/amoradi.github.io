---
title: Truth Tables
author: Aaron Moradi
layout: post
permalink: /truth-tables/
excerpt: <p>Truth tables give us operational definitions of the important logical connectives, separate from and independent of their use in ordinary language. They also provide a mechanism whereby the truth values of complicated expressions may be worked out.</p>
categories: logic
---
> Truth tables give us operational definitions of the important logical connectives, separate from and independent of their use in ordinary language. **They also provide a mechanism whereby the truth values of complicated expressions may be worked out.**
> 
> **Truth tables present an exhaustive enumeration** of the truth values of the component propositions of a logical expression.<sup><small><a href="#footnotes">1</a></small></sup>

## Logical Connectives

<table>
  <tr>
    <td>
      and
    </td>
    
    <td>
      binary
    </td>
    
    <td>
      &and;
    </td>
  </tr>
  
  <tr>
    <td>
      or
    </td>
    
    <td>
      binary
    </td>
    
    <td>
      &or;
    </td>
  </tr>
  
  <tr>
    <td>
      not
    </td>
    
    <td>
      unary
    </td>
    
    <td>
      &not;
    </td>
  </tr>
  
  <tr>
    <td>
      if, then (implication)
    </td>
    
    <td>
      binary
    </td>
    
    <td>
      &rarr;
    </td>
  </tr>
  
  <tr>
    <td>
      if, and, only if
    </td>
    
    <td>
      binary
    </td>
    
    <td>
      &harr;
    </td>
  </tr>
  
  <tr>
    <td>
      exclusive-or
    </td>
    
    <td>
      binary
    </td>
    
    <td>
      XOR
    </td>
  </tr>
</table>

<h3>&and; Conjunction (and)</h3>
<table>
<tr>
<th>A</th>
<th>B</th>
<th>A &and; B</th>
</tr>
<tr>
<td>F</td>
<td>F</td>
<td>F</td>
</tr>
<tr>
<td>F</td>
<td>T</td>
<td>F</td>
</tr>
<tr>
<td>T</td>
<td>F</td>
<td>F</td>
</tr>
<tr>
<td>T</td>
<td>T</td>
<td>T</td>
</tr>
</table>
<h3>&or; Disjunction (or)</h3>
<table>
<tr>
<th>A</th>
<th>B</th>
<th>A &or; B</th>
</tr>
<tr>
<td>F</td>
<td>F</td>
<td>F</td>
</tr>
<tr>
<td>F</td>
<td>T</td>
<td>T</td>
</tr>
<tr>
<td>T</td>
<td>F</td>
<td>T</td>
</tr>
<tr>
<td>T</td>
<td>T</td>
<td>T</td>
</tr>
</table>
<h3>&not; Not</h3>
<table>
<tr>
<th>A</th>
<th>&not; A</th>
</tr>
<tr>
<td>F</td>
<td>T</td>
</tr>
<tr>
<td>T</td>
<td>F</td>
</tr>
</table>
<h3>&rarr; Implication (if, then)</h3>
<table>
<tr>
<th>A</th>
<th>B</th>
<th>A &rarr; B</th>
</tr>
<tr>
<td>F</td>
<td>F</td>
<td>T</td>
</tr>
<tr>
<td>F</td>
<td>T</td>
<td>T</td>
</tr>
<tr>
<td>T</td>
<td>F</td>
<td>F</td>
</tr>
<tr>
<td>T</td>
<td>T</td>
<td>T</td>
</tr>
</table>
<h3>&harr; If, and, Only If</h3>
<table>
<tr>
<th>A</th>
<th>B</th>
<th>A &harr; B</th>
</tr>
<tr>
<td>F</td>
<td>F</td>
<td>T</td>
</tr>
<tr>
<td>F</td>
<td>T</td>
<td>F</td>
</tr>
<tr>
<td>T</td>
<td>F</td>
<td>F</td>
</tr>
<tr>
<td>T</td>
<td>T</td>
<td>T</td>
</tr>
</table>
<h3>XOR Exclusive-Or</h3>
<table>
<tr>
<th>A</th>
<th>B</th>
<th>A XOR B</th>
</tr>
<tr>
<td>F</td>
<td>F</td>
<td>F</td>
</tr>
<tr>
<td>F</td>
<td>T</td>
<td>T</td>
</tr>
<tr>
<td>T</td>
<td>F</td>
<td>T</td>
</tr>
<tr>
<td>T</td>
<td>T</td>
<td>F</td>
</tr>
</table>

<div class="footnote" id="footnotes">
  <h3>
    Footnotes
  </h3>
  
  <ul>
    <li>
      <a target="_blank" href="http://www.amazon.com/The-Essence-Logic-John-Kelly/dp/0133963756">The Essence of Logic</a>
    </li>
  </ul>
</div>