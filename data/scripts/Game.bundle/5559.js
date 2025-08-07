Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function MediumBattleWaveVO(e, t = null) {
    this._isPreOrPostWave = false;
    if (t) {
      this.initAsSummary(t);
    } else {
      this.initByParams(e);
    }
  }
  MediumBattleWaveVO.prototype.initAsSummary = function (e) {
    var t = [];
    var i = [];
    if (e != null) {
      for (var n = 0, a = e; n < a.length; n++) {
        var s = a[n];
        if (s !== undefined) {
          t.push(s.attacker);
          i.push(s.defender);
        }
      }
    }
    this._attacker = new o.MediumPlayerBattleWaveVO(null, t, false);
    this._defender = new o.MediumPlayerBattleWaveVO(null, i, true);
  };
  MediumBattleWaveVO.prototype.initByParams = function (e) {
    this._attacker = new o.MediumPlayerBattleWaveVO(e[MediumBattleWaveVO.ATTACKER]);
    this._defender = new o.MediumPlayerBattleWaveVO(e[MediumBattleWaveVO.DEFENDER]);
  };
  Object.defineProperty(MediumBattleWaveVO.prototype, "attacker", {
    get: function () {
      return this._attacker;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MediumBattleWaveVO.prototype, "defender", {
    get: function () {
      return this._defender;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MediumBattleWaveVO.prototype, "gotThroughWall", {
    get: function () {
      return this._attacker.soldierAmountSurvived > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MediumBattleWaveVO.prototype, "isPreOrPostWave", {
    get: function () {
      return this._isPreOrPostWave;
    },
    set: function (e) {
      this._isPreOrPostWave = e;
      this._attacker.isPreOrPostWave = e;
      this._defender.isPreOrPostWave = e;
    },
    enumerable: true,
    configurable: true
  });
  MediumBattleWaveVO.__initialize_static_members = function () {
    MediumBattleWaveVO.ATTACKER = 0;
    MediumBattleWaveVO.DEFENDER = 1;
  };
  return MediumBattleWaveVO;
}();
exports.MediumBattleWaveVO = n;
var o = require("./5560.js");
n.__initialize_static_members();