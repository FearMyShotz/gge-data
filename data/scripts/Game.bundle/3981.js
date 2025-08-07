Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SStartupLoginBonusCollectVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SStartupLoginBonusCollectVO, e);
  C2SStartupLoginBonusCollectVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_STARTUP_LOGINBONUS_COLLECT;
  };
  return C2SStartupLoginBonusCollectVO;
}(o.BasicCommandVO);
exports.C2SStartupLoginBonusCollectVO = s;