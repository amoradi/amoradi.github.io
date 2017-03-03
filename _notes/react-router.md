---
layout: page
title: React Router
subtitle: https://github.com/ReactTraining/react-router
displayIndex: false
---

`react-router`
- took over determining what components are rendered on each route

`<Route path="/" component={App}>`
- always show App Component
- App Component had 1 job: show any childeren component(s)
- childerend components are defined by nested routes 

```react
// nested routes
<Route path="/" component={App}>
  <IndexRoute component={PostsIndex} />
  <Route component={PostsNew} path="posts/new" />
  <Route component={PostsShow} path="posts/:id" />
</Route>
```

`React Router` replaced App Component in `index.js`
```jsx
// index.js
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
```

`browserHistory` could be replaced with `hashHistory`
