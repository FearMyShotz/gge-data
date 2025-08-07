Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = function (e) {
  function StatusIconSeasonGacha_Summer() {
    return e.call(this, "Btn_SummerGacha") || this;
  }
  n.__extends(StatusIconSeasonGacha_Summer, e);
  Object.defineProperty(StatusIconSeasonGacha_Summer.prototype, "eventID", {
    get: function () {
      return o.EventConst.EVENTTYPE_SUMMER_GACHA;
    },
    enumerable: true,
    configurable: true
  });
  return StatusIconSeasonGacha_Summer;
}(require("./1119.js").AStatusIconSeasonGacha);
exports.StatusIconSeasonGacha_Summer = a;