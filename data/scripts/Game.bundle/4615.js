Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetAllianceSubscriberCountEventVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetAllianceSubscriberCountEventVO, e);
  C2SGetAllianceSubscriberCountEventVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_ALLIANCE_SUBSCRIBER_COUNT;
  };
  return C2SGetAllianceSubscriberCountEventVO;
}(o.BasicCommandVO);
exports.C2SGetAllianceSubscriberCountEventVO = s;