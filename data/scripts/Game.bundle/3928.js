Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = function (e) {
  function StatusIconSeasonGacha_Anniversary() {
    return e.call(this, "Btn_AnniversaryGacha") || this;
  }
  n.__extends(StatusIconSeasonGacha_Anniversary, e);
  Object.defineProperty(StatusIconSeasonGacha_Anniversary.prototype, "eventID", {
    get: function () {
      return o.EventConst.EVENTTYPE_ANNIVERSARY_GACHA;
    },
    enumerable: true,
    configurable: true
  });
  return StatusIconSeasonGacha_Anniversary;
}(require("./841.js").AStatusIconSeasonGacha);
exports.StatusIconSeasonGacha_Anniversary = a;