Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./30.js");
var o = require("./28.js");
var a = require("./4.js");
var s = function () {
  function GlobalServerPreviousRunInfoVO() {}
  GlobalServerPreviousRunInfoVO.prototype.parseParams = function (e) {
    if (e.TS) {
      this.tempServerTimeStamp = new Date();
      this.tempServerTimeStamp.setTime(n.CachedTimer.getCachedTimer() - e.TS.ET * o.ClientConstTime.SEC_2_MILLISEC);
      this.tempServerSettingVO = a.CastleModel.tempServerData.getConfigVOByID(e.TS.TSID);
    }
    if (e.ABG) {
      this.abgServerTimeStamp = new Date();
      this.abgServerTimeStamp.setTime(n.CachedTimer.getCachedTimer() - e.ABG.ET * o.ClientConstTime.SEC_2_MILLISEC);
      this.abgServerSettingVO = a.CastleModel.allianceBattlegroundData.getConfigVOByID(e.ABG.TSID);
    }
  };
  return GlobalServerPreviousRunInfoVO;
}();
exports.GlobalServerPreviousRunInfoVO = s;