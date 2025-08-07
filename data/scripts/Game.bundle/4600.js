Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./26.js");
var c = require("./90.js");
var u = require("./4.js");
var d = require("./64.js");
var p = require("./1151.js");
var h = require("./124.js");
var g = createjs.Container;
var C = function (e) {
  function FactionCapitalMapobject() {
    return e.call(this) || this;
  }
  n.__extends(FactionCapitalMapobject, e);
  FactionCapitalMapobject.prototype.initialize = function (t, i) {
    e.prototype.initialize.call(this, t, i);
    u.CastleModel.specialEventData.addEventListener(l.CastleSpecialEventEvent.FACTION_ATTACKABLE_DATA_UPDATED, this.bindFunction(this.onAttackableDataUpdate));
  };
  FactionCapitalMapobject.prototype.onAttackableDataUpdate = function (e) {
    if (this.hasRingMenu) {
      this.showRingMenu();
    }
  };
  FactionCapitalMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new g();
      this.mapobjectVO.addEventListener(d.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      this.objectContainer = this.vo.getDisplayObjectClipContainer(false, null, false);
      this.addObjectContainer();
      this.addMouseListener();
    }
  };
  Object.defineProperty(FactionCapitalMapobject.prototype, "areaNameString", {
    get: function () {
      return "DUMMY CAPITAL";
    },
    enumerable: true,
    configurable: true
  });
  FactionCapitalMapobject.prototype.showRingMenu = function () {
    if (!this.capitalVO.isDestroyed) {
      this.worldmapRenderer.dispatchEvent(new c.CastleWorldmapEvent(c.CastleWorldmapEvent.SHOW_MENU, [this, c.CastleWorldmapEvent.RINGMENU_CASTLEINFO]));
    }
    this.showOwnerLines();
  };
  FactionCapitalMapobject.prototype.onRollOver = function (t) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new c.CastleWorldmapEvent(c.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      e.prototype.onRollOver.call(this, t);
    }
  };
  FactionCapitalMapobject.prototype.onRollOut = function (t) {
    this.worldmapRenderer.dispatchEvent(new c.CastleWorldmapEvent(c.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    e.prototype.onRollOut.call(this, t);
  };
  FactionCapitalMapobject.prototype.showOwnerLines = function () {
    this.worldmapRenderer.hideLines();
    var e = FactionCapitalMapobject.factionEventVO.getCapitalByID(this.capitalVO.specialCampID);
    var t = FactionCapitalMapobject.factionEventVO.getTowerLanesByCapitalID(e.specialCampID);
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          p.FactionLaneRenderHelper.showLane(this.worldmapRenderer, o, e);
        }
      }
    }
  };
  FactionCapitalMapobject.prototype.remove = function () {
    u.CastleModel.specialEventData.removeEventListener(l.CastleSpecialEventEvent.FACTION_ATTACKABLE_DATA_UPDATED, this.bindFunction(this.onAttackableDataUpdate));
    e.prototype.remove.call(this);
  };
  Object.defineProperty(FactionCapitalMapobject.prototype, "capitalVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCapitalMapobject.prototype, "line2Content", {
    get: function () {
      var e = this.capitalVO.ownerInfo;
      if (e) {
        if (e.factionID == s.FactionConst.BLUE_FACTION) {
          return new r.LocalizedTextVO("blue_faction");
        } else {
          return new r.LocalizedTextVO("red_faction");
        }
      } else {
        return null;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.InteractiveMapobject.prototype, "line2Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCapitalMapobject.prototype, "line3Content", {
    get: function () {
      if (this.capitalVO.isDestroyed) {
        return new r.LocalizedTextVO("mapobject_destroyed");
      } else {
        return null;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.InteractiveMapobject.prototype, "line3Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCapitalMapobject, "factionEventVO", {
    get: function () {
      return u.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  return FactionCapitalMapobject;
}(h.InteractiveMapobject);
exports.FactionCapitalMapobject = C;
o.classImplementsInterfaces(C, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");