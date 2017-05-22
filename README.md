# textnode-offset

Get the offset of a character by wrapping it in a textNode.

# Demo

[https://lab.miguelmota.com/textnode-offset](https://lab.miguelmota.com/textnode-offset)

# Install

```bash
npm install textnode-offset
```

```bash
bower install textnode-offset
```

# Usage

```html
<div id="text">Programs must be written for people to read, and only incidentally for machines to execute.</div>
```

```javascript
var parentElement = document.getElementById('text');
var index = 20;
var offset = textNodeOffset(parentElement, index);

console.log(offset);
//
{
  "left": 148.875,
  "top": 110.875
}
```

# License

MIT
