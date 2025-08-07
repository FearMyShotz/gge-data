Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AllianceApplicationListItemVO() {
    this.playerID = 0;
    this.distance = 0;
    this.applicationArivalTimestamp = 0;
  }
  AllianceApplicationListItemVO.prototype.parseItem = function (e) {
    this.playerID = r.int(e.PID);
    this.distance = r.int(e.D);
    this.applicationText = o.TextValide.parseChatJSONMessage(e.AT);
    this.applicationArivalTimestamp = r.int(c.CachedTimer.getCachedTimer() - e.AA * l.ClientConstTime.SEC_2_MILLISEC);
    this.playerOwnerInfo = u.CastleModel.otherPlayerData.getOwnerInfoVO(this.playerID);
  };
  AllianceApplicationListItemVO.prototype.getApplicationDateString = function () {
    var e = r.int((c.CachedTimer.getCachedTimer() - this.applicationArivalTimestamp) * l.ClientConstTime.MILLISEC_2_SEC);
    return a.TimeStringHelper.getTimeToString(e, a.TimeStringHelper.ONE_TIME_FORMAT, s.Localize.text, false, true);
  };
  return AllianceApplicationListItemVO;
}();
exports.AllianceApplicationListItemVO = n;
var o = require("./2.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./28.js");
var c = require("./30.js");
var u = require("./4.js");