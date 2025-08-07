Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./9.js");
var s = require("./839.js");
var r = require("./840.js");
var l = require("./668.js");
var c = createjs.Point;
var u = function (e) {
  function EasterGachaEventVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(EasterGachaEventVO, e);
  EasterGachaEventVO.prototype.openDialog = function (e = true) {
    a.CastleDialogHandler.getInstance().registerDialogs(s.SeasonGachaEventMainDialog, new r.SeasonGachaEventMainDialogProperties(this));
  };
  Object.defineProperty(EasterGachaEventVO.prototype, "animationPos", {
    get: function () {
      return new c(391, 385);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EasterGachaEventVO.prototype, "currencyMerchantEventID", {
    get: function () {
      return o.EventConst.EVENTTYPE_APPRENTICE_TOKEN_VENDOR;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EasterGachaEventVO.prototype, "eventName", {
    get: function () {
      return "EasterGacha";
    },
    enumerable: true,
    configurable: true
  });
  return EasterGachaEventVO;
}(l.AGachaEventVO);
exports.EasterGachaEventVO = u;