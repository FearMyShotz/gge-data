Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetSpyLog(t) {
    var i = this;
    i.MID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).MID = t;
    return i;
  }
  n.__extends(C2SGetSpyLog, e);
  C2SGetSpyLog.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_SPY_LOG_DETAIL;
  };
  return C2SGetSpyLog;
}(o.BasicCommandVO);
exports.C2SGetSpyLog = s;