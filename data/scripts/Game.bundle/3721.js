Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGlobalEffectsSeenVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(C2SGlobalEffectsSeenVO, e);
  C2SGlobalEffectsSeenVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_SEEN_GLOBAL_EFFECTS;
  };
  return C2SGlobalEffectsSeenVO;
}(o.BasicCommandVO);
exports.C2SGlobalEffectsSeenVO = s;