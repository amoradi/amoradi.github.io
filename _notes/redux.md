---
layout: page
title: Redux
displayIndex: false
---

## Actions
- are **payloads of information** that **send data** from your **application to your store**
- send them to the store using `store.dispatch()`
- plain javaScript objects that must have a `type` property
- describe the fact that something happened

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
- a **reducer** is a **pure function** that takes the **previous state and an action**, and **returns the next state**.

```javascript
(previousState, action) => newState
```

- it's called a reducer because it's the type of function you would pass to `Array.prototype.reduce(reducer, ?initialValue)`.
- it's **very important that the reducer stays pure**
- things you should never do inside a reducer:  
  - mutate its arguments
  - perform side effects like API calls and routing transitions
  - call non-pure functions, e.g. Date.now() or Math.random()


## Store
## Data Flow
## Usage with React
