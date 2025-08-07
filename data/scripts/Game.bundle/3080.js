Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SActivateTrainingProgramVO(t) {
    var i = this;
    i.S = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).S = t;
    return i;
  }
  n.__extends(C2SActivateTrainingProgramVO, e);
  C2SActivateTrainingProgramVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ACTIVATE_TRAINING_PROGRAM;
  };
  return C2SActivateTrainingProgramVO;
}(o.BasicCommandVO);
exports.C2SActivateTrainingProgramVO = s;