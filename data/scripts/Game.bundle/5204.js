Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetAllMovementsVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetAllMovementsVO, e);
  C2SGetAllMovementsVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_ALL_MOVEMENTS;
  };
  return C2SGetAllMovementsVO;
}(o.BasicCommandVO);
exports.C2SGetAllMovementsVO = s;