Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./32.js");
var d = require("./90.js");
var p = require("./577.js");
var h = require("./15.js");
var g = require("./4.js");
var C = require("./64.js");
var _ = require("./124.js");
var m = createjs.Container;
var f = function (e) {
  function CastleMapobject() {
    return e.call(this) || this;
  }
  n.__extends(CastleMapobject, e);
  CastleMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new m();
      this.mapobjectVO.addEventListener(C.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.drawCastle();
    if (this.isOwnMapobject) {
      h.CastleBasicController.getInstance().addEventListener(u.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onChangeCrest));
    }
  };
  CastleMapobject.prototype.onAreaUpdate = function (e) {
    if (this.castleMapObjectVO.isUseAbleForRelocation && O.CastleLayoutManager.getInstance().currentState == O.CastleLayoutManager.STATE_WORLDMAP_RELOCATION) {
      this.initVisualRep();
    }
  };
  CastleMapobject.prototype.getFlamesClip = function () {
    var t = this.getABGFlamesClip("Castle");
    if (t && t.currentshownDisplayObject) {
      return t;
    } else {
      return e.prototype.getFlamesClip.call(this);
    }
  };
  CastleMapobject.prototype.drawCastle = function () {
    var e = !!this.worldmapObjectVO && !!this.worldmapObjectVO.ownerInfo && this.castleMapObjectVO.isVisibleOnMap;
    var t = this.castleMapObjectVO.isUseAbleForRelocation && O.CastleLayoutManager.getInstance().currentState == O.CastleLayoutManager.STATE_WORLDMAP_RELOCATION;
    var i = !this.worldmapObjectVO.ownerInfo && this.castleMapObjectVO.isOccupied;
    if (e || t || i) {
      this.clearObjectContainer();
      if (e) {
        if (this.worldmapObjectVO.ownerInfo.isRuin) {
          if (t) {
            this.objectContainer = new y.CastleDisplayObjectClipContainer();
            this.objectContainer.addItem(this.getAsExternalClip("RelocationRuin_Mapobject"));
          } else {
            this.objectContainer = this.worldmapObjectVO.getRuinContainer();
          }
        } else {
          this.objectContainer = this.castleMapObjectVO.getCastleContainer(true);
          if (this.worldmapObjectVO.remainingCooldownTimeInSeconds > 0) {
            this.showFlames();
          }
        }
      } else if (i) {
        this.objectContainer = new y.CastleDisplayObjectClipContainer();
        this.objectContainer.addItem(this.getAsExternalClip("RelocationSet_Mapobject"));
        var n = this.worldmapObjectVO;
        var o = g.CastleModel.otherPlayerData.getOwnerInfoVO(n.occupierID);
        this.objectContainer.addItem(n.getAsExternalClip("Castle_Flag_Relocate", null, n.getClipColor(o)));
      } else if (t) {
        this.objectContainer = new y.CastleDisplayObjectClipContainer();
        this.objectContainer.addItem(this.castleMapObjectVO.getAsExternalClip("Relocation_Mapobject"));
      }
      this.addMouseListener();
      this.addObjectContainer();
      this.disp.dispatchEvent(new p.VisualMapObjectEvent(p.VisualMapObjectEvent.VE_UPDATED, [this]));
    }
  };
  CastleMapobject.prototype.remove = function () {
    h.CastleBasicController.getInstance().removeEventListener(u.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onChangeCrest));
    this.mapobjectVO.removeEventListener(C.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    h.CastleBasicController.getInstance().removeEventListener(d.CastleWorldmapEvent.UPDATE_AREA_INFO, this.bindFunction(this.onAreaUpdate));
    e.prototype.remove.call(this);
  };
  CastleMapobject.prototype.onMouseUp = function (t) {
    e.prototype.onMouseUp.call(this, t);
    this.showOwnerLines();
  };
  CastleMapobject.prototype.showRingMenu = function () {
    o.info("showing menu");
    if (this.castleMapObjectVO.ownerInfo && !this.castleMapObjectVO.ownerInfo.isRuin) {
      this.worldmapRenderer.dispatchEvent(new d.CastleWorldmapEvent(d.CastleWorldmapEvent.SHOW_MENU, [this, d.CastleWorldmapEvent.RINGMENU_CASTLEINFO]));
    } else if (this.castleMapObjectVO.ownerInfo) {
      if (this.castleMapObjectVO.ownerInfo.isRuin) {
        this.worldmapRenderer.dispatchEvent(new d.CastleWorldmapEvent(d.CastleWorldmapEvent.CLICK_RUIN, [this, d.CastleWorldmapEvent.RINGMENU_CASTLEINFO]));
      }
    } else {
      this.worldmapRenderer.dispatchEvent(new d.CastleWorldmapEvent(d.CastleWorldmapEvent.CLICK_RELOCATE_POSITION, [this, d.CastleWorldmapEvent.RINGMENU_CASTLEINFO]));
    }
    o.info("trying to show ownerlines");
    this.showOwnerLines();
  };
  CastleMapobject.prototype.onRollOver = function (t) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new d.CastleWorldmapEvent(d.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      e.prototype.onRollOver.call(this, t);
    }
  };
  CastleMapobject.prototype.onRollOut = function (t) {
    this.worldmapRenderer.dispatchEvent(new d.CastleWorldmapEvent(d.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    e.prototype.onRollOut.call(this, t);
  };
  CastleMapobject.prototype.onDoubleClick = function () {
    if (!this.worldmapRenderer.camera.isLocked) {
      if (this.castleMapObjectVO.ownerInfo && !this.castleMapObjectVO.ownerInfo.isRuin) {
        this.worldmapRenderer.dispatchEvent(new d.CastleWorldmapEvent(d.CastleWorldmapEvent.DOUBLE_CLICK_CASTLE, [this.mapobjectVO]));
      }
    }
  };
  Object.defineProperty(CastleMapobject.prototype, "castleMapObjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMapobject.prototype, "line1Content", {
    get: function () {
      var e = this.castleMapObjectVO.ownerInfo;
      if (!e && this.castleMapObjectVO.isOccupied) {
        var t = g.CastleModel.otherPlayerData.getOwnerInfoVO(this.castleMapObjectVO.occupierID);
        return new l.TextVO(E.CastleTitleSystemHelper.getPlayerNameWithTitleFromPlayerInfo(t));
      }
      if (!e && this.castleMapObjectVO.isUseAbleForRelocation) {
        return new c.LocalizedTextVO("relocate_freeWorldmapPosition_toolTip");
      } else if (e) {
        return new l.TextVO(E.CastleTitleSystemHelper.getPlayerNameWithTitleFromPlayerInfo(this.castleMapObjectVO.ownerInfo));
      } else {
        return null;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.InteractiveMapobject.prototype, "line1Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMapobject.prototype, "line2Content", {
    get: function () {
      var e = this.castleMapObjectVO.ownerInfo;
      if (!e && this.castleMapObjectVO.isOccupied) {
        var t = g.CastleModel.otherPlayerData.getOwnerInfoVO(this.castleMapObjectVO.occupierID);
        if (t.playerID != g.CastleModel.userData.playerID) {
          if (t.remainingRelocateDuration <= 0) {
            var i = O.CastleLayoutManager.getInstance().worldmapScreen.renderer.camera.getAreaViewportRectangle();
            g.CastleModel.worldmapData.updateAreaRange(i.x, i.y, i.x + i.width, i.y + i.height);
          }
          return new c.LocalizedTextVO(s.GenericTextIds.VALUE_SIMPLE_COMP, ["dialog_moveOverview_arival", a.TimeStringHelper.getHoureMinuteSecondTimeString(t.remainingRelocateDuration)]);
        }
        return new c.LocalizedTextVO(s.GenericTextIds.VALUE_SIMPLE_COMP, ["dialog_moveOverview_arival", a.TimeStringHelper.getHoureMinuteSecondTimeString(g.CastleModel.userData.remainingRelocationDuration)]);
      }
      if (!e && this.castleMapObjectVO.isUseAbleForRelocation) {
        return null;
      } else if (e) {
        if (e.isRuin) {
          return new c.LocalizedTextVO("ruin");
        } else {
          return new l.TextVO(this.getHonorLevelString());
        }
      } else {
        return null;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.InteractiveMapobject.prototype, "line2Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMapobject.prototype, "line3Content", {
    get: function () {
      var e = this.castleMapObjectVO.ownerInfo;
      if (!e && this.castleMapObjectVO.isOccupied) {
        var t = g.CastleModel.otherPlayerData.getOwnerInfoVO(this.castleMapObjectVO.occupierID);
        return new l.TextVO(t.allianceName);
      }
      if (!e && this.castleMapObjectVO.isUseAbleForRelocation) {
        return null;
      } else if (e && this.getAllianceString() != "") {
        return new l.TextVO(this.getAllianceString());
      } else {
        return null;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.InteractiveMapobject.prototype, "line3Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMapobject.prototype, "isTimerToolTip", {
    get: function () {
      return !this.castleMapObjectVO.ownerInfo && this.castleMapObjectVO.isOccupied;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.InteractiveMapobject.prototype, "isTimerToolTip").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleMapobject;
}(_.InteractiveMapobject);
exports.CastleMapobject = f;
r.classImplementsInterfaces(f, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
var O = require("./17.js");
var E = require("./117.js");
var y = require("./108.js");
r.classImplementsInterfaces(f, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");