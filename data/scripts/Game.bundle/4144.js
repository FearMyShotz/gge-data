Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./1.js");
var d = require("./6.js");
var p = require("./278.js");
var h = require("./4145.js");
var g = require("./91.js");
var C = require("./199.js");
var _ = require("./1789.js");
var m = require("./261.js");
var f = require("./26.js");
var O = require("./338.js");
var E = require("./4.js");
var y = require("./846.js");
var b = createjs.Container;
var D = createjs.Event;
var I = createjs.MouseEvent;
var T = createjs.Rectangle;
var v = function (e) {
  function CastleSeasonMapScreen() {
    var t = this;
    t._parallax = false;
    t._isDragging = false;
    t._parallaxSections = [];
    t.speedLeftRight = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, new b()) || this;
  }
  n.__extends(CastleSeasonMapScreen, e);
  CastleSeasonMapScreen.prototype.init = function () {
    if (E.CastleModel.specialEventData.activeSeasonVO.hasFrame) {
      CastleSeasonMapScreen.MAP_WIDTH = 3150;
    } else {
      CastleSeasonMapScreen.MAP_WIDTH = 2769;
    }
    this.seasonMapRenderer = new L.CastleSeasonMapRenderer();
    e.prototype.init.call(this);
  };
  CastleSeasonMapScreen.prototype.show = function () {
    if (!E.CastleModel.specialEventData.activeSeasonVO || E.CastleModel.specialEventData.activeSeasonVO.treasureMapAssetsLoaded()) {
      e.prototype.show.call(this);
      this.destroySeasonMap();
      this.drawBG();
      this._screenLayer = new b();
      this.screenDisp.addChild(this._screenLayer);
      this.loadScreenBG();
      this.seasonMapRenderer.init(this._mapLayer);
      if (E.CastleModel.specialEventData.activeSeasonVO.hasFrame) {
        this.loadFrame();
      }
      this.updatePosition();
      E.CastleModel.smartfoxClient.sendCommandVO(new h.C2SSeasonJoinEventVO(this.treasureMapVO.mapID));
      this.checkHelpArrows();
    } else {
      E.CastleModel.specialEventData.activeSeasonVO.loadTreasureMapAssets(this.bindFunction(this.show));
    }
  };
  CastleSeasonMapScreen.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this.disp.addEventListener(I.CLICK, this.bindFunction(this.onClick));
    this.disp.addEventListener(I.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this.disp.addEventListener(I.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    E.CastleModel.specialEventData.addEventListener(f.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    E.CastleModel.specialEventData.addEventListener(f.CastleSpecialEventEvent.REMOVE_PRIVATEEVENT, this.bindFunction(this.onRemoveEvent));
    E.CastleModel.questData.addEventListener(m.CastleQuestDataEvent.GET_QUESTLIST, this.bindFunction(this.onQuestsChanged));
    this.controller.addEventListener(C.CastleDialogEvent.CLOSE_QUESTINFO, this.bindFunction(this.checkHelpArrows));
    this.disp.addEventListener(D.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
    this.controller.addEventListener(O.CastlePanelEvent.MOUSE_OVER_PANEL, this.bindFunction(this.onMouseOnPanel));
    this.controller.addEventListener(_.CastleQuestConditionEvent.HIGHLIGHT_ON_MAP, this.bindFunction(this.onHighlightOnMap));
  };
  CastleSeasonMapScreen.prototype.onHighlightOnMap = function (e) {
    if (e.questCondition) {
      var t;
      switch (e.questCondition.conditionType) {
        case p.ClientConstQuestCondition.QUESTTYPE_TREASURE_NODE:
          t = this.treasureMapVO.getAvailableNodeIDs(function (t) {
            var i = [];
            for (var n = 1; n < arguments.length; n++) {
              i[n - 1] = arguments[n];
            }
            return e.questCondition.conditionData.indexOf(t.nodeID.toString()) > -1 && !t.isDefeated;
          });
          break;
        case p.ClientConstQuestCondition.QUESTTYPE_REPAIR_TREASURE_BRIDGES:
          t = this.treasureMapVO.getAvailableNodeIDs(function (e) {
            var t = [];
            for (var i = 1; i < arguments.length; i++) {
              t[i - 1] = arguments[i];
            }
            return [A.TMapNodeVO.NODE_TYPE_BRIDGE].indexOf(e.nodeType) > -1 && !e.isDefeated;
          });
          break;
        case p.ClientConstQuestCondition.QUESTTYPE_TREASURE_VILLAGES:
          t = this.treasureMapVO.getAvailableNodeIDs(function (e) {
            var t = [];
            for (var i = 1; i < arguments.length; i++) {
              t[i - 1] = arguments[i];
            }
            return [A.TMapNodeVO.NODE_TYPE_DUNGEON].indexOf(e.nodeType) > -1 && e.isVillage && !e.isDefeated;
          });
          break;
        case p.ClientConstQuestCondition.QUESTTYPE_FINISHTREASUREDUNGEONS:
          t = this.treasureMapVO.getAvailableNodeIDs(function (e) {
            var t = [];
            for (var i = 1; i < arguments.length; i++) {
              t[i - 1] = arguments[i];
            }
            return [A.TMapNodeVO.NODE_TYPE_DUNGEON, A.TMapNodeVO.NODE_TYPE_BRIDGEDUNGEON, A.TMapNodeVO.NODE_TYPE_MORALBOOSTER].indexOf(e.nodeType) > -1 && !e.isVillage && !e.isDefeated && !e.isEndNode;
          });
          break;
        case p.ClientConstQuestCondition.QUESTTYPE_COLLECT_SILVER_RUNES:
        case p.ClientConstQuestCondition.QUESTTYPE_COLLECT_PEARL_RELICS:
          t = this.treasureMapVO.getAvailableNodeIDs(function (e) {
            var t = [];
            for (var i = 1; i < arguments.length; i++) {
              t[i - 1] = arguments[i];
            }
            return [A.TMapNodeVO.NODE_TYPE_DUNGEON, A.TMapNodeVO.NODE_TYPE_BRIDGEDUNGEON, A.TMapNodeVO.NODE_TYPE_MORALBOOSTER].indexOf(e.nodeType) > -1 && !e.isDefeated;
          });
      }
      if (t.length > 0) {
        this.centerDungeon(this.getFirstUnlockedNodeID(t));
        E.CastleModel.treasureMapData.setMapHighlights(this.treasureMapVO.mapID, t);
      }
    }
  };
  CastleSeasonMapScreen.prototype.getFirstUnlockedNodeID = function (e) {
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && this.treasureMapVO.getNodeById(n).isUnlocked) {
          return n;
        }
      }
    }
    return d.int(e[0]);
  };
  CastleSeasonMapScreen.prototype.centerDungeon = function (e) {
    var t = this._mapLayer["node_" + this.treasureMapVO.getNodeById(e).pos];
    if (t) {
      this._screenLayer.x = this._screenLayer.stage.stageWidth / 2 - t.x * this._screenLayer.scaleX;
      this.checkDispBounds();
      this.onMouseMove();
    }
  };
  CastleSeasonMapScreen.prototype.onRemoveEvent = function (e) {
    if (u.instanceOfClass(e.specialEventVO, "ASeasonEventVO")) {
      this.gotoHomeCastle();
    }
  };
  CastleSeasonMapScreen.prototype.gotoHomeCastle = function () {
    this.layoutManager.nativeCursor.stopAllDrag();
    a.CommandController.instance.executeCommand(S.IngameClientCommands.JOIN_MAIN_CASTLE_COMMAND);
  };
  CastleSeasonMapScreen.prototype.hide = function () {
    if (this.treasureMapVO) {
      E.CastleModel.treasureMapData.clearMapHighlights(this.treasureMapVO.mapID);
    }
    this.destroySeasonMap();
    this.layoutManager.tooltipManager.hide();
    e.prototype.hide.call(this);
  };
  CastleSeasonMapScreen.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    E.CastleModel.specialEventData.removeEventListener(f.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    E.CastleModel.specialEventData.removeEventListener(f.CastleSpecialEventEvent.REMOVE_PRIVATEEVENT, this.bindFunction(this.onRemoveEvent));
    E.CastleModel.questData.removeEventListener(m.CastleQuestDataEvent.GET_QUESTLIST, this.bindFunction(this.onQuestsChanged));
    this.controller.removeEventListener(C.CastleDialogEvent.CLOSE_QUESTINFO, this.bindFunction(this.checkHelpArrows));
    this.disp.removeEventListener(D.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
    this.controller.removeEventListener(O.CastlePanelEvent.MOUSE_OVER_PANEL, this.bindFunction(this.onMouseOnPanel));
    this.controller.removeEventListener(_.CastleQuestConditionEvent.HIGHLIGHT_ON_MAP, this.bindFunction(this.onHighlightOnMap));
  };
  CastleSeasonMapScreen.prototype.onMouseOnPanel = function (e) {
    this.layoutManager.nativeCursor.stopAllDrag();
    this.onMouseUp(null);
  };
  CastleSeasonMapScreen.prototype.onQuestsChanged = function (e) {
    this.checkHelpArrows();
  };
  CastleSeasonMapScreen.prototype.checkHelpArrows = function (e = null) {
    if (E.CastleModel.questData.isQuestActive(1032)) ;else if (E.CastleModel.questData.isQuestActive(1037)) ;else if (E.CastleModel.questData.isQuestActive(1039)) {
      if (this.treasureMapVO && this.treasureMapVO.mapID == E.CastleModel.questData.getActiveQuestByID(1039).mapID) {
        this.treasureMapVO.getNodeById(125).hasCoolDown;
      }
    } else {
      E.CastleModel.questData.isQuestActive(1063);
    }
  };
  CastleSeasonMapScreen.prototype.destroySeasonMap = function () {
    this.seasonMapRenderer.destroy();
    if (this.screenDisp && this._screenLayer && this.screenDisp.contains(this._screenLayer)) {
      this.screenDisp.removeChild(this._screenLayer);
    }
    if (this.screenDisp && this.bg && this.screenDisp.contains(this.bg)) {
      this.screenDisp.removeChild(this.bg);
      this.bg = null;
    }
  };
  CastleSeasonMapScreen.prototype.loadScreenBG = function () {
    this._mapLayer = new (c.getDefinitionByName("SeasonMapBG_" + E.CastleModel.specialEventData.activeSeasonVO.eventId))();
    if (E.CastleModel.specialEventData.activeSeasonVO.hasFrame) {
      this._mapLayer.x = 192;
      this._mapLayer.y = 198;
    }
    this._screenLayer.addChild(this._mapLayer);
  };
  CastleSeasonMapScreen.prototype.loadFrame = function () {
    var e = new (c.getDefinitionByName("Event" + E.CastleModel.specialEventData.activeSeasonVO.eventId + "TreasuremapFrame"))();
    e.mouseEnabled = false;
    this._screenLayer.addChild(e);
  };
  Object.defineProperty(CastleSeasonMapScreen.prototype, "treasureMapVO", {
    get: function () {
      if (E.CastleModel.specialEventData.activeSeasonVO) {
        return E.CastleModel.specialEventData.activeSeasonVO.treasureMapVO;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSeasonMapScreen.prototype, "screenDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleSeasonMapScreen.prototype.drawBG = function () {
    this.bg = new b();
    this.bg.graphics.beginFill(this.getBGColor(), 1);
    this.bg.graphics.drawRect(0, 0, 2, 2);
    this.bg.graphics.endFill();
    this.bg.setBounds(0, 0, 2, 2);
    this.bg.addEventListener(D.ADDED_TO_STAGE, this.bindFunction(this.onBGAddedToStage));
    this.screenDisp.addChildAt(this.bg, 0);
  };
  CastleSeasonMapScreen.prototype.getBGColor = function () {
    switch (E.CastleModel.specialEventData.activeSeasonVO.eventId) {
      case P.EventConst.EVENTTYPE_CRUSADE_THORNKING:
        return 7634005;
      case P.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
        return 1068930;
      case P.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
        return 146505;
    }
  };
  CastleSeasonMapScreen.prototype.onBGAddedToStage = function (e) {
    this.bg.removeEventListener(D.ADDED_TO_STAGE, this.bindFunction(this.onBGAddedToStage));
    this.resizeBG();
  };
  CastleSeasonMapScreen.prototype.resizeBG = function () {
    if (this.bg) {
      this.bg.width = this.bg.stage.stageWidth / this.disp.scaleX;
      this.bg.height = this.bg.stage.stageHeight / this.disp.scaleY;
    }
  };
  CastleSeasonMapScreen.prototype.updatePosition = function () {
    this.resizeBG();
    var e = this.disp.stage;
    if (this._screenLayer && e) {
      var t = e.stageHeight / 600;
      t = E.CastleModel.specialEventData.activeSeasonVO.hasFrame ? Math.min(Math.max(t, 0.7), 1) : Math.max(t, 0.7);
      if (r.MobileHelper.isScreenTooSmall()) {
        t = r.MobileHelper.isLandscape() ? 0.55 : 0.9;
      }
      this._screenLayer.x = 0;
      if (E.CastleModel.specialEventData.activeSeasonVO.hasFrame) {
        this._screenLayer.y = (e.stageHeight - this._screenLayer.height) * 0.5;
      } else {
        this._screenLayer.y = 0;
      }
      this._screenLayer.scaleX = this._screenLayer.scaleY = t;
    }
  };
  CastleSeasonMapScreen.prototype.onEnterFrame = function (e) {
    this.checkDispBounds();
    if (!(this.disp.stage.focus instanceof l.TextField)) {
      if (s.Input.instance.isKeyDown(r.Keyboard.RIGHT)) {
        this.speedLeftRight = d.int(Math.max(this.speedLeftRight - 3, -50));
      } else if (s.Input.instance.isKeyDown(r.Keyboard.LEFT)) {
        this.speedLeftRight = d.int(Math.min(this.speedLeftRight + 3, 50));
      } else {
        this.speedLeftRight = d.int(this.speedLeftRight > 0 ? Math.max(this.speedLeftRight - 3, 0) : Math.min(this.speedLeftRight + 3, 0));
      }
      if (this.speedLeftRight != 0) {
        this._screenLayer.x += Math.min(50, this.speedLeftRight);
      }
      this.checkDispBounds();
    }
  };
  CastleSeasonMapScreen.prototype.onMouseDown = function (e) {
    var t = this._screenLayer.stage.stageWidth - CastleSeasonMapScreen.MAP_WIDTH * this._screenLayer.scaleX;
    this._screenLayer.startDrag(false, new T(t, 0, Math.abs(t), 0));
    this._isDragging = true;
    this.layoutManager.nativeCursor.setCursorType(o.BasicCustomCursor.CURSOR_DRAG);
    this.controller.addEventListener(g.CastleLayoutManagerEvent.SHOW_DIALOG, this.bindFunction(this.onNewScreen));
  };
  CastleSeasonMapScreen.prototype.onNewScreen = function (e) {
    this.controller.removeEventListener(g.CastleLayoutManagerEvent.SHOW_DIALOG, this.bindFunction(this.onNewScreen));
    this._screenLayer.stopDrag();
    this._isDragging = false;
  };
  CastleSeasonMapScreen.prototype.onMouseUp = function (e) {
    this._screenLayer.stopDrag();
    this._isDragging = false;
    this.layoutManager.nativeCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
  };
  CastleSeasonMapScreen.prototype.checkDispBounds = function () {
    this._screenLayer.x = Math.max(Math.min(0, this._screenLayer.x), this._screenLayer.stage.stageWidth - CastleSeasonMapScreen.MAP_WIDTH * this._screenLayer.scaleX);
    if (E.CastleModel.specialEventData.activeSeasonVO && E.CastleModel.specialEventData.activeSeasonVO.hasFrame) {
      this._screenLayer.y = (this._screenLayer.stage.stageHeight - this._screenLayer.height) * 0.5;
    } else {
      this._screenLayer.y = 0;
    }
  };
  CastleSeasonMapScreen.prototype.onMouseMove = function (e = null) {};
  CastleSeasonMapScreen.NAME = "CastleSeasonMapScreen";
  CastleSeasonMapScreen.MAP_WIDTH = 3150;
  return CastleSeasonMapScreen;
}(y.CastleScreen);
exports.CastleSeasonMapScreen = v;
var S = require("./29.js");
var A = require("./733.js");
var L = require("./4146.js");
var P = require("./5.js");