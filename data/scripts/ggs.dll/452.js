Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function HTMLEscaper() {}
  HTMLEscaper.unescape = function (e) {
    var t = e;
    t.replace(/(<([^>]+)>)/gi, "");
    return t = t.split("&percnt;20").join(" ").split(";").join(" ");
  };
  HTMLEscaper.escape = function (e) {
    return e;
  };
  return HTMLEscaper;
}();
exports.HTMLEscaper = i;