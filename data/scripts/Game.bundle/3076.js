Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetTrainingProgramInfoVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetTrainingProgramInfoVO, e);
  C2SGetTrainingProgramInfoVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_TRAINING_PROGRAM_INFO;
  };
  return C2SGetTrainingProgramInfoVO;
}(o.BasicCommandVO);
exports.C2SGetTrainingProgramInfoVO = s;