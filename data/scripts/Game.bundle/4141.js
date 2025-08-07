Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SLeaveAreaVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SLeaveAreaVO, e);
  C2SLeaveAreaVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_LEAVE_AREA;
  };
  return C2SLeaveAreaVO;
}(o.BasicCommandVO);
exports.C2SLeaveAreaVO = s;