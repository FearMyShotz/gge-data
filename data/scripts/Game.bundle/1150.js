Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./32.js");
var l = require("./90.js");
var c = require("./15.js");
var u = require("./4.js");
var d = require("./408.js");
var p = require("./64.js");
var h = require("./124.js");
var g = createjs.Container;
var C = function (e) {
  function OutpostMapobject() {
    return e.call(this) || this;
  }
  n.__extends(OutpostMapobject, e);
  OutpostMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new g();
      if (this.mapobjectVO) {
        this.mapobjectVO.addEventListener(p.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
      }
    }
    d.renderScheduler.addTask(this.renderOutpostCallback.bind(this));
    if (this.isOwnMapobject) {
      c.CastleBasicController.getInstance().addEventListener(r.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onChangeCrest));
    }
  };
  OutpostMapobject.prototype.getFlamesClip = function () {
    var t = this.getABGFlamesClip("Outpost");
    return t || e.prototype.getFlamesClip.call(this);
  };
  OutpostMapobject.prototype.renderOutpostCallback = function () {
    return !this.disp || (this.drawOutpost(), false);
  };
  OutpostMapobject.prototype.drawOutpost = function () {
    this.clearObjectContainer();
    if (!this.worldmapObjectVO.ownerInfo || this.worldmapObjectVO.ownerInfo && this.worldmapObjectVO.ownerInfo.isOutpostOwner) {
      this.objectContainer = this.outpostVO.getDisplayObjectClipContainer(false, null, false);
    } else {
      this.objectContainer = this.outpostVO.getDisplayObjectClipContainer(true, null, false);
      this.setOccupiedMarker();
    }
    if (this.worldmapObjectVO.remainingCooldownTimeInSeconds > 0) {
      this.showFlames();
    }
    this.addObjectContainer();
    if (this.occupiedMarker && this.disp.contains(this.occupiedMarker.disp)) {
      this.disp.setChildIndex(this.occupiedMarker.disp, this.disp.numChildren - 1);
    }
    this.addMouseListener();
  };
  OutpostMapobject.prototype.setOccupiedMarker = function () {
    if (this.outpostVO.isOccupied && u.CastleModel.otherPlayerData.getOwnerInfoVO(this.outpostVO.occupierID) && !this.outpostVO.isConqueredByMe) {
      this.occupiedMarker = new m.OccupiedMarker();
      this.occupiedMarker.init(this.worldmapObjectVO, u.CastleModel.otherPlayerData.getOwnerInfoVO(this.outpostVO.occupierID));
      this.disp.addChild(this.occupiedMarker.disp);
    }
  };
  OutpostMapobject.prototype.clearObjectContainer = function () {
    if (this.occupiedMarker) {
      if (this.disp.contains(this.occupiedMarker.disp)) {
        this.disp.removeChild(this.occupiedMarker.disp);
      }
      this.occupiedMarker.remove();
      this.occupiedMarker = null;
    }
    e.prototype.clearObjectContainer.call(this);
  };
  Object.defineProperty(OutpostMapobject.prototype, "outpostVO", {
    get: function () {
      return this.mapobjectVO;
    },
    enumerable: true,
    configurable: true
  });
  OutpostMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new l.CastleWorldmapEvent(l.CastleWorldmapEvent.SHOW_MENU, [this, l.CastleWorldmapEvent.RINGMENU_OUTPOSTINFO]));
    this.showOwnerLines();
  };
  OutpostMapobject.prototype.onRollOver = function (t) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new l.CastleWorldmapEvent(l.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      e.prototype.onRollOver.call(this, t);
    }
  };
  OutpostMapobject.prototype.onMouseUp = function (t) {
    e.prototype.onMouseUp.call(this, t);
    this.showOwnerLines();
  };
  OutpostMapobject.prototype.onRollOut = function (t) {
    this.worldmapRenderer.dispatchEvent(new l.CastleWorldmapEvent(l.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    e.prototype.onRollOut.call(this, t);
  };
  OutpostMapobject.prototype.onDoubleClick = function () {
    if (!u.CastleModel.tutorialData.isTutorialActive) {
      this.worldmapRenderer.dispatchEvent(new l.CastleWorldmapEvent(l.CastleWorldmapEvent.DOUBLE_CLICK_CASTLE, [this.outpostVO]));
    }
  };
  OutpostMapobject.prototype.remove = function () {
    c.CastleBasicController.getInstance().removeEventListener(r.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onChangeCrest));
    this.mapobjectVO.removeEventListener(p.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    e.prototype.remove.call(this);
  };
  Object.defineProperty(OutpostMapobject.prototype, "line1Content", {
    get: function () {
      var e = this.outpostVO.ownerInfo;
      if (e && !e.isOutpostOwner) {
        return new a.TextVO(_.CastleTitleSystemHelper.getPlayerNameWithTitleFromPlayerInfo(this.outpostVO.ownerInfo));
      } else {
        return new a.TextVO(this.outpostVO.areaNameString);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.InteractiveMapobject.prototype, "line1Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobject.prototype, "line2Content", {
    get: function () {
      var e = this.outpostVO.ownerInfo;
      if (e && e.isRuin) {
        return new s.LocalizedTextVO("ruin");
      } else if (e && !e.isOutpostOwner) {
        return new a.TextVO(this.getHonorLevelString());
      } else {
        return new a.TextVO(this.outpostVO.resAmountString);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.InteractiveMapobject.prototype, "line2Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobject.prototype, "line3Content", {
    get: function () {
      var e = this.outpostVO.ownerInfo;
      if (e && !e.isOutpostOwner) {
        return new a.TextVO(this.getAllianceString());
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
  return OutpostMapobject;
}(h.InteractiveMapobject);
exports.OutpostMapobject = C;
o.classImplementsInterfaces(C, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
var _ = require("./117.js");
var m = require("./1334.js");