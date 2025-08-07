Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SAllianceSetSearchAllianceVO(t) {
    var i = this;
    i.IS = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).IS = a.int(t ? 1 : 0);
    return i;
  }
  n.__extends(C2SAllianceSetSearchAllianceVO, e);
  C2SAllianceSetSearchAllianceVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_ALLIANCE_SET_SEARCH_ALLIANCE;
  };
  return C2SAllianceSetSearchAllianceVO;
}(o.BasicCommandVO);
exports.C2SAllianceSetSearchAllianceVO = r;