Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./6.js");
var a = function () {
  function CastleXMLUtils() {}
  CastleXMLUtils.getIntArrayFromString = function (e, t) {
    for (var i = e.split(t), n = new Array(), o = 0; o < i.length; ++o) {
      if (i[o] != "") {
        n.push(parseInt(i[o]));
      }
    }
    return n;
  };
  CastleXMLUtils.getValueOrDefault = function (e, t, i, n = false) {
    if (t.attribute === undefined) {
      if (t[e]) {
        return t[e];
      } else {
        return i;
      }
    }
    var o = t.attribute(e);
    if (o) {
      return o;
    }
    if (n) {
      throw new Error("--> Error: Required XML-Entry \"" + e + "\" is missing");
    }
    return i;
  };
  CastleXMLUtils.getStringAttribute = function (e, t, i = "") {
    return CastleXMLUtils.getValueOrDefault(e, t, i);
  };
  CastleXMLUtils.getBooleanAttribute = function (e, t, i = false) {
    return CastleXMLUtils.getValueOrDefault(e, t, String(i ? 1 : 0)) != "0";
  };
  CastleXMLUtils.getIntAttribute = function (e, t, i = 0) {
    return parseInt(CastleXMLUtils.getValueOrDefault(e, t, String(i)));
  };
  CastleXMLUtils.getNumberAttribute = function (e, t, i = 0) {
    return parseFloat(CastleXMLUtils.getValueOrDefault(e, t, String(i)));
  };
  CastleXMLUtils.getUintAttribute = function (e, t, i = 0) {
    return o.int(CastleXMLUtils.getValueOrDefault(e, t, String(i)));
  };
  CastleXMLUtils.createIntListFromAttribute = function (e, t, i = ",") {
    return CastleXMLUtils.createIntListFromString(CastleXMLUtils.getValueOrDefault(e, t, ""), i);
  };
  CastleXMLUtils.createIntListFromString = function (e, t = ",") {
    var i = [];
    if (e != "") {
      var n = e.split(t);
      if (n != null) {
        for (var o = 0, a = n; o < a.length; o++) {
          var s = a[o];
          if (s !== undefined && s != "") {
            i.push(parseInt(s));
          }
        }
      }
    }
    return i;
  };
  CastleXMLUtils.createDicFromXmlNode = function (e, t, i, o = "id", a = "parseXml") {
    var s = new Map();
    for (var r = 0, l = e[t]; r < l.length; r++) {
      var c = l[r];
      var u = new i();
      var d = u[a];
      if (d) {
        d.apply(u, [c]);
      } else {
        n.error("CastleXMLUtils.createDicFromXmlNode(): parseFunction '" + a + "' does not exist.");
      }
      var p = u[o];
      if (p != null) {
        s.set(p, u);
      } else {
        n.error("CastleXMLUtils.createDicFromXmlNode(): id '" + o + "' does not exist.");
      }
    }
    return s;
  };
  return CastleXMLUtils;
}();
exports.CastleXMLUtils = a;