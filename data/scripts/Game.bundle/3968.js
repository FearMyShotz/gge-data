Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function LoginBonusDailyRewardVO(e, t, i, n, o) {
    this._day = 0;
    this._day = e;
    this._mainRewards = t;
    this._mainRewardPicked = i;
    this._alliReward = n;
    this._vipReward = o;
  }
  Object.defineProperty(LoginBonusDailyRewardVO.prototype, "day", {
    get: function () {
      return this._day;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoginBonusDailyRewardVO.prototype, "alliReward", {
    get: function () {
      return this._alliReward;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoginBonusDailyRewardVO.prototype, "vipReward", {
    get: function () {
      return this._vipReward;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoginBonusDailyRewardVO.prototype, "mainRewards", {
    get: function () {
      return this._mainRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoginBonusDailyRewardVO.prototype, "mainRewardPicked", {
    get: function () {
      return this._mainRewardPicked;
    },
    enumerable: true,
    configurable: true
  });
  return LoginBonusDailyRewardVO;
}();
exports.LoginBonusDailyRewardVO = n;