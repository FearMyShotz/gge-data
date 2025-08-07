Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function IsoViewStrategy() {
    this._modes = new Map();
    for (var e = 0, t = o.CastleEnum.getEnumListByClass(a.IsoRenderStrategyEnum); e < t.length; e++) {
      var i = t[e];
      this.modes.set(i, false);
    }
  }
  IsoViewStrategy.prototype.isActive = function (e) {
    return this.modes.get(e) == 1;
  };
  Object.defineProperty(IsoViewStrategy.prototype, "isInNormalMode", {
    get: function () {
      if (this.modes != null) {
        for (var e = 0, t = Array.from(this.modes.keys()); e < t.length; e++) {
          var i = t[e];
          if (i !== undefined && this.modes.get(i)) {
            return false;
          }
        }
      }
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewStrategy.prototype, "modes", {
    get: function () {
      return this._modes;
    },
    enumerable: true,
    configurable: true
  });
  return IsoViewStrategy;
}();
exports.IsoViewStrategy = n;
var o = require("./84.js");
var a = require("./122.js");