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
  function ChristmasGachaEventVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ChristmasGachaEventVO, e);
  ChristmasGachaEventVO.prototype.openDialog = function (e = true) {
    a.CastleDialogHandler.getInstance().registerDialogs(s.SeasonGachaEventMainDialog, new r.SeasonGachaEventMainDialogProperties(this));
  };
  Object.defineProperty(ChristmasGachaEventVO.prototype, "animationPos", {
    get: function () {
      return new c(391, 385);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ChristmasGachaEventVO.prototype, "currencyMerchantEventID", {
    get: function () {
      return o.EventConst.EVENTTYPE_APPRENTICE_TOKEN_VENDOR;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ChristmasGachaEventVO.prototype, "eventName", {
    get: function () {
      return "ChristmasGacha";
    },
    enumerable: true,
    configurable: true
  });
  return ChristmasGachaEventVO;
}(l.AGachaEventVO);
exports.ChristmasGachaEventVO = u;