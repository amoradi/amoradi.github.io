---

---

(function() {
  'use strict';
  
  var proto = Object.create(HTMLElement.prototype);
    
  // @desc    creates a node with a host elem's attribute
  // @params  attribute - attribute on host element <string>
  //          element   - created child element <string>
  //          class     - child's class name(s) <array>
  proto.createNode = function(attribute, elem, classes) {
    var attrValue = this.getAttribute(attribute[0]),
        child = document.createElement(elem),
        beforeText = attribute[1] || '',
        afterText = attribute[2] || '';

    if (attrValue) {
      
      if (elem === 'img') {
        child.src = attrValue;
      } else {
        child.textContent = beforeText + attrValue + afterText;
      }
    }

    if (classes) {
        child.setAttribute('class', classes.join(' '));
    }

    return child;
  };
  
  proto.createdCallback = function() {

    // append children to host
    this.appendChild(this.createNode(['data-img'], 'img'));
    var div = document.createElement('div');
    div.appendChild(this.createNode(['data-title'], 'h2'));
    div.appendChild(this.createNode(['data-subtitle'], 'span', ['subtitle']));
    div.appendChild(this.createNode(['data-author', 'by '], 'span'));
    div.appendChild(this.createNode(['data-pages', '', ' pages'], 'span'));
    div.appendChild(this.createNode(['data-publisher'], 'span'));
    div.appendChild(this.createNode(['data-isbn-13'], 'span'));
    this.appendChild(div);
    var review = this.createNode(['data-review'], 'blockquote');
    var author = this.createNode(['data-review-author'], 'span', ['author']);
    review.appendChild(author);
    this.appendChild(review);
  };
  
  document.registerElement('book-preview', {
    extends: 'figure',
    prototype: proto
  });
     
})();
