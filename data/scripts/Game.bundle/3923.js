Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetSocialPIDVO(t) {
    var i = e.call(this) || this;
    i.PLN = t;
    return i;
  }
  n.__extends(C2SGetSocialPIDVO, e);
  C2SGetSocialPIDVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_SOCIAL_PID;
  };
  return C2SGetSocialPIDVO;
}(o.BasicCommandVO);
exports.C2SGetSocialPIDVO = s;