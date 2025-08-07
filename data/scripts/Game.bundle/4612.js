Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./32.js");
var r = require("./90.js");
var l = require("./15.js");
var c = require("./64.js");
var u = require("./124.js");
var d = createjs.Container;
var p = function (e) {
  function VillageMapobject() {
    return e.call(this) || this;
  }
  n.__extends(VillageMapobject, e);
  VillageMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new d();
      if (this.mapobjectVO) {
        this.mapobjectVO.addEventListener(c.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
      }
    }
    this.drawVillage();
    if (this.isOwnMapobject) {
      l.CastleBasicController.getInstance().addEventListener(s.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onChangeCrest));
    }
  };
  VillageMapobject.prototype.drawVillage = function () {
    this.clearObjectContainer();
    this.objectContainer = this.villageVO.getDisplayObjectClipContainer(true, null, false);
    this.addObjectContainer();
    this.addMouseListener();
  };
  VillageMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new r.CastleWorldmapEvent(r.CastleWorldmapEvent.SHOW_MENU, [this, r.CastleWorldmapEvent.RINGMENU_CASTLEINFO]));
    this.showOwnerLines();
  };
  VillageMapobject.prototype.onVOChange = function (t) {
    e.prototype.onVOChange.call(this, t);
    this.showOwnerLines();
  };
  VillageMapobject.prototype.onRollOver = function (t) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new r.CastleWorldmapEvent(r.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      e.prototype.onRollOver.call(this, t);
    }
  };
  VillageMapobject.prototype.onRollOut = function (t) {
    this.worldmapRenderer.dispatchEvent(new r.CastleWorldmapEvent(r.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    e.prototype.onRollOut.call(this, t);
  };
  VillageMapobject.prototype.onMouseUp = function (t) {
    e.prototype.onMouseUp.call(this, t);
    this.showOwnerLines();
  };
  Object.defineProperty(VillageMapobject.prototype, "villageVO", {
    get: function () {
      return this.mapobjectVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobject.prototype, "line1Content", {
    get: function () {
      if (this.villageVO.isPlayerOwned) {
        return new a.TextVO(h.CastleTitleSystemHelper.getPlayerNameWithTitleFromPlayerInfo(this.villageVO.ownerInfo));
      } else {
        return new a.TextVO(this.villageVO.areaNameString);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.InteractiveMapobject.prototype, "line1Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobject.prototype, "line2Content", {
    get: function () {
      if (this.villageVO.isPlayerOwned) {
        return new a.TextVO(this.getHonorLevelString());
      } else {
        return new a.TextVO(this.villageVO.villageTypeDescription);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.InteractiveMapobject.prototype, "line2Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobject.prototype, "line3Content", {
    get: function () {
      if (this.villageVO.isPlayerOwned) {
        return new a.TextVO(this.getAllianceString());
      } else {
        return null;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.InteractiveMapobject.prototype, "line3Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return VillageMapobject;
}(u.InteractiveMapobject);
exports.VillageMapobject = p;
var h = require("./117.js");
o.classImplementsInterfaces(p, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");