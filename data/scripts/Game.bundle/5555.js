Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./4.js");
var o = function () {
  function BattleLogAbilityVO(e) {
    this._waveValues = [];
    this.parseFromParamOj(e);
  }
  BattleLogAbilityVO.prototype.parseFromParamOj = function (e) {
    if (e) {
      this._abilityID = e[0];
      for (var t = 0, i = e[1]; t < i.length; t++) {
        var n = i[t];
        this._waveValues.push({
          waveID: n[0],
          waveValue: n[1],
          flankName: n[2]
        });
      }
    }
  };
  BattleLogAbilityVO.prototype.getValueForWave = function (e, t) {
    var i = 0;
    var n = 0;
    this._waveValues.forEach(function (o) {
      if ((e === undefined || e == o.waveID) && (t === undefined || t == o.flankName)) {
        i = o.waveValue;
        if (Math.abs(n) < Math.abs(i)) {
          n = i;
        }
      }
    });
    if (e === undefined) {
      return n;
    } else {
      return i;
    }
  };
  BattleLogAbilityVO.prototype.isTriggerdInWave = function (e, t) {
    return this._waveValues.some(function (i) {
      return (e === undefined || e == i.waveID) && (t == "" || t == i.flankName);
    });
  };
  Object.defineProperty(BattleLogAbilityVO.prototype, "abilityID", {
    get: function () {
      return this._abilityID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogAbilityVO.prototype, "abilityXmlVO", {
    get: function () {
      return n.CastleModel.generalsData.getAbilityByID(this.abilityID);
    },
    enumerable: true,
    configurable: true
  });
  return BattleLogAbilityVO;
}();
exports.BattleLogAbilityVO = o;