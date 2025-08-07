Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./1.js");
var a = function () {
  function EffectValueIdList() {
    this.idList = [];
  }
  EffectValueIdList.prototype.parseFromValueString = function (e) {
    this.idList = [];
    var t = e.split("#");
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          this.idList.push(parseInt(o));
        }
      }
    }
    return this;
  };
  EffectValueIdList.prototype.parseFromValueArray = function (e) {
    this.idList = [];
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          this.idList.push(n);
        }
      }
    }
    return this;
  };
  EffectValueIdList.prototype.add = function (e, t) {
    if (o.instanceOfClass(e, "EffectValueIdList")) {
      for (var i = 0, n = e.rawValues; i < n.length; i++) {
        var a = n[i];
        if (a !== undefined) {
          this.idList.push(a);
        }
      }
    }
    return this;
  };
  Object.defineProperty(EffectValueIdList.prototype, "textReplacements", {
    get: function () {
      return this.idList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueIdList.prototype, "rawValues", {
    get: function () {
      return this.idList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueIdList.prototype, "strength", {
    get: function () {
      return this.idList[0];
    },
    enumerable: true,
    configurable: true
  });
  EffectValueIdList.prototype.clone = function () {
    return new EffectValueIdList().parseFromValueArray(this.rawValues);
  };
  EffectValueIdList.prototype.hasID = function (e) {
    return this.idList.indexOf(e) > -1;
  };
  EffectValueIdList.prototype.getContextTextReplacements = function (e) {
    return this.textReplacements;
  };
  return EffectValueIdList;
}();
exports.EffectValueIdList = a;
n.classImplementsInterfaces(a, "IEffectValue");