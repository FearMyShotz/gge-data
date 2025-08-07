Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./49.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./753.js");
var u = require("./18.js");
var d = require("./16.js");
var p = require("./179.js");
var h = require("./4.js");
var g = require("./35.js");
var C = require("./111.js");
var _ = require("./318.js");
var m = require("./181.js");
var f = require("./280.js");
var O = require("./281.js");
var E = require("./163.js");
var y = require("./277.js");
var b = require("./20.js");
var D = require("./95.js");
var I = require("./47.js");
var T = require("./59.js");
var v = require("./711.js");
var S = require("./8.js");
var A = require("./106.js");
var L = require("./112.js");
var P = require("./340.js");
var M = require("./282.js");
var R = require("./117.js");
var V = require("./470.js");
var x = require("./3870.js");
var w = require("./3871.js");
var B = require("./3872.js");
var F = require("./3873.js");
var N = require("./837.js");
var k = require("./554.js");
var U = require("./3874.js");
var G = createjs.MouseEvent;
var H = createjs.Rectangle;
var j = function () {
  function AttackDialogWaveHandler() {
    this.NUM_AMOUNT_OF_UNITS_SLOTS_IN_PICKER = 8;
    this.additionalLordWaveCount = 0;
    this.defaultWaveCount = 0;
    this.isInit = false;
    this.waveItemPool = [];
    this._detailScrollItems = [];
  }
  AttackDialogWaveHandler.prototype.init = function (e, t) {
    this.waveOverview = e;
    this.attackCosts = t;
    S.ButtonHelper.initButtons([this.waveOverview.btn_option1, this.waveOverview.btn_foldOutAll_selected, this.waveOverview.btn_foldOutAll, this.waveOverview.btn_detailView, this.waveOverview.btn_listView], b.ClickFeedbackButtonHover, 1);
    S.ButtonHelper.initButtons([this.waveOverview.mc_detailView.mc_waveList.btn_slider], P.ClickFeedBackHoverSliderButton, 1);
    this.waveOverview.btn_foldOutAll_selected.visible = false;
    this.waveOverview.btn_foldOutAll_selected.toolTipText = "dialog_attack_rework2022_waves_hideAll_tooltip";
    this.waveOverview.btn_foldOutAll.toolTipText = "dialog_attack_rework2022_waves_showAll_tooltip";
    this.waveOverview.btn_detailView.toolTipText = "dialog_attack_rework2022_waveDetails_show_tooltip";
    this.waveOverview.btn_listView.toolTipText = "dialog_attack_rework2022_wavesList_show_tooltip";
    this.attackCosts.mc_loot.toolTipText = "lootplace";
    this.attackCosts.mc_time.toolTipText = "panel_fight_Traveltime";
    if (!this.isInit) {
      this.cbx_all = new n.CheckBoxButton(this.waveOverview.cbx_all, true);
      this.cbx_left = new n.CheckBoxButton(this.waveOverview.cbx_left, true);
      this.cbx_middle = new n.CheckBoxButton(this.waveOverview.cbx_middle, true);
      this.cbx_right = new n.CheckBoxButton(this.waveOverview.cbx_right, true);
      this.waveOverview.cbx_all.toolTipText = "dialog_troopPreset_allWaves_tt";
      this.waveOverview.cbx_left.toolTipText = "dialog_defence_leftFlank";
      this.waveOverview.mc_left.toolTipText = "dialog_defence_leftFlank";
      this.waveOverview.cbx_middle.toolTipText = "dialog_defence_middleFlank";
      this.waveOverview.mc_middle.toolTipText = "dialog_defence_middleFlank";
      this.waveOverview.cbx_right.toolTipText = "dialog_defence_rightFlank";
      this.waveOverview.mc_right.toolTipText = "dialog_defence_rightFlank";
      this._detailSupportWaveInfo = new B.AttackDialogWaveHandlerSupportToolDetail(this.waveOverview.mc_detailView.mc_support);
      this._detailWaveInfo = new F.AttackDialogWaveHandlerWaveInfoDetail(this.waveOverview.mc_detailView.mc_wave);
      this._detailFinalWaveInfo = new w.AttackDialogWaveHandlerFinalYardWaveInfoDetail(this.waveOverview.mc_detailView.mc_final);
      this.isInit = true;
    }
    this.cbx_all.selected();
    this.cbx_left.selected();
    this.cbx_middle.selected();
    this.cbx_right.selected();
    this.waveOverview.addEventListener(G.CLICK, this.bindFunction(this.onClick));
    this.attackCosts.addEventListener(G.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.attackCosts.addEventListener(G.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    if (h.CastleModel.tutorialData.isTutorialActive) {
      this.cbx_middle.deselected();
      this.controller.changeSelectionForAutoFill(R.AttackDialogController.AUTOFILL_SELECTION_POSITION_MIDDLE, this.cbx_middle.isSelected);
      this.cbx_right.deselected();
      this.controller.changeSelectionForAutoFill(R.AttackDialogController.AUTOFILL_SELECTION_POSITION_RIGHT, this.cbx_right.isSelected);
    }
    h.CastleModel.generalsData.addEventListener(p.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.updateAllWaves));
    this.controller.onLordChanged.add(this.bindFunction(this.updateAllWaves));
    this.controller.onSelectedWaveInfoSlotContainerChanged.add(this.bindFunction(this.onSlotSelectionChanged));
    this.controller.updateAllWaveInfo.add(this.bindFunction(this.onSlotSelectionChanged));
    this.controller.updateAutoFillSelections.add(this.bindFunction(this.onUpdateSavedAutofill));
    this.controller.onDetailViewSelectionChanged.add(this.bindFunction(this.onDetailViewChanged));
    this.initScrollList();
    this.initDetailScrollList();
    this.updateAllWaves();
    this.updateListVisibility();
    this.updateBonusIcons();
  };
  AttackDialogWaveHandler.prototype.onUpdateSavedAutofill = function () {
    if (this.controller.getIsWaveSelectedForAutoFill(R.AttackDialogController.AUTOFILL_SELECTION_ALL)) {
      this.cbx_all.selected();
    } else {
      this.cbx_all.deselected();
    }
    if (this.controller.getIsWaveSelectedForAutoFill(R.AttackDialogController.AUTOFILL_SELECTION_POSITION_LEFT)) {
      this.cbx_left.selected();
    } else {
      this.cbx_left.deselected();
    }
    if (this.controller.getIsWaveSelectedForAutoFill(R.AttackDialogController.AUTOFILL_SELECTION_POSITION_MIDDLE)) {
      this.cbx_middle.selected();
    } else {
      this.cbx_middle.deselected();
    }
    if (this.controller.getIsWaveSelectedForAutoFill(R.AttackDialogController.AUTOFILL_SELECTION_POSITION_RIGHT)) {
      this.cbx_right.selected();
    } else {
      this.cbx_right.deselected();
    }
  };
  AttackDialogWaveHandler.prototype.updateAllWaves = function (e = null) {
    this.controller.updateAreEffects();
    this.initWaves();
    this.fillWaveInfo();
    this.fillAttackCosts();
  };
  AttackDialogWaveHandler.prototype.initScrollList = function () {
    var e = new f.AccordionComponentProperties();
    e.scrollStrategy = T.DynamicSizeScrollStrategyVertical;
    e.disableButtons = true;
    e.scrollStepPixels = 40;
    if (!this.waveInfoList) {
      this.waveInfoList = new M.DynamicSliderAccordionComponent(this.waveOverview.mc_list, e, this.waveOverview.mc_list.mc_items.mask);
      this.waveInfoList.scrollComponent.scrollVO.addSliderLine(this.waveOverview.mc_list.mc_slider.mc_sliderLine);
    }
    this.waveInfoList.scrollToTop();
    this.waveInfoList.onSliderChangeSignal.add(this.bindFunction(this.updateFoldOutButtons));
  };
  AttackDialogWaveHandler.prototype.initDetailScrollList = function () {
    if (!this._detailScrollComponent) {
      var e = this.waveOverview.mc_detailView.mc_waveList;
      var t = new I.SimpleScrollVO().initByParent(e).addSliderBackground(e.bg).addMouseWheelElements([e]);
      var i = new T.DynamicSizeScrollStrategyVertical(false, e.mc_items.mask.height, true);
      this._detailScrollComponent = new D.SimpleScrollComponent(t, i);
      this._detailScrollV = e.mc_items.y;
    }
    this._detailScrollComponent.onScrollSignal.add(this.bindFunction(this.onDetailScroll));
  };
  AttackDialogWaveHandler.prototype.fillWaveInfo = function () {
    if (this.controller.isWaveDetailView) {
      this.clearDetailItems();
      var e = this.waveOverview.mc_detailView.mc_waveList.mc_items;
      o.MovieClipHelper.clearMovieClip(e);
      if (V.AttackDialogHelper.canUseSupportTools()) {
        var t = new (a.getDefinitionByName("AttackDialog_DetailViewItem_SupportWave"))();
        e.addChild(t);
        this._detailScrollItems.push(new x.AttackDialogDetailViewScrollItem(t, k.AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.CONST_WAVE_NAME));
      }
      for (var i = 0; i < this.attackInfoVO.army.getWaveCount(); i++) {
        var n = new (a.getDefinitionByName("AttackDialog_DetailViewItem_NormalWave"))();
        e.addChild(n);
        this._detailScrollItems.push(new x.AttackDialogDetailViewScrollItem(n, i));
      }
      var s = new (a.getDefinitionByName("AttackDialog_DetailViewItem_FinalWave"))();
      e.addChild(s);
      this._detailScrollItems.push(new x.AttackDialogDetailViewScrollItem(s, N.AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.CONST_WAVE_NAME));
      new y.SimpleLayoutStrategyVertical().apply(this._detailScrollItems, new H());
      var r = this._detailScrollComponent.currentValue || 0;
      var l = Math.max(0, e.height - e.mask.height);
      this._detailScrollComponent.init(0, l, 38, 38);
      this._detailScrollComponent.show();
      this._detailScrollComponent.scrollToValue(r);
      this.updateDetailViewSelectedState();
      this.onDetailViewChanged();
    } else {
      var c = new O.GenericCollapsibleItemProperties(new E.LayoutMargin(0, 0, 0, 0), true, 0, 0, false);
      this.recycleWaveList();
      if (V.AttackDialogHelper.canUseSupportTools()) {
        this.waveInfoList.addItem(this.getSupportWaveItem(this.controller.getIsWaveSelectedForAutoFill(k.AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.CONST_WAVE_NAME), c));
      }
      for (i = 0; i < this.attackInfoVO.army.getWaveCount(); i++) {
        this.waveInfoList.addItem(this.getWaveInfoItem(this.attackInfoVO.army.waves[i], i, this.controller.getIsWaveSelectedForAutoFill(i), c));
      }
      this.waveInfoList.addItem(this.getFinalWaveItem(this.controller.getIsWaveSelectedForAutoFill(N.AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.CONST_WAVE_NAME), c));
      this.waveInfoList.show();
      this.waveInfoList.scrollComponent.scrollToValue(Math.min(this.waveInfoList.scrollComponent.maxValue, this.waveInfoList.scrollComponent.currentValue));
    }
  };
  AttackDialogWaveHandler.prototype.recycleWaveList = function () {
    var e = this;
    this.supportWaveItem = this.waveInfoList.items.find(function (e) {
      return e instanceof k.AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut;
    });
    this.finalWaveItem = this.waveInfoList.items.find(function (e) {
      return e instanceof N.AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut;
    });
    var t = this.waveItemPool;
    this.waveItemPool = [];
    this.waveInfoList.items.filter(function (e) {
      return e instanceof U.AttackDialogWaveHandlerWaveInfoItemFoldOut;
    }).forEach(function (t) {
      return e.waveItemPool.push(t);
    });
    this.waveItemPool = this.waveItemPool.concat(t);
    this.waveInfoList.hide();
  };
  AttackDialogWaveHandler.prototype.getSupportWaveItem = function (e, t) {
    var i;
    if (this.supportWaveItem) {
      (i = this.supportWaveItem).init(e);
    } else {
      i = new k.AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut(e, t);
    }
    return i;
  };
  AttackDialogWaveHandler.prototype.getWaveInfoItem = function (e, t, i, n) {
    var o;
    if (this.waveItemPool.length > 0) {
      (o = this.waveItemPool.shift()).init(e, t, i);
    } else {
      o = new U.AttackDialogWaveHandlerWaveInfoItemFoldOut(this.attackInfoVO.army.waves[t], t, this.controller.getIsWaveSelectedForAutoFill(t), n);
    }
    return o;
  };
  AttackDialogWaveHandler.prototype.getFinalWaveItem = function (e, t) {
    var i;
    if (this.finalWaveItem) {
      (i = this.finalWaveItem).init(e);
    } else {
      i = new N.AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut(e, t);
    }
    return i;
  };
  AttackDialogWaveHandler.prototype.initWaves = function () {
    if (this.defaultWaveCount == 0) {
      this.defaultWaveCount = this.attackInfoVO.army.getWaveCount();
    }
    var e = l.int(this.selectedLord.getEffectValue(g.EffectTypeEnum.EFFECT_TYPE_ADDITIONAL_WAVE, this.attackInfoVO.targetArea.areaType));
    e += this.attackInfoVO.supportItemContainer ? this.attackInfoVO.supportItemContainer.getTotalBonusByToolEffect(_.ToolEffectType.ADDITIONAL_WAVE) : 0;
    if (this.additionalLordWaveCount < e) {
      while (this.additionalLordWaveCount < e) {
        this.attackInfoVO.addAdditionalWave();
        this.additionalLordWaveCount++;
        true;
      }
    }
    if (this.additionalLordWaveCount > e) {
      while (this.additionalLordWaveCount > e) {
        this.attackInfoVO.deductLastWave();
        this.additionalLordWaveCount--;
        true;
      }
    }
    for (var t = 0; t < this.attackInfoVO.army.getWaveCount(); t++) {
      this.updateMaxUnitCount(this.attackInfoVO.army.getWaveByID(t));
    }
    this.attackInfoVO.yardWaveContainer.maxItems = s.CombatConst.getMaxUnitsInReinforcementWave(h.CastleModel.userData.level, this.attackInfoVO.targetArea.isUnderConquerControl ? this.attackInfoVO.targetArea.minimumOwnerLevel : this.attackInfoVO.targetOwnerLevel, C.CastleEffectsHelper.getUnitsOnTheYardWaveBonusForAreaType(this.selectedLord, this.attackInfoVO.targetArea), C.CastleEffectsHelper.getUnitsOnTheYardWaveBoostForAreaType(this.selectedLord, this.attackInfoVO.targetArea));
    if (this.attackInfoVO.yardWaveContainer.maxItems < this.attackInfoVO.yardWaveContainer.sumOfItems) {
      this.attackInfoVO.yardWaveContainer.items.forEach(function (e) {
        if (e.unitVO) {
          e.outline = 1;
        }
      });
    }
  };
  AttackDialogWaveHandler.prototype.updateMaxUnitCount = function (e) {
    var t = this.controller.selectedLord;
    if (t) {
      e.itemsLeftWall_units.maxItems = s.CombatConst.getAmountSoldiers(0, this.attackInfoVO.targetOwnerLevel, C.CastleEffectsHelper.getUnitsOnTheFlankBonusForAreaType(t, this.attackInfoVO.targetArea, V.AttackDialogHelper.isLegendaryFight), 0);
      e.itemsMiddleWall_units.maxItems = s.CombatConst.getAmountSoldiers(1, this.attackInfoVO.targetOwnerLevel, 0, C.CastleEffectsHelper.getUnitsOnTheFrontBonusForAreaType(t, this.attackInfoVO.targetArea, V.AttackDialogHelper.isLegendaryFight));
      e.itemsRightWall_units.maxItems = s.CombatConst.getAmountSoldiers(2, this.attackInfoVO.targetOwnerLevel, C.CastleEffectsHelper.getUnitsOnTheFlankBonusForAreaType(t, this.attackInfoVO.targetArea, V.AttackDialogHelper.isLegendaryFight), 0);
    }
    e.itemsLeftWall_units.items.forEach(function (t) {
      t.outline = e.itemsLeftWall_units.exceedsLimit() && t.unitVO ? 1 : 0;
    });
    e.itemsRightWall_units.items.forEach(function (t) {
      t.outline = e.itemsRightWall_units.exceedsLimit() && t.unitVO ? 1 : 0;
    });
    e.itemsMiddleWall_units.items.forEach(function (t) {
      t.outline = e.itemsMiddleWall_units.exceedsLimit() && t.unitVO ? 1 : 0;
    });
  };
  AttackDialogWaveHandler.prototype.onSlotSelectionChanged = function () {
    this.fillAttackCosts();
    var e = this.controller.selectedWaveInfoSlotContainer;
    if (!!e && e.items[0].slotType == m.ToolUnitVO.SLOTTYPE_TOOL_SUPPORT_OFFENSE) {
      e.maxItems = e.items.length;
    }
  };
  AttackDialogWaveHandler.prototype.fillAttackCosts = function () {
    var e = this.attackInfoVO.getTravelCost(this.selectedLord);
    var t = e <= h.CastleModel.currencyData.c1Amount ? d.ClientConstColor.MODERN_DEFAULT : d.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.attackCosts.mc_c1.txt_copy, new r.LocalizedNumberVO(e)).color = t;
    this.attackCosts.mc_c1.mouseChildren = false;
    var i = h.CastleModel.userData.attackCounter.attackCount >= h.CastleModel.userData.attackCounter.attackCountThreshold;
    this.attackCosts.mc_c1.toolTipText = i ? {
      t: "info_attack_threshold",
      ox: 0
    } : {
      t: "travelingcosts",
      ox: -55
    };
    this.attackCosts.mc_c1.mc_warning.visible = this.attackCosts.mc_c1.mc_bg.visible = i;
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.attackCosts.txt_loot, new r.LocalizedNumberVO(V.AttackDialogHelper.getTotalLoot()));
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.attackCosts.txt_time, new r.TextVO(o.TimeStringHelper.getShortTimeStringBySeconds(this.attackInfoVO.getTravelTime(this.attackInfoVO.targetArea, this.selectedLord))));
  };
  AttackDialogWaveHandler.prototype.updateBonusIcons = function () {
    if (this.attackInfoVO.spyInfo && this.attackInfoVO.spyInfo.defenderSkills && this.attackInfoVO.spyInfo.defenderSkills.length > 0) {
      this.waveOverview.mc_bonus_right.visible = true;
      this.waveOverview.mc_bonus_right.mouseChildren = false;
      this.waveOverview.mc_bonus_right.toolTipText = v.CastleLegendEffectTextComposer.getLegendBonusText(this.attackInfoVO.spyInfo.defenderSkills).trim();
    } else {
      this.waveOverview.mc_bonus_right.visible = false;
    }
    var e;
    var t = this.attackInfoVO.targetArea.areaType == s.WorldConst.AREA_TYPE_CAPITAL || this.attackInfoVO.targetArea.areaType == s.WorldConst.AREA_TYPE_METROPOL;
    var i = l.int(this.attackInfoVO.targetArea.mapID > 0 ? this.attackInfoVO.targetArea.mapID : this.attackInfoVO.targetArea.kingdomID);
    var n = A.CastleTitleSystemHelper.returnTitleEffectValue(g.EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS, -1, this.attackInfoVO.targetArea.areaType, i).strength > 0;
    var o = this.attackInfoVO.kingstowerBonus;
    var a = o > 0 && t;
    var d = this.attackInfoVO.monumentBonus > 0 && c.CastleFameHelper.canEarnFame(this.attackInfoVO.targetArea, u.ClientConstCastle.ACTION_TYPE_ATTACK);
    var p = "";
    if (a) {
      p += r.Localize.text("kingstower_fightscreen_value_tooltip", [o]);
      p += "\n";
    }
    if (n && !L.PlayerHelper.isNPCPlayer(this.attackInfoVO.targetArea.ownerInfo.playerID)) {
      p += r.Localize.text("fameTitle_pvp_fightscreen_value_tooltip", [l.int(A.CastleTitleSystemHelper.getAttackBoost(L.PlayerHelper.isNPCPlayer(this.attackInfoVO.targetArea.ownerInfo.playerID), this.attackInfoVO.targetArea.areaType, i))]);
      p += "\n";
    } else if (n) {
      p += r.Localize.text("fameTitle_fightscreen_value_tooltip", [l.int(A.CastleTitleSystemHelper.getAttackBoost(L.PlayerHelper.isNPCPlayer(this.attackInfoVO.targetArea.ownerInfo.playerID), this.attackInfoVO.targetArea.areaType, i))]);
      p += "\n";
    }
    if (d) {
      e = h.CastleModel.userData.isInAlliance ? l.int(h.CastleModel.allianceData.myAllianceVO.landmarksList.getMonumentBonus()) : l.int(h.CastleModel.userData.monumentList.getLandmarkBonus());
      p += r.Localize.text("monument_fightscreen_value_tooltip", [e]);
      p += "\n";
    }
    this.waveOverview.mc_bonus_left.toolTipText = p.trim();
    this.waveOverview.mc_bonus_left.visible = p.length > 0;
    this.waveOverview.mc_bonus_left.mouseChildren = false;
  };
  Object.defineProperty(AttackDialogWaveHandler.prototype, "attackInfoVO", {
    get: function () {
      return this.controller.attackVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogWaveHandler.prototype, "selectedLord", {
    get: function () {
      return this.controller.selectedLord;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogWaveHandler.prototype, "controller", {
    get: function () {
      return R.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogWaveHandler.prototype.onClick = function (e) {
    if (S.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.waveOverview.cbx_all:
          this.cbx_all.toggleSelected();
          this.controller.changeSelectionForAutoFill(R.AttackDialogController.AUTOFILL_SELECTION_ALL, this.cbx_all.isSelected);
          break;
        case this.waveOverview.cbx_left:
          this.cbx_left.toggleSelected();
          this.controller.changeSelectionForAutoFill(R.AttackDialogController.AUTOFILL_SELECTION_POSITION_LEFT, this.cbx_left.isSelected);
          break;
        case this.waveOverview.cbx_middle:
          this.cbx_middle.toggleSelected();
          this.controller.changeSelectionForAutoFill(R.AttackDialogController.AUTOFILL_SELECTION_POSITION_MIDDLE, this.cbx_middle.isSelected);
          break;
        case this.waveOverview.cbx_right:
          this.cbx_right.toggleSelected();
          this.controller.changeSelectionForAutoFill(R.AttackDialogController.AUTOFILL_SELECTION_POSITION_RIGHT, this.cbx_right.isSelected);
          break;
        case this.waveOverview.btn_foldOutAll_selected:
          var t = this.waveInfoList.properties.scrollDuration;
          this.waveInfoList.properties.scrollDuration = 0;
          this.waveInfoList.items.forEach(function (e) {
            e.expand(false, false);
          });
          this.waveInfoList.properties.scrollDuration = t;
          this.controller.trackExpandWaves(false);
          break;
        case this.waveOverview.btn_foldOutAll:
          var i = this.waveInfoList.properties.scrollDuration;
          this.waveInfoList.properties.scrollDuration = 0;
          this.waveInfoList.items.forEach(function (e) {
            e.expand(true, false);
          });
          this.waveInfoList.properties.scrollDuration = i;
          this.controller.trackExpandWaves(true);
          break;
        case this.waveOverview.btn_detailView:
          this.controller.isWaveDetailView = false;
          this.updateListView();
          break;
        case this.waveOverview.btn_listView:
          this.controller.isWaveDetailView = true;
          this.updateListView();
      }
      this.updateSelectAllCBX();
    }
  };
  AttackDialogWaveHandler.prototype.onMouseOver = function (e) {
    switch (e.target) {
      case this.attackCosts.mc_c1:
        if (h.CastleModel.userData.attackCounter.attackCount >= h.CastleModel.userData.attackCounter.attackCountThreshold) {
          this.attackCosts.mc_c1.gotoAndStop(2);
        }
    }
  };
  AttackDialogWaveHandler.prototype.onMouseOut = function (e) {
    switch (e.target) {
      case this.attackCosts.mc_c1:
        this.attackCosts.mc_c1.gotoAndStop(1);
    }
  };
  AttackDialogWaveHandler.prototype.updateListView = function () {
    this.updateListVisibility();
    this.updateFoldOutButtons();
    this.fillWaveInfo();
  };
  AttackDialogWaveHandler.prototype.updateListVisibility = function () {
    this.waveOverview.mc_list.visible = !this.controller.isWaveDetailView;
    this.waveOverview.btn_listView.visible = !this.controller.isWaveDetailView;
    this.waveOverview.mc_detailView.visible = this.controller.isWaveDetailView;
    this.waveOverview.btn_detailView.visible = this.controller.isWaveDetailView;
    this.cbx_all.disp.visible = !this.controller.isWaveDetailView;
    if (this.controller.isWaveDetailView) {
      this.waveInfoList.hide();
    } else {
      this.clearDetailItems();
      this._detailSupportWaveInfo.setVisibility(false);
      this._detailWaveInfo.setVisibility(false, -1);
      this._detailFinalWaveInfo.setVisibility(false);
    }
  };
  AttackDialogWaveHandler.prototype.updateFoldOutButtons = function () {
    var e = true;
    this.waveInfoList.items.forEach(function (t) {
      e = e && t.isExpanded;
    });
    this.waveOverview.btn_foldOutAll_selected.visible = e && !this.controller.isWaveDetailView;
    this.waveOverview.btn_foldOutAll.visible = !e && !this.controller.isWaveDetailView;
  };
  AttackDialogWaveHandler.prototype.updateSelectAllCBX = function () {
    var e = 0;
    var t = 0;
    for (var i = 0; i < this.attackInfoVO.army.waves.length; i++) {
      e++;
      if (this.controller.getIsWaveSelectedForAutoFill(i)) {
        t++;
      }
    }
    if (this.attackInfoVO.yardWaveContainer) {
      e++;
      if (this.controller.getIsWaveSelectedForAutoFill(N.AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.CONST_WAVE_NAME)) {
        t++;
      }
    }
    if (this.cbx_all.isSelected) {
      this.cbx_all.disp.gotoAndStop(e == t ? 2 : 3);
    }
  };
  AttackDialogWaveHandler.prototype.onDetailScroll = function () {
    this.waveOverview.mc_detailView.mc_waveList.mc_items.y = this._detailScrollV - this._detailScrollComponent.currentValue;
  };
  AttackDialogWaveHandler.prototype.clearDetailItems = function () {
    this._detailScrollItems.forEach(function (e) {
      return e.destroy();
    });
    this._detailScrollItems = [];
  };
  AttackDialogWaveHandler.prototype.updateDetailViewSelectedState = function () {
    var e = this;
    this._detailScrollItems.forEach(function (t) {
      return t.disp.mc_selected.visible = t.waveKey == e.controller.selectedDetailView;
    });
  };
  AttackDialogWaveHandler.prototype.onDetailViewChanged = function () {
    this.updateDetailViewSelectedState();
    var e = this.controller.selectedDetailView == k.AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.CONST_WAVE_NAME;
    var t = this.controller.selectedDetailView == N.AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.CONST_WAVE_NAME;
    var i = typeof this.controller.selectedDetailView == "number";
    var n = i ? this.controller.selectedDetailView : -1;
    this._detailSupportWaveInfo.setVisibility(e);
    this._detailWaveInfo.setVisibility(i, n);
    this._detailFinalWaveInfo.setVisibility(t);
  };
  AttackDialogWaveHandler.prototype.destroy = function () {
    if (this.waveInfoList) {
      this.recycleWaveList();
      this.waveInfoList.onSliderChangeSignal.remove(this.bindFunction(this.updateFoldOutButtons));
    }
    if (this._detailScrollComponent) {
      this._detailScrollComponent.onScrollSignal.remove(this.bindFunction(this.onDetailScroll));
      this._detailScrollComponent.hide();
    }
    this.clearDetailItems();
    this.waveOverview.removeEventListener(G.CLICK, this.bindFunction(this.onClick));
    this.attackCosts.removeEventListener(G.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.attackCosts.removeEventListener(G.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this.defaultWaveCount = 0;
    h.CastleModel.generalsData.removeEventListener(p.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.updateAllWaves));
    this.controller.onLordChanged.remove(this.bindFunction(this.updateAllWaves));
    this.controller.onSelectedWaveInfoSlotContainerChanged.remove(this.bindFunction(this.onSlotSelectionChanged));
    this.controller.updateAllWaveInfo.remove(this.bindFunction(this.onSlotSelectionChanged));
    this.controller.updateAutoFillSelections.remove(this.bindFunction(this.onUpdateSavedAutofill));
    this.controller.onDetailViewSelectionChanged.remove(this.bindFunction(this.onDetailViewChanged));
    this.additionalLordWaveCount = 0;
  };
  AttackDialogWaveHandler.__initialize_static_members = function () {};
  return AttackDialogWaveHandler;
}();
exports.AttackDialogWaveHandler = j;
a.classImplementsInterfaces(j, "ICollectableRendererList");
j.__initialize_static_members();