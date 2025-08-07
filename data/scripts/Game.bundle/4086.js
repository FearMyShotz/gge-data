Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetLostAndFoundListVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetLostAndFoundListVO, e);
  C2SGetLostAndFoundListVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_LOST_AND_FOUND_LIST;
  };
  return C2SGetLostAndFoundListVO;
}(o.BasicCommandVO);
exports.C2SGetLostAndFoundListVO = s;