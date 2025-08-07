Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ActivityRewardVO() {
    this._activityRewardID = 0;
    this._rewardID = 0;
    this._waitingTime = 0;
  }
  ActivityRewardVO.prototype.fillFromParamXML = function (e) {
    this._activityRewardID = parseInt(o.CastleXMLUtils.getValueOrDefault("activityRewardID", e, "-1", true));
    this._rewardID = parseInt(o.CastleXMLUtils.getValueOrDefault("rewardID", e, "-1", true));
    this._waitingTime = parseInt(o.CastleXMLUtils.getValueOrDefault("waitingTime", e, "-1", true));
  };
  ActivityRewardVO.prototype.setReward = function (e) {
    this._rewardList = e;
  };
  Object.defineProperty(ActivityRewardVO.prototype, "activityRewardID", {
    get: function () {
      return this._activityRewardID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ActivityRewardVO.prototype, "rewardID", {
    get: function () {
      return this._rewardID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ActivityRewardVO.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  return ActivityRewardVO;
}();
exports.ActivityRewardVO = n;
var o = require("./22.js");