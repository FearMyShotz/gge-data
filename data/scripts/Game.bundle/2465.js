Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SRedeemWeeklyHonorBonus() {
    return e.call(this) || this;
  }
  n.__extends(C2SRedeemWeeklyHonorBonus, e);
  C2SRedeemWeeklyHonorBonus.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_REDEEM_WEEKLY_HONOR_BONUS;
  };
  return C2SRedeemWeeklyHonorBonus;
}(o.BasicCommandVO);
exports.C2SRedeemWeeklyHonorBonus = s;