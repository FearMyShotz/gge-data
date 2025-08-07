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
  function AnniversaryGachaEventVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AnniversaryGachaEventVO, e);
  AnniversaryGachaEventVO.prototype.openDialog = function (e = true) {
    a.CastleDialogHandler.getInstance().registerDialogs(s.SeasonGachaEventMainDialog, new r.SeasonGachaEventMainDialogProperties(this));
  };
  Object.defineProperty(AnniversaryGachaEventVO.prototype, "animationPos", {
    get: function () {
      return new c(391, 385);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AnniversaryGachaEventVO.prototype, "currencyMerchantEventID", {
    get: function () {
      return o.EventConst.EVENTTYPE_APPRENTICE_TOKEN_VENDOR;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AnniversaryGachaEventVO.prototype, "eventName", {
    get: function () {
      return "AnniversaryGacha";
    },
    enumerable: true,
    configurable: true
  });
  return AnniversaryGachaEventVO;
}(l.AGachaEventVO);
exports.AnniversaryGachaEventVO = u;