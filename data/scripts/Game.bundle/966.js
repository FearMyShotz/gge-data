Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./5.js");
var p = require("./5.js");
var h = require("./5.js");
var g = require("./3.js");
var C = require("./3.js");
var _ = require("./3.js");
var m = require("./6.js");
var f = require("./16.js");
var O = require("./58.js");
var E = require("./28.js");
var y = require("./69.js");
var b = require("./21.js");
var D = require("./169.js");
var I = require("./232.js");
var T = require("./53.js");
var v = require("./15.js");
var S = require("./4.js");
var A = require("./27.js");
var L = require("./222.js");
var P = require("./197.js");
var M = require("./171.js");
var R = require("./2561.js");
var V = require("./894.js");
var x = require("./8.js");
var w = require("./112.js");
var B = createjs.Point;
var F = function () {
  function ACastleSpyDialogState(e) {
    this.sliderValue = 0.5;
    this.dialog = e;
    this.initTextFields();
    this.initElements();
  }
  ACastleSpyDialogState.prototype.initTextFields = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.tfFrom, new _.LocalizedTextVO("dialog_startAttack_from"));
    this.textFieldManager.registerTextField(this.dialogDisp.tfTo, new _.LocalizedTextVO("dialog_startAttack_to"));
    this.tfTitle = this.textFieldManager.registerTextField(this.dialogDisp.txtTitle, new _.LocalizedTextVO(""));
    this.tfDamage = this.textFieldManager.registerTextField(this.dialogDisp.sabotageDamage.txt_value, new _.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE));
    this.guardAmount = this.textFieldManager.registerTextField(this.dialogDisp.guardAmount.txt_value, new C.LocalizedNumberVO(0));
    this.tfDistance = this.textFieldManager.registerTextField(this.dialogDisp.mcDistance.txt_distance, new C.LocalizedNumberVO(0, true, 1));
    this.tfTravelTime = this.textFieldManager.registerTextField(this.dialogDisp.travelTime.txt_value, new g.TextVO(""));
    this.tfRisk = this.textFieldManager.registerTextField(this.dialogDisp.risk.txt_value, new _.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE));
    this.tfCosts = this.textFieldManager.registerTextField(this.dialogDisp.costs.txt_value, new C.LocalizedNumberVO(0));
    this.tfSabotageTargets = this.textFieldManager.registerTextField(this.dialogDisp.sabotageTargets.txt_value, new C.LocalizedNumberVO(0));
    this.tfTargetCastleName = this.textFieldManager.registerTextField(this.dialogDisp.nameTarget.castleName_txt, new g.TextVO(""));
  };
  ACastleSpyDialogState.prototype.initElements = function () {
    this.createSliderComponent();
    this.dialogDisp.castleListCombobox.visible = false;
    this.dialogDisp.costs.x = this.dialogDisp.costs.y = 0;
    this.dialogDisp.risk.x = this.dialogDisp.risk.y = 0;
  };
  ACastleSpyDialogState.prototype.createSliderComponent = function () {
    this.slider = new V.MultiSlider(this.dialogDisp.slider, 1, 24, 424, Library.CastleInterfaceElements.DefenceUnitAllocationSliderButton, false, [""]);
    this.slider.enableComponent = false;
    this.setSliderButtonVisibility(false);
  };
  ACastleSpyDialogState.prototype.updateElements = function () {
    this.checkSliderComponent();
    this.setPlagueTab();
    this.setSabotageTab();
    this.setSpyTab();
    this.slider.enableComponent = true;
    this.setSliderButtonVisibility(true);
    this.costHolder.addChild(this.dialogDisp.costs);
    this.riskHolder.addChild(this.dialogDisp.risk);
    this.setCrest();
    this.addBgCharacter();
    this.amountPicker = new R.InputMaxPicker(this.dialogDisp.amountPicker);
    this.drawTargetCastle();
  };
  ACastleSpyDialogState.prototype.checkSliderComponent = function () {
    if (this.slider && !this.slider.buttons) {
      this.createSliderComponent();
    }
  };
  ACastleSpyDialogState.prototype.setCrest = function () {
    var e;
    var t;
    if (this.dialogProperties.worldmapObjectVO.kingdomID == h.FactionConst.KINGDOM_ID) {
      e = this.factionEventVO.ownFaction == h.FactionConst.BLUE_FACTION ? N.FactionEventVO.BLUE_CREST_VO : N.FactionEventVO.RED_CREST_VO;
      if (this.dialogProperties.worldmapObjectVO.ownerInfo) {
        t = this.dialogProperties.worldmapObjectVO.ownerInfo.factionID == h.FactionConst.BLUE_FACTION ? N.FactionEventVO.BLUE_CREST_VO : N.FactionEventVO.RED_CREST_VO;
      }
    } else {
      e = S.CastleModel.userData.playerCrest;
      if (this.dialogProperties.worldmapObjectVO.ownerInfo) {
        t = this.dialogProperties.worldmapObjectVO.ownerInfo.crest;
      }
    }
    j.CrestHelper.setCrestGraphics(this.dialogDisp.mcCrest0, e);
    if (t) {
      j.CrestHelper.setCrestGraphics(this.dialogDisp.mcCrest1, t);
      this.dialogDisp.mcCrest1.visible = true;
      this.dialogDisp.mc_crestShadowEnemy.visible = true;
    } else {
      this.dialogDisp.mcCrest1.visible = false;
      this.dialogDisp.mc_crestShadowEnemy.visible = false;
    }
  };
  ACastleSpyDialogState.prototype.setSliderButtonVisibility = function (e) {
    for (var t = 0; t < this.slider.buttons.length; t++) {
      this.slider.buttons[t].visible = e;
    }
  };
  Object.defineProperty(ACastleSpyDialogState.prototype, "factionEventVO", {
    get: function () {
      return S.CastleModel.specialEventData.getActiveEventByEventId(c.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  ACastleSpyDialogState.prototype.addBgCharacter = function () {
    throw new y.AbstractMethodError();
  };
  ACastleSpyDialogState.prototype.updateTexts = function () {
    this.dialogDisp.mcDistance.toolTipText = "distance";
    this.guardAmount.textContentVO.numberValue = this.startSpyVO.guardCount;
  };
  ACastleSpyDialogState.prototype.addEventListenerOnShow = function () {
    if (this.castleList) {
      this.castleList.disp.addEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeUserCastle));
    }
    this.amountPicker.disp.addEventListener(D.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onPickerChange));
    this.slider.addEventListener(I.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderChange));
    S.CastleModel.timerData.addEventListener(b.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondTimer));
  };
  ACastleSpyDialogState.prototype.removeEventListenerOnHide = function () {
    if (this.castleList) {
      this.castleList.disp.removeEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeUserCastle));
    }
    if (this.amountPicker) {
      this.amountPicker.disp.removeEventListener(D.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onPickerChange));
    }
    if (this.slider) {
      this.slider.removeEventListener(I.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderChange));
    }
    S.CastleModel.timerData.removeEventListener(b.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondTimer));
  };
  ACastleSpyDialogState.prototype.onSecondTimer = function (e) {
    this.setPlagueTab();
    this.setSabotageTab();
  };
  ACastleSpyDialogState.prototype.addCastleList = function () {
    this.castleList = new H.ComboboxComponent(this.dialogDisp.castleListCombobox, "", 1, 40, 45);
    this.dialogDisp.castleListCombobox.visible = true;
    this.fillCastleList();
    this.drawSourceCastle();
  };
  ACastleSpyDialogState.prototype.onChangeUserCastle = function (e) {
    if (this.startSpyVO) {
      this.drawSourceCastle();
      this.updateData();
    }
  };
  ACastleSpyDialogState.prototype.drawSourceCastle = function (e = null) {
    l.MovieClipHelper.clearMovieClip(this.dialogDisp.sourceCastleContainer);
    var t = this.castleList.selectedData;
    var i = m.int(t.objectId);
    var n = m.int(t.kingdomID);
    var o = S.CastleModel.userData.getOwnCastle(i, n);
    this.dialogDisp.sourceCastleContainer.addChild(W.WorldmapObjectIconHelper.drawMapObjectIcon(o, new B(100, 75), true, false, true, "panel_action_jumpTo"));
  };
  ACastleSpyDialogState.prototype.drawTargetCastle = function () {
    l.MovieClipHelper.clearMovieClip(this.dialogDisp.targetCastleContainer);
    this.dialogDisp.targetCastleContainer.addChild(W.WorldmapObjectIconHelper.drawMapObjectIcon(this.dialogProperties.worldmapObjectVO, new B(100, 75), true, false, true, "panel_action_jumpTo"));
    this.tfTargetCastleName.textContentVO.stringValue = this.dialogProperties.worldmapObjectVO.areaNameString;
    this.dialogDisp.nameTarget.mc_dove.visible = false;
    this.dialogDisp.nameTarget.mc_rank.visible = false;
    this.dialogDisp.nameTarget.mc_searchAlliance.visible = false;
  };
  ACastleSpyDialogState.prototype.fillCastleList = function () {
    var e;
    var t;
    this.castleList.clearItems();
    if ((e = this.dialogProperties.worldmapObjectVO.kingdomID == h.FactionConst.KINGDOM_ID ? S.CastleModel.userData.castleList.listWithoutOcupiedOrDestroyedFactionCamps : S.CastleModel.userData.castleList.listWithoutOcupiedOutposts) != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.kingdomID == this.dialogProperties.worldmapObjectVO.kingdomID) {
          (t = new M.ComboboxItemRendererVO()).itemLabel = o.areaNameString;
          t.data = o;
          this.castleList.addItem(t);
        }
      }
    }
    var a = 0;
    var s = -1;
    var r = S.CastleModel.userData.castleList.getMainCastleByKingdomID(S.CastleModel.kingdomData.activeKingdomID);
    for (var l = 0; l < this.castleList.itemData.length; l++) {
      var c = this.castleList.itemData[l].data;
      var u = L.MapHelper.getDistanceByMapobjects(c, this.dialogProperties.worldmapObjectVO, true);
      if (c.kingdomID == this.dialogProperties.worldmapObjectVO.kingdomID) {
        var d = r.objectId == c.objectId;
        if (u < s || s < 0 || u == s && d) {
          a = l;
          s = u;
        }
      }
    }
    this.castleList.selectItemIndex(a);
    this.castleList.enabled = this.castleList.itemData.length > 1;
  };
  ACastleSpyDialogState.prototype.onSliderChange = function (e) {
    this.sliderValue = e.selectedValues[0];
    this.updateData();
  };
  ACastleSpyDialogState.prototype.onPickerChange = function (e) {
    this.updateData();
  };
  ACastleSpyDialogState.prototype.setPlagueTab = function () {
    this.plagueButton ||= new G.ButtonPlagueMonkComponent(this.dialogDisp.btnTabPlague.basicButton);
    this.plagueButton.targetWMO = this.dialogProperties.worldmapObjectVO;
  };
  ACastleSpyDialogState.prototype.setSabotageTab = function () {
    var e = this.dialogProperties.worldmapObjectVO.ownerInfo.isLegend;
    var t = {
      t: "dialog_spy_titleSabotage"
    };
    var i = false;
    var n = this.dialogProperties.worldmapObjectVO.ownerInfo.playerLevel - S.CastleModel.userData.userLevel;
    if (w.PlayerHelper.isNPCPlayer(this.dialogProperties.worldmapObjectVO.ownerInfo.playerID)) {
      t = "dialog_sabotage_cannot_sabotage_npcs";
    } else if (this.dialogProperties.worldmapObjectVO.ownerInfo.playerLevel < O.ClientConstLevelRestrictions.MIN_LEVEL_SABOTAGE) {
      t = "errorCode_120";
    } else if (S.CastleModel.userData.userLevel < O.ClientConstLevelRestrictions.MIN_LEVEL_SABOTAGE) {
      t = {
        t: "expansion_higherLevelNeeded",
        p: [O.ClientConstLevelRestrictions.MIN_LEVEL_SABOTAGE]
      };
    } else if (S.CastleModel.userData.userLevel < p.SpyConst.MIN_LEVEL_SPY_ALL && n > p.SpyConst.MAX_DELTA_LEVEL_SPY) {
      t = {
        t: "dialog_spy_sabotage_wrongLevel_tt",
        p: [O.ClientConstLevelRestrictions.MIN_LEVEL_SABOTAGE, Math.min(c.PlayerConst.LEVEL_CAP, S.CastleModel.userData.userLevel + p.SpyConst.MAX_DELTA_LEVEL_SPY)]
      };
    } else if (S.CastleModel.userData.isInPeaceMode || S.CastleModel.userData.noobProtected) {
      t = "dialog_sabotage_cannot_plague_sabotage_inpeace_mode";
    } else if (S.CastleModel.spyData.getNumAllSpies(e) == 0) {
      t = {
        t: "ringmenu_toolTip_noAgents"
      };
    } else if (S.CastleModel.spyData.getNumAvailableSpies(e) == 0) {
      t = {
        t: "ringmenu_toolTip_noFreeAgents"
      };
    } else if (this.dialogProperties.worldmapObjectVO.remainingCooldownSabotageTimeInSeconds > 0) {
      t = {
        t: "dialog_spy_sabotageCooldown",
        p: [r.TimeStringHelper.getShortTimeString(this.dialogProperties.worldmapObjectVO.remainingCooldownSabotageTimeInSeconds * E.ClientConstTime.SEC_2_MILLISEC, r.TimeStringHelper.ONE_TIME_FORMAT)]
      };
    } else if (this.dialogProperties.worldmapObjectVO.areaType == d.WorldConst.AREA_TYPE_ISLE_RESOURCE || this.dialogProperties.worldmapObjectVO.areaType == d.WorldConst.AREA_TYPE_VILLAGE || this.dialogProperties.worldmapObjectVO.areaType == d.WorldConst.AREA_TYPE_KINGS_TOWER || this.dialogProperties.worldmapObjectVO.areaType == d.WorldConst.AREA_TYPE_MONUMENT || this.dialogProperties.worldmapObjectVO.areaType == d.WorldConst.AREA_TYPE_LABORATORY) {
      t = "dialog_sabotage_cannot_sabotage_this_target";
    } else if (this.dialogProperties.worldmapObjectVO.temporarySabotageProtection) {
      t = "dialog_spy_sabotage_protectionActive";
    } else if (this.dialogProperties.worldmapObjectVO.areaType == d.WorldConst.AREA_TYPE_METROPOL || this.dialogProperties.worldmapObjectVO.areaType == d.WorldConst.AREA_TYPE_CAPITAL) {
      i = true;
    } else if (this.dialogProperties.worldmapObjectVO.ownerInfo.isPeaceProtected) {
      var o = A.CastleTimeStringHelper.getCantAttackTimeString(this.dialogProperties.worldmapObjectVO.ownerInfo.remainingPeaceTime);
      t = "playerHasNoobProtectionSabotage" + P.CastleToolTipManager.ID_PARAM_SEPERATOR + o;
    } else if (this.dialogProperties.worldmapObjectVO.ownerInfo.isNoobProtected) {
      var a = A.CastleTimeStringHelper.getCantAttackTimeString(this.dialogProperties.worldmapObjectVO.ownerInfo.remainingNoobTime);
      t = "playerHasNoobProtectionSabotage" + P.CastleToolTipManager.ID_PARAM_SEPERATOR + a;
    } else if (u.CombatConst.getMaxDamagedBuildings(this.dialogProperties.worldmapObjectVO.ownerInfo.playerLevel) < 1) {
      t = "dialog_sabotage_enemyLvlToLow";
    } else if (this.dialogProperties.worldmapObjectVO.kingdomID == h.FactionConst.KINGDOM_ID) {
      t = "dialog_sabotage_cannot_sabotage_this_target";
    } else {
      i = true;
    }
    x.ButtonHelper.enableButton(this.dialogDisp.btnTabSabotage, i);
    this.dialogDisp.btnTabSabotage.toolTipText = t;
    this.dialogDisp.btnTabSabotage.visible = !T.ABGHelper.isOnABGServer;
  };
  ACastleSpyDialogState.prototype.setSpyTab = function () {
    var e = this.dialogProperties.worldmapObjectVO.ownerInfo.isLegend;
    var t = {
      t: "dialog_spy_title"
    };
    var i = false;
    if (this.dialogProperties.worldmapObjectVO.isInSpyLevelRange) {
      if (S.CastleModel.spyData.getNumAllSpies(e) == 0) {
        t = {
          t: "ringmenu_toolTip_noAgents"
        };
      } else if (S.CastleModel.spyData.getNumAvailableSpies(e) == 0) {
        t = {
          t: "ringmenu_toolTip_noFreeAgents"
        };
      } else {
        i = true;
      }
    } else {
      t = "ringmenu_toolTip_levelTooLow";
    }
    x.ButtonHelper.enableButton(this.dialogDisp.btnTabSpy, i);
    this.dialogDisp.btnTabSpy.toolTipText = t;
  };
  ACastleSpyDialogState.prototype.onClick = function (e) {
    if (x.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btnOk:
          this.spyCastle();
          break;
        case this.dialogDisp.btnTabSpy:
          this.dialog.setState(this.dialog.spyState);
          break;
        case this.dialogDisp.btnTabSabotage:
          this.dialog.setState(this.dialog.sabotageState);
          break;
        case this.dialogDisp.btnTabPlague:
          this.dialog.setState(this.dialog.plagueState);
          break;
        case this.dialogDisp.btnClose:
        case this.dialogDisp.btnCancel:
          this.dialog.hide();
      }
    }
  };
  ACastleSpyDialogState.prototype.spyCastle = function () {
    throw new y.AbstractMethodError();
  };
  ACastleSpyDialogState.prototype.onHidePostDialog = function (e = null) {
    this.dialog.hide();
  };
  ACastleSpyDialogState.prototype.setSliderToValue = function () {
    if (this.sliderValue != this.slider.getPercentValues()[0]) {
      this.slider.setSliderTo(0, this.sliderValue * 100);
    }
  };
  ACastleSpyDialogState.prototype.updateData = function () {
    this.setSliderToValue();
    this.updateSpyVO();
    this.tfDistance.textContentVO.numberValue = this.startSpyVO.distance;
    this.tfCosts.textContentVO.numberValue = this.startSpyVO.cost;
    this.tfRisk.textContentVO.textReplacements = [String(this.startSpyVO.risk)];
    if (this.startSpyVO.cost > S.CastleModel.currencyData.c1Amount) {
      this.tfCosts.color = f.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    } else {
      this.tfCosts.color = f.ClientConstColor.FONT_DEFAULT_COLOR;
    }
    this.drawRiskBars();
  };
  ACastleSpyDialogState.prototype.updateSpyVO = function () {
    throw new y.AbstractMethodError();
  };
  ACastleSpyDialogState.prototype.updateSliderForDamage = function () {
    var e = this.slider.getPercentValues();
    var t = 1 / (p.SpyConst.MAX_DAMAGE - p.SpyConst.MIN_DAMAGE);
    var i = e[0] / t + p.SpyConst.MIN_DAMAGE;
    var n = m.int(this.amountPicker.selectedValue + 1);
    var o = u.CombatConst.getMaxDamagedBuildings(this.dialogProperties.worldmapObjectVO.ownerInfo.playerLevel) * p.SpyConst.DAMAGE_PER_BUILDING;
    var a = false;
    if (p.SpyConst.MIN_DAMAGE == o) {
      i = o;
      this.slider.setSliderTo(0, 0);
      this.slider.buttons[0].disp.toolTipText = "spy_dialog_sabotageMaxDamageReached_02";
      this.slider.enableComponent = false;
      a = true;
    } else if (o <= i) {
      i = o;
      this.slider.enableComponent = true;
      this.slider.buttons[0].disp.toolTipText = "spy_dialog_sabotageMaxDamageReached_02";
      a = i < p.SpyConst.MAX_DAMAGE;
    } else {
      this.slider.enableComponent = true;
      a = false;
      this.slider.buttons[0].disp.toolTipText = "spy_dialog_sabotageDamage";
    }
    this.startSpyVO.setSabotageValues(i, n);
    this.tfDamage.textContentVO.textReplacements = [String(this.startSpyVO.damage)];
    this.tfSabotageTargets.textContentVO.numberValue = Math.ceil(this.startSpyVO.damage / p.SpyConst.DAMAGE_PER_BUILDING);
    if (a) {
      this.dialogDisp.sabotageDamage.toolTipText = "spy_dialog_sabotageMaxDamageReached_02";
      this.tfDamage.color = f.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    } else {
      this.dialogDisp.sabotageDamage.toolTipText = "spy_dialog_sabotageDamage";
      this.tfDamage.color = f.ClientConstColor.FONT_DEFAULT_COLOR;
    }
  };
  ACastleSpyDialogState.prototype.drawRiskBars = function () {
    this.dialogDisp.slider.bar0.mc_mask.scaleX = this.scaleGreen;
    this.dialogDisp.slider.bar1.mc_mask.scaleX = this.scaleYellow;
  };
  ACastleSpyDialogState.prototype.getAccuracyByRisk = function (e, t, i) {
    var n = !Y.instanceOfClass(this.dialogProperties.worldmapObjectVO, "OutpostMapobjectVO") || Y.instanceOfClass(this.dialogProperties.worldmapObjectVO, "OutpostMapobjectVO") && this.dialogProperties.worldmapObjectVO.ownerInfo.playerID > 0;
    for (var o = m.int(p.SpyConst.MIN_ACCURACY); o < p.SpyConst.MAX_ACCURACY; o++) {
      if (p.SpyConst.getSpyRisk(e, t, o, Y.instanceOfClass(this.dialogProperties.worldmapObjectVO, "DungeonMapobjectVO"), n) > i) {
        return o;
      }
    }
    return 100;
  };
  ACastleSpyDialogState.prototype.getDamageByRisk = function (e, t, i) {
    for (var n = m.int(p.SpyConst.MIN_DAMAGE); n < p.SpyConst.MAX_DAMAGE; n++) {
      if (p.SpyConst.getSabotageRisk(e, t, n) > i) {
        return n;
      }
    }
    return 100;
  };
  Object.defineProperty(ACastleSpyDialogState.prototype, "scaleGreen", {
    get: function () {
      throw new y.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleSpyDialogState.prototype, "scaleYellow", {
    get: function () {
      throw new y.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  ACastleSpyDialogState.prototype.resetState = function () {
    this.removeEventListenerOnHide();
    if (this.amountPicker) {
      this.amountPicker.dispose();
    }
    if (this.castleList) {
      this.dialogDisp.castleListCombobox.bg.scaleY = 1;
      this.dialogDisp.castleListCombobox.visible = false;
      this.castleList.clearItems();
      this.castleList.dispose();
      this.castleList = null;
    }
    if (this.slider) {
      this.slider.enableComponent = false;
      this.setSliderButtonVisibility(false);
    }
  };
  ACastleSpyDialogState.prototype.destroy = function () {
    this.resetState();
    this.slider.dispose();
  };
  Object.defineProperty(ACastleSpyDialogState.prototype, "costHolder", {
    get: function () {
      throw new y.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleSpyDialogState.prototype, "riskHolder", {
    get: function () {
      throw new y.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleSpyDialogState.prototype, "startSpyVO", {
    get: function () {
      return this.dialog.startSpyVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleSpyDialogState.prototype, "dialogDisp", {
    get: function () {
      return this.dialog.dialogDisp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleSpyDialogState.prototype, "dialogProperties", {
    get: function () {
      return this.dialog.dialogProperties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleSpyDialogState.prototype, "controller", {
    get: function () {
      return v.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleSpyDialogState.prototype, "textFieldManager", {
    get: function () {
      return s.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleSpyDialogState.prototype, "layoutManager", {
    get: function () {
      return U.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleSpyDialogState, "dialogHandler", {
    get: function () {
      return k.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return ACastleSpyDialogState;
}();
exports.ACastleSpyDialogState = F;
var N = require("./202.js");
var k = require("./9.js");
var U = require("./17.js");
var G = require("./1404.js");
var H = require("./178.js");
var j = require("./61.js");
var W = require("./70.js");
n.classImplementsInterfaces(F, "ICastleSpyDialogState");
var Y = require("./1.js");