Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = function (e) {
  function StatusIconSeasonGacha_Easter() {
    return e.call(this, "Btn_EasterGacha") || this;
  }
  n.__extends(StatusIconSeasonGacha_Easter, e);
  Object.defineProperty(StatusIconSeasonGacha_Easter.prototype, "eventID", {
    get: function () {
      return o.EventConst.EVENTTYPE_EASTER_GACHA;
    },
    enumerable: true,
    configurable: true
  });
  return StatusIconSeasonGacha_Easter;
}(require("./841.js").AStatusIconSeasonGacha);
exports.StatusIconSeasonGacha_Easter = a;