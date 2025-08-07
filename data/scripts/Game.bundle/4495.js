Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = function (e) {
  function PrimeAlliBonusEventVO() {
    var t = this;
    t._primeFactorInPercent = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(PrimeAlliBonusEventVO, e);
  PrimeAlliBonusEventVO.prototype.parseParamObject = function (e) {
    this._primeFactorInPercent = a.int(e.APP);
  };
  Object.defineProperty(PrimeAlliBonusEventVO.prototype, "primeFactorInPercent", {
    get: function () {
      return this._primeFactorInPercent;
    },
    enumerable: true,
    configurable: true
  });
  PrimeAlliBonusEventVO.prototype.openDialog = function (e = true) {
    this.executeOpenDialog(e, r.CastlePrimeAlliBonusDialog);
  };
  return PrimeAlliBonusEventVO;
}(require("./79.js").ASpecialEventVO);
exports.PrimeAlliBonusEventVO = s;
var r = require("./4496.js");
o.classImplementsInterfaces(s, "IEventOverviewable");