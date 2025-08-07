Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetAquaPoints() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetAquaPoints, e);
  C2SGetAquaPoints.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_AQUAPOINTS;
  };
  return C2SGetAquaPoints;
}(o.BasicCommandVO);
exports.C2SGetAquaPoints = s;