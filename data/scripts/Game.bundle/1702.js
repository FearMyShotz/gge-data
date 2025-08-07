Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetSLI() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetSLI, e);
  C2SGetSLI.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_STARTUP_LOGINBONUS_INFO;
  };
  return C2SGetSLI;
}(o.BasicCommandVO);
exports.C2SGetSLI = s;