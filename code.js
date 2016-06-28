var string = "Hello World";

function reversed(str) {
  var tempStr = "";
  for (var i = 0; i < str.length; i++) {
    tempStr += str[i];
  }
  str = tempStr;
}

reversed(string);

console.log(string);
