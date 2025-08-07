Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetAllianceTopicsVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetAllianceTopicsVO, e);
  C2SGetAllianceTopicsVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_ALLIANCE_TOPICS;
  };
  return C2SGetAllianceTopicsVO;
}(o.BasicCommandVO);
exports.C2SGetAllianceTopicsVO = s;