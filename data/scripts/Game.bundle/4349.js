Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./557.js");
var s = require("./4.js");
var r = require("./4350.js");
var l = function (e) {
  function CastleStartUpBonusData(t) {
    var i = this;
    i._nextStartupLoginBonusID = 0;
    i._canCollectBonus = false;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).configXML = t;
    i._startupLoginRewardVOs = [];
    var n = t.beginner_loginrewards;
    if (n != null) {
      for (var o = 0, a = n; o < a.length; o++) {
        var l = a[o];
        if (l !== undefined) {
          var c = new r.StartupLoginRewardVO();
          c.fillFromParamXML(l);
          c.setReward(s.CastleModel.rewardData.getListById(c.rewardID));
          i._startupLoginRewardVOs.push(c);
        }
      }
    }
    i._nextStartupLoginBonusID = -1;
    return i;
  }
  n.__extends(CastleStartUpBonusData, e);
  CastleStartUpBonusData.prototype.reset = function () {
    this._nextStartupLoginBonusID = -1;
    this._canCollectBonus = false;
  };
  CastleStartUpBonusData.prototype.parse_SLI = function (e) {
    if (e) {
      this._nextStartupLoginBonusID = o.int(e.NRR);
      this._canCollectBonus = e.CC == 1;
      this.dispatchEvent(new a.CastleLoginBonusEvent(a.CastleLoginBonusEvent.LOGINBONUS_UPDATE));
    }
  };
  Object.defineProperty(CastleStartUpBonusData.prototype, "nextStartupLoginBonusID", {
    get: function () {
      return this._nextStartupLoginBonusID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartUpBonusData.prototype, "hasNextStartupLoginBonus", {
    get: function () {
      return this._nextStartupLoginBonusID >= 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartUpBonusData.prototype, "startupLoginRewardVOs", {
    get: function () {
      return this._startupLoginRewardVOs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartUpBonusData.prototype, "canCollectBonus", {
    get: function () {
      return this._canCollectBonus;
    },
    enumerable: true,
    configurable: true
  });
  return CastleStartUpBonusData;
}(require("./54.js").CastleBasicData);
exports.CastleStartUpBonusData = l;