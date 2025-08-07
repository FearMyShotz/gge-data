Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function PrimeTimeSkinEventEventVO() {
    var t = this;
    t._skinName = "";
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(PrimeTimeSkinEventEventVO, e);
  PrimeTimeSkinEventEventVO.prototype.parseBasicsFromParamObject = function (t) {
    e.prototype.parseBasicsFromParamObject.call(this, t);
    this._skinName = t.S;
  };
  Object.defineProperty(PrimeTimeSkinEventEventVO.prototype, "skinName", {
    get: function () {
      return this._skinName;
    },
    enumerable: true,
    configurable: true
  });
  return PrimeTimeSkinEventEventVO;
}(require("./79.js").ASpecialEventVO);
exports.PrimeTimeSkinEventEventVO = a;
o.classImplementsInterfaces(a, "IEventOverviewable");