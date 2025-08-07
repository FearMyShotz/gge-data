Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ClientConstUtils() {}
  ClientConstUtils.capitalizeFirstLetter = function (e, t = true) {
    var i = e.substr(0, 1);
    var n = e.substr(1, e.length);
    if (t) {
      n.toLowerCase();
    }
    return i.toUpperCase() + n;
  };
  ClientConstUtils.lowercaseFirstLetter = function (e) {
    var t = e.substr(0, 1);
    var i = e.substr(1, e.length);
    return t.toLowerCase() + i;
  };
  ClientConstUtils.getTrimmedText = function (e) {
    return e.replace(/^\s+|\s+$/g, "");
  };
  ClientConstUtils.filterBBCodesFromText = function (e) {
    for (var t = [/\[i](.*?)\[\/i]/gi, /\[u](.*?)\[\/u]/gi, /\[url=.*?](.*?)\[\/url]/gi, /\[color=.*?](.*?)\[\/color]/gi, /\[size=.*?](.*?)\[\/size]/gi, /\[font=.*?](.*?)\[\/font]/gi], i = 0; i < t.length; i++) {
      e = e.replace(t[i], "$1");
    }
    return e;
  };
  ClientConstUtils.getSuffixNumberFromString = function (e) {
    if (e == null || e == "") {
      return -1;
    }
    var t = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var i = "";
    for (var n = l.int(e.length - 1); n >= 0; --n) {
      var o = e.charAt(n);
      if (!(t.indexOf(o) >= 0)) {
        break;
      }
      i = o + i;
    }
    if (i.length <= 0) {
      return -1;
    } else {
      return parseInt(i);
    }
  };
  ClientConstUtils.isMuslim = function () {
    return ["tr", "ar"].indexOf(o.EnvGlobalsHandler.globals.currentCountryLanguageCode) >= 0;
  };
  Object.defineProperty(ClientConstUtils, "isTlfMode", {
    get: function () {
      return o.EnvGlobalsHandler.globals.currentCountryLanguageCode == "ar";
    },
    enumerable: true,
    configurable: true
  });
  ClientConstUtils.chooseSingularOrPluralTextID = function (e, t, i) {
    if (e > 1) {
      return i;
    } else {
      return t;
    }
  };
  ClientConstUtils.getClassFromObject = function (e) {
    var t = s.getQualifiedClassName(e);
    if (ClientConstUtils.CREATEJS_CLASS.indexOf(t) >= 0) {
      return createjs[t];
    } else {
      return a.getDefinitionByName(t);
    }
  };
  ClientConstUtils.isObjectClassOf = function (e, t) {
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && e instanceof o) {
          return true;
        }
      }
    }
    return false;
  };
  ClientConstUtils.checkClassForType = function (e, t) {
    return r.instanceOfClass(e.prototype, s.getQualifiedClassName(t));
  };
  ClientConstUtils.getBooleanFromString = function (e) {
    return e.toLowerCase() == "true" || e != "0";
  };
  ClientConstUtils.getValueOrDefaultFromArray = function (e, t, i) {
    if (e && t < e.length) {
      return e[t];
    } else {
      return i;
    }
  };
  ClientConstUtils.getNameFromClass = function (e) {
    if (e == null) {
      return "null";
    }
    var t = s.getQualifiedClassName(e);
    return t = t.substr(t.lastIndexOf(":") + 1);
  };
  ClientConstUtils.getScaleFactorForFitInBounds = function (e, t) {
    if (t.y - e.y < t.x - e.x) {
      return t.y / e.y;
    } else {
      return t.x / e.x;
    }
  };
  ClientConstUtils.getScaleFactor = function (e, t) {
    return t / e;
  };
  ClientConstUtils.getRandomInt = function (e, t) {
    return Math.floor(e + Math.random() * (t - e + 1));
  };
  ClientConstUtils.getRandomFloat = function (e, t) {
    return e + Math.random() * (t - e);
  };
  ClientConstUtils.distanceSquared = function (e, t) {
    return (e.x - t.x) * (e.x - t.x) + (e.y - t.y) * (e.y - t.y);
  };
  ClientConstUtils.map2String = function (e) {
    var t = "{";
    for (var i = 0, n = Array.from(e.keys()); i < n.length; i++) {
      var o = n[i];
      t += o + "=" + e.get(o) + ", ";
    }
    t = t.substr(0, t.length - 2);
    return t += "}";
  };
  ClientConstUtils.MAX_INT = 2147483647;
  ClientConstUtils.MAX_EMAIL_CHARS = 254;
  ClientConstUtils.CREATEJS_CLASS = ["Container", "MovieClip", "TextField", "Shape", "DisplayObject"];
  return ClientConstUtils;
}();
exports.ClientConstUtils = n;
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./6.js");