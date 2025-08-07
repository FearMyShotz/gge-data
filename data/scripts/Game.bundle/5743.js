Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SRerollTrainingProgramsVO(t, i) {
    var n = this;
    n.P = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).P = a.int(t ? 1 : 0);
    n.LS = i;
    return n;
  }
  n.__extends(C2SRerollTrainingProgramsVO, e);
  C2SRerollTrainingProgramsVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_REROLL_TRAINING_PROGRAM;
  };
  return C2SRerollTrainingProgramsVO;
}(o.BasicCommandVO);
exports.C2SRerollTrainingProgramsVO = r;