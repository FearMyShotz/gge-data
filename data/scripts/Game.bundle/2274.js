Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SConfirmTermsAndConditionVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SConfirmTermsAndConditionVO, e);
  C2SConfirmTermsAndConditionVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_CONFIRM_TERMS_AND_CONDITION;
  };
  return C2SConfirmTermsAndConditionVO;
}(o.BasicCommandVO);
exports.C2SConfirmTermsAndConditionVO = s;