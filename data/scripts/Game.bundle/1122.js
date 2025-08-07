Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./1123.js");
var l = require("./1834.js");
var c = require("./161.js");
var u = require("./15.js");
var d = require("./54.js");
var p = require("./4.js");
var h = require("./3968.js");
var g = function (e) {
  function CastleLoginBonusData() {
    var t = e.call(this) || this;
    t._bonusDayIndex = 0;
    t._hasAnythingToCollect = false;
    t._preventDialogPopup = false;
    u.CastleBasicController.getInstance().addEventListener(c.CastleXPChangedEvent.CHANGE_USER_XP, t.bindFunction(t.onUserXpChanged));
    return t;
  }
  n.__extends(CastleLoginBonusData, e);
  CastleLoginBonusData.prototype.onUserXpChanged = function (e) {
    if (!(e.previousXP <= a.TutorialConst.LAST_TUTORIAL_STEP_XP) && !(e.previousXP >= CastleLoginBonusData.REQUIRED_XP) && !(p.CastleModel.userData.userXP < CastleLoginBonusData.REQUIRED_XP)) {
      p.CastleModel.loginBonusData.preventDialogPopup = true;
      p.CastleModel.smartfoxClient.sendCommandVO(new r.C2SGetLoginBonusVO());
    }
  };
  CastleLoginBonusData.prototype.parseALB = function (e) {
    this._bonusDayIndex = s.int(e.D);
    var t = e.R;
    if (t && !(t.length <= 0)) {
      this._rewardList = [];
      var i;
      var n;
      var o;
      var a;
      var r;
      var c;
      for (var u = t.length, d = 0; d < u; d++) {
        n = (i = t[d]["D" + (d + 1)])[0].REW[0];
        o = C.CollectableManager.parser.s2cParamObject.createList(n);
        a = i[1] && i[1].PICK && i[1].PICK.length > 0 ? this.collectReward(i[1].PICK[0]) : null;
        r = i[2] && i[2].ALLI && i[2].ALLI.length > 0 ? this.collectReward(i[2].ALLI[0]) : null;
        c = i[3] && i[3].VIP && i[3].VIP.length > 0 ? this.collectReward(i[3].VIP[0]) : null;
        if (d == s.int(e.D % 7)) {
          this._hasAnythingToCollect = a == null;
          if (p.CastleModel.userData.isInAlliance) {
            this._hasAnythingToCollect = this._hasAnythingToCollect || r == null;
          }
          if (p.CastleModel.vipData.vipModeActive) {
            this._hasAnythingToCollect = this._hasAnythingToCollect || c == null;
          }
        }
        this._rewardList[d] = new h.LoginBonusDailyRewardVO(d, o, a, r, c);
      }
      this.dispatchEvent(new l.LoginBonusDataUpdateEvent(l.LoginBonusDataUpdateEvent.LOGIN_BONUS_UPDATED));
    }
  };
  CastleLoginBonusData.prototype.collectReward = function (e) {
    var t = C.CollectableManager.parser.s2cParamObject.createList(e);
    if (t && t.length > 0) {
      return t.getItemByIndex(0);
    }
    if (e.hasOwnProperty("R")) {
      var i;
      var n = e.R;
      if (n) {
        var o;
        for (var a = n.length, s = 0; s < a; s++) {
          o = n[s];
          if (Array.isArray(o) && o.length > 1) {
            (i = {})[o[0]] = [o[1]];
            break;
          }
        }
      }
      if ((t = C.CollectableManager.parser.s2cParamObject.createList(i)) && t.length > 0) {
        return t.getItemByIndex(0);
      } else {
        return null;
      }
    }
    return null;
  };
  Object.defineProperty(CastleLoginBonusData.prototype, "rewardDay", {
    get: function () {
      return this._bonusDayIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLoginBonusData.prototype, "hasAnythingToCollect", {
    get: function () {
      return this._hasAnythingToCollect;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLoginBonusData.prototype, "isActive", {
    get: function () {
      return !!this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLoginBonusData.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLoginBonusData.prototype, "preventDialogPopup", {
    get: function () {
      return this._preventDialogPopup;
    },
    set: function (e) {
      this._preventDialogPopup = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleLoginBonusData.REQUIRED_XP = 1200;
  return CastleLoginBonusData;
}(d.CastleBasicData);
exports.CastleLoginBonusData = g;
var C = require("./50.js");
o.classImplementsInterfaces(g, "IUpdatable");