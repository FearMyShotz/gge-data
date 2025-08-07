Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./90.js");
var d = require("./53.js");
var p = require("./4.js");
var h = require("./64.js");
var g = require("./124.js");
var C = createjs.Container;
var _ = function (e) {
  function DungeonMapobject() {
    return e.call(this) || this;
  }
  n.__extends(DungeonMapobject, e);
  DungeonMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new C();
      if (this.mapobjectVO) {
        this.mapobjectVO.addEventListener(h.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
      }
    }
    this.drawDungeon();
  };
  DungeonMapobject.prototype.getFlamesClip = function () {
    var t = this.getABGFlamesClip("Dungeon");
    return t || e.prototype.getFlamesClip.call(this);
  };
  DungeonMapobject.prototype.drawDungeon = function () {
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      this.objectContainer = this.dungeonMapObjectVO.getDisplayObjectClipContainer(false, null, false);
      if (this.worldmapObjectVO.remainingCooldownTimeInSeconds > 0) {
        this.showFlames();
      }
      this.addObjectContainer();
      this.addMouseListener();
    }
  };
  DungeonMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new u.CastleWorldmapEvent(u.CastleWorldmapEvent.SHOW_MENU, [this, u.CastleWorldmapEvent.RINGMENU_DUNGEONINFO]));
  };
  DungeonMapobject.prototype.onRollOver = function (t) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new u.CastleWorldmapEvent(u.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      e.prototype.onRollOver.call(this, t);
    }
  };
  DungeonMapobject.prototype.onRollOut = function (t) {
    this.worldmapRenderer.dispatchEvent(new u.CastleWorldmapEvent(u.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    e.prototype.onRollOut.call(this, t);
  };
  Object.defineProperty(DungeonMapobject.prototype, "dungeonMapObjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobject.prototype, "line2Content", {
    get: function () {
      return DungeonMapobject.textLine2(this.dungeonMapObjectVO);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.InteractiveMapobject.prototype, "line2Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobject.prototype, "line3Content", {
    get: function () {
      return DungeonMapobject.textLine3(this.dungeonMapObjectVO);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.InteractiveMapobject.prototype, "line3Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  DungeonMapobject.textLine2 = function (e) {
    return new r.LocalizedTextVO(o.GenericTextIds.VALUE_ASSIGN_COLON, [l.Localize.text("level"), e.dungeonLevel]);
  };
  DungeonMapobject.textLine3 = function (e) {
    var t = c.int(p.CastleModel.dungeonData.getMaxLevel(e.kingdomID));
    var i = c.int(s.DungeonConst.getVictories(e.dungeonLevel, e.kingdomID) + 1 - e.victoryCount);
    if (d.ABGHelper.isOnABGServer) {
      t = c.int(p.CastleModel.allianceBattlegroundData.getDungeonMaxLevel());
      i = c.int(p.CastleModel.allianceBattlegroundData.getDungeonVOByDungeonLevel(e.dungeonLevel + 1).countVictory - e.victoryCount);
    }
    if (t <= e.dungeonLevel) {
      return new r.LocalizedTextVO("dialog_alliance_maxUpgradeLevel");
    } else if (i > 1) {
      return new r.LocalizedTextVO("dungeonToolTip_LevelUp_Plural", [i, e.dungeonLevel + 1]);
    } else {
      return new r.LocalizedTextVO("dungeonToolTip_LevelUp_Singular", [i, e.dungeonLevel + 1]);
    }
  };
  return DungeonMapobject;
}(g.InteractiveMapobject);
exports.DungeonMapobject = _;
a.classImplementsInterfaces(_, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");