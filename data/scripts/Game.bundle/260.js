Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./5.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./6.js");
var g = require("./18.js");
var C = require("./58.js");
var _ = require("./2626.js");
var m = require("./2627.js");
var f = require("./1437.js");
var O = require("./91.js");
var E = require("./261.js");
var y = require("./26.js");
var b = require("./32.js");
var D = require("./161.js");
var I = require("./1438.js");
var T = require("./71.js");
var v = require("./87.js");
var S = require("./122.js");
var A = require("./92.js");
var L = require("./4.js");
var P = require("./324.js");
var M = require("./130.js");
var R = require("./42.js");
var V = require("./307.js");
var x = require("./444.js");
var w = require("./762.js");
var B = require("./8.js");
var F = require("./41.js");
var N = require("./292.js");
var k = require("./131.js");
var U = createjs.MovieClip;
var G = createjs.Point;
var H = function (e) {
  function CastleDecoShopPanel() {
    var t = this;
    t.maxPage = 0;
    t.currentPage = 0;
    t._prevCategory = g.ClientConstCastle.CATEGORY_CIVIL;
    t._isActive = false;
    CONSTRUCTOR_HACK;
    (t = e.call(this, new Library.CastleInterfaceElements.DecoShopPanel_Dec24()) || this)._tfNothingBuy = t.textFieldManager.registerTextField(t.disp.mc_nothingBuyable.txt_text, new p.LocalizedTextVO("panel_deco_nothingToBuy"), new a.InternalGGSTextFieldConfigVO(true));
    return t;
  }
  n.__extends(CastleDecoShopPanel, e);
  CastleDecoShopPanel.prototype.init = function () {
    var t;
    e.prototype.init.call(this);
    B.ButtonHelper.initButton(this.decoShopPanel.btn_storage, -1, ie.ClickFeedbackButtonBackground);
    this.decoShopPanel.mc_buildingTooltip.visible = false;
    this.decoShopPanel.mc_buildingTooltip.mouseChildren = false;
    this.decoShopPanel.mc_buildingTooltip.mouseEnabled = false;
    this.decoShopPanel.btn_civil.toolTipText = "panel_deco_civil";
    this.decoShopPanel.btn_deco.toolTipText = "panel_deco_deco";
    this.decoShopPanel.btn_military.toolTipText = "panel_deco_military";
    this.decoShopPanel.btn_defence.toolTipText = "panel_deco_defence";
    this.decoShopPanel.btn_storage.toolTipText = "panel_deco_storage";
    this.decoShopPanel.btn_event.toolTipText = "panel_deco_military";
    this.decoShopPanel.btn_event.visible = false;
    this.decoShopPanel.bitmap_2.mouseEnabled = false;
    this._decoShopPanelItemComponents = [];
    for (var i = 0; i < CastleDecoShopPanel.ITEMS_PER_PAGE; i++) {
      (t = new K.DecoShopPanelItemComponent(this.decoShopPanel.getChildByName("i" + i))).addOnMouseDownItem(this.bindFunction(this.onMouseDownItem));
      t.addOnClickUpgrade(this.bindFunction(this.onClickUpgrade));
      t.addOnClickItem(this.bindFunction(this.onShopItemClick));
      t.addOnClickInfo(this.bindFunction(this.onClickInfo));
      t.addOnClickSell(this.bindFunction(this.onClickSell));
      t.addOnClickJumpTo(this.bindFunction(this.onClickJumpTo));
      t.addOnMouseOverItem(this.bindFunction(this.onMouseOverItem));
      t.addOnMouseOverSell(this.bindFunction(this.onMouseOverSell));
      t.addOnMouseOutItem(this.bindFunction(this.onMouseOutItem));
      t.addOnMouseOutSell(this.bindFunction(this.onMouseOutSell));
      t.addOnLoaded(this.bindFunction(this.updateCache));
      this._decoShopPanelItemComponents.push(t);
    }
    this._toggleUpgradeViewBtn = new Z.CastleToggleUpgradeViewButton(this.decoShopPanel.btn_switchUpgradeView);
    this._toggleWallViewBtn = new $.CastleToggleWallViewButton(this.decoShopPanel.btn_switchWallVisibility);
    this._tfStorageCounter = this.textFieldManager.registerTextField(this.decoShopPanel.storage_counter.txt_text, new d.LocalizedNumberVO(0));
    this._tfStorageCounter_civil = this.textFieldManager.registerTextField(this.decoShopPanel.storage_counter_civil.txt_text, new d.LocalizedNumberVO(0));
    this._tfStorageCounter_military = this.textFieldManager.registerTextField(this.decoShopPanel.storage_counter_military.txt_text, new d.LocalizedNumberVO(0));
    this._tfStorageCounter_deco = this.textFieldManager.registerTextField(this.decoShopPanel.storage_counter_deco.txt_text, new d.LocalizedNumberVO(0));
    this._tfNothingBuy = this.textFieldManager.registerTextField(this.decoShopPanel.mc_nothingBuyable.txt_text, new p.LocalizedTextVO("panel_deco_nothingToBuy"), new a.InternalGGSTextFieldConfigVO(true));
    this._dragPreviewDispCreator = new ee.DispCreatorComponent();
    this._dragPreviewDispCreator.init(new U());
    if (l.MobileHelper.isScreenTooSmall()) {
      this.decoShopPanel.scaleX = this.decoShopPanel.scaleY = 0.8;
    }
  };
  CastleDecoShopPanel.prototype.show = function () {
    this._isActive = true;
    this.changeCategory(this.layoutManager.isInTreasureCamp ? g.ClientConstCastle.CATEGORY_SEASONEVENT : g.ClientConstCastle.CATEGORY_CIVIL);
    L.CastleModel.specialEventData.addEventListener(y.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEndSpecialEvent));
    this.controller.addEventListener(b.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onRefreshShopItems));
    this.controller.addEventListener(D.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onChangeUserXP));
    L.CastleModel.questData.addEventListener(E.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onQuestStart));
    this.controller.addEventListener(b.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onRefreshShopItems));
    L.CastleModel.specialEventData.addEventListener(y.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshShopItems));
    L.CastleModel.privateOfferData.addEventListener(M.PrivateOfferDataEvent.PRIVATE_OFFER_CREATED, this.bindFunction(this.onRefreshShopItems));
    L.CastleModel.privateOfferData.addEventListener(M.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onRefreshShopItems));
    this.controller.addEventListener(O.CastleLayoutManagerEvent.SHOW_DIALOG, this.bindFunction(this.onDialogOpened));
    this.controller.addEventListener(P.DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onRefreshShopItems));
    this.controller.addEventListener(P.DecoStorageEvent.ON_NEW_INDICATOR_UPDATED, this.bindFunction(this.onBuildingMarkUpdated));
    this.controller.addEventListener(T.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeResources));
    this.controller.addEventListener(A.IsoEvent.ON_DRAG_OF_NEW_OBJECT_DONE, this.bindFunction(this.onNewBuildingPlaced));
    this.controller.addEventListener(A.IsoEvent.ON_DRAG_OF_NEW_OBJECT_CANCELED, this.bindFunction(this.onNewBuildingPlaced));
    this.controller.addEventListener(A.IsoEvent.ON_OBJECT_CHANGED, this.bindFunction(this.onRefreshShopItems));
    this.controller.addEventListener(A.IsoEvent.ON_OBJECT_ADDED, this.bindFunction(this.onRefreshShopItems));
    this.controller.addEventListener(A.IsoEvent.ON_OBJECT_REMOVED, this.bindFunction(this.onRefreshShopItems));
    this.controller.addEventListener(A.IsoEvent.ON_DRAG_STARTED_STORAGE_DECO, this.bindFunction(this.onStorageDecoDragStarted));
    L.CastleModel.smartfoxClient.sendEmptyCommandVO(new _.C2SShowInventoryVO());
    if (L.CastleModel.kingdomData.activeKingdomID == u.FactionConst.KINGDOM_ID) {
      L.CastleModel.specialEventData.addEventListener(f.CastleFactionBalanceEvent.FACTION_BALACE_UPDATED, this.bindFunction(this.onRefreshShopItems));
      L.CastleModel.smartfoxClient.sendEmptyCommandVO(new m.C2SGetFactionBalance());
    }
    this.updateBuildingGroundViewButton();
    this._tfStorageCounter = this.textFieldManager.registerTextField(this.decoShopPanel.storage_counter.txt_text, new d.LocalizedNumberVO(0));
    this._toggleUpgradeViewBtn.show();
    this._toggleWallViewBtn.show();
    this.fillItemsByGroup(this.currentCategory, this.currentPage, true);
    this.onBuildingMarkUpdated();
    e.prototype.show.call(this);
    this.allowCaching = true;
    B.ButtonHelper.enableButton(this.decoShopPanel.btn_storage, L.CastleModel.userData.level > 2);
  };
  CastleDecoShopPanel.prototype.onNewBuildingPlaced = function (e) {
    this.removeDragItemFromShop();
    if (this.currentCategory == g.ClientConstCastle.CATEGORY_STORAGE) {
      this.changeCategory(this._prevCategory);
    }
  };
  CastleDecoShopPanel.prototype.onDialogOpened = function (e) {
    this.removeDragItemFromShop();
  };
  CastleDecoShopPanel.prototype.getPageWithFirstNewBuilding = function (e = "", t = null) {
    var i = 0;
    t = t ?? J.CastleDecoShopItemArrayHelper.getBuildingsByCategory(e);
    for (var n = 0; n < t.length; n++) {
      i = Math.floor(n / CastleDecoShopPanel.ITEMS_PER_PAGE);
      if (L.CastleModel.decoStorage.getCurrentStorage().isNew(t[n])) {
        return i;
      }
    }
    return i;
  };
  CastleDecoShopPanel.prototype.getPageWithHighestLevelItemAvailable = function (e = "", t = null) {
    var i = 0;
    t = t ?? J.CastleDecoShopItemArrayHelper.getBuildingsByCategory(e);
    for (var n = 0; n < t.length; n++) {
      if (!t[n].isAvailableByLevelAndEffect) {
        return i;
      }
      i = Math.floor(n / CastleDecoShopPanel.ITEMS_PER_PAGE);
    }
    return i;
  };
  CastleDecoShopPanel.prototype.sortByMorality = function (e, t) {
    if (e == null || t == null) {
      return 0;
    } else if (e.decoPoints < t.decoPoints) {
      return -1;
    } else if (e.decoPoints > t.decoPoints) {
      return 1;
    } else {
      return 0;
    }
  };
  CastleDecoShopPanel.prototype.autoScrollToPage = function (e, t, i) {
    var n = h.int(this.getPageWithHighestLevelItemAvailable(e, i));
    if (n >= 0) {
      return n;
    } else {
      return t;
    }
  };
  CastleDecoShopPanel.prototype.doAutoScrolling = function (e) {
    return [g.ClientConstCastle.CATEGORY_DECO, g.ClientConstCastle.CATEGORY_STORAGE].indexOf(e) != -1;
  };
  CastleDecoShopPanel.prototype.initArrows = function (e) {
    this.maxPage = h.int((e - 1) / CastleDecoShopPanel.ITEMS_PER_PAGE);
    this.decoShopPanel.btn_rightArrow.visible = this.maxPage > 0 && this.currentPage < this.maxPage;
    this.decoShopPanel.btn_rightArrow.enableButton = L.CastleModel.userData.hasLevelFor(C.ClientConstLevelRestrictions.MIN_LEVEL_USE_ARROW_DECOSHOP);
    this.decoShopPanel.btn_leftArrow.visible = this.maxPage > 0 && this.currentPage > 0;
  };
  CastleDecoShopPanel.prototype.updatePrevCategory = function () {
    if (this.currentCategory != g.ClientConstCastle.CATEGORY_STORAGE) {
      this._prevCategory = this.currentCategory;
    }
  };
  CastleDecoShopPanel.prototype.fillItemsByGroup = function (e, t, i) {
    this._allowCaching = false;
    var n = J.CastleDecoShopItemArrayHelper.getBuildingsByCategory(e);
    if (e == g.ClientConstCastle.CATEGORY_STORAGE) {
      n = this.sortForStorage(n);
    }
    if (this.doAutoScrolling(e) && !i) {
      t = h.int(this.autoScrollToPage(e, t, n));
    }
    this.updatePrevCategory();
    this.currentCategory = e;
    this.currentPage = t;
    this.initArrows(n.length);
    var o;
    var a = (t = h.int(Math.min(t, this.maxPage))) * CastleDecoShopPanel.ITEMS_PER_PAGE;
    var s = 0;
    for (var r = 0; r < CastleDecoShopPanel.ITEMS_PER_PAGE; r++) {
      var c = this._decoShopPanelItemComponents[r];
      if (a < n.length) {
        var u = L.CastleModel.decoStorage.getCurrentStorage().getRelevantWodIdListForBuildMenu(n[a].wodId);
        var d = u.length > 0 ? u[0] : n[a].wodId;
        o = L.CastleModel.wodData.createVObyWOD(d, W.CastleWodData.TYPE_BUILDING);
        c.fillItem(o, this.currentCategory);
        s++;
      } else {
        c.disp.visible = false;
      }
      a++;
    }
    this.decoShopPanel.mc_nothingBuyable.visible = false;
    this.decoShopPanel.mc_nothingBuyable.mouseEnabled = false;
    this.decoShopPanel.mc_decoStorage.visible = false;
    if (this.currentCategory == g.ClientConstCastle.CATEGORY_STORAGE) {
      this.decoShopPanel.mc_decoStorage.visible = true;
    } else if (s == 0) {
      this.decoShopPanel.mc_nothingBuyable.visible = true;
    }
    if (l.currentBrowserInfo.isMobile) {
      this.allowCaching = true;
    } else {
      this._allowCaching = true;
    }
    return t;
  };
  CastleDecoShopPanel.prototype.sortForStorage = function (e) {
    var t = [];
    var i = [];
    var n = [];
    var o = [];
    var a = [];
    var s = [];
    if (e != null) {
      for (var r = 0, l = e; r < l.length; r++) {
        var c = l[r];
        if (c !== undefined) {
          if (c.buildingGroundType == g.ClientConstCastle.BUILDINGGROUND_TYPE_DECO) {
            if (L.CastleModel.decoStorage.getCurrentStorage().isNew(c)) {
              o.push(c);
            } else {
              t.push(c);
            }
          } else if (c.buildingGroundType == g.ClientConstCastle.BUILDINGGROUND_TYPE_MILITARY) {
            if (L.CastleModel.decoStorage.getCurrentStorage().isNew(c)) {
              s.push(c);
            } else {
              n.push(c);
            }
          } else if (c.buildingGroundType == g.ClientConstCastle.BUILDINGGROUND_TYPE_CIVIL) {
            if (L.CastleModel.decoStorage.getCurrentStorage().isNew(c)) {
              a.push(c);
            } else {
              i.push(c);
            }
          }
        }
      }
    }
    o.sort(this.bindFunction(this.sortByMorality));
    t.sort(this.bindFunction(this.sortByMorality));
    s.sort(J.CastleDecoShopItemArrayHelper.defaultSortOrderBuilding);
    n.sort(J.CastleDecoShopItemArrayHelper.defaultSortOrderBuilding);
    a.sort(J.CastleDecoShopItemArrayHelper.defaultSortOrderBuilding);
    i.sort(J.CastleDecoShopItemArrayHelper.defaultSortOrderBuilding);
    return t.concat(o, a, s, i, n);
  };
  CastleDecoShopPanel.prototype.onEndSpecialEvent = function (e) {
    if (c.instanceOfClass(e.specialEventVO, "PrimeSaleEventVO")) {
      this.removeDragItem();
      this.fillItemsByGroup(this.currentCategory, this.currentPage, true);
    }
  };
  CastleDecoShopPanel.prototype.onChangeUserXP = function (e) {
    this.onRefreshShopItems();
    this.updateBuildingGroundViewButton();
  };
  CastleDecoShopPanel.prototype.setBuildingGroundButtonToolTip = function () {
    if (this.decoShopPanel.btn_switchBuildingGroundView.enabled) {
      if (this.isoRenderer.strategies.currentStrategy.isActive(S.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW)) {
        this.decoShopPanel.btn_switchBuildingGroundView.toolTipText = "constructionMode_showBuildings";
      } else {
        this.decoShopPanel.btn_switchBuildingGroundView.toolTipText = "constructionMode_hideBuildings";
      }
    } else {
      this.decoShopPanel.btn_switchBuildingGroundView.toolTipText = "panel_shop_needQuestProgress";
    }
  };
  CastleDecoShopPanel.prototype.onQuestStart = function (e) {
    this.onRefreshShopItems(e);
  };
  CastleDecoShopPanel.prototype.onMouseDownItem = function (e) {
    if (!g.ClientConstCastle.USE_PICK_AND_DROP) {
      this.addDragItemFromShop(e);
    }
  };
  CastleDecoShopPanel.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (l.currentBrowserInfo.isTouchEvent(t)) {
      V.DecoBuildingToolTipManager.hideToolTip();
    }
    if (B.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.decoShopPanel.btn_civil:
        case this.decoShopPanel.btn_deco:
        case this.decoShopPanel.btn_military:
        case this.decoShopPanel.btn_defence:
        case this.decoShopPanel.btn_storage:
        case this.decoShopPanel.btn_event:
          j.Iso.renderer.mouse.cancelDraggedTarget();
      }
      switch (t.target) {
        case this.decoShopPanel.btn_leftArrow:
        case this.decoShopPanel.btn_rightArrow:
          if (L.CastleModel.userData.hasLevelFor(C.ClientConstLevelRestrictions.MIN_LEVEL_USE_ARROW_DECOSHOP)) {
            this.onClickArrow(t);
          }
          this.revertHighLightFilters();
          this.removeDragItemFromShop();
          break;
        case this.decoShopPanel.btn_close:
          this.revertHighLightFilters();
          this.removeDragItemFromShop();
          j.Iso.renderer.mouse.cancelDraggedTarget();
          if (j.Iso.controller.viewUpdater) {
            j.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(false);
          }
          break;
        case this.decoShopPanel.btn_switchBuildingGroundView:
          this.isoRenderer.strategies.toggle(S.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW);
          this.updateBuildingGroundViewButton();
          this.revertHighLightFilters();
          break;
        case this.decoShopPanel.btn_civil:
          this.changeCategory(g.ClientConstCastle.CATEGORY_CIVIL);
          break;
        case this.decoShopPanel.btn_deco:
          this.changeCategory(g.ClientConstCastle.CATEGORY_DECO);
          break;
        case this.decoShopPanel.btn_military:
          this.changeCategory(g.ClientConstCastle.CATEGORY_MILITARY);
          break;
        case this.decoShopPanel.btn_defence:
          this.changeCategory(g.ClientConstCastle.CATEGORY_DEFENCE);
          break;
        case this.decoShopPanel.btn_storage:
          k.CastlePanel.dialogHandler.registerDialogs(X.DecorationStorageDialog);
          break;
        case this.decoShopPanel.btn_event:
          this.changeCategory(g.ClientConstCastle.CATEGORY_SEASONEVENT);
      }
    }
  };
  CastleDecoShopPanel.prototype.updateBuildingGroundViewButton = function () {
    this.decoShopPanel.btn_switchBuildingGroundView.enableButton = L.CastleModel.tutorialData.isTutorialFinished();
    this.decoShopPanel.btn_switchBuildingGroundView.selectButton = this.isoRenderer.strategies.currentStrategy.isActive(S.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW);
    this.setBuildingGroundButtonToolTip();
  };
  CastleDecoShopPanel.prototype.onClickUpgrade = function (e) {
    this.onUpgrade(e.disp);
    this.revertHighLightFilters();
  };
  CastleDecoShopPanel.prototype.onClickInfo = function (e) {
    var t = e.disp.shownShopVO ? e.disp.shownShopVO : e.disp.shopVO;
    Y.CastleDialogHandler.getInstance().registerDefaultDialogs(z.CastleBuildingInfoDialog, new x.CastleBuildingInfoDialogProperties(t));
    this.revertHighLightFilters();
  };
  CastleDecoShopPanel.prototype.onClickSell = function (e) {
    this.removeDragItem();
    var t = e.disp.shopVO;
    Y.CastleDialogHandler.getInstance().registerDefaultDialogs(q.CastleConstructionSellDialog, new w.CastleConstructionSellDialogProperties(t));
    e.disp.btn_sell.visible = false;
    this.revertHighLightFilters();
  };
  CastleDecoShopPanel.prototype.onClickJumpTo = function (e) {
    console.log("Show HoL skill");
    var t = e.disp.shopVO;
    var i = L.CastleModel.legendSkillData.getTabBySkillId(t.sceatSkillLocked);
    var n = new oe.CastleLegendSkillDialogProperties(i, t.sceatSkillLocked);
    Y.CastleDialogHandler.getInstance().registerDefaultDialogs(ne.CastleLegendSkillDialog, n);
  };
  CastleDecoShopPanel.prototype.onMouseUp = function (e) {
    if (!g.ClientConstCastle.USE_PICK_AND_DROP && this._selectedShopVO) {
      this.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
      this.removeDragItem();
    }
  };
  CastleDecoShopPanel.prototype.onMouseOverItem = function (e) {
    this.showShopItemTooltip(e);
    this.setSellIconVisibility(e.disp, true);
  };
  CastleDecoShopPanel.prototype.onMouseOverSell = function (e) {
    this.setSellIconVisibility(e.disp, true);
  };
  CastleDecoShopPanel.prototype.onMouseOutItem = function (e) {
    this.decoShopPanel.mc_buildingTooltip.visible = false;
    this.setSellIconVisibility(e.disp, false);
    V.DecoBuildingToolTipManager.hideToolTip();
  };
  CastleDecoShopPanel.prototype.onMouseOutSell = function (e) {
    this.setSellIconVisibility(e.disp, false);
  };
  CastleDecoShopPanel.prototype.setSellIconVisibility = function (e, t) {
    var i = t && this.currentCategory == g.ClientConstCastle.CATEGORY_STORAGE && c.instanceOfClass(e.shopVO, "DecoBuildingVO") && e.shopVO.sellCostC1 > 0;
    e.btn_sell.visible = i;
  };
  CastleDecoShopPanel.prototype.showShopItemTooltip = function (e) {
    if (g.ClientConstCastle.USE_PICK_AND_DROP || !g.ClientConstCastle.USE_PICK_AND_DROP && !this._selectedShopVO) {
      var t = e.disp.shopVO;
      if (!e.disp.mc_contentHolder.icon_lock.visible) {
        V.DecoBuildingToolTipManager.showToolTip(e.disp, t);
      }
    }
  };
  CastleDecoShopPanel.prototype.onUpgrade = function (e) {
    if (e) {
      var t = e.shopVO;
      if (c.instanceOfClass(t, "CastlewallDefenceVO")) {
        j.Iso.controller.server.requestWallUpgrade(j.Iso.data);
      } else if (c.instanceOfClass(t, "BasicMoatVO") || c.instanceOfClass(t, "PremiumMoatVO")) {
        if (t.level == 1) {
          j.Iso.controller.server.buyMoat(t.wodId);
        } else {
          j.Iso.controller.server.requestMoatUpgrade(j.Iso.data);
        }
      }
    }
  };
  CastleDecoShopPanel.prototype.onClickArrow = function (e) {
    var t = this.currentPage;
    if (e.target == this.decoShopPanel.btn_leftArrow) {
      this.currentPage = h.int(Math.max(0, this.currentPage - 1));
    } else {
      this.currentPage = h.int(Math.min(this.maxPage, this.currentPage + 1));
    }
    if (t != this.currentPage) {
      this.fillItemsByGroup(this.currentCategory, this.currentPage, true);
    }
  };
  CastleDecoShopPanel.prototype.hide = function () {
    this._isActive = false;
    L.CastleModel.specialEventData.removeEventListener(y.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEndSpecialEvent));
    this.controller.removeEventListener(b.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onRefreshShopItems));
    this.controller.removeEventListener(D.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onChangeUserXP));
    this.controller.removeEventListener(D.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onRefreshShopItems));
    L.CastleModel.questData.removeEventListener(E.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onQuestStart));
    this.controller.removeEventListener(b.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onRefreshShopItems));
    L.CastleModel.specialEventData.removeEventListener(y.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshShopItems));
    L.CastleModel.specialEventData.removeEventListener(f.CastleFactionBalanceEvent.FACTION_BALACE_UPDATED, this.bindFunction(this.onRefreshShopItems));
    L.CastleModel.privateOfferData.removeEventListener(M.PrivateOfferDataEvent.PRIVATE_OFFER_CREATED, this.bindFunction(this.onRefreshShopItems));
    L.CastleModel.privateOfferData.removeEventListener(M.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onRefreshShopItems));
    this.controller.removeEventListener(O.CastleLayoutManagerEvent.SHOW_DIALOG, this.bindFunction(this.onDialogOpened));
    this.controller.removeEventListener(P.DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onRefreshShopItems));
    this.controller.removeEventListener(P.DecoStorageEvent.ON_NEW_INDICATOR_UPDATED, this.bindFunction(this.onBuildingMarkUpdated));
    this.controller.removeEventListener(T.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeResources));
    this.controller.removeEventListener(A.IsoEvent.ON_DRAG_OF_NEW_OBJECT_DONE, this.bindFunction(this.onNewBuildingPlaced));
    this.controller.removeEventListener(A.IsoEvent.ON_DRAG_OF_NEW_OBJECT_CANCELED, this.bindFunction(this.onNewBuildingPlaced));
    this.controller.removeEventListener(A.IsoEvent.ON_OBJECT_CHANGED, this.bindFunction(this.onRefreshShopItems));
    this.controller.removeEventListener(A.IsoEvent.ON_OBJECT_ADDED, this.bindFunction(this.onRefreshShopItems));
    this.controller.removeEventListener(A.IsoEvent.ON_OBJECT_REMOVED, this.bindFunction(this.onRefreshShopItems));
    this.controller.removeEventListener(A.IsoEvent.ON_DRAG_STARTED_STORAGE_DECO, this.bindFunction(this.onStorageDecoDragStarted));
    this.removeDragItem();
    this.revertHighLightFilters();
    this.currentPage = 0;
    this._toggleUpgradeViewBtn.hide();
    this._toggleWallViewBtn.hide();
    e.prototype.hide.call(this);
  };
  CastleDecoShopPanel.prototype.onBuildingMarkUpdated = function (e = null) {
    this.updateStorageCounter();
  };
  CastleDecoShopPanel.prototype.updateStorageCounter = function () {
    var e = L.CastleModel.decoStorage.getCurrentStorage();
    var t = e.getCappedNewAmount();
    this.decoShopPanel.storage_counter.visible = t > 0;
    this._tfStorageCounter.textContentVO.numberValue = t;
    var i = J.CastleDecoShopItemArrayHelper.getBuildingsByCategory(g.ClientConstCastle.CATEGORY_CIVIL).map(function (t) {
      return e.getRelevantWodIdListForBuildMenu(t.wodId);
    }).reduce(function (e, t) {
      return e.concat(t);
    }, []).reduce(function (t, i) {
      return t + e.getNewAmountByWodID(i);
    }, 0);
    var n = J.CastleDecoShopItemArrayHelper.getBuildingsByCategory(g.ClientConstCastle.CATEGORY_MILITARY).map(function (t) {
      return e.getRelevantWodIdListForBuildMenu(t.wodId);
    }).reduce(function (e, t) {
      return e.concat(t);
    }, []).reduce(function (t, i) {
      return t + e.getNewAmountByWodID(i);
    }, 0);
    var o = J.CastleDecoShopItemArrayHelper.getBuildingsByCategory(g.ClientConstCastle.CATEGORY_DECO).map(function (t) {
      return e.getRelevantWodIdListForBuildMenu(t.wodId);
    }).reduce(function (e, t) {
      return e.concat(t);
    }, []).reduce(function (t, i) {
      return t + e.getNewAmountByWodID(i);
    }, 0);
    this.decoShopPanel.storage_counter.visible = t > 0;
    this._tfStorageCounter.textContentVO.numberValue = t;
    this.decoShopPanel.storage_counter_civil.visible = i > 0;
    this._tfStorageCounter_civil.textContentVO.numberValue = i;
    this.decoShopPanel.storage_counter_military.visible = n > 0;
    this._tfStorageCounter_military.textContentVO.numberValue = n;
    this.decoShopPanel.storage_counter_deco.visible = o > 0;
    this._tfStorageCounter_deco.textContentVO.numberValue = o;
  };
  CastleDecoShopPanel.prototype.onChangeResources = function (e) {
    var t = l.castAs(e.params[0], "CastleResourcesVO");
    if (t && L.CastleModel.areaData.activeArea.areaId == t.castleID) {
      this.fillItemsByGroup(this.currentCategory, this.currentPage, true);
    }
  };
  CastleDecoShopPanel.prototype.refreshShopItems = function () {
    this.onRefreshShopItems();
  };
  CastleDecoShopPanel.prototype.onRefreshShopItems = function (e) {
    if ((e === undefined && (e = null), e && c.instanceOfClass(e, "IsoEvent") && e.params) && l.castAs(e.params[0], "AIsoMovementVO")) {
      return;
    }
    if (j.Iso.data) {
      if (!this.currentCategory) {
        this.updatePrevCategory();
        this.currentCategory = g.ClientConstCastle.CATEGORY_CIVIL;
      }
      this.fillItemsByGroup(this.currentCategory, this.currentPage, true);
      this.onBuildingMarkUpdated();
      this.updateCache();
    }
  };
  CastleDecoShopPanel.prototype.highLightFilteredArrayIndex = function (e) {
    if (!(e < 0) && !(e > CastleDecoShopPanel.ITEMS_PER_PAGE)) {
      var t = this._decoShopPanelItemComponents[e];
      if (t) {
        t.useHighlightFilter();
      }
    }
  };
  CastleDecoShopPanel.prototype.revertHighLightFilters = function () {
    for (var e = 0; e < CastleDecoShopPanel.ITEMS_PER_PAGE; e++) {
      this._decoShopPanelItemComponents[e].removeHighlightFilter();
    }
  };
  CastleDecoShopPanel.prototype.changeCategory = function (e, t = 0, i = false) {
    if (this.currentCategory != e || this.currentPage != t) {
      this.revertHighLightFilters();
      this.removeDragItemFromShop();
      this.currentPage = 0 + t;
      this.updatePrevCategory();
      this.currentCategory = e;
      switch (this.currentCategory) {
        case g.ClientConstCastle.CATEGORY_DEFENCE:
          j.Iso.renderer.strategies.switchBy(S.IsoRenderStrategyEnum.TRANSPARENT_DEFENCE_VIEW, false);
          break;
        default:
          j.Iso.renderer.strategies.switchBy(S.IsoRenderStrategyEnum.TRANSPARENT_DEFENCE_VIEW, true);
      }
      this.initButtons();
      this.currentPage = h.int(this.fillItemsByGroup(this.currentCategory, this.currentPage, i));
      this.controller.dispatchEvent(new I.CastleDecoShopPanelEvent(I.CastleDecoShopPanelEvent.CHANGE_CATEGORY, this.currentCategory));
    }
  };
  CastleDecoShopPanel.prototype.onRollOver = function (e) {
    if (this.selectedShopItem) {
      var t = this.selectedShopItem;
      this.isoRenderer.mouse.cancelDraggedTarget();
      this.addDragItemFromShop(t);
    } else if (this.selectedShopVO) {
      var i = this.selectedShopVO;
      this.isoRenderer.mouse.cancelDraggedTarget();
      this.addNewDragItem(i);
    }
    if (this._allowCaching && this.dispToCache.cacheCanvas) {
      F.CastleMovieClipHelper.uncacheSafe(this.dispToCache);
    }
  };
  CastleDecoShopPanel.prototype.onRollOut = function (e) {
    this.onCursorOut(e);
    this.removeDragItem();
    if (this.selectedShopVO) {
      this.isoRenderer.mouse.startDraggingOfNewBuyObject(this.selectedShopVO);
    }
  };
  CastleDecoShopPanel.prototype.initButtons = function () {
    this.decoShopPanel.btn_civil.visible = !this.layoutManager.isInTreasureCamp;
    this.decoShopPanel.btn_civil.selectButton = this.currentCategory == g.ClientConstCastle.CATEGORY_CIVIL;
    this.decoShopPanel.btn_deco.selectButton = this.currentCategory == g.ClientConstCastle.CATEGORY_DECO;
    this.decoShopPanel.btn_military.selectButton = this.currentCategory == g.ClientConstCastle.CATEGORY_MILITARY;
    this.decoShopPanel.btn_military.visible = !this.layoutManager.isInTreasureCamp;
    this.decoShopPanel.btn_defence.selectButton = this.currentCategory == g.ClientConstCastle.CATEGORY_DEFENCE;
    this.decoShopPanel.btn_defence.visible = !this.layoutManager.isInTreasureCamp;
    this.decoShopPanel.btn_event.selectButton = this.currentCategory == g.ClientConstCastle.CATEGORY_SEASONEVENT;
    this.decoShopPanel.btn_event.visible = this.layoutManager.isInTreasureCamp;
    this.decoShopPanel.btn_switchBuildingGroundView.enableButton = L.CastleModel.tutorialData.isTutorialFinished();
  };
  CastleDecoShopPanel.prototype.destroy = function () {
    this.hide();
    for (var t = 0; t < CastleDecoShopPanel.ITEMS_PER_PAGE; t++) {
      this._decoShopPanelItemComponents[t].clearListeners();
    }
    e.prototype.destroy.call(this);
  };
  CastleDecoShopPanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.y = this.disp.stage.stageHeight;
      this.disp.x = this.disp.stage.stageWidth / 2;
      if (l.MobileHelper.isScreenTooSmall() && this.disp.width > this.disp.stage.stageWidth) {
        this.disp.x = this.disp.stage.stageWidth - 410;
      }
      if (this.env.hasNetworkBuddies) {
        this.disp.y -= g.ClientConstCastle.BUDDY_PANEL_HEIGHT;
      }
    }
  };
  Object.defineProperty(CastleDecoShopPanel.prototype, "decoShopPanel", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDecoShopPanel.prototype, "isActive", {
    get: function () {
      return this._isActive;
    },
    enumerable: true,
    configurable: true
  });
  CastleDecoShopPanel.prototype.centerAndHighlightBuildingInShop = function (e) {
    var t = false;
    if (e.shopCategory != g.ClientConstCastle.CATEGORY_NOT_IN_SHOP) {
      var i = J.CastleDecoShopItemArrayHelper.getBuildingsByCategory(e.shopCategory);
      r.debug("centerAndHighLightBuildingInShop");
      for (var n = 0; n < i.length; n++) {
        if (i[n].wodId == e.getLowestDowngradeVO().wodId && !L.CastleModel.areaData.activeIsoData.objects.provider.hasMaxAmountOfObjectsByType(e)) {
          this.changeCategory(e.shopCategory, h.int(n / CastleDecoShopPanel.ITEMS_PER_PAGE), true);
          this.revertHighLightFilters();
          this.highLightFilteredArrayIndex(n % CastleDecoShopPanel.ITEMS_PER_PAGE);
          t = true;
          break;
        }
      }
    }
    return t;
  };
  CastleDecoShopPanel.prototype.getShopVOFromItem = function (e) {
    var t = e ? e.disp.shopVO : null;
    var i = L.CastleModel.decoStorage.getCurrentStorage();
    if (i.getAmountForBuildMenu(t.wodId) > 0) {
      return i.getHighestBuildingLevel(t.wodId);
    } else {
      return t;
    }
  };
  CastleDecoShopPanel.prototype.isItemAvailableForSelection = function (e) {
    var t = e.disp.shopVO;
    return !!L.CastleModel.decoStorage.getCurrentStorage().getAmountForBuildMenu(t.wodId) || t.isAvailableByLevelAndEffect && !e.disp.mc_contentHolder.icon_lock_unreachable.visible || this.currentCategory == g.ClientConstCastle.CATEGORY_STORAGE;
  };
  CastleDecoShopPanel.prototype.onShopItemClick = function (e, t) {
    if (this.selectedShopItem != e) {
      if (e && this.isItemAvailableForSelection(e)) {
        if (t) {
          var i = l.currentBrowserInfo.getTouchEvent(t);
          if (i && i.isLongPressed) {
            this.onMouseOverItem(e);
            t.stopImmediatePropagation();
            return;
          }
          V.DecoBuildingToolTipManager.hideToolTip();
        }
        this.addDragItemFromShop(e);
        this.revertHighLightFilters();
        if (t && l.currentBrowserInfo.isTouchEvent(t)) {
          this.onRollOut(t);
        }
      }
    } else {
      this.removeDragItemFromShop();
    }
  };
  CastleDecoShopPanel.prototype.addDragItemFromShop = function (e) {
    if (this.currentCategory != g.ClientConstCastle.CATEGORY_DEFENCE) {
      this.removeDragItemFromShop();
      this._selectedShopItem = e;
      this.addNewDragItem(this.getShopVOFromItem(e));
    }
  };
  CastleDecoShopPanel.prototype.onAddDragItemFromShopSuccessful = function () {
    this._selectedShopItem.bgStartDrag();
    this.initShopVO(this._selectedShopVO);
    this.layoutManager.nativeCursor.setCursorType(o.BasicCustomCursor.CURSOR_DRAG);
    this.controller.dispatchEvent(new A.IsoEvent(A.IsoEvent.ON_DECO_SHOP_DRAG_START, [this._selectedShopVO]));
  };
  CastleDecoShopPanel.prototype.removeDragItemFromShop = function () {
    this._selectedShopItem = null;
    this._selectedShopVO = null;
    this.removeDragItem();
    if (this._decoShopPanelItemComponents != null) {
      for (var e = 0, t = this._decoShopPanelItemComponents; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.bgStopDrag();
        }
      }
    }
    this.layoutManager.nativeCursor.setCursorType(o.BasicCustomCursor.CURSOR_CLICK);
  };
  CastleDecoShopPanel.prototype.addNewDragItem = function (e) {
    this._selectedShopVO = e;
    this.removeDragItem();
    this._dragPreviewDispCreator.reset();
    this._dragPreviewDispCreator.onLoadedSignal.add(this.bindFunction(this.onDragPreviewLoaded));
    this._dragPreviewDispCreator.switchCreationState(true);
    var t = e.getVisualClassName();
    this._dragPreviewDispCreator.addClip(new o.GoodgameDisplayObjectClipExternal(t, te.IsoHelper.view.getAssetFileURL(t), null, 24, false));
    this._dragPreviewDispCreator.switchCreationState(false);
  };
  CastleDecoShopPanel.prototype.onDragPreviewLoaded = function () {
    this._dragPreviewDispCreator.onLoadedSignal.remove(this.bindFunction(this.onDragPreviewLoaded));
    var e = this._dragPreviewDispCreator.getClipMc(0);
    s.MovieClipHelper.stopAllMoviesGotoFrameOne(e);
    var t;
    var i = e.getBounds(null);
    var n = CastleDecoShopPanel.DRAG_ICON_DIMENSION.x / i.width;
    e.scaleX = e.scaleY = n;
    t = L.CastleModel.kingdomData.activeKingdomID == u.FactionConst.KINGDOM_ID ? Q.CrestHelper.getPlayerOrFactionCrest(L.CastleModel.areaData.activeOwnerInfo) : L.CastleModel.areaData.activeOwnerInfo.crest;
    for (var o = 0; o < 5; o++) {
      if (e["flag" + o]) {
        N.FlagHelper.colorFlag(e["flag" + o], t);
      }
    }
    if (e.flag) {
      N.FlagHelper.colorFlag(e.flag, t);
    }
    if (e.flagb) {
      N.FlagHelper.colorFlag(e.flagb, t);
    }
    this.layoutManager.nativeCursor.startDrag(e);
    if (this._selectedShopItem) {
      this.onAddDragItemFromShopSuccessful();
    }
    this._dragPreviewDispCreator.updateCache();
  };
  CastleDecoShopPanel.prototype.removeDragItem = function () {
    if (!(this._dragPreviewDispCreator.clipList.length <= 0)) {
      var e = this._dragPreviewDispCreator.getClipMc(0);
      if (e) {
        e.scaleX = e.scaleY = 1;
        this.layoutManager.nativeCursor.stopDrag(e);
      }
      this._dragPreviewDispCreator.reset();
    }
  };
  CastleDecoShopPanel.prototype.initShopVO = function (e) {
    e.init(this.isoRenderer.isoData);
    e.updateData();
    if (e) {
      var t = e;
      t.buildingState = v.IsoBuildingStateEnum.BUILD_COMPLETED;
      t.hitPoints = 100;
    }
  };
  CastleDecoShopPanel.prototype.onStorageDecoDragStarted = function (e) {
    this.changeCategory(g.ClientConstCastle.CATEGORY_STORAGE);
    this.textFieldManager.registerTextField(this.decoShopPanel.mc_decoStorage.txt_text, new p.LocalizedTextVO(c.instanceOfClass(e.params[0], "ADecoBuildingVO") ? "panel_deco_storage_desc" : "panel_deco_storage_placeBuilding_desc"), new a.InternalGGSTextFieldConfigVO(true)).verticalAlign = R.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
  };
  Object.defineProperty(CastleDecoShopPanel.prototype, "isoRenderer", {
    get: function () {
      return j.Iso.renderer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDecoShopPanel.prototype, "selectedShopVO", {
    get: function () {
      return this._selectedShopVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDecoShopPanel.prototype, "selectedShopItem", {
    get: function () {
      return this._selectedShopItem;
    },
    enumerable: true,
    configurable: true
  });
  CastleDecoShopPanel.__initialize_static_members = function () {
    CastleDecoShopPanel.DRAG_ICON_DIMENSION = new G(23, 30);
  };
  CastleDecoShopPanel.NAME = "CastleDecoShopPanel";
  CastleDecoShopPanel.ITEMS_PER_PAGE = 5;
  return CastleDecoShopPanel;
}(k.CastlePanel);
exports.CastleDecoShopPanel = H;
var j = require("./33.js");
var W = require("./56.js");
var Y = require("./9.js");
var K = require("./1439.js");
var z = require("./445.js");
var q = require("./763.js");
var X = require("./1440.js");
var Q = require("./61.js");
var J = require("./626.js");
var Z = require("./1451.js");
var $ = require("./1452.js");
var ee = require("./290.js");
var te = require("./46.js");
var ie = require("./121.js");
var ne = require("./448.js");
var oe = require("./1458.js");
H.__initialize_static_members();