Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleTroopSupportData() {}
  CastleTroopSupportData.parse_STI = function (e) {
    if (!e) {
      return null;
    }
    var t = new o.CastleTroopSupportVO();
    t.fillFromParamObject(e);
    t.targetActionType = a.ClientConstCastle.ACTION_TYPE_SENDTROUPS;
    return t;
  };
  CastleTroopSupportData.sendTroops = function (e, t, i, n, o, a, l) {
    r.CastleModel.smartfoxClient.sendCommandVO(new s.C2SCreateArmyTravelMovementVO(e.sourceArea.absAreaPos, e.targetArea.absAreaPos, e.getArmy(), e.waitTime, t, i, n ? n.id : 0, o, a, l));
  };
  return CastleTroopSupportData;
}();
exports.CastleTroopSupportData = n;
var o = require("./3768.js");
var a = require("./18.js");
var s = require("./3769.js");
var r = require("./4.js");