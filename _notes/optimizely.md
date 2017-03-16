---
layout: page
title: Optimizely
displayIndex: false
---

## Custom Events Implementation 

info

- “eventName” will be tracked and associated with the appropriate visitor/experiment/variation
- choose a value for “eventName” that correlates with the intent of your goal 
- write down the value you choose for “eventName,” as you will need it later when you create the custom event in the Optimizely dashbaord


### Steps

- login to Optimizely
- from the left-hand rail in the **Campaigns dashboard**, click **Implementation**
- **events** > **Create New Event**
- choose *custom*
- fill in a name, an API name (it helps if the API name is similar to the event name)
- choose category
- `API Name` should match `eventName: "__here__"`
- add code to the site

```javascript
// ensures the optimizely object is defined globally using
window['optimizely'] = window['optimizely'] || [];

// sends a tracking call to Optimizely for the given event name. 
window['optimizely'].push({
  type: "event",
  eventName: ">>API NAME HERE<<"
});
```
