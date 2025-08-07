Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetSpyInfo(t, i, n) {
    var o = this;
    o.TX = 0;
    o.TY = 0;
    o.KID = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).TX = t;
    o.TY = i;
    o.KID = n;
    return o;
  }
  n.__extends(C2SGetSpyInfo, e);
  C2SGetSpyInfo.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_SPY_INFO;
  };
  return C2SGetSpyInfo;
}(o.BasicCommandVO);
exports.C2SGetSpyInfo = s;