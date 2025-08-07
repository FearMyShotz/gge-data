Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./6.js");
var l = require("./16.js");
var c = require("./421.js");
var u = require("./4172.js");
var d = require("./91.js");
var p = require("./37.js");
var h = require("./199.js");
var g = require("./867.js");
var C = require("./139.js");
var _ = require("./26.js");
var m = require("./338.js");
var f = require("./1875.js");
var O = require("./90.js");
var E = require("./153.js");
var y = require("./4.js");
var b = require("./4173.js");
var D = require("./847.js");
var I = createjs.Container;
var T = function (e) {
  function CastleWorldMapScreen() {
    return e.call(this, new I()) || this;
  }
  n.__extends(CastleWorldMapScreen, e);
  CastleWorldMapScreen.prototype.buildWorldMap = function () {
    this.removeWorldMap();
    var e = c.ClientConstIsoChangeEventSkin.getSkinnedBackgroundColor(false);
    if (this.renderer) {
      this.renderer.updateGlobalEventListener();
      this.renderer.bgLayer.visible = true;
    } else {
      this.renderer = new S.CastleWorldmapRenderer(this.disp);
      this.camera = this.renderer.camera;
    }
    this.drawBackground(this.renderer.bgLayer, e != l.ClientConstColor.USE_DEFAULT_COLOR ? e : E.KingdomEnum.getTypeById(y.CastleModel.kingdomData.activeKingdomID).mapBackgroundColor);
    this.renderer.mode = S.CastleWorldmapRenderer.RUNNING;
    y.CastleModel.specialEventData.addEventListener(_.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onNewEvent));
    this.controller.addEventListener(m.CastlePanelEvent.MOUSE_OVER_PANEL, this.bindFunction(this.onMouseOutOfWorldMap));
    this.controller.addEventListener(h.CastleDialogEvent.MOUSE_ON_DIALOG, this.bindFunction(this.onMouseOutOfWorldMap));
    this.controller.addEventListener(O.CastleWorldmapEvent.NEW_CAMERA_POSITION, this.bindFunction(this.onNewCameraPosition));
    this.controller.addEventListener(C.CastleArmyDataEvent.NEW_MOVEMENT, this.bindFunction(this.onNewMovement));
    this.controller.addEventListener(C.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onRemoveMapMovement));
    this.controller.addEventListener(g.CastleZoomEvent.ZOOM, this.bindFunction(this.onZoom));
    this.renderer.addEventListener(O.CastleWorldmapEvent.SHOW_MENU, this.bindFunction(this.onShowMenu));
    this.renderer.addEventListener(O.CastleWorldmapEvent.CLICK_RUIN, this.bindFunction(this.onClickRuin));
    this.renderer.addEventListener(O.CastleWorldmapEvent.CLICK_RELOCATE_POSITION, this.bindFunction(this.onClickRelocatePostition));
    this.renderer.addEventListener(O.CastleWorldmapEvent.INFOTOOLTIP, this.bindFunction(this.onShowInfoToolTip));
    this.camera.addEventListener(O.CastleWorldmapEvent.WORLDMAP_CLICK, this.bindFunction(this.onWorldmapClick));
    this.renderer.addEventListener(O.CastleWorldmapEvent.DOUBLE_CLICK_CASTLE, this.bindFunction(this.onDoubleClickCastle));
    this.controller.addEventListener(d.CastleLayoutManagerEvent.CHANGE_DISPLAYSTATE, this.bindFunction(this.onLayoutStateChanged));
    this.layoutManager.nativeCursor.hideCustomCursor();
    a.info("[WorldMapRenderer]: dispatching load complete");
    this.controller.dispatchEvent(new f.CastleWorldmapScreenEvent(f.CastleWorldmapScreenEvent.WORLDMAP_LOADED));
  };
  CastleWorldMapScreen.prototype.onGAAArrived = function (e) {
    if (this._delayedRingMenuVO) {
      var t = this._delayedRingMenuVO.absAreaPos;
      if (!this.containsPosition(t, e.params[0])) {
        return;
      }
      var i = x.castAs(this.layoutManager.worldmapScreen.renderer.getVEforAreaXY(t.x, t.y, true), "InteractiveMapobject");
      if (i) {
        i.showRingMenu();
        this._delayedRingMenuVO = null;
        this.controller.removeEventListener(p.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAArrived));
      }
    }
  };
  CastleWorldMapScreen.prototype.containsPosition = function (e, t) {
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.equals(e)) {
          return true;
        }
      }
    }
    return false;
  };
  CastleWorldMapScreen.prototype.delayOpenRingMenu = function (e) {
    this._delayedRingMenuVO = e;
    this.controller.addEventListener(p.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAArrived));
  };
  CastleWorldMapScreen.prototype.removeWorldMap = function () {
    y.CastleModel.specialEventData.removeEventListener(_.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onNewEvent));
    this.controller.removeEventListener(m.CastlePanelEvent.MOUSE_OVER_PANEL, this.bindFunction(this.onMouseOutOfWorldMap));
    this.controller.removeEventListener(h.CastleDialogEvent.MOUSE_ON_DIALOG, this.bindFunction(this.onMouseOutOfWorldMap));
    this.controller.removeEventListener(O.CastleWorldmapEvent.NEW_CAMERA_POSITION, this.bindFunction(this.onNewCameraPosition));
    this.controller.removeEventListener(C.CastleArmyDataEvent.NEW_MOVEMENT, this.bindFunction(this.onNewMovement));
    this.controller.removeEventListener(C.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onRemoveMapMovement));
    this.controller.removeEventListener(g.CastleZoomEvent.ZOOM, this.bindFunction(this.onZoom));
    if (this.renderer) {
      this.renderer.mode = S.CastleWorldmapRenderer.PAUSE;
      this.renderer.bgLayer.visible = false;
    }
    if (this.renderer) {
      this.controller.removeEventListener(d.CastleLayoutManagerEvent.CHANGE_DISPLAYSTATE, this.bindFunction(this.onLayoutStateChanged));
      this.renderer.removeEventListener(O.CastleWorldmapEvent.SHOW_MENU, this.bindFunction(this.onShowMenu));
      this.renderer.removeEventListener(O.CastleWorldmapEvent.CLICK_RUIN, this.bindFunction(this.onClickRuin));
      this.renderer.removeEventListener(O.CastleWorldmapEvent.CLICK_RELOCATE_POSITION, this.bindFunction(this.onClickRelocatePostition));
      this.renderer.removeEventListener(O.CastleWorldmapEvent.INFOTOOLTIP, this.bindFunction(this.onShowInfoToolTip));
      this.camera.removeEventListener(O.CastleWorldmapEvent.WORLDMAP_CLICK, this.bindFunction(this.onWorldmapClick));
      this.renderer.removeEventListener(O.CastleWorldmapEvent.DOUBLE_CLICK_CASTLE, this.bindFunction(this.onDoubleClickCastle));
      this.controller.removeEventListener(p.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAArrived));
      this._delayedRingMenuVO = null;
    }
  };
  CastleWorldMapScreen.prototype.onZoom = function (e) {
    switch (e.zoomType) {
      case g.CastleZoomEvent.ZOOM_IN:
        this.camera.stepZoomIn();
        break;
      case g.CastleZoomEvent.ZOOM_OUT:
        this.camera.stepZoomOut();
    }
  };
  CastleWorldMapScreen.prototype.onNewMovement = function (e) {
    if (e.mapmovementVO.isVisibleOnWorldMap) {
      this.renderer.addMovement(e.mapmovementVO);
    }
  };
  CastleWorldMapScreen.prototype.onNewEvent = function (e) {
    this.renderer.invalidateMap();
  };
  CastleWorldMapScreen.prototype.onWorldmapClick = function (e) {
    if (!this.camera.isLocked) {
      this.layoutManager.hideAllIngameUIComponents();
      if (this.renderer) {
        this.renderer.hideLines();
      }
    }
  };
  CastleWorldMapScreen.prototype.onLayoutStateChanged = function (e) {
    this.layoutManager.worldmapScreen.camera.centerArea(this.layoutManager.worldmapScreen.camera.lastTarget);
  };
  CastleWorldMapScreen.prototype.onShowMenu = function (e) {
    var t;
    var i;
    if (o.instanceOfClass(e.params[0], "BasicMapobject")) {
      t = e.params.shift();
    } else {
      i = e.params.shift();
    }
    if (!t || !o.instanceOfClass(t.mapobjectVO, "ContainerBuilderMapobjectVO") || !t.mapobjectVO.underConstruction) {
      switch (r.int(e.params.shift())) {
        case O.CastleWorldmapEvent.RINGMENU_CASTLEINFO:
        case O.CastleWorldmapEvent.RINGMENU_OUTPOSTINFO:
        case O.CastleWorldmapEvent.RINGMENU_DUNGEONINFO:
          this.layoutManager.showIngameUIComponent(R.WorldMapCastleInfoMenu, t);
          break;
        case O.CastleWorldmapEvent.RINGMENU_ARMYATTACK:
          this.layoutManager.showIngameUIComponent(V.WorldMapArmyAttackMenu, i);
      }
      if (t) {
        this.controller.dispatchEvent(new O.CastleWorldmapEvent(O.CastleWorldmapEvent.SHOW_PLAYER_INFO, [t]));
      }
    }
  };
  CastleWorldMapScreen.prototype.onClickRuin = function (e) {
    var t;
    if (this.layoutManager.currentState == L.CastleLayoutManager.STATE_WORLDMAP_RELOCATION && o.instanceOfClass(e.params[0], "BasicMapobject")) {
      t = e.params.shift();
      y.CastleModel.smartfoxClient.sendCommandVO(new u.C2SRuinInfoVO(t.mapobjectVO.absAreaPosX, t.mapobjectVO.absAreaPosY));
    }
  };
  CastleWorldMapScreen.prototype.onClickRelocatePostition = function (e) {
    var t;
    if (this.layoutManager.currentState == L.CastleLayoutManager.STATE_WORLDMAP_RELOCATION && o.instanceOfClass(e.params[0], "BasicMapobject")) {
      t = e.params.shift();
      A.CastleDialogHandler.getInstance().registerDefaultDialogs(P.CastleRelocateDialog, new b.CastleRelocateDialogProperties(t.mapobjectVO.absAreaPosX, t.mapobjectVO.absAreaPosY));
    }
  };
  CastleWorldMapScreen.prototype.onShowInfoToolTip = function (e) {
    if (e.params.shift()) {
      var t = e.params.shift();
      this.layoutManager.showIngameUIComponent(M.WorldmapInfoTooltip, t);
    } else {
      this.layoutManager.hideIngameUIComponent(M.WorldmapInfoTooltip);
    }
  };
  CastleWorldMapScreen.prototype.onDoubleClickCastle = function (e) {
    var t = e.params[0];
    if (t && t.canBeVisited) {
      if (o.instanceOfClass(t, "ContainerBuilderMapobjectVO") && t.underConstruction) {
        return;
      }
      s.CommandController.instance.executeCommand(v.IngameClientCommands.JOIN_AREA_AND_SAVE_POSITION_COMMAND, t);
    }
  };
  CastleWorldMapScreen.prototype.onNewCameraPosition = function (e) {
    var t = e.params.shift();
    this.renderer.camera.centerArea(t);
  };
  CastleWorldMapScreen.prototype.onMouseOutOfWorldMap = function (e) {
    if (this.renderer.isNaviVisible) {
      this.renderer.hideNavi();
    }
  };
  CastleWorldMapScreen.prototype.hide = function () {
    this.removeWorldMap();
    e.prototype.hide.call(this);
  };
  CastleWorldMapScreen.prototype.destroy = function () {
    this.removeWorldMap();
    e.prototype.destroy.call(this);
  };
  CastleWorldMapScreen.prototype.onRemoveMapMovement = function (e) {
    var t = r.int(e.mapmovementVO.objectId);
    this.renderer.removeMovement(t);
  };
  CastleWorldMapScreen.prototype.onResize = function (t) {
    e.prototype.onResize.call(this, t);
    if (this.renderer) {
      this.renderer.invalidateMap();
    }
  };
  CastleWorldMapScreen.NAME = "CastleWorldMapScreen";
  return CastleWorldMapScreen;
}(D.CastleScreen);
exports.CastleWorldMapScreen = T;
var v = require("./29.js");
var S = require("./4174.js");
var A = require("./9.js");
var L = require("./17.js");
var P = require("./4176.js");
var M = require("./1333.js");
var R = require("./1139.js");
var V = require("./4202.js");
var x = require("./1.js");