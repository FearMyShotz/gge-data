Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./740.js");
var a = function () {
  function TextsParser() {}
  TextsParser.jsonToMap = function (e, t) {
    var n = new Map();
    if (e) {
      for (var i in e) {
        if (e.hasOwnProperty(i)) {
          var a = e[i];
          for (var s in a) {
            if (a.hasOwnProperty(s)) {
              var r = t ? s : s.toLowerCase();
              var o = TextsParser.formatText(a[s]);
              n.set(r, o);
            }
          }
        }
      }
    }
    return n;
  };
  TextsParser.parseVersionNo = function (e) {
    var t;
    var n = e["@metadata"];
    if (n) {
      t = n.versionNo;
    }
    return t;
  };
  TextsParser.parseDeployTime = function (e) {
    var t;
    var n = e["@metadata"];
    if (n) {
      var a = n.deployTime;
      t = i.TimeUtils.unixToHumanTime(parseInt(a));
    }
    return t;
  };
  TextsParser.parseBranch = function (e) {
    var t;
    var n = e["@metadata"];
    if (n) {
      t = n.branch;
    }
    return t;
  };
  TextsParser.formatText = function (e) {
    return e = (e = e.replace(TextsParser.REGEXP_AMP, "&")).replace(TextsParser.REGEXP_NEWLINES, "\n");
  };
  TextsParser.REGEXP_NEWLINES = /\\n/g;
  TextsParser.REGEXP_AMP = /&amp;/g;
  return TextsParser;
}();
exports.TextsParser = a;