---
layout: page
title: Redux Form
subtitle: http://redux-form.com/6.5.0/
displayIndex: false
---

At `posts_new.js`
- configured form
- defined validation function

For each field, created an input/textarea and passed in `Redux Form` config object:
`<input type="text" className="form-control" {...categories} />`

Validation
```jsx
<div className="text-help">
  {categories.touched ? categories.error : ''}
</div>
```

