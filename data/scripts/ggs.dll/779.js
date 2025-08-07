Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./122.js");
var s = function (e) {
  function AgeCheck(t, n, i, a, s, r) {
    var o = e.call(this, t, r) || this;
    o._id = n;
    o._backgroundColor = i;
    o._age = a;
    o._textId = s;
    AgeCheck._values.push(o);
    return o;
  }
  i.__extends(AgeCheck, e);
  Object.defineProperty(AgeCheck, "values", {
    get: function () {
      return AgeCheck._values.concat();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AgeCheck, "None", {
    get: function () {
      return AgeCheck._none;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AgeCheck, "All", {
    get: function () {
      return AgeCheck._all;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AgeCheck, "OverTwelve", {
    get: function () {
      return AgeCheck._overTwelve;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AgeCheck, "OverFifteen", {
    get: function () {
      return AgeCheck._overFifteen;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AgeCheck, "OverEighteen", {
    get: function () {
      return AgeCheck._overEighteen;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AgeCheck.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AgeCheck.prototype, "backgroundColor", {
    get: function () {
      return this._backgroundColor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AgeCheck.prototype, "age", {
    get: function () {
      return this._age;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AgeCheck.prototype, "textId", {
    get: function () {
      return this._textId;
    },
    enumerable: true,
    configurable: true
  });
  AgeCheck.getById = function (e) {
    return this.getByProperty(AgeCheck, "id", e, AgeCheck.None);
  };
  AgeCheck._values = [];
  AgeCheck._none = new AgeCheck("None", 0, 16777215, 0, "generic_alert_information", a.BasicEnum.instantiationKey);
  AgeCheck._all = new AgeCheck("All", 1, 9225791, -1, "generic_alert_information", a.BasicEnum.instantiationKey);
  AgeCheck._overTwelve = new AgeCheck("OverTwelve", 2, 5290987, 12, "generic_alert_information", a.BasicEnum.instantiationKey);
  AgeCheck._overFifteen = new AgeCheck("OverFifteen", 3, 16765440, 15, "generic_alert_information", a.BasicEnum.instantiationKey);
  AgeCheck._overEighteen = new AgeCheck("OverEighteen", 4, 14883619, 18, "generic_alert_information", a.BasicEnum.instantiationKey);
  return AgeCheck;
}(a.BasicEnum);
exports.AgeCheck = s;