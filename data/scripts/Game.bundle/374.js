Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetDetailPlayerInfo(t) {
    var i = this;
    i.PID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).PID = t;
    return i;
  }
  n.__extends(C2SGetDetailPlayerInfo, e);
  C2SGetDetailPlayerInfo.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_DETAILPLAYERINFO;
  };
  return C2SGetDetailPlayerInfo;
}(o.BasicCommandVO);
exports.C2SGetDetailPlayerInfo = s;