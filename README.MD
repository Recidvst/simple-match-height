# Simple Match Height

## A simple javascript height-matching utility function with no dependencies.


e.g. 

```js
// trigger matchheight
function triggerMatchHeights(selector) {
  if (selector === undefined) return false;
  const target = [...document.querySelectorAll(selector)];
  matchSomeHeights(target);
}

triggerMatchHeights('.box');
```
