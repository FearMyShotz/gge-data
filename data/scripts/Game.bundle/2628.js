Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetFactionBalance() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetFactionBalance, e);
  C2SGetFactionBalance.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_FACTION_BALANCE;
  };
  return C2SGetFactionBalance;
}(o.BasicCommandVO);
exports.C2SGetFactionBalance = s;