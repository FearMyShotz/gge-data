Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ClientCheatsHelper() {}
  ClientCheatsHelper.performCommand = function (e) {
    ClientCheatsHelper.cheatObject ||= new o.ClientCheats();
    for (var t = 0; t < e.length && ClientCheatsHelper.notAlpha(e.charCodeAt(t));) {
      t++;
    }
    var i = s.int(e.indexOf(" ", t));
    if (i < 0) {
      i = s.int(e.length);
    }
    var n = e.substring(t, i);
    var l = e.substr(i + 1).split(" ");
    var c = [];
    var u = ClientCheatsHelper.cheatObject[n];
    if (u && typeof u == "function") {
      for (var d = 0; d < u.length; d++) {
        var p = l[d];
        if (p) {
          c[d] = ClientCheatsHelper.parseValue(p);
        }
      }
      u.apply(ClientCheatsHelper.cheatObject, c);
    } else {
      if (e.charAt(0) != "/") {
        e = "/" + e;
      }
      r.CastleModel.smartfoxClient.sendCommandVO(new a.C2SBugReportVO(e));
    }
  };
  ClientCheatsHelper.parseValue = function (e) {
    if (e.match(/true|false/)) {
      return e == "true";
    }
    if (e.match(/["'].*["']/)) {
      return e = e.replace(/["']/g, "");
    }
    if (e.match(/(.*,+.*)|(\[.*])/)) {
      for (var t = (e = e.replace(/\[|]/g, "")).split(","), i = [], n = 0; n < t.length; n++) {
        i[n] = ClientCheatsHelper.parseValue(t[n]);
      }
      return i;
    }
    var o = parseFloat(e);
    return o || e;
  };
  ClientCheatsHelper.notAlpha = function (e) {
    return e > 122 || e < 65 || e > 90 && e < 97;
  };
  return ClientCheatsHelper;
}();
exports.ClientCheatsHelper = n;
var o = require("./3884.js");
var a = require("./1109.js");
var s = require("./6.js");
var r = require("./4.js");