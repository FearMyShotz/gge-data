Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./9.js");
var s = require("./669.js");
var r = require("./670.js");
var l = require("./557.js");
var c = createjs.Point;
var u = function (e) {
  function SummerGachaEventVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SummerGachaEventVO, e);
  SummerGachaEventVO.prototype.openDialog = function (e = true) {
    a.CastleDialogHandler.getInstance().registerDialogs(s.SeasonGachaEventMainDialog, new r.SeasonGachaEventMainDialogProperties(this));
  };
  Object.defineProperty(SummerGachaEventVO.prototype, "animationPos", {
    get: function () {
      return new c(391, 385);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SummerGachaEventVO.prototype, "currencyMerchantEventID", {
    get: function () {
      return o.EventConst.EVENTTYPE_APPRENTICE_TOKEN_VENDOR;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SummerGachaEventVO.prototype, "eventName", {
    get: function () {
      return "SummerGacha";
    },
    enumerable: true,
    configurable: true
  });
  return SummerGachaEventVO;
}(l.AGachaEventVO);
exports.SummerGachaEventVO = u;