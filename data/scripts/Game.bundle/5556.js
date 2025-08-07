Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function DetailedBattleWaveVO(e, t = null, i = false) {
    this.isPreOrPostWave = false;
    this.isSummaryWave = false;
    this.isSummaryWave = i;
    if (t) {
      this.initAsSummary(t);
    } else {
      this.initByParams(e);
    }
  }
  DetailedBattleWaveVO.prototype.initAsSummary = function (e) {
    var t = [];
    var i = [];
    if (e != null) {
      for (var n = 0, a = e; n < a.length; n++) {
        var s = a[n];
        if (s !== undefined) {
          if (s.attacker) {
            s.attacker.isPreOrPostWave = s.isPreOrPostWave && this.isSummaryWave;
          }
          if (s.defender) {
            s.defender.isPreOrPostWave = s.isPreOrPostWave && this.isSummaryWave;
          }
          t.push(s.attacker);
          i.push(s.defender);
        }
      }
    }
    this._attacker = new o.DetailedPlayerBattleWaveVO(null, t, false);
    this._defender = new o.DetailedPlayerBattleWaveVO(null, i, true);
  };
  DetailedBattleWaveVO.prototype.initByParams = function (e) {
    this._attacker = new o.DetailedPlayerBattleWaveVO(e[DetailedBattleWaveVO.ATTACKER]);
    this._defender = new o.DetailedPlayerBattleWaveVO(e[DetailedBattleWaveVO.DEFENDER]);
  };
  Object.defineProperty(DetailedBattleWaveVO.prototype, "attacker", {
    get: function () {
      return this._attacker;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DetailedBattleWaveVO.prototype, "defender", {
    get: function () {
      return this._defender;
    },
    enumerable: true,
    configurable: true
  });
  DetailedBattleWaveVO.__initialize_static_members = function () {
    DetailedBattleWaveVO.ATTACKER = 0;
    DetailedBattleWaveVO.DEFENDER = 1;
  };
  return DetailedBattleWaveVO;
}();
exports.DetailedBattleWaveVO = n;
var o = require("./5557.js");
n.__initialize_static_members();