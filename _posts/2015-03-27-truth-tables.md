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

### &and; Conjunction (and)

| A | B | A &and; B |
| - | - | --------- |
| F | F | F         |
| F | T | F         |
| T | F | F         |
| T | T | T         |

### &or; Disjunction (or)

| A | B | A &or; B |
| - | - | -------- |
| F | F | F        |
| F | T | T        |
| T | F | T        |
| T | T | T        |

### &not; Not

| A | &not; A |
| - | ------- |
| F | T       |
| T | F       |

### &rarr; Implication (if, then)

| A | B | A &rarr; B |
| - | - | ---------- |
| F | F | T          |
| F | T | T          |
| T | F | F          |
| T | T | T          |

### &harr; If, and, Only If

| A | B | A &harr; B |
| - | - | ---------- |
| F | F | T          |
| F | T | F          |
| T | F | F          |
| T | T | T          |

### XOR Exclusive-Or

| A | B | A XOR B |
| - | - | ------- |
| F | F | F       |
| F | T | T       |
| T | F | T       |
| T | T | F       |

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