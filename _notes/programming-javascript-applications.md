---
layout: page
title: Programming JavaScript Applications
displayIndex: false
author: Eric Elliott
---

## Chapter 4

### Module Pattern

```javascript
// http://chimera.labs.oreilly.com/books/1234000000262/ch04.html#the_module_pattern
// "app" is the global variable project/app name
// one global variable is set
// "app" is passed as the actual parameter, or argument, for exports
var app = {};

(function (exports) {

  (function (exports) {
    var api = {
        moduleExists: function test() {
          return true;
        }
      };
    $.extend(exports, api);
  }((typeof exports === 'undefined') ?
      window : exports));

}(app));
```
