(function(root) {

  function textNodeOffset(parentElement, index) {
    if (typeof parentElement === 'undefined') {
      throw new TypeError('Parent element is required.');
    }
    if (typeof index === 'undefined') {
      throw new TypeError('Index is required.');
    }

    var text = parentElement.textContent;
    var offsetPosition = {
      left: 0,
      top: 0
    };

    parentElement.textContent = '';
    for (var i = 0; i < text.length; i++) {
        var textNode = document.createTextNode(text[i]);
        parentElement.appendChild(textNode);
        if (i === Number(index)) {
            var range = document.createRange();
            range.selectNodeContents(textNode);
            var rect = range.getBoundingClientRect();
            offsetPosition.left = rect.left;
            offsetPosition.top = rect.top;
        }
    }

    return offsetPosition;
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = textNodeOffset;
    }
    exports.textNodeOffset = textNodeOffset;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return textNodeOffset;
    });
  } else {
    root.textNodeOffset = textNodeOffset;
  }

})(this);

