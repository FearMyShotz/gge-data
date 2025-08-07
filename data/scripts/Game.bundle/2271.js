Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function HeroDecisionVO(t) {
    var i = this;
    i.HID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).HID = t;
    return i;
  }
  n.__extends(HeroDecisionVO, e);
  HeroDecisionVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_HERO_DECISION_COMMAND;
  };
  return HeroDecisionVO;
}(o.BasicCommandVO);
exports.HeroDecisionVO = s;