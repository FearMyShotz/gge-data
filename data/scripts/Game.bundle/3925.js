Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./5.js");
var l = require("./6.js");
var c = require("./23.js");
var u = require("./18.js");
var d = require("./58.js");
var p = require("./423.js");
var h = require("./129.js");
var g = require("./220.js");
var C = require("./32.js");
var _ = require("./338.js");
var m = require("./71.js");
var f = require("./122.js");
var O = require("./92.js");
var E = require("./4.js");
var y = require("./8.js");
var b = require("./1813.js");
var D = require("./1116.js");
var I = require("./1815.js");
var T = require("./838.js");
var v = require("./3926.js");
var S = function (e) {
  function CastleResourcePanel() {
    var t = this;
    t._specialResourcePanelActiveByPlayer = false;
    t._specialResourcePanelActiveByState = false;
    t.lastKingdomID = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this, new Library.CastleInterfaceElements.ResourcePanel()) || this).eilandPanel = new b.CastleEilandPanel(t.resourcePanel.mc_islandPanel, t);
    t.initSpecialResourcePanel();
    return t;
  }
  n.__extends(CastleResourcePanel, e);
  CastleResourcePanel.prototype.initResourceItems = function () {
    this.lawAndOrderBar = new I.ResourcePanelBar(new Library.CastleInterfaceElements.ResourcePanelLawAndOrder());
    this.woodContainer = new T.ResourcePanelItem(T.ResourcePanelItem.ICON_FRAME_WOOD);
    this.woodContainer.resourceType = A.CollectableEnum.WOOD;
    this.stoneContainer = new T.ResourcePanelItem(T.ResourcePanelItem.ICON_FRAME_STONE);
    this.stoneContainer.resourceType = A.CollectableEnum.STONE;
    this.foodContainer = new T.ResourcePanelItem(T.ResourcePanelItem.ICON_FRAME_FOOD);
    this.foodContainer.resourceType = A.CollectableEnum.FOOD;
    this.honeyContainer = new T.ResourcePanelItem(T.ResourcePanelItem.ICON_FRAME_HONEY);
    this.honeyContainer.resourceType = A.CollectableEnum.HONEY;
    this.meadContainer = new T.ResourcePanelItem(T.ResourcePanelItem.ICON_FRAME_MEAD);
    this.meadContainer.resourceType = A.CollectableEnum.MEAD;
    this.beefContainer = new T.ResourcePanelItem(T.ResourcePanelItem.ICON_FRAME_BEEF);
    this.beefContainer.resourceType = A.CollectableEnum.BEEF;
    this.unitContainer = new T.ResourcePanelItem(T.ResourcePanelItem.ICON_FRAME_UNITCOUNT);
    this.aquamarineResourceContainer = new T.ResourcePanelItem(T.ResourcePanelItem.ICON_FRAME_AQUAMARINE);
    this.aquamarineResourceContainer.resourceType = A.CollectableEnum.AQUAMARINE;
    this.specialResourceContainerButton = new T.ResourcePanelItem(T.ResourcePanelItem.ICON_FRAME_POPULATION);
    this.populationContainer = new T.ResourcePanelItem(T.ResourcePanelItem.ICON_FRAME_POPULATION);
    this.unitContainer.isBoosted = false;
    this.unitContainer.isStorageBarVisible = false;
    this.setPanelBar(this.lawAndOrderBar);
    this.addResource(this.woodContainer);
    this.addResource(this.stoneContainer);
    this.addResource(this.foodContainer);
    this.addResource(this.unitContainer);
  };
  CastleResourcePanel.prototype.initSpecialResourcePanel = function () {
    this.specialResourcePanel = new R.CastleSpecialResourcePanel(new Library.CastleInterfaceElements.ResourcePanelSpecialResourceSublayer());
    this.specialResourcePanel.disp.visible = false;
    this.resourcePanel.addChild(this.specialResourcePanel.disp);
  };
  CastleResourcePanel.prototype.destroy = function () {
    this.controller.removeEventListener(M.CastleHunterData.ON_HUNTER_INFO, this.bindFunction(this.onHunterInfo));
    this.controller.removeEventListener(m.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeResources));
    this.controller.removeEventListener(m.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onChangeCastleParameters));
    this.controller.removeEventListener(h.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onMilitaryDataUpdate));
    E.CastleModel.boostData.removeEventListener(g.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoostChanged));
    this.controller.removeEventListener(m.AreaDataEvent.ON_SLUM_LEVEL_CHANGED, this.bindFunction(this.onChangeSlumLevel));
    this.controller.removeEventListener(C.CastleUserDataEvent.CHANGE_LABORATORYLIST, this.bindFunction(this.onLaboratoryChange));
    this.controller.removeEventListener(p.LaboratoryEvent.LABORATORIES_ALLIANCE_UPDATED, this.bindFunction(this.onLaboratoryChange));
    this.controller.removeEventListener(C.CastleUserDataEvent.DOWNTIME_STATUS_UPDATED, this.bindFunction(this.onDowntimeStatusUpdated));
    this.removeResource(this.woodContainer);
    this.removeResource(this.stoneContainer);
    this.removeResource(this.foodContainer);
    this.removeResource(this.meadContainer);
    this.removeResource(this.beefContainer);
    this.removeResource(this.honeyContainer);
    this.removeResource(this.unitContainer);
    this.removeResource(this.specialResourceContainerButton);
    this.setPanelBar(null);
    if (this.populationContainer) {
      this.removeResource(this.populationContainer);
      this.populationContainer.dispose();
    }
    this.woodContainer.dispose();
    this.stoneContainer.dispose();
    this.foodContainer.dispose();
    this.meadContainer.dispose();
    this.beefContainer.dispose();
    this.honeyContainer.dispose();
    this.unitContainer.dispose();
    if (this.specialResourceContainerButton) {
      this.specialResourceContainerButton.dispose();
      this.specialResourceContainerButton = null;
    }
    if (this.aquamarineResourceContainer) {
      this.aquamarineResourceContainer.dispose();
      this.aquamarineResourceContainer = null;
    }
    this.eilandPanel.removeListeners();
    this.specialResourcePanel.hide();
    e.prototype.destroy.call(this);
  };
  CastleResourcePanel.prototype.checkForSpecialResourceVisibility = function () {
    this._availableSpecialResources = E.CastleModel.areaData.activeStorage ? E.CastleModel.areaData.activeStorage.getReceivableSpecialResources() : [];
    var e = 3;
    if (this.specialResourceContainerButton) {
      this.removeResource(this.specialResourceContainerButton);
    }
    if (this.aquamarineResourceContainer) {
      this.removeResource(this.aquamarineResourceContainer);
    }
    if (this.honeyContainer) {
      this.removeResource(this.honeyContainer);
    }
    if (this._availableSpecialResources.length > 1 || this.specialResourcePanel.isAvailable()) {
      this.specialResourceContainerButton = o.instanceOfClass(this.specialResourceContainerButton, "ResourcePanelSublayerButton") ? this.specialResourceContainerButton : new v.ResourcePanelSublayerButton();
      this.specialResourceContainerButton.setResourceBars(this._availableSpecialResources);
      this.addResource(this.specialResourceContainerButton, e++);
      y.ButtonHelper.initBasicButton(this.specialResourceContainerButton.disp);
      this.specialResourcePanel.updateResources();
      this.updateLaboratoryBoostIndicators();
    } else if (this._availableSpecialResources.length == 1) {
      var t = l.int(this.getSpecialResourceItemFrameForCollectableEnum(this._availableSpecialResources[0]));
      this.specialResourceContainerButton = o.instanceOfClass(this.specialResourceContainerButton, "ResourcePanelItem") ? this.specialResourceContainerButton : new T.ResourcePanelItem(t);
      this.addResource(this.specialResourceContainerButton, e++);
      var i = this.specialResourceContainerButton;
      i.setValue(E.CastleModel.areaData.getActiveStorageItem(this._availableSpecialResources[0]).amount);
      i.setStorageBar(E.CastleModel.areaData.getActiveStorageItem(this._availableSpecialResources[0]).filledInPercent);
      i.isBoosted = false;
      i.resourceType = this._availableSpecialResources[0];
      i.iconFrame = t;
      this.updateLaboratoryBoostIndicators();
    } else {
      this.populationContainer.isBoosted = false;
      this.populationContainer.isStorageBarVisible = false;
      this.addResource(this.populationContainer);
    }
    if (E.CastleModel.areaData.activeAreaInfo.kingdomID == r.WorldIsland.KINGDOM_ID) {
      this.addResource(this.aquamarineResourceContainer, e++);
      var n = E.CastleModel.areaData.activeStorage.getSpecialItem();
      this.aquamarineResourceContainer.setValue(n.amount);
      this.aquamarineResourceContainer.setStorageBar(n.filledInPercent);
      this.aquamarineResourceContainer.isBoosted = false;
    } else {
      if (E.CastleModel.userData.userLegendLevel >= E.CastleModel.areaData.activeStorage.minHoneyMeadLegendLevel) {
        if (E.CastleModel.kingdomData.activeKingdomID != r.WorldIsland.KINGDOM_ID) {
          this.addResource(this.honeyContainer, e++);
          var a = E.CastleModel.areaData.activeStorage.getItem(A.CollectableEnum.HONEY);
          this.honeyContainer.setValue(a.amount);
          this.honeyContainer.setStorageBar(a.filledInPercent);
        }
        this.addResource(this.meadContainer, e++);
        n = E.CastleModel.areaData.activeStorage.getItem(A.CollectableEnum.MEAD);
        this.meadContainer.setValue(n.amount);
        this.meadContainer.setStorageBar(n.filledInPercent);
      }
      if (E.CastleModel.userData.userLegendLevel >= E.CastleModel.areaData.activeStorage.minBeefLegendLevel) {
        this.addResource(this.beefContainer, e++);
        n = E.CastleModel.areaData.activeStorage.getItem(A.CollectableEnum.BEEF);
        this.beefContainer.setValue(n.amount);
        this.beefContainer.setStorageBar(n.filledInPercent);
      }
    }
    this.updateCache();
  };
  CastleResourcePanel.prototype.show = function () {
    e.prototype.show.call(this);
    this.kingdomOverlayFrame = E.CastleModel.kingdomData.activeKingdomID;
    if (E.CastleModel.kingdomData.activeKingdomID == r.WorldIsland.KINGDOM_ID) {
      this.kingdomOverlayFrame = 1;
    }
    this.onChangeResources();
    this.onChangeCastleParameters();
    this.onMilitaryDataUpdate();
    this.controller.addEventListener(M.CastleHunterData.ON_HUNTER_INFO, this.bindFunction(this.onHunterInfo));
    this.controller.addEventListener(m.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeResources));
    this.controller.addEventListener(m.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onChangeCastleParameters));
    this.controller.addEventListener(h.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onMilitaryDataUpdate));
    E.CastleModel.boostData.addEventListener(g.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoostChanged));
    this.controller.addEventListener(O.IsoEvent.ON_SHOW_RING_MENU, this.bindFunction(this.onShowRingMenu));
    this.controller.addEventListener(O.IsoEvent.ON_HIDE_RING_MENU, this.bindFunction(this.onHideRingMenu));
    this.controller.addEventListener(O.IsoEvent.ON_RENDER_STRATEGY_CHANGED, this.bindFunction(this.onIsoModeChange));
    this.controller.addEventListener(C.CastleUserDataEvent.CHANGE_LABORATORYLIST, this.bindFunction(this.onLaboratoryChange));
    this.controller.addEventListener(p.LaboratoryEvent.LABORATORIES_ALLIANCE_UPDATED, this.bindFunction(this.onLaboratoryChange));
    this.controller.addEventListener(C.CastleUserDataEvent.DOWNTIME_STATUS_UPDATED, this.bindFunction(this.onDowntimeStatusUpdated));
    if (E.CastleModel.areaData.activeSlum) {
      this.controller.addEventListener(m.AreaDataEvent.ON_SLUM_LEVEL_CHANGED, this.bindFunction(this.onChangeSlumLevel));
    }
    this.controller.addEventListener(C.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    this.eilandPanel.initIslandPanel();
    if (this.lastKingdomID != E.CastleModel.kingdomData.activeKingdomID) {
      this.lastKingdomID = l.int(E.CastleModel.kingdomData.activeKingdomID);
      if (this.lastKingdomID == r.WorldIsland.KINGDOM_ID) {
        this._specialResourcePanelActiveByPlayer = false;
      }
    }
    this.updateEilandAndSpecialResourcePanel();
    this.allowCaching = true;
  };
  CastleResourcePanel.prototype.onLaboratoryChange = function (e) {
    this.updateLaboratoryBoostIndicators();
    this.updateCache();
  };
  CastleResourcePanel.prototype.onDowntimeStatusUpdated = function (e) {
    this.onChangeResources(null);
    this.onHunterInfo(null);
    this.updateCache();
  };
  CastleResourcePanel.prototype.updateLaboratoryBoostIndicators = function () {
    if (this.specialResourceContainerButton.isResourceContainer) {
      if (o.instanceOfClass(this.specialResourceContainerButton, "ResourcePanelItem")) {
        var e = this.specialResourceContainerButton;
        var t = this.hasLaboratoryBoostFor(e.resourceType);
        e.setBoostIndicator(t, t);
      }
    } else {
      this.specialResourcePanel.updateBoostIndicators();
    }
  };
  CastleResourcePanel.prototype.onIsoModeChange = function (e) {
    if (L.Iso.renderer.strategies.currentStrategy.isInNormalMode) {
      this.onHideRingMenu();
    } else {
      this.onShowRingMenu();
    }
  };
  CastleResourcePanel.prototype.onHideRingMenu = function (e = null) {
    if (L.Iso.renderer && !L.Iso.renderer.strategies.currentStrategy.isActive(f.IsoRenderStrategyEnum.BUILD_MODE)) {
      this._specialResourcePanelActiveByState = false;
    }
    this.updateEilandAndSpecialResourcePanel();
  };
  CastleResourcePanel.prototype.updateEilandAndSpecialResourcePanel = function () {
    c.TweenLite.killTweensOf(this.eilandPanel.panel);
    c.TweenLite.killTweensOf(this.specialResourcePanel.specialResourcePanel);
    if (this.specialResourcePanel.isAvailable() && (this._specialResourcePanelActiveByPlayer || this._specialResourcePanelActiveByState)) {
      if (this.eilandPanel.panel.visible) {
        this.fadeOutSubPanel(this.eilandPanel.panel, false);
        this.fadeInSubPanel(this.specialResourcePanel.specialResourcePanel, true);
        this.eilandPanel.removeListeners();
      } else {
        this.fadeInSubPanel(this.specialResourcePanel.specialResourcePanel, false);
      }
      this.specialResourcePanel.show();
      this.controller.dispatchEvent(new _.CastlePanelEvent(_.CastlePanelEvent.RESOURCE_PANEL_SHOW_SPECIAL_RESOURCES));
    } else if (this.eilandPanel.isAvailable()) {
      if (this.specialResourcePanel.isVisible()) {
        this.fadeOutSubPanel(this.specialResourcePanel.specialResourcePanel, false);
        this.fadeInSubPanel(this.eilandPanel.panel, true);
      } else {
        this.fadeInSubPanel(this.eilandPanel.panel, false);
      }
      this.eilandPanel.addListeners();
    } else {
      this.fadeOutSubPanel(this.specialResourcePanel.specialResourcePanel, false);
      this.fadeOutSubPanel(this.eilandPanel.panel, false);
      this.eilandPanel.removeListeners();
      this.controller.dispatchEvent(new _.CastlePanelEvent(_.CastlePanelEvent.RESOURCE_PANEL_HIDE_SPECIAL_RESOURCES));
    }
    this.updateCache();
  };
  CastleResourcePanel.prototype.onShowRingMenu = function (e = null) {
    this._specialResourcePanelActiveByState = true;
    this.updateEilandAndSpecialResourcePanel();
  };
  CastleResourcePanel.prototype.onLevelUp = function (e) {
    this.checkForSpecialResourceVisibility();
  };
  CastleResourcePanel.prototype.onHunterInfo = function (e) {
    var t = E.CastleModel.hunterData.isBoosted;
    this.woodContainer.setBoostIndicator(t, false);
    this.stoneContainer.setBoostIndicator(t, false);
    this.foodContainer.setBoostIndicator(t && !this.foodFrozen(), true);
    this.updateCache();
  };
  CastleResourcePanel.prototype.onChangeSlumLevel = function (e) {
    this.checkForSpecialResourceVisibility();
  };
  CastleResourcePanel.prototype.hide = function () {
    this.controller.removeEventListener(M.CastleHunterData.ON_HUNTER_INFO, this.bindFunction(this.onHunterInfo));
    this.controller.removeEventListener(m.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeResources));
    this.controller.removeEventListener(m.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onChangeCastleParameters));
    this.controller.removeEventListener(h.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onMilitaryDataUpdate));
    E.CastleModel.boostData.removeEventListener(g.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoostChanged));
    this.controller.removeEventListener(m.AreaDataEvent.ON_SLUM_LEVEL_CHANGED, this.bindFunction(this.onChangeSlumLevel));
    this.controller.removeEventListener(C.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    this.controller.removeEventListener(O.IsoEvent.ON_RENDER_STRATEGY_CHANGED, this.bindFunction(this.onIsoModeChange));
    this.removeResource(this.specialResourceContainerButton);
    this.controller.removeEventListener(O.IsoEvent.ON_SHOW_RING_MENU, this.bindFunction(this.onShowRingMenu));
    this.controller.removeEventListener(C.CastleUserDataEvent.CHANGE_LABORATORYLIST, this.bindFunction(this.onLaboratoryChange));
    this.controller.removeEventListener(p.LaboratoryEvent.LABORATORIES_ALLIANCE_UPDATED, this.bindFunction(this.onLaboratoryChange));
    this.controller.removeEventListener(O.IsoEvent.ON_HIDE_RING_MENU, this.bindFunction(this.onHideRingMenu));
    this.controller.removeEventListener(C.CastleUserDataEvent.DOWNTIME_STATUS_UPDATED, this.bindFunction(this.onDowntimeStatusUpdated));
    V.ResourcePanelToolTipManager.hideAllToolTips();
    this.eilandPanel.removeListeners();
    this.eilandPanel.panel.visible = false;
    this.specialResourcePanel.hide();
    e.prototype.hide.call(this);
  };
  CastleResourcePanel.prototype.onBoostChanged = function (e = null) {
    if (E.CastleModel.areaData.activeArea) {
      this.onChangeResources();
    }
  };
  CastleResourcePanel.prototype.onMilitaryDataUpdate = function (e = null) {
    this.unitContainer.setValue(E.CastleModel.militaryData.unitInventory.getSoldierCount() + E.CastleModel.militaryData.unitStrongholdInventory.getSoldierCount());
    this.updateCache();
  };
  CastleResourcePanel.prototype.onChangeResources = function (e = null) {
    CastleResourcePanel.initResourceContainer(this.woodContainer, A.CollectableEnum.WOOD);
    CastleResourcePanel.initResourceContainer(this.stoneContainer, A.CollectableEnum.STONE);
    CastleResourcePanel.initResourceContainer(this.foodContainer, A.CollectableEnum.FOOD);
    CastleResourcePanel.initResourceContainer(this.meadContainer, A.CollectableEnum.MEAD);
    CastleResourcePanel.initResourceContainer(this.beefContainer, A.CollectableEnum.BEEF);
    CastleResourcePanel.initResourceContainer(this.honeyContainer, A.CollectableEnum.HONEY);
    this.checkForSpecialResourceVisibility();
    this.foodContainer.iconFrame = this.foodFrozen() ? T.ResourcePanelItem.ICON_FRAME_FOOD_FROZEN : T.ResourcePanelItem.ICON_FRAME_FOOD;
    this.meadContainer.iconFrame = this.foodFrozen() ? T.ResourcePanelItem.ICON_FRAME_MEAD_FROZEN : T.ResourcePanelItem.ICON_FRAME_MEAD;
    this.beefContainer.iconFrame = this.foodFrozen() ? T.ResourcePanelItem.ICON_FRAME_BEEF_FROZEN : T.ResourcePanelItem.ICON_FRAME_BEEF;
    if (this.foodFrozen()) {
      this.foodContainer.setFrozen();
      this.meadContainer.setFrozen();
      this.beefContainer.setFrozen();
    } else {
      this.foodContainer.displayObject.bg.gotoAndStop(1);
      this.meadContainer.displayObject.bg.gotoAndStop(1);
      this.beefContainer.displayObject.bg.gotoAndStop(1);
      this.foodContainer.isValueRed = E.CastleModel.areaData.activeCommonInfo.foodProduction < 0;
      this.honeyContainer.isValueRed = E.CastleModel.areaData.activeCommonInfo.honeyProduction < 0;
      this.meadContainer.isValueRed = E.CastleModel.areaData.activeCommonInfo.meadProduction < 0;
      this.beefContainer.isValueRed = E.CastleModel.areaData.activeCommonInfo.beefProduction < 0;
    }
  };
  CastleResourcePanel.initResourceContainer = function (e, t) {
    var i = E.CastleModel.boostData.getOverseer(t);
    e.isBoosted = !!i && i.isActive;
    var n = E.CastleModel.areaData.getActiveStorageItem(t);
    if (n) {
      e.setValue(n.amount);
      e.setStorageBar(n.filledInPercent);
    }
  };
  CastleResourcePanel.prototype.onChangeCastleParameters = function (e = null) {
    var t = E.CastleModel.areaData.activeCommonInfo.getLawAndOrderFactor();
    if (t > 1) {
      this.lawAndOrderBar.setValue(t * 0.5);
    } else {
      this.lawAndOrderBar.setValue((t - 0.5) * 2 * 0.5);
    }
    if (this.populationContainer) {
      this.populationContainer.setValue(E.CastleModel.areaData.activeCommonInfo.population);
    }
    this.onChangeResources();
  };
  CastleResourcePanel.prototype.updateElementsPositions = function () {
    e.prototype.updateElementsPositions.call(this);
    if (this.specialResourceContainerButton && o.instanceOfClass(this.specialResourceContainerButton, "ResourcePanelSublayerButton")) {
      this.specialResourcePanel.disp.x = this.specialResourceContainerButton.disp.x;
      this.specialResourcePanel.disp.y = this.specialResourceContainerButton.disp.y + this.specialResourceContainerButton.disp.height / 2 + 5;
    }
  };
  CastleResourcePanel.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    switch (t.target) {
      case this.woodContainer.disp:
        this.showToolTip(V.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_WOOD, this.woodContainer.disp);
        break;
      case this.populationContainer.disp:
        this.showToolTip(V.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_POPULATION, this.populationContainer.disp);
        break;
      case this.stoneContainer.disp:
        this.showToolTip(V.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_STONE, this.stoneContainer.disp);
        break;
      case this.specialResourceContainerButton.disp:
        if (o.instanceOfClass(this.specialResourceContainerButton, "ResourcePanelItem")) {
          var i = this.specialResourceContainerButton.resourceType;
          if (i) {
            this.showToolTip(this.getToolTipTypeForCollectableEnum(i), this.specialResourceContainerButton.disp);
          }
        } else if (!this.specialResourcePanel.isVisible()) {
          this.showToolTip(V.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_SPECIAL_CONTAINER_BUTTON, this.specialResourceContainerButton.disp);
        }
        break;
      case this.aquamarineResourceContainer.disp:
        this.showToolTip(V.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_AQUAMARINE, this.aquamarineResourceContainer.disp);
        break;
      case this.foodContainer.disp:
        this.showToolTip(V.ResourcePanelToolTipManager.TOOL_TIP_TYPE_FOOD, this.foodContainer.disp);
        break;
      case this.meadContainer.disp:
        this.showToolTip(V.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_MEAD, this.meadContainer.disp);
        break;
      case this.beefContainer.disp:
        this.showToolTip(V.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_BEEF, this.beefContainer.disp);
        break;
      case this.honeyContainer.disp:
        this.showToolTip(V.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_HONEY, this.honeyContainer.disp);
        break;
      case this.unitContainer.disp:
        this.showToolTip(V.ResourcePanelToolTipManager.TOOL_TIP_TYPE_SEASON_MILITARY, this.unitContainer.disp);
        break;
      case this.lawAndOrderBar.disp:
        this.layoutManager.customCursor.setCursorType(s.BasicCustomCursor.CURSOR_CLICK);
        this.showToolTip(V.ResourcePanelToolTipManager.TOOL_TIP_TYPE_LAW_AND_ORDER, this.lawAndOrderBar.disp);
    }
  };
  CastleResourcePanel.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    V.ResourcePanelToolTipManager.hideAllToolTips();
  };
  CastleResourcePanel.prototype.onClick = function (e) {
    if (e.target == this.lawAndOrderBar.disp && E.CastleModel.userData.userLevel >= d.ClientConstLevelRestrictions.MIN_LEVEL_PUBLIC_ORDER) {
      a.CommandController.instance.executeCommand(P.IngameClientCommands.OPEN_TIP_DIALOG_COMMAND, [u.ClientConstCastle.TIP_PRODUCTIVITY]);
    }
    if (e.target == this.specialResourceContainerButton.disp && o.instanceOfClass(this.specialResourceContainerButton, "ResourcePanelSublayerButton")) {
      this._specialResourcePanelActiveByPlayer = !this._specialResourcePanelActiveByState && !this._specialResourcePanelActiveByPlayer;
      this._specialResourcePanelActiveByState = false;
      this.updateEilandAndSpecialResourcePanel();
    }
    if (o.currentBrowserInfo.isTouchEvent(e)) {
      V.ResourcePanelToolTipManager.hideAllToolTips();
      this.onMouseOver(e);
    }
  };
  CastleResourcePanel.prototype.fadeInSubPanel = function (e, t) {
    e.alpha = e.visible ? e.alpha : 0;
    var i = t ? CastleResourcePanel.FADE_DELAY : 0;
    c.TweenLite.to(e, CastleResourcePanel.FADE_DELAY, {
      autoAlpha: 1,
      delay: i,
      onUpdate: this.bindFunction(this.onFadeUpdate)
    });
  };
  CastleResourcePanel.prototype.fadeOutSubPanel = function (e, t) {
    if (e.visible) {
      var i = t ? CastleResourcePanel.FADE_DELAY : 0;
      c.TweenLite.to(e, CastleResourcePanel.FADE_DELAY, {
        autoAlpha: 0,
        delay: i,
        onUpdate: this.bindFunction(this.onFadeUpdate)
      });
    }
  };
  CastleResourcePanel.prototype.onFadeUpdate = function () {
    this.updateCache();
  };
  CastleResourcePanel.prototype.foodFrozen = function () {
    return E.CastleModel.userData.foodFrozen;
  };
  CastleResourcePanel.NAME = "CastleResourcePanel";
  CastleResourcePanel.FADE_DELAY = 0.3;
  return CastleResourcePanel;
}(D.CastleBaseResourcePanel);
exports.CastleResourcePanel = S;
var A = require("./12.js");
var L = require("./33.js");
var P = require("./29.js");
var M = require("./688.js");
var R = require("./3927.js");
var V = require("./152.js");