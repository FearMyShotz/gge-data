Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function TempServerMultiplierEventVO() {
    var t = this;
    t._currentMinMultiplier = 1;
    t._currentMaxMultiplier = 1;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(TempServerMultiplierEventVO, e);
  TempServerMultiplierEventVO.prototype.parseParamObject = function (e) {
    this._currentMinMultiplier = e.DPMM;
    this._currentMaxMultiplier = e.DPXM;
  };
  Object.defineProperty(TempServerMultiplierEventVO.prototype, "currentMinMultiplier", {
    get: function () {
      return this._currentMinMultiplier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempServerMultiplierEventVO.prototype, "currentMaxMultiplier", {
    get: function () {
      return this._currentMaxMultiplier;
    },
    enumerable: true,
    configurable: true
  });
  return TempServerMultiplierEventVO;
}(require("./79.js").ASpecialEventVO);
exports.TempServerMultiplierEventVO = a;
o.classImplementsInterfaces(a, "IEventOverviewable");