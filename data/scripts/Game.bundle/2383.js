Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetAllianceUnreadTopicsCount() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetAllianceUnreadTopicsCount, e);
  C2SGetAllianceUnreadTopicsCount.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_ALLIANCE_UNREAD_TOPICS_COUNT;
  };
  return C2SGetAllianceUnreadTopicsCount;
}(o.BasicCommandVO);
exports.C2SGetAllianceUnreadTopicsCount = s;