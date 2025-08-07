Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function StringConverter() {}
  StringConverter.unescapeString = function (e) {
    var t = "";
    var n = 0;
    var i = 0;
    var a = e.length;
    do {
      if (!((n = e.indexOf("\\", i)) >= 0)) {
        t += e.substr(i);
        break;
      }
      t += e.substr(i, n - i);
      i = n + 2;
      var s = e.charAt(n + 1);
      switch (s) {
        case "\"":
        case "\\":
          t += s;
          break;
        case "n":
          t += "\n";
          break;
        case "r":
          t += "\r";
          break;
        case "t":
          t += "\t";
          break;
        case "u":
          var r = "";
          var o = i + 4;
          if (o > a) {
            StringConverter.parseError("Unexpected end of input.  Expecting 4 hex digits after \\u.");
          }
          for (var l = i; l < o; l++) {
            var u = e.charAt(l);
            if (!StringConverter.isHexDigit(u)) {
              StringConverter.parseError("Excepted a hex digit, but found: " + u);
            }
            r += u;
          }
          t += String.fromCharCode(parseInt(r, 16));
          i = o;
          break;
        case "f":
          t += "\f";
          break;
        case "/":
          t += "/";
          break;
        case "b":
          t += "\b";
          break;
        default:
          t += "\\" + s;
      }
    } while (i < a);
    return t;
  };
  StringConverter.isDigit = function (e) {
    return e >= "0" && e <= "9";
  };
  StringConverter.isHexDigit = function (e) {
    return StringConverter.isDigit(e) || e >= "A" && e <= "F" || e >= "a" && e <= "f";
  };
  StringConverter.parseError = function (e) {
    throw new Error(e);
  };
  return StringConverter;
}();
exports.StringConverter = i;