Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./18.js");
var c = require("./71.js");
var u = require("./87.js");
var d = require("./122.js");
var p = require("./92.js");
var h = require("./4.js");
var g = require("./130.js");
var C = require("./227.js");
var _ = require("./444.js");
var m = require("./8.js");
var f = require("./292.js");
var O = require("./131.js");
var E = createjs.Point;
var y = function (e) {
  function CastleEventBuildingPanel() {
    CONSTRUCTOR_HACK;
    return e.call(this, new Library.CastleInterfaceElements.EventBuildingPanel()) || this;
  }
  n.__extends(CastleEventBuildingPanel, e);
  CastleEventBuildingPanel.prototype.init = function () {
    e.prototype.init.call(this);
    this.eventBuildingPanel.mc_buildingTooltip.visible = false;
    this.eventBuildingPanel.mc_buildingTooltip.mouseChildren = false;
    this.eventBuildingPanel.mc_buildingTooltip.mouseEnabled = false;
    this.decoShopPanelItemComponent = new v.DecoShopPanelItemComponent(this.eventBuildingPanel.i0);
    this.decoShopPanelItemComponent.addOnMouseOutItem(this.bindFunction(this.onMouseOutItem));
    this.decoShopPanelItemComponent.addOnMouseOverItem(this.bindFunction(this.onMouseOverItem));
    this.decoShopPanelItemComponent.addOnClickItem(this.bindFunction(this.onShopItemClick));
    this.decoShopPanelItemComponent.addOnClickInfo(this.bindFunction(this.onClickInfo));
    this._toggleUpgradeViewBtn = new P.CastleToggleUpgradeViewButton(this.eventBuildingPanel.btn_switchUpgradeView);
    this._toggleWallViewBtn = new M.CastleToggleWallViewButton(this.eventBuildingPanel.btn_switchWallVisibility);
  };
  CastleEventBuildingPanel.prototype.show = function () {
    h.CastleModel.privateOfferData.addEventListener(g.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.onPrivateOfferStateChanged));
    h.CastleModel.privateOfferData.addEventListener(g.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onPrivateOfferDeleted));
    this.controller.addEventListener(c.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeResources));
    this.controller.addEventListener(p.IsoEvent.ON_DRAG_OF_NEW_OBJECT_DONE, this.bindFunction(this.onNewBuildingPlaced));
    this.controller.addEventListener(p.IsoEvent.ON_DRAG_OF_NEW_OBJECT_CANCELED, this.bindFunction(this.onNewBuildingPlaced));
    this.updateBuildingGroundViewButton();
    e.prototype.show.call(this);
    this.fillItemInfo(this.panelProperties.wodID);
    this._toggleUpgradeViewBtn.show();
    this._toggleWallViewBtn.show();
  };
  CastleEventBuildingPanel.prototype.hide = function () {
    h.CastleModel.privateOfferData.removeEventListener(g.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.onPrivateOfferStateChanged));
    h.CastleModel.privateOfferData.removeEventListener(g.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onPrivateOfferDeleted));
    this.controller.removeEventListener(c.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeResources));
    this.controller.removeEventListener(p.IsoEvent.ON_DRAG_OF_NEW_OBJECT_DONE, this.bindFunction(this.onNewBuildingPlaced));
    this.controller.removeEventListener(p.IsoEvent.ON_DRAG_OF_NEW_OBJECT_CANCELED, this.bindFunction(this.onNewBuildingPlaced));
    this.removeDragItem();
    this._toggleUpgradeViewBtn.hide();
    this._toggleWallViewBtn.hide();
    e.prototype.hide.call(this);
  };
  CastleEventBuildingPanel.prototype.updateBuildingGroundViewButton = function () {
    this.eventBuildingPanel.btn_switchBuildingGroundView.enableButton = h.CastleModel.tutorialData.isTutorialFinished();
    this.eventBuildingPanel.btn_switchBuildingGroundView.selectButton = this.isoRenderer.strategies.currentStrategy.isActive(d.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW);
    this.setBuildingGroundButtonToolTip();
  };
  CastleEventBuildingPanel.prototype.onNewBuildingPlaced = function (e) {
    this.removeDragItemFromShop();
  };
  CastleEventBuildingPanel.prototype.destroy = function () {
    this.hide();
    if (this.decoShopPanelItemComponent) {
      this.decoShopPanelItemComponent.clearListeners();
    }
    e.prototype.destroy.call(this);
  };
  CastleEventBuildingPanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.y = this.disp.stage.stageHeight;
      this.disp.x = this.disp.stage.stageWidth / 2;
      if (this.env.hasNetworkBuddies) {
        this.disp.y -= l.ClientConstCastle.BUDDY_PANEL_HEIGHT;
      }
    }
  };
  CastleEventBuildingPanel.prototype.closePanel = function () {
    if (!this.layoutManager.isInState(T.CastleLayoutManager.STATE_ISO)) {
      this.layoutManager.state = T.CastleLayoutManager.STATE_ISO;
    }
    b.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(false);
  };
  CastleEventBuildingPanel.prototype.setBuildingGroundButtonToolTip = function () {
    if (this.eventBuildingPanel.btn_switchBuildingGroundView.enabled) {
      if (this.isoRenderer.strategies.currentStrategy.isActive(d.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW)) {
        this.eventBuildingPanel.btn_switchBuildingGroundView.toolTipText = "constructionMode_showBuildings";
      } else {
        this.eventBuildingPanel.btn_switchBuildingGroundView.toolTipText = "constructionMode_hideBuildings";
      }
    } else {
      this.eventBuildingPanel.btn_switchBuildingGroundView.toolTipText = "panel_shop_needQuestProgress";
    }
  };
  CastleEventBuildingPanel.prototype.showShopItemTooltip = function (e) {
    if (l.ClientConstCastle.USE_PICK_AND_DROP || !l.ClientConstCastle.USE_PICK_AND_DROP && !this.selectedShopVO) {
      var t = e.shopVO;
      S.DecoBuildingToolTipManager.showToolTip(e, t);
    }
  };
  CastleEventBuildingPanel.prototype.fillItemInfo = function (e) {
    var t = h.CastleModel.wodData.createVObyWOD(e, D.CastleWodData.TYPE_BUILDING);
    this.decoShopPanelItemComponent.fillItem(t, l.ClientConstCastle.CATEGORY_SEASONEVENT);
  };
  CastleEventBuildingPanel.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (m.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.eventBuildingPanel.btn_close:
          this.removeDragItemFromShop();
          this.closePanel();
          break;
        case this.eventBuildingPanel.btn_switchBuildingGroundView:
          this.isoRenderer.strategies.toggle(d.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW);
          this.updateBuildingGroundViewButton();
      }
    }
  };
  CastleEventBuildingPanel.prototype.onClickInfo = function (e) {
    var t = e.disp.shopVO;
    I.CastleDialogHandler.getInstance().registerDefaultDialogs(A.CastleBuildingInfoDialog, new _.CastleBuildingInfoDialogProperties(t));
  };
  CastleEventBuildingPanel.prototype.onMouseUp = function (e) {
    if (!l.ClientConstCastle.USE_PICK_AND_DROP && this.selectedItemMc) {
      this.layoutManager.customCursor.setCursorType(a.BasicCustomCursor.CURSOR_ARROW);
      this.removeDragItem();
    }
  };
  CastleEventBuildingPanel.prototype.onMouseOutItem = function (e) {
    this.eventBuildingPanel.mc_buildingTooltip.visible = false;
    S.DecoBuildingToolTipManager.hideToolTip();
  };
  CastleEventBuildingPanel.prototype.onMouseOverItem = function (e) {
    this.showShopItemTooltip(e.disp);
  };
  CastleEventBuildingPanel.prototype.onRollOver = function (e) {
    if (this.selectedShopItem) {
      this.isoRenderer.mouse.cancelDraggedTarget();
      this.addNewDragItem(this.getShopVOFromItem(this.selectedShopItem));
    }
  };
  CastleEventBuildingPanel.prototype.onRollOut = function (e) {
    this.onCursorOut(e);
    this.removeDragItem();
    if (this.selectedShopVO) {
      this.isoRenderer.mouse.startDraggingOfNewBuyObject(this.selectedShopVO);
    }
  };
  CastleEventBuildingPanel.prototype.onPrivateOfferDeleted = function (e) {
    if (this.panelProperties.privateOfferVO && e.offerVO.id == this.panelProperties.privateOfferVO.id) {
      this.closePanel();
    }
  };
  CastleEventBuildingPanel.prototype.onPrivateOfferStateChanged = function (e) {
    if (this.panelProperties.privateOfferVO && e.offerVO.id == this.panelProperties.privateOfferVO.id && e.offerVO.offerState == C.PrivateOfferStateEnum.PRECONDITION) {
      this.closePanel();
    }
  };
  CastleEventBuildingPanel.prototype.onChangeResources = function (e) {
    var t = R.castAs(e.params[0], "CastleResourcesVO");
    if (t && h.CastleModel.areaData.activeArea.areaId == t.castleID) {
      this.fillItemInfo(this.panelProperties.wodID);
    }
  };
  CastleEventBuildingPanel.prototype.getShopVOFromItem = function (e) {
    if (e) {
      return e.disp.shopVO;
    } else {
      return null;
    }
  };
  CastleEventBuildingPanel.prototype.isItemAvailableForSelection = function (e) {
    return e.disp.shopVO.isAvailableByLevelAndEffect && !e.disp.mc_contentHolder.icon_lock_unreachable.visible;
  };
  CastleEventBuildingPanel.prototype.onShopItemClick = function (e) {
    if (this.selectedShopItem != e) {
      if (e && this.isItemAvailableForSelection(e)) {
        this.addDragItemFromShop(e);
      }
    } else {
      this.removeDragItemFromShop();
    }
  };
  CastleEventBuildingPanel.prototype.addDragItemFromShop = function (e) {
    this.removeDragItemFromShop();
    var t = this.getShopVOFromItem(e);
    if (this.addNewDragItem(t)) {
      e.bgStartDrag();
      this._selectedShopItem = e;
      this._selectedShopVO = t;
      this.initShopVO(this._selectedShopVO);
      this.layoutManager.nativeCursor.setCursorType(a.BasicCustomCursor.CURSOR_DRAG);
      this.controller.dispatchEvent(new p.IsoEvent(p.IsoEvent.ON_DECO_SHOP_DRAG_START, [t]));
    }
  };
  CastleEventBuildingPanel.prototype.removeDragItemFromShop = function () {
    this._selectedShopItem = null;
    this._selectedShopVO = null;
    this.removeDragItem();
    this.decoShopPanelItemComponent.bgStopDrag();
    this.layoutManager.nativeCursor.setCursorType(a.BasicCustomCursor.CURSOR_CLICK);
  };
  CastleEventBuildingPanel.prototype.addNewDragItem = function (e) {
    this.removeDragItem();
    try {
      var t = s.getDefinitionByName(e.getVisualClassName());
      this._selectedItemMc = new t();
      o.MovieClipHelper.stopAllMoviesGotoFrameOne(this._selectedItemMc);
    } catch (e) {
      this._selectedItemMc = null;
      return false;
    }
    var i;
    var n = this._selectedItemMc.getBounds(null);
    var a = CastleEventBuildingPanel.DRAG_ICON_DIMENSION.x / n.width;
    this._selectedItemMc.scaleX = this._selectedItemMc.scaleY = a;
    i = h.CastleModel.kingdomData.activeKingdomID == r.FactionConst.KINGDOM_ID ? L.CrestHelper.getPlayerOrFactionCrest(h.CastleModel.areaData.activeOwnerInfo) : h.CastleModel.areaData.activeOwnerInfo.crest;
    for (var l = 0; l < 5; l++) {
      if (this._selectedItemMc["flag" + l]) {
        f.FlagHelper.colorFlag(this._selectedItemMc["flag" + l], i);
      }
    }
    if (this._selectedItemMc.flag) {
      f.FlagHelper.colorFlag(this._selectedItemMc.flag, i);
    }
    if (this._selectedItemMc.flagb) {
      f.FlagHelper.colorFlag(this._selectedItemMc.flagb, i);
    }
    this.layoutManager.nativeCursor.startDrag(this._selectedItemMc);
    return true;
  };
  CastleEventBuildingPanel.prototype.removeDragItem = function () {
    if (this._selectedItemMc) {
      this.layoutManager.nativeCursor.stopDrag(this._selectedItemMc);
      this._selectedItemMc = null;
    }
  };
  CastleEventBuildingPanel.prototype.initShopVO = function (e) {
    e.init(this.isoRenderer.isoData);
    e.updateData();
    if (e) {
      var t = e;
      t.buildingState = u.IsoBuildingStateEnum.BUILD_COMPLETED;
      t.hitPoints = 100;
    }
  };
  Object.defineProperty(CastleEventBuildingPanel.prototype, "eventBuildingPanel", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEventBuildingPanel.prototype, "panelProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEventBuildingPanel.prototype, "isoRenderer", {
    get: function () {
      return b.Iso.renderer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEventBuildingPanel.prototype, "selectedShopItem", {
    get: function () {
      return this._selectedShopItem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEventBuildingPanel.prototype, "selectedShopVO", {
    get: function () {
      return this._selectedShopVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEventBuildingPanel.prototype, "selectedItemMc", {
    get: function () {
      return this._selectedItemMc;
    },
    enumerable: true,
    configurable: true
  });
  CastleEventBuildingPanel.__initialize_static_members = function () {
    CastleEventBuildingPanel.DRAG_ICON_DIMENSION = new E(23, 30);
  };
  CastleEventBuildingPanel.NAME = "CastleEventBuildingPanel";
  return CastleEventBuildingPanel;
}(O.CastlePanel);
exports.CastleEventBuildingPanel = y;
var b = require("./34.js");
var D = require("./56.js");
var I = require("./9.js");
var T = require("./17.js");
var v = require("./1439.js");
var S = require("./307.js");
var A = require("./445.js");
var L = require("./61.js");
var P = require("./1451.js");
var M = require("./1452.js");
var R = require("./1.js");
y.__initialize_static_members();