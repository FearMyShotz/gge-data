Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./5.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./6.js");
var C = require("./18.js");
var _ = require("./421.js");
var m = require("./577.js");
var f = require("./53.js");
var O = require("./4.js");
var E = require("./68.js");
var y = require("./24.js");
var b = require("./64.js");
var D = require("./886.js");
var I = createjs.MouseEvent;
var T = createjs.TimerEvent;
var v = createjs.Point;
var S = createjs.Event;
var A = function (e) {
  function InteractiveMapobject() {
    var t = this;
    t._hasRingMenu = false;
    t.nameMCDeleted = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(InteractiveMapobject, e);
  InteractiveMapobject.prototype.initialize = function (t, i) {
    e.prototype.initialize.call(this, t, i);
    t.addEventListener(b.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
  };
  InteractiveMapobject.prototype.getABGFlamesClip = function (e) {
    if (f.ABGHelper.isOnABGServer) {
      var t = _.ClientConstIsoChangeEventSkin.getValidSkinSuffixForCurrentKingdom(true, false);
      var i = M.WorldmapObjectIconHelper.FILE_NAME_FLAME_LAYERS_ABG_PREFIX + t;
      if (a.BasicModel.basicLoaderData.isItemAssetVersioned(i)) {
        return this.getAsExternalClip(i + "_" + e, a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(i));
      }
    }
    return null;
  };
  InteractiveMapobject.prototype.initVisualRep = function () {};
  InteractiveMapobject.prototype.clearObjectContainer = function () {
    if (this.objectContainer) {
      this.objectContainer.dispose();
      this.removeMouseListener();
      this.disp.removeChild(this.objectContainer.asDisplayObject());
      this.objectContainer = null;
    }
  };
  InteractiveMapobject.prototype.onChangeCrest = function (e) {
    this.initVisualRep();
  };
  Object.defineProperty(InteractiveMapobject.prototype, "worldmapObjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  InteractiveMapobject.prototype.remove = function () {
    this.onDCTimeOver();
    this.removeMouseListener();
    this.clearObjectContainer();
    e.prototype.remove.call(this);
  };
  InteractiveMapobject.prototype.removeForPool = function () {
    this.onDCTimeOver();
    this.removeMouseListener();
    this.objectContainer.scaleX = 1;
    this.objectContainer.scaleY = 1;
    this.disp.removeChild(this.objectContainer);
    if (this.objectContainer) {
      this.objectContainer.removeEventListener(S.COMPLETE, this.bindFunction(this.onAllClipsLoaded));
      if (this.flameClip) {
        this.objectContainer.removeItem(this.flameClip);
        this.flameClip = null;
      }
      this.objectContainer = null;
    }
    this.mapobjectVO.removeEventListener(b.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
  };
  InteractiveMapobject.prototype.getFlamesClip = function () {
    return this.getAsExternalClip("FlamesLayer");
  };
  InteractiveMapobject.prototype.showFlames = function () {
    if (this.objectContainer) {
      this.flameClip = this.getFlamesClip();
      this.objectContainer.addItem(this.flameClip);
    }
  };
  InteractiveMapobject.prototype.assetFileURL = function (e) {
    return a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e);
  };
  InteractiveMapobject.prototype.getAsExternalClip = function (e, t = null) {
    t ||= this.assetFileURL(e);
    return new y.CastleGoodgameExternalClip(e, t, null, 0, false);
  };
  InteractiveMapobject.prototype.showOwnerLines = function () {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (this.worldmapObjectVO.ownerInfo) {
        var e = this.worldmapObjectVO.ownerInfo.getCastlePosListByKingdomID(O.CastleModel.kingdomData.activeKingdomID);
        for (var t = 0; t < this.worldmapObjectVO.customConnections.length; t++) {
          var i = this.worldmapObjectVO.customConnections[t];
          if (i.kingdomId == O.CastleModel.kingdomData.activeKingdomID) {
            e.push(i);
          }
        }
        if (e.length > 1) {
          var n = this.worldmapObjectVO.ownerInfo.getMainCastlePositionByKingdomID(O.CastleModel.kingdomData.activeKingdomID);
          this.worldmapRenderer.showLines(n, e, this.getOwnerLineColor());
          return;
        }
      }
      if (this.worldmapRenderer) {
        this.worldmapRenderer.hideLines();
      }
    }
  };
  InteractiveMapobject.prototype.hideOwnerLines = function () {
    if (this.worldmapRenderer) {
      this.worldmapRenderer.hideLines();
    }
  };
  InteractiveMapobject.prototype.getOwnerLineColor = function () {
    if (this.isOwnMapobject) {
      return 5551034;
    }
    if (O.CastleModel.kingdomData.activeKingdomID == d.FactionConst.KINGDOM_ID) {
      return this.defaultLineColor();
    }
    if (O.CastleModel.userData.isUserInMyAlliance(this.worldmapObjectVO.ownerInfo)) {
      return 7714850;
    }
    if (!this.worldmapObjectVO.ownerInfo.isInAlliance) {
      return this.defaultLineColor();
    }
    switch (O.CastleModel.allianceData.getStatusByAlliance(this.worldmapObjectVO.ownerInfo.allianceID)) {
      case L.AllianceInfoVO.DIPLOMACY_IN_WAR:
        return 10360577;
      case L.AllianceInfoVO.DIPLOMACY_SOFT_ALLIED:
        return 9347503;
      case L.AllianceInfoVO.DIPLOMACY_REAL_ALLIED:
        return 15124482;
      default:
        return this.defaultLineColor();
    }
  };
  InteractiveMapobject.prototype.defaultLineColor = function () {
    switch (O.CastleModel.kingdomData.activeKingdomID) {
      case l.WorldIce.KINGDOM_ID:
        return 12889753;
      case c.WorldDessert.KINGDOM_ID:
        return 8877672;
    }
    return 15388850;
  };
  InteractiveMapobject.prototype.getGlowFilter = function () {
    if (O.CastleModel.kingdomData.activeKingdomID == l.WorldIce.KINGDOM_ID) {
      return E.BitmapFilterHelper.FILTER_GLOW_BLUE;
    } else {
      return E.BitmapFilterHelper.FILTER_GLOW_STANDARD;
    }
  };
  Object.defineProperty(InteractiveMapobject.prototype, "isOwnMapobject", {
    get: function () {
      return !!this.worldmapObjectVO.ownerInfo && this.worldmapObjectVO.ownerInfo.playerID == O.CastleModel.userData.playerID;
    },
    enumerable: true,
    configurable: true
  });
  InteractiveMapobject.prototype.onVOChange = function (e) {
    this.initVisualRep();
    if (this.hasRingMenu && this.worldmapObjectVO.isVisibleOnMap) {
      this.showRingMenu();
    }
    if (this.infoComponent) {
      this.infoComponent.setVO(this.worldmapObjectVO);
    }
    this.disp.dispatchEvent(new m.VisualMapObjectEvent(m.VisualMapObjectEvent.VE_UPDATED, [this]));
  };
  InteractiveMapobject.prototype.addMouseListener = function () {
    if (this.objectContainer) {
      this.objectContainer.addEventListener(I.MOUSE_UP, this.bindFunction(this.onMouseUp));
      this.objectContainer.addEventListener(I.ROLL_OVER, this.bindFunction(this.onRollOver));
      this.objectContainer.addEventListener(I.ROLL_OUT, this.bindFunction(this.onRollOut));
      this.objectContainer.addEventListener(I.CLICK, this.bindFunction(this.onClickObject));
    }
  };
  InteractiveMapobject.prototype.removeMouseListener = function () {
    if (this.objectContainer) {
      this.objectContainer.removeEventListener(I.MOUSE_UP, this.bindFunction(this.onMouseUp));
      this.objectContainer.removeEventListener(I.ROLL_OVER, this.bindFunction(this.onRollOver));
      this.objectContainer.removeEventListener(I.ROLL_OUT, this.bindFunction(this.onRollOut));
      this.objectContainer.removeEventListener(I.CLICK, this.bindFunction(this.onClickObject));
    }
  };
  InteractiveMapobject.prototype.onClickObject = function (e) {
    if (this._doubleClickTimer) {
      if (this._doubleClickTimer.running) {
        this.onDoubleClick();
        this.onDCTimeOver();
      }
    } else {
      this._doubleClickTimer = new r.Timer(250, 1);
      this._doubleClickTimer.addEventListener(T.TIMER, this.bindFunction(this.onDCTimeOver));
      this._doubleClickTimer.start();
    }
  };
  InteractiveMapobject.prototype.onDCTimeOver = function (e = null) {
    if (this._doubleClickTimer) {
      this._doubleClickTimer.stop();
      this._doubleClickTimer.removeEventListener(T.TIMER, this.bindFunction(this.onDCTimeOver));
      this._doubleClickTimer = null;
    }
  };
  InteractiveMapobject.prototype.onDoubleClick = function () {};
  InteractiveMapobject.prototype.onMouseDown = function (e) {};
  InteractiveMapobject.prototype.onMouseUp = function (e) {
    P.CastleLayoutManager.getInstance().worldmapScreen.renderer.hideLines();
    this.showRingMenu();
    if (o.currentBrowserInfo.isTouchEvent(e)) {
      this.worldmapRenderer.camera.objectUnderMouse = this;
      this.worldmapRenderer.renderNavForMobile(true);
    }
  };
  InteractiveMapobject.prototype.showRingMenu = function () {};
  InteractiveMapobject.prototype.onRollOut = function (e) {
    this.removeGlow();
    this.worldmapRenderer.camera.objectUnderMouse = null;
  };
  InteractiveMapobject.prototype.onRollOver = function (e) {
    this.addGlow();
    this.worldmapRenderer.camera.objectUnderMouse = this;
  };
  InteractiveMapobject.prototype.addGlow = function () {
    if (this.objectContainer) {
      this.objectContainer.asDisplayObject().useFilters(this.getGlowFilter(), true, 1);
      window.renderStaticStageOnNextTick = true;
    }
  };
  InteractiveMapobject.prototype.removeGlow = function () {
    if (this.objectContainer && this.objectContainer.asDisplayObject().filters && this.objectContainer.asDisplayObject().filters.length > 0) {
      this.objectContainer.asDisplayObject().useFilters(E.BitmapFilterHelper.NO_FILTER, true, 1);
      window.renderStaticStageOnNextTick = true;
    }
  };
  Object.defineProperty(InteractiveMapobject.prototype, "hasRingMenu", {
    get: function () {
      return this._hasRingMenu;
    },
    set: function (e) {
      this._hasRingMenu = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobject.prototype, "ignorePeaceProtection", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  InteractiveMapobject.prototype.getNameMC = function () {
    if (this.worldmapObjectVO && this.worldmapObjectVO.ownerInfo) {
      if (this.worldmapObjectVO.areaType == u.WorldConst.AREA_TYPE_CASTLE && this.worldmapObjectVO.ownerInfo.isRuin || this.worldmapObjectVO.areaNameString == "" || this.nameMCDeleted) {
        if (this.infoComponent) {
          this.removeNameMC();
        }
        return null;
      } else if (this.infoComponent) {
        return this.infoComponent.nameMC;
      } else {
        this.infoComponent = new R.CastleMapobjectInfoComponent(this.worldmapObjectVO);
        return this.infoComponent.nameMC;
      }
    } else {
      return null;
    }
  };
  InteractiveMapobject.prototype.removeNameMC = function () {
    if (this.infoComponent.nameMC.itxt_name) {
      this.textFieldManager.unregisterTextField(this.infoComponent.nameMC.castleName_txt);
      this.infoComponent.nameMC.itxt_name = null;
    }
    if (this.infoComponent.nameMC.parent) {
      this.infoComponent.nameMC.parent.removeChild(this.infoComponent.nameMC);
    }
    this.infoComponent.destroy();
    this.nameMCDeleted = true;
  };
  Object.defineProperty(InteractiveMapobject.prototype, "line1Content", {
    get: function () {
      return new p.TextVO(this.worldmapObjectVO.areaNameString);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobject.prototype, "line2Content", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobject.prototype, "line3Content", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobject.prototype, "isTimerToolTip", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobject.prototype, "toolTipPosition", {
    get: function () {
      var e = P.CastleLayoutManager.getInstance().worldmapScreen.camera.viewPortZoom;
      return new v(this.disp.x + C.ClientConstCastle.MAPTILESIZE_X * 0.5 * e, this.disp.y + C.ClientConstCastle.MAPTILESIZE_Y * 0.5 * e);
    },
    enumerable: true,
    configurable: true
  });
  InteractiveMapobject.prototype.getLevelString = function () {
    var e = h.Localize.text(s.GenericTextIds.VALUE_ASSIGN_COLON, [h.Localize.text("level"), this.worldmapObjectVO.ownerInfo.playerLevel]);
    var t = h.Localize.text(s.GenericTextIds.VALUE_ASSIGN_COLON, [h.Localize.text("legendLevel"), this.worldmapObjectVO.ownerInfo.playerLegendLevel]);
    if (this.worldmapObjectVO.ownerInfo.isLegend) {
      return h.Localize.text(s.GenericTextIds.VALUE_SIMPLE_COMP, [e, t]);
    } else {
      return e;
    }
  };
  InteractiveMapobject.prototype.getHonorLevelString = function () {
    var e = g.int(this.worldmapObjectVO.ownerInfo.honor);
    if (this.worldmapObjectVO.isOwnMapobject) {
      e = g.int(O.CastleModel.userData.userHonor);
    }
    var t = this.getLevelString();
    var i = h.Localize.text(s.GenericTextIds.VALUE_ASSIGN_COLON, [h.Localize.text("honor"), e]);
    return h.Localize.text(s.GenericTextIds.VALUE_SIMPLE_COMP, [t, i]);
  };
  InteractiveMapobject.prototype.getAllianceString = function () {
    if (this.worldmapObjectVO.ownerInfo.isInAlliance) {
      return this.worldmapObjectVO.ownerInfo.allianceName;
    } else {
      return "";
    }
  };
  Object.defineProperty(InteractiveMapobject.prototype, "clampToViewport", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  return InteractiveMapobject;
}(D.BasicMapobject);
exports.InteractiveMapobject = A;
o.classImplementsInterfaces(A, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
var L = require("./704.js");
var P = require("./17.js");
var M = require("./70.js");
var R = require("./2137.js");