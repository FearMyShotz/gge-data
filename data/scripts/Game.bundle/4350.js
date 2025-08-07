Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function StartupLoginRewardVO() {
    this._startupLoginBonusRewardID = 0;
    this._rewardID = 0;
  }
  StartupLoginRewardVO.prototype.fillFromParamXML = function (e) {
    this._startupLoginBonusRewardID = parseInt(o.CastleXMLUtils.getValueOrDefault("beginnerLoginRewardID", e, "-1", true));
    this._rewardID = parseInt(o.CastleXMLUtils.getValueOrDefault("rewardID", e, "-1", true));
  };
  StartupLoginRewardVO.prototype.setReward = function (e) {
    this._rewardList = e;
  };
  Object.defineProperty(StartupLoginRewardVO.prototype, "startupLoginBonusRewardID", {
    get: function () {
      return this._startupLoginBonusRewardID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StartupLoginRewardVO.prototype, "rewardID", {
    get: function () {
      return this._rewardID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StartupLoginRewardVO.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  return StartupLoginRewardVO;
}();
exports.StartupLoginRewardVO = n;
var o = require("./22.js");