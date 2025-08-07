Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SChangeAllianceLanguageVO(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).ALL = t;
    return i;
  }
  n.__extends(C2SChangeAllianceLanguageVO, e);
  C2SChangeAllianceLanguageVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_CHANGE_ALLIANCE_LANGUAGE;
  };
  return C2SChangeAllianceLanguageVO;
}(o.BasicCommandVO);
exports.C2SChangeAllianceLanguageVO = s;