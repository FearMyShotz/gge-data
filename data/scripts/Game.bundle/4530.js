Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = function (e) {
  function SeasonPassPrimeSaleEventVO() {
    var t = this;
    t._discount = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(SeasonPassPrimeSaleEventVO, e);
  SeasonPassPrimeSaleEventVO.prototype.parseParamObject = function (e) {
    this._discount = a.int(e.DIS);
  };
  Object.defineProperty(SeasonPassPrimeSaleEventVO.prototype, "discount", {
    get: function () {
      return this._discount;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonPassPrimeSaleEventVO;
}(require("./79.js").ASpecialEventVO);
exports.SeasonPassPrimeSaleEventVO = s;
o.classImplementsInterfaces(s, "IEventOverviewable");