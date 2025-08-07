Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SQuestStarterClickVO(t) {
    var i = this;
    i.QID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).QID = t;
    return i;
  }
  n.__extends(C2SQuestStarterClickVO, e);
  C2SQuestStarterClickVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_QUEST_STARTER_CLICK;
  };
  return C2SQuestStarterClickVO;
}(o.BasicCommandVO);
exports.C2SQuestStarterClickVO = s;