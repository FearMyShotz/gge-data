Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SIsoResourceCitizenVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SIsoResourceCitizenVO, e);
  C2SIsoResourceCitizenVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_RESOURCE_CITIZEN;
  };
  return C2SIsoResourceCitizenVO;
}(o.BasicCommandVO);
exports.C2SIsoResourceCitizenVO = s;