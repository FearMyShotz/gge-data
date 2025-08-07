Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./28.js");
var u = require("./32.js");
var d = require("./90.js");
var p = require("./15.js");
var h = require("./64.js");
var g = require("./124.js");
var C = createjs.Container;
var _ = function (e) {
  function ResourceIsleMapobject() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ResourceIsleMapobject, e);
  ResourceIsleMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new C();
      this.mapobjectVO.addEventListener(h.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.drawResourceIsle();
    if (this.isOwnMapobject) {
      p.CastleBasicController.getInstance().addEventListener(u.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onChangeCrest));
    }
    this.isleVO.addEventListener(d.CastleWorldmapEvent.REMOVED_RESOURCE_ISLE_FROM_MAP, this.bindFunction(this._onIsleRemoved));
  };
  ResourceIsleMapobject.prototype.remove = function () {
    this.isleVO.removeEventListener(d.CastleWorldmapEvent.REMOVED_RESOURCE_ISLE_FROM_MAP, this.bindFunction(this._onIsleRemoved));
    e.prototype.remove.call(this);
  };
  ResourceIsleMapobject.prototype._onIsleRemoved = function (e) {
    if (m.CastleLayoutManager.getInstance().getIngameUIComponent(O.WorldMapCastleInfoMenu) && m.CastleLayoutManager.getInstance().getIngameUIComponent(O.WorldMapCastleInfoMenu).isVisible()) {
      this.showOwnerLines();
    }
  };
  ResourceIsleMapobject.prototype.onVOChange = function (t) {
    e.prototype.onVOChange.call(this, t);
    this.showOwnerLines();
  };
  ResourceIsleMapobject.prototype.drawResourceIsle = function () {
    this.clearObjectContainer();
    this.objectContainer = this.isleVO.getDisplayObjectClipContainer(true, null, false);
    this.addObjectContainer();
    this.addMouseListener();
  };
  ResourceIsleMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new d.CastleWorldmapEvent(d.CastleWorldmapEvent.SHOW_MENU, [this, d.CastleWorldmapEvent.RINGMENU_CASTLEINFO]));
    this.showOwnerLines();
  };
  ResourceIsleMapobject.prototype.onRollOver = function (t) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new d.CastleWorldmapEvent(d.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      e.prototype.onRollOver.call(this, t);
    }
  };
  ResourceIsleMapobject.prototype.onRollOut = function (t) {
    this.worldmapRenderer.dispatchEvent(new d.CastleWorldmapEvent(d.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    e.prototype.onRollOut.call(this, t);
  };
  ResourceIsleMapobject.prototype.onMouseUp = function (t) {
    e.prototype.onMouseUp.call(this, t);
    this.showOwnerLines();
  };
  Object.defineProperty(ResourceIsleMapobject.prototype, "isleVO", {
    get: function () {
      return this.mapobjectVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobject.prototype, "line1Content", {
    get: function () {
      if (this.isleVO.isPlayerOwned) {
        return new l.TextVO(f.CastleTitleSystemHelper.getPlayerNameWithTitleFromPlayerInfo(this.isleVO.ownerInfo));
      } else {
        return new l.TextVO(this.isleVO.areaNameString);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.InteractiveMapobject.prototype, "line1Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobject.prototype, "line2Content", {
    get: function () {
      if (this.isleVO.isPlayerOwned) {
        return new l.TextVO(this.getAllianceString());
      } else {
        return new r.LocalizedTextVO(this.isleVO.villageTypeDescription);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.InteractiveMapobject.prototype, "line2Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobject.prototype, "line3Content", {
    get: function () {
      if (this.isleVO.isPlayerOwned) {
        return this.getTimerText(this.isleVO.remainingOccupierTime);
      }
      var e = o.TimeStringHelper.getShortTimeString(this.isleVO.needingOccupierTime * c.ClientConstTime.SEC_2_MILLISEC, o.TimeStringHelper.ONE_TIME_FORMAT);
      return new r.LocalizedTextVO("kingdom_eiLand_village_occupationTime", [e]);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.InteractiveMapobject.prototype, "line3Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobject.prototype, "isTimerToolTip", {
    get: function () {
      return this.isleVO.isPlayerOwned;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.InteractiveMapobject.prototype, "isTimerToolTip").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ResourceIsleMapobject.prototype.getTimerText = function (e) {
    return new r.LocalizedTextVO("kingdom_eiLand_village_countdown", [o.TimeStringHelper.getTimeToString(e, o.TimeStringHelper.TWO_TIME_FORMAT, s.Localize.text, false, true)]);
  };
  return ResourceIsleMapobject;
}(g.InteractiveMapobject);
exports.ResourceIsleMapobject = _;
var m = require("./17.js");
var f = require("./117.js");
var O = require("./1139.js");
a.classImplementsInterfaces(_, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");