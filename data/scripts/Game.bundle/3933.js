Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = function (e) {
  function StatusIconSeasonGacha_Christmas() {
    return e.call(this, "Btn_ChristmasGacha") || this;
  }
  n.__extends(StatusIconSeasonGacha_Christmas, e);
  Object.defineProperty(StatusIconSeasonGacha_Christmas.prototype, "eventID", {
    get: function () {
      return o.EventConst.EVENTTYPE_CHRISTMAS_GACHA;
    },
    enumerable: true,
    configurable: true
  });
  return StatusIconSeasonGacha_Christmas;
}(require("./841.js").AStatusIconSeasonGacha);
exports.StatusIconSeasonGacha_Christmas = a;