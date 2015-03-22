var textInput = document.getElementById('textInput');
var textOutput = document.getElementById('textOutput');
var indexInput = document.getElementById('indexInput');
var output = document.getElementById('output');
var submit = document.getElementById('submit');

function renderOutput(context) {
  textOutput.innerHTML = context.value;
}

renderOutput(textInput);

textInput.onkeyup = function() {
  renderOutput(this);
};

submit.onclick = function(event) {
  var offset = textNodeOffset(textOutput, indexInput.value);
  var textNode = document.createTextNode(JSON.stringify(offset, null, 2));
  output.innerHTML = '';
  output.appendChild(textNode);
};
