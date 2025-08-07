Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAllianceActionListVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SAllianceActionListVO, e);
  C2SAllianceActionListVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ALLIANCE_ACTION_LIST;
  };
  return C2SAllianceActionListVO;
}(o.BasicCommandVO);
exports.C2SAllianceActionListVO = s;