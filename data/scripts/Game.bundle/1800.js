Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SShowWelcomeDataVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SShowWelcomeDataVO, e);
  C2SShowWelcomeDataVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_SHOW_WELCOMEDATA;
  };
  return C2SShowWelcomeDataVO;
}(o.BasicCommandVO);
exports.C2SShowWelcomeDataVO = s;