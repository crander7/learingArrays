var string = "Hello World";

function reversed(str) {
  var tempStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    tempStr += str[i];
  }
  str = tempStr;
  return str;
}

console.log(reversed(string));
