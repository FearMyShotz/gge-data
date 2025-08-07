Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function MediumPlayerBattleWaveVO(e, t = null, i = false) {
    this._isPreOrPostWave = false;
    if (t) {
      this.initAsSummary(t, i);
    } else {
      this.initByParams(e);
    }
  }
  MediumPlayerBattleWaveVO.prototype.initAsSummary = function (e, t) {
    var i = [];
    var n = [];
    var o = [];
    if (e != null) {
      for (var s = 0, r = e; s < r.length; s++) {
        var l = r[s];
        if (l !== undefined) {
          if (l.flankLeft) {
            i.push(l.flankLeft);
          }
          if (l.flankMiddle) {
            n.push(l.flankMiddle);
          }
          if (l.flankRight) {
            o.push(l.flankRight);
          }
        }
      }
    }
    this._flankLeft = new a.FlankInfoVO(null, i, t);
    this._flankMiddle = new a.FlankInfoVO(null, n, t);
    this._flankRight = new a.FlankInfoVO(null, o, t);
  };
  MediumPlayerBattleWaveVO.prototype.initByParams = function (e) {
    if (e.length > MediumPlayerBattleWaveVO.FLANKS_START_AT) {
      var t = typeof e[0] == "number" ? MediumPlayerBattleWaveVO.FLANKS_START_AT : 0;
      this._flankLeft = new a.FlankInfoVO(e[t + o.ClientConstCastle.FLANK_LEFT]);
      this._flankMiddle = new a.FlankInfoVO(e[t + o.ClientConstCastle.FLANK_MIDDLE]);
      this._flankRight = new a.FlankInfoVO(e[t + o.ClientConstCastle.FLANK_RIGHT]);
    }
  };
  MediumPlayerBattleWaveVO.prototype.getFlank = function (e) {
    switch (e) {
      case o.ClientConstCastle.FLANK_LEFT:
        return this.flankLeft;
      case o.ClientConstCastle.FLANK_MIDDLE:
        return this.flankMiddle;
      case o.ClientConstCastle.FLANK_RIGHT:
        return this.flankRight;
    }
    return null;
  };
  Object.defineProperty(MediumPlayerBattleWaveVO.prototype, "flankMiddle", {
    get: function () {
      return this._flankMiddle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MediumPlayerBattleWaveVO.prototype, "flankRight", {
    get: function () {
      return this._flankRight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MediumPlayerBattleWaveVO.prototype, "flankLeft", {
    get: function () {
      return this._flankLeft;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MediumPlayerBattleWaveVO.prototype, "soldierAmountSurvived", {
    get: function () {
      return (this.flankLeft ? this.flankLeft.soldierAmountSurvived : 0) + (this.flankMiddle ? this.flankMiddle.soldierAmountSurvived : 0) + (this.flankRight ? this.flankRight.soldierAmountSurvived : 0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MediumPlayerBattleWaveVO.prototype, "isPreOrPostWave", {
    get: function () {
      return this._isPreOrPostWave;
    },
    set: function (e) {
      this._isPreOrPostWave = e;
      if (this._flankLeft) {
        this._flankLeft.isPreOrPostWave = e;
      }
      if (this._flankMiddle) {
        this._flankMiddle.isPreOrPostWave = e;
      }
      if (this._flankRight) {
        this._flankRight.isPreOrPostWave = e;
      }
    },
    enumerable: true,
    configurable: true
  });
  MediumPlayerBattleWaveVO.__initialize_static_members = function () {
    MediumPlayerBattleWaveVO.FLANKS_START_AT = 1;
  };
  return MediumPlayerBattleWaveVO;
}();
exports.MediumPlayerBattleWaveVO = n;
var o = require("./18.js");
var a = require("./1961.js");
n.__initialize_static_members();