Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./3.js");
var s = require("./904.js");
var r = require("./27.js");
var l = function (e) {
  function VIPPackageVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(VIPPackageVO, e);
  Object.defineProperty(VIPPackageVO.prototype, "textVO", {
    get: function () {
      if (this.reward.itemType == c.CollectableEnum.VIP_POINTS) {
        return new o.LocalizedTextVO("dialog_buyVipPoints_pointAmount_v2", [this.reward.amount]);
      } else {
        return new a.TextVO(r.CastleTimeStringHelper.getEventTimeString(this.reward.duration));
      }
    },
    enumerable: true,
    configurable: true
  });
  return VIPPackageVO;
}(s.EventPackageVO);
exports.VIPPackageVO = l;
var c = require("./12.js");