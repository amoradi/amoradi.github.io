---
title: Debounce Functions in JS
author: Aaron Moradi
layout: post
permalink: /debounce-functions-javascript/
categories: javascript, programming
excerpt: <p>A debounce function limits the rate at which a function can fire.</p>
---

A **debounce function** limits the rate at which a function can fire. It is essential to ensuring a given task doesn't fire so often that it inhibits browser performance.<sup><a href="#fn1" id="ref1">1</a></sup> Debounce functions are most often used as a means to regulate user input frequency. Below is an example implementation:<sup><a href="#fn2" id="ref2">2</a></sup> 

```javascript
  function debounce(fn, delay) {
    var timer = null;
    return function () {
      var context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  }

  $('input.username').keypress(debounce(function (event) {
    // do the Ajax request
  }, 250));
```
<div class="footnote">
  <h3>
    Footnotes
  </h3>
  
  <ul>
    <li>
      <a href="https://davidwalsh.name/javascript-debounce-function" target="_blank" id="fn1">1. davidwalsh.name/javascript-debounce-function</a><a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a>
    </li>
    <li>
      <a href="https://remysharp.com/2010/07/21/throttling-function-calls" target="_blank" id="fn2">2. remysharp.com/2010/07/21/throttling-function-calls</a><a href="#ref2" title="Jump back to footnote 2 in the text.">↩</a>
    </li>
  </ul>
</div>
