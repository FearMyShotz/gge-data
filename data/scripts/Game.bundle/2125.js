Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetFactionPointsVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetFactionPointsVO, e);
  C2SGetFactionPointsVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_FACTION_POINTS;
  };
  return C2SGetFactionPointsVO;
}(o.BasicCommandVO);
exports.C2SGetFactionPointsVO = s;