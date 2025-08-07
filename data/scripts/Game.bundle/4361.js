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
  function CastleAllianceAlienInvasionEventDialogProperties(t) {
    var i = this;
    i._eventId = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._eventId = t;
    return i;
  }
  n.__extends(CastleAllianceAlienInvasionEventDialogProperties, e);
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogProperties.prototype, "eventId", {
    get: function () {
      return this._eventId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogProperties.prototype, "skinFrame", {
    get: function () {
      return 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogProperties.prototype, "textIDType", {
    get: function () {
      return "alienInvasion";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogProperties.prototype, "scorbarBackgroundClassName", {
    get: function () {
      return "AllianceAlienInvasionEvent_Background";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogProperties.prototype, "rewardListDialogClassName", {
    get: function () {
      return p.CastleAllianceAlienInvasionRewardListDialog;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceAlienInvasionEventDialogProperties.prototype.getFindNextMapObjectVO = function () {
    return new u.C2SFindNextMapObjectVO(c.WorldConst.AREA_TYPE_ALIEN_CAMP, l.WorldClassic.KINGDOM_ID, -1, -1, s.DungeonConst.BASIC_INVASION_CAMP_PLAYER_ID);
  };
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogProperties.prototype, "highscorePlayer", {
    get: function () {
      return r.HighscoreConst.ALLIANCE_ALIEN_INVASION_PLAYER;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogProperties.prototype, "highscoreAlliance", {
    get: function () {
      return r.HighscoreConst.ALLIANCE_ALIEN_INVASION_ALLIANCE;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceAlienInvasionEventDialogProperties;
}(o.BasicProperties);
exports.CastleAllianceAlienInvasionEventDialogProperties = d;
var p = require("./4362.js");
a.classImplementsInterfaces(d, "IAlienInvasionEventDialogProperties");