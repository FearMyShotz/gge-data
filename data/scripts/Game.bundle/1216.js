Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleSplitRunData(e) {
    this._abTests = new Map();
    this.player = e;
  }
  CastleSplitRunData.prototype.getIntParam = function (e, t) {
    var i = this.getParam(e);
    if (i != null) {
      if (typeof i == "number") {
        return o.int(i);
      }
      if (typeof i == "string") {
        return parseInt(i);
      }
    }
    return t;
  };
  CastleSplitRunData.prototype.getBooleanParam = function (e, t = false) {
    var i = this.getParam(e);
    if (i != null) {
      if (typeof i == "number") {
        return i == 1;
      }
      if (typeof i == "boolean") {
        return i;
      }
    }
    return t;
  };
  CastleSplitRunData.prototype.getParam = function (e) {
    if (this._abTests.has(e)) {
      return this._abTests.get(e);
    } else {
      return null;
    }
  };
  CastleSplitRunData.prototype.parse_ATL = function (e) {
    if (e) {
      var t;
      var i;
      this._abTests = new Map();
      for (t in e) {
        var n = e[t];
        for (i in n) {
          if (this._abTests.hasOwnProperty(i)) {
            a.DebugError.handle(new Error("Received double parameter! " + i));
          }
          this._abTests.set(i, n[i]);
        }
      }
      this.abTestDataArrived();
    }
  };
  CastleSplitRunData.prototype.retrieveTestCaseInfos = function () {};
  CastleSplitRunData.prototype.abTestDataArrived = function () {};
  return CastleSplitRunData;
}();
exports.CastleSplitRunData = n;
var o = require("./6.js");
var a = require("./852.js");