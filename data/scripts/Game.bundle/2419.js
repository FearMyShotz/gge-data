Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAllianceTopicDeleteVO(t) {
    var i = this;
    i.TID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).TID = t;
    return i;
  }
  n.__extends(C2SAllianceTopicDeleteVO, e);
  C2SAllianceTopicDeleteVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ALLIANCE_TOPIC_DELETE;
  };
  return C2SAllianceTopicDeleteVO;
}(o.BasicCommandVO);
exports.C2SAllianceTopicDeleteVO = s;