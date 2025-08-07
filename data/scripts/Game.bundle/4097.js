Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Point;
var o = function () {
  function CastleListActionPanelComponent(e, t, i) {
    this._enabled = false;
    this._parentPanel = i;
    e.castleList.bg.toolTipText = "panel_action_placeselection";
    e.castleList.bg.actLikeButton = true;
    e.castleList.bg.mouseChildren = false;
    t.toolTipText = "panel_action_jumpTo";
    this._castleList = new l.ComboboxComponent(e.castleList, "", -1, 13, 17, -1, 0, new y.ComboboxItemRendererList(), 5, false, false, 2, "");
    this._castleList.disp.addEventListener(u.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    this._castleList.disp.addEventListener(u.BasicComboboxEvent.COMBOBOXSELECT, this.bindFunction(this.onSelectCombobox));
    this.controller.addEventListener(c.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    this.controller.addEventListener(_.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onChangeCastleList));
    this.controller.addEventListener(C.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onCastleDataLoaded));
    E.CastleModel.worldmapCameraData.addEventListener(m.CastleWorldmapEvent.SELECTED_CASTLELIST_ITEM_CHANGED, this.bindFunction(this.onChangeSelectedCastleListItem));
    if (E.CastleModel.userData.castleList) {
      this.onChangeCastleList();
    }
    this._jumpToButton = t;
  }
  CastleListActionPanelComponent.prototype.onChangeLayoutState = function (e) {
    this.hideItems();
    this._castleList.enabled = !E.CastleModel.tutorialData.isTutorialActive;
    if (this._parentPanel) {
      this._parentPanel.updateCache();
    }
  };
  CastleListActionPanelComponent.prototype.onSelectCombobox = function (e) {
    if (this._parentPanel) {
      this._parentPanel.updateCache();
    }
  };
  CastleListActionPanelComponent.prototype.onSelectCastle = function (e) {
    if (this.selectedWorldmapObjectVO.kingdomID == h.FactionConst.KINGDOM_ID && !E.CastleModel.specialEventData.getActiveEventByEventId(p.EventConst.EVENTTYPE_FACTION)) {
      this._castleList.selectedData.enabled = false;
      this._castleList.selectedData.visible = false;
      O.CastleBasicController.getInstance().dispatchEvent(new _.CastleUserDataEvent(_.CastleUserDataEvent.CHANGE_CASTLELIST));
      return;
    }
    E.CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel = this.selectedWorldmapObjectVO;
    this.switchCastle();
    if (this._parentPanel) {
      this._parentPanel.updateCache();
    }
  };
  CastleListActionPanelComponent.prototype.onChangeCastleList = function (e = null) {
    var t;
    var i = -1;
    var n = -1;
    var o = -1;
    var a = g.int(E.CastleModel.kingdomData.activeKingdomID);
    if (this._castleList.itemData.length > 0) {
      i = g.int(this.selectedWorldmapObjectVO.objectId);
    }
    this._castleList.clearItems();
    for (var s = 0, r = E.CastleModel.userData.castleList.listForActionPanel; s < r.length; s++) {
      var l = r[s];
      if (l !== undefined) {
        (t = new b.ComboboxItemRendererVO()).itemLabel = l.areaNameString;
        t.data = l;
        this._castleList.addItem(t);
        if (l.objectId == i && l.kingdomID == a) {
          n = g.int(this._castleList.itemData.length - 1);
        }
        if (l.kingdomID == a) {
          o = g.int(this._castleList.itemData.length - 1);
        }
      }
    }
    if (n != -1) {
      this._castleList.selectIndexWithoutEvent(n);
    } else if (o != -1) {
      this._castleList.selectIndexWithoutEvent(o);
    } else {
      this._castleList.selectIndexWithoutEvent(0);
    }
    E.CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel = this.selectedWorldmapObjectVO;
    if (this._parentPanel) {
      this._parentPanel.updateCache();
    }
  };
  CastleListActionPanelComponent.prototype.onChangeSelectedCastleListItem = function (e) {
    if (E.CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel != this.selectedWorldmapObjectVO) {
      for (var t = 0; t < this._castleList.itemData.length; t++) {
        if (this._castleList.itemData[t].data == E.CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel) {
          this._castleList.selectIndexWithoutEvent(t);
          return;
        }
      }
    }
  };
  CastleListActionPanelComponent.prototype.onCastleDataLoaded = function (e) {
    var t = g.int(E.CastleModel.areaData.activeArea.areaId);
    var i = g.int(E.CastleModel.areaData.activeArea.areaInfo.kingdomID);
    for (var n = 0; n < this._castleList.itemData.length; n++) {
      var o = this._castleList.itemData[n].data;
      if (o.objectId == t && o.kingdomID == i) {
        this._castleList.selectIndexWithoutEvent(n);
        E.CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel = this.selectedWorldmapObjectVO;
      }
    }
    if (this._parentPanel) {
      this._parentPanel.updateCache();
    }
  };
  CastleListActionPanelComponent.prototype.onClickJumpToButton = function () {
    if (!E.CastleModel.tutorialData.isTutorialActive) {
      this.switchCastle();
    }
  };
  CastleListActionPanelComponent.prototype.switchCastle = function () {
    this.hideItems();
    var e = this.selectedWorldmapObjectVO;
    if (a.FlashBlockHelper.checkFlashBlock(e.kingdomID)) {
      this._castleList.selectItemIndex(this._castleList.previousSelectedItem);
    } else {
      switch (this.layoutManager.currentState) {
        case r.CastleLayoutManager.STATE_KINGDOMMAP:
          var t = [e.kingdomID, e.absAreaPosX, e.absAreaPosY];
          d.CommandController.instance.executeCommand(s.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, t);
          break;
        case r.CastleLayoutManager.STATE_ISO:
          if (e.objectId == E.CastleModel.areaData.activeArea.areaId && e.kingdomID == E.CastleModel.kingdomData.activeKingdomID) {
            return;
          }
          this.controller.dispatchEvent(new f.IsoEvent(f.IsoEvent.HIDE_PANEL_INFO, []));
          d.CommandController.instance.executeCommand(s.IngameClientCommands.JOIN_AREA_AND_SAVE_POSITION_COMMAND, e);
          break;
        case r.CastleLayoutManager.STATE_WORLDMAP:
          var i = g.int(E.CastleModel.kingdomData.activeKingdomID);
          if (e.kingdomID != i) {
            d.CommandController.instance.executeCommand(s.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [e.kingdomID, e.absAreaPosX, e.absAreaPosY, i]);
            E.CastleModel.worldmapCameraData.savedMapPosition = null;
          } else {
            this.layoutManager.worldmapScreen.camera.centerArea(new n(e.absAreaPosX, e.absAreaPosY));
          }
      }
    }
  };
  CastleListActionPanelComponent.prototype.hideItems = function () {
    this._castleList.hideItems();
  };
  CastleListActionPanelComponent.prototype.destroy = function () {
    this._castleList.disp.removeEventListener(u.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    this._castleList.disp.removeEventListener(u.BasicComboboxEvent.COMBOBOXSELECT, this.bindFunction(this.onSelectCombobox));
    this.controller.removeEventListener(c.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    this.controller.removeEventListener(_.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onChangeCastleList));
    this.controller.removeEventListener(C.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onCastleDataLoaded));
    if (E.CastleModel.worldmapData) {
      E.CastleModel.worldmapData.removeEventListener(m.CastleWorldmapEvent.SELECTED_CASTLELIST_ITEM_CHANGED, this.bindFunction(this.onChangeSelectedCastleListItem));
    }
  };
  Object.defineProperty(CastleListActionPanelComponent.prototype, "layoutManager", {
    get: function () {
      return r.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListActionPanelComponent.prototype, "controller", {
    get: function () {
      return O.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListActionPanelComponent.prototype, "selectedWorldmapObjectVO", {
    get: function () {
      return this._castleList.selectedData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListActionPanelComponent.prototype, "enabled", {
    get: function () {
      return this._enabled;
    },
    set: function (e) {
      this._enabled = e;
      this._castleList.enabled = e;
      this._jumpToButton.enableButton = e;
    },
    enumerable: true,
    configurable: true
  });
  return CastleListActionPanelComponent;
}();
exports.CastleListActionPanelComponent = o;
var a = require("./160.js");
var s = require("./29.js");
var r = require("./17.js");
var l = require("./178.js");
var c = require("./91.js");
var u = require("./2.js");
var d = require("./2.js");
var p = require("./5.js");
var h = require("./5.js");
var g = require("./6.js");
var C = require("./37.js");
var _ = require("./32.js");
var m = require("./90.js");
var f = require("./92.js");
var O = require("./15.js");
var E = require("./4.js");
var y = require("./4098.js");
var b = require("./171.js");