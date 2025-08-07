Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetCastleTransportationBuildingsVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(C2SGetCastleTransportationBuildingsVO, e);
  C2SGetCastleTransportationBuildingsVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_CASTLE_TRASPORTATION_BUILDINGS;
  };
  return C2SGetCastleTransportationBuildingsVO;
}(o.BasicCommandVO);
exports.C2SGetCastleTransportationBuildingsVO = s;