Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetAttackableFactionDataVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetAttackableFactionDataVO, e);
  C2SGetAttackableFactionDataVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_ATTACKABLE_FACTION_DATA_EVENT;
  };
  return C2SGetAttackableFactionDataVO;
}(o.BasicCommandVO);
exports.C2SGetAttackableFactionDataVO = s;