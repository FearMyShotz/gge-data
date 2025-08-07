Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./264.js");
var d = function (e) {
  function CastleRedAllianceAlienInvasionEventDialogProperties(t) {
    var i = this;
    i._eventId = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._eventId = t;
    return i;
  }
  n.__extends(CastleRedAllianceAlienInvasionEventDialogProperties, e);
  Object.defineProperty(CastleRedAllianceAlienInvasionEventDialogProperties.prototype, "eventId", {
    get: function () {
      return this._eventId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRedAllianceAlienInvasionEventDialogProperties.prototype, "skinFrame", {
    get: function () {
      return 2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRedAllianceAlienInvasionEventDialogProperties.prototype, "textIDType", {
    get: function () {
      return "redAlienInvasion";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRedAllianceAlienInvasionEventDialogProperties.prototype, "scorbarBackgroundClassName", {
    get: function () {
      return "AllianceRedAlienInvasionEvent_Background";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRedAllianceAlienInvasionEventDialogProperties.prototype, "rewardListDialogClassName", {
    get: function () {
      return p.CastleRedAllianceAlienInvasionRewardListDialog;
    },
    enumerable: true,
    configurable: true
  });
  CastleRedAllianceAlienInvasionEventDialogProperties.prototype.getFindNextMapObjectVO = function () {
    return new u.C2SFindNextMapObjectVO(c.WorldConst.AREA_TYPE_RED_ALIEN_CAMP, l.WorldClassic.KINGDOM_ID, -1, -1, s.DungeonConst.BASIC_INVASION_CAMP_PLAYER_ID);
  };
  Object.defineProperty(CastleRedAllianceAlienInvasionEventDialogProperties.prototype, "highscorePlayer", {
    get: function () {
      return r.HighscoreConst.ALLIANCE_RED_ALIEN_INVASION_PLAYER;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRedAllianceAlienInvasionEventDialogProperties.prototype, "highscoreAlliance", {
    get: function () {
      return r.HighscoreConst.ALLIANCE_RED_ALIEN_INVASION_ALLIANCE;
    },
    enumerable: true,
    configurable: true
  });
  return CastleRedAllianceAlienInvasionEventDialogProperties;
}(o.BasicProperties);
exports.CastleRedAllianceAlienInvasionEventDialogProperties = d;
var p = require("./4508.js");
a.classImplementsInterfaces(d, "IAlienInvasionEventDialogProperties");