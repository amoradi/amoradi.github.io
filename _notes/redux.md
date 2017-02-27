---
layout: page
title: Redux
displayIndex: false
---

## Actions
- are **payloads of information** that **send data** from your **application to your store**
- send them to the store using `store.dispatch()`
- plain javaScript objects that must have a `type` property

```javascript
{
  type: ADD_TODO,
  text: 'Build my first Redux app'
}
```

## Action Creators
- functions that return **actions**

```javascript
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
```

## Reducers
## Store
## Data Flow
## Usage with React
