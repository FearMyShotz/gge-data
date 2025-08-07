Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAllianceMemberAquaPoints(t) {
    var i = this;
    i.AID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).AID = t;
    return i;
  }
  n.__extends(C2SAllianceMemberAquaPoints, e);
  C2SAllianceMemberAquaPoints.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ALLIANCE_MEMBER_AQUA_POINTS_EVENT;
  };
  return C2SAllianceMemberAquaPoints;
}(o.BasicCommandVO);
exports.C2SAllianceMemberAquaPoints = s;