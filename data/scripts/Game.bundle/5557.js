Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function DetailedPlayerBattleWaveVO(e, t = null, i = false) {
    this.isPreOrPostWave = false;
    if (t) {
      this.initAsSummary(t, i);
    } else {
      this.initByParams(e);
    }
  }
  DetailedPlayerBattleWaveVO.prototype.initAsSummary = function (e, t) {
    var i = [];
    var n = [];
    var a = [];
    var s = [];
    if (e != null) {
      for (var r = 0, l = e; r < l.length; r++) {
        var c = l[r];
        if (c !== undefined) {
          if (c.flankLeft) {
            c.flankLeft.isPreOrPostWave = c.isPreOrPostWave;
            i.push(c.flankLeft);
          }
          if (c.flankMiddle) {
            c.flankMiddle.isPreOrPostWave = c.isPreOrPostWave;
            n.push(c.flankMiddle);
          }
          if (c.flankRight) {
            c.flankRight.isPreOrPostWave = c.isPreOrPostWave;
            a.push(c.flankRight);
          }
          if (c.courtyard) {
            c.courtyard.isPreOrPostWave = c.isPreOrPostWave;
            s.push(c.courtyard);
          }
        }
      }
    }
    this._flankLeft = new o.FlankVO(null, i, t);
    this._flankMiddle = new o.FlankVO(null, n, t);
    this._flankRight = new o.FlankVO(null, a, t);
    this._courtyard = new o.FlankVO(null, s, t);
  };
  DetailedPlayerBattleWaveVO.prototype.initByParams = function (e) {
    if (e && e.length > DetailedPlayerBattleWaveVO.FLANKS_START_AT) {
      this._flankLeft = new o.FlankVO(e[DetailedPlayerBattleWaveVO.FLANKS_START_AT + a.ClientConstCastle.FLANK_LEFT]);
      this._flankMiddle = new o.FlankVO(e[DetailedPlayerBattleWaveVO.FLANKS_START_AT + a.ClientConstCastle.FLANK_MIDDLE]);
      this._flankRight = new o.FlankVO(e[DetailedPlayerBattleWaveVO.FLANKS_START_AT + a.ClientConstCastle.FLANK_RIGHT]);
      this._courtyard = new o.FlankVO(e[DetailedPlayerBattleWaveVO.FLANKS_START_AT + a.ClientConstCastle.FLANK_YARD]);
    }
  };
  DetailedPlayerBattleWaveVO.prototype.getFlank = function (e) {
    switch (e) {
      case a.ClientConstCastle.FLANK_LEFT:
        return this.flankLeft;
      case a.ClientConstCastle.FLANK_MIDDLE:
        return this.flankMiddle;
      case a.ClientConstCastle.FLANK_RIGHT:
        return this.flankRight;
      case a.ClientConstCastle.FLANK_YARD:
        return this.courtyard;
    }
    return null;
  };
  Object.defineProperty(DetailedPlayerBattleWaveVO.prototype, "flankMiddle", {
    get: function () {
      return this._flankMiddle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DetailedPlayerBattleWaveVO.prototype, "flankRight", {
    get: function () {
      return this._flankRight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DetailedPlayerBattleWaveVO.prototype, "flankLeft", {
    get: function () {
      return this._flankLeft;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DetailedPlayerBattleWaveVO.prototype, "courtyard", {
    get: function () {
      return this._courtyard;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DetailedPlayerBattleWaveVO.prototype, "hasOnlyAuxiliaries", {
    get: function () {
      return !!this._flankLeft.hasOnlyAuxiliariesOrNothing && !!this._flankMiddle.hasOnlyAuxiliariesOrNothing && !!this._flankRight.hasOnlyAuxiliariesOrNothing && (this._flankLeft.soldiers.length > 0 || this._flankMiddle.soldiers.length > 0 || this._flankMiddle.soldiers.length > 0 || this._courtyard.soldiers.length > 0);
    },
    enumerable: true,
    configurable: true
  });
  DetailedPlayerBattleWaveVO.__initialize_static_members = function () {
    DetailedPlayerBattleWaveVO.FLANKS_START_AT = 1;
  };
  return DetailedPlayerBattleWaveVO;
}();
exports.DetailedPlayerBattleWaveVO = n;
var o = require("./5558.js");
var a = require("./18.js");
n.__initialize_static_members();