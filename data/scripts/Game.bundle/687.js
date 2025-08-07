Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetCastleProductionDataVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetCastleProductionDataVO, e);
  C2SGetCastleProductionDataVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_CASTLE_PRODUCTION_DATA;
  };
  return C2SGetCastleProductionDataVO;
}(o.BasicCommandVO);
exports.C2SGetCastleProductionDataVO = s;