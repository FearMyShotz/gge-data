Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetLaboratoryProgressVO(t) {
    var i = this;
    i.ID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).ID = t;
    return i;
  }
  n.__extends(C2SGetLaboratoryProgressVO, e);
  C2SGetLaboratoryProgressVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_LABORITORY_PROGRESS_EVENT;
  };
  return C2SGetLaboratoryProgressVO;
}(o.BasicCommandVO);
exports.C2SGetLaboratoryProgressVO = s;