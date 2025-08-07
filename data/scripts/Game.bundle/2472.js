Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAllianceSearchMemberListVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SAllianceSearchMemberListVO, e);
  C2SAllianceSearchMemberListVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ALLIANCE_SEARCH_MEMBER_LIST;
  };
  return C2SAllianceSearchMemberListVO;
}(o.BasicCommandVO);
exports.C2SAllianceSearchMemberListVO = s;