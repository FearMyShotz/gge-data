Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./58.js");
var l = require("./199.js");
var c = require("./118.js");
var u = require("./179.js");
var d = require("./15.js");
var p = require("./85.js");
var h = require("./4.js");
var g = require("./1107.js");
var C = require("./9.js");
var _ = require("./24.js");
var m = require("./20.js");
var f = require("./76.js");
var O = require("./78.js");
var E = require("./77.js");
var y = require("./133.js");
var b = require("./298.js");
var D = require("./215.js");
var I = require("./235.js");
var T = require("./187.js");
var v = require("./8.js");
var S = require("./61.js");
var A = require("./73.js");
var L = require("./246.js");
var P = require("./350.js");
var M = require("./721.js");
var R = require("./722.js");
var V = require("./164.js");
var x = require("./340.js");
var w = require("./211.js");
var B = require("./115.js");
var F = require("./3858.js");
var N = createjs.MouseEvent;
var k = function () {
  function AttackDialogPlayerInfo() {
    this._lordSelectionItems = [];
    this._mouseOnFoldOutBtn = false;
    this._generalSelectionOpen = false;
    this._generalNeedsUpdate = true;
  }
  AttackDialogPlayerInfo.prototype.init = function (e, t, i = null) {
    this._panelDisp = e;
    this._type = t;
    this._generalNeedsUpdate = true;
    this._generalToolTipMC = i;
    this.addEventListeners();
    this.initPlayerInfo();
    this.initCrest();
    this.initGeneral();
    this.initLord();
  };
  AttackDialogPlayerInfo.prototype.addEventListeners = function () {
    this._panelDisp.addEventListener(N.CLICK, this.bindFunction(this.onClick));
    this._panelDisp.addEventListener(N.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._panelDisp.addEventListener(N.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    B.AttackDialogController.getInstance().showPlayerInfos.add(this.bindFunction(this.show));
    B.AttackDialogController.getInstance().hidePlayerInfos.add(this.bindFunction(this.hide));
    B.AttackDialogController.getInstance().showTargetInfos.add(this.bindFunction(this.showTarget));
    B.AttackDialogController.getInstance().hideTargetInfos.add(this.bindFunction(this.hideTarget));
    if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
      B.AttackDialogController.getInstance().onLordChanged.add(this.bindFunction(this.onLordChange));
      B.AttackDialogController.getInstance().openGeneralSelection.add(this.bindFunction(this.onOpenGeneralSelection));
      B.AttackDialogController.getInstance().closeGeneralSelection.add(this.bindFunction(this.onCloseGeneralSelection));
      d.CastleBasicController.getInstance().addEventListener(c.CastleEquipmentEvent.EQUIP_SUCCESSFUL, this.bindFunction(this.onEquipOrRename));
      d.CastleBasicController.getInstance().addEventListener(c.CastleEquipmentEvent.GENERAL_ASSIGNED, this.bindFunction(this.onGeneralAssigned));
      h.CastleModel.generalsData.addEventListener(u.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
      h.CastleModel.lordData.addEventListener(c.CastleEquipmentEvent.LORDS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
    }
  };
  AttackDialogPlayerInfo.prototype.destroy = function () {
    var e = this;
    if (this._panelDisp) {
      this._panelDisp.removeEventListener(N.CLICK, this.bindFunction(this.onClick));
      this._panelDisp.removeEventListener(N.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this._panelDisp.removeEventListener(N.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    }
    B.AttackDialogController.getInstance().showPlayerInfos.remove(this.bindFunction(this.show));
    B.AttackDialogController.getInstance().hidePlayerInfos.remove(this.bindFunction(this.hide));
    B.AttackDialogController.getInstance().onLordChanged.remove(this.bindFunction(this.onLordChange));
    B.AttackDialogController.getInstance().openGeneralSelection.remove(this.bindFunction(this.onOpenGeneralSelection));
    B.AttackDialogController.getInstance().closeGeneralSelection.remove(this.bindFunction(this.onCloseGeneralSelection));
    d.CastleBasicController.getInstance().removeEventListener(c.CastleEquipmentEvent.EQUIP_SUCCESSFUL, this.bindFunction(this.onEquipOrRename));
    d.CastleBasicController.getInstance().removeEventListener(c.CastleEquipmentEvent.GENERAL_ASSIGNED, this.bindFunction(this.onGeneralAssigned));
    h.CastleModel.generalsData.removeEventListener(u.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
    h.CastleModel.lordData.removeEventListener(c.CastleEquipmentEvent.LORDS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
    if (this._scrollComponent) {
      this._scrollComponent.items.forEach(function (t) {
        return t.onClickSignal.remove(e.bindFunction(e.onCLickLord));
      });
      this._scrollComponent.onHide();
    }
    if (this._lordTooltipTrigger) {
      this._lordTooltipTrigger.hide();
    }
    this._lordSelectionItems = [];
  };
  AttackDialogPlayerInfo.prototype.show = function () {
    if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
      this._panelDisp.visible = true;
      d.CastleBasicController.getInstance().dispatchEvent(new l.CastleDialogEvent(l.CastleDialogEvent.ATTACK_SCREEN_OPEN_PLAYER_INFO));
    }
  };
  AttackDialogPlayerInfo.prototype.showTarget = function () {
    if (this._type == AttackDialogPlayerInfo.TYPE_TARGET) {
      this._panelDisp.visible = true;
      d.CastleBasicController.getInstance().dispatchEvent(new l.CastleDialogEvent(l.CastleDialogEvent.ATTACK_SCREEN_OPEN_PLAYER_INFO));
    }
  };
  AttackDialogPlayerInfo.prototype.hide = function () {
    if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
      this._panelDisp.visible = false;
      d.CastleBasicController.getInstance().dispatchEvent(new l.CastleDialogEvent(l.CastleDialogEvent.ATTACK_SCREEN_CLOSE_PLAYER_INFO));
    }
  };
  AttackDialogPlayerInfo.prototype.hideTarget = function () {
    if (this._type == AttackDialogPlayerInfo.TYPE_TARGET) {
      this._panelDisp.visible = false;
      d.CastleBasicController.getInstance().dispatchEvent(new l.CastleDialogEvent(l.CastleDialogEvent.ATTACK_SCREEN_CLOSE_PLAYER_INFO));
    }
  };
  AttackDialogPlayerInfo.prototype.initPlayerInfo = function () {
    v.ButtonHelper.initButtons([this._panelDisp.mc_player.btn_details, this._panelDisp.btn_mini], m.ClickFeedbackButtonHover, 1);
    if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
      v.ButtonHelper.initButtons([this._panelDisp.mc_lord.mc_lordContainer], m.ClickFeedbackButtonHover, 1);
    }
    if (this._panelDisp.btn_switch) {
      this._panelDisp.btn_switch.mc_open.visible = false;
    }
    n.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.mc_playerTooltip.txt_title, new s.LocalizedTextVO(this._type == AttackDialogPlayerInfo.TYPE_SOURCE ? "dialog_attack_rework2022_participantsInfo_playerInfo_header" : "dialog_attack_rework2022_participantsInfo_opponentInfo_header"));
    n.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.mc_playerTooltip.txt_labelLevel, new s.LocalizedTextVO("levelcount"));
    n.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.mc_playerTooltip.txt_labelAlliance, new s.LocalizedTextVO("alliance_colon"));
    n.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.mc_playerTooltip.txt_labelCoordinates, new s.LocalizedTextVO("coordinates_colon"));
    n.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.mc_playerTooltip.txt_level, this.getPlayerLevelTextVO());
    n.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.mc_playerTooltip.txt_alliance, new s.TextVO(this.ownerInfo.allianceName || "-")).autoFitToBounds = true;
    n.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.mc_playerTooltip.txt_coordinates, new s.LocalizedTextVO(n.GenericTextIds.VALUE_COORDS, [this.ownerArea.absAreaPosX, this.ownerArea.absAreaPosY], true));
    n.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.mc_player.txt_playerName, new s.TextVO(this.ownerInfo.playerName)).autoFitToBounds = true;
    n.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.mc_player.txt_generalName, new s.TextVO(this.ownerArea.areaNameString));
    this._panelDisp.mc_playerTooltip.doCache();
    this._panelDisp.mc_playerTooltip.visible = false;
  };
  AttackDialogPlayerInfo.prototype.initCrest = function () {
    if (o.instanceOfClass(this.ownerArea, "ABGAllianceTowerMapobjectVO")) {
      this._panelDisp.mc_player.mc_allianceCrest.visible = true;
      this._panelDisp.mc_player.mc_crest.visible = false;
      n.MovieClipHelper.clearMovieClip(this._panelDisp.mc_player.mc_allianceCrest);
      T.CastleAllianceCrestHelper.setCrestGraphics(this._panelDisp.mc_player.mc_allianceCrest, this.ownerInfo.allianceCrestVO, I.AllianceCrestSizeEnum.SIZE_FIGHTSCREEN_2, D.AllianceCrestEnum.DEFAULT_CREST);
      this._panelDisp.mc_player.mc_allianceCrest.doCache();
    } else {
      this._panelDisp.mc_player.mc_allianceCrest.visible = false;
      this._panelDisp.mc_player.mc_crest.visible = true;
      S.CrestHelper.replaceIntoPlaceHolder(this._panelDisp.mc_player.mc_crest, this.ownerCrest);
      this._panelDisp.mc_player.mc_crest.toolTipText = this.ownerCrest.tooltipText;
      this._panelDisp.mc_player.mc_crest.mouseChildren = false;
      this._panelDisp.mc_player.mc_crest.doCache();
    }
  };
  AttackDialogPlayerInfo.prototype.getPlayerLevelTextVO = function () {
    var e = 0;
    var t = 0;
    if (o.instanceOfClass(this.ownerArea, "ABGAllianceTowerMapobjectVO")) {
      return new s.TextVO("-");
    } else {
      e = this._type == AttackDialogPlayerInfo.TYPE_SOURCE ? this.ownerInfo.playerLevel : this.attackInfoVO.targetOwnerLevel;
      t = this.ownerInfo.playerLegendLevel;
      if (e >= a.PlayerConst.LEVEL_CAP && t > 0) {
        return new s.LocalizedTextVO(n.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [e, t]);
      } else {
        return new s.NumberVO(e);
      }
    }
  };
  AttackDialogPlayerInfo.prototype.initLord = function () {
    var e = this;
    this._lordTooltipTrigger = new b.LordEffectTooltipTrigger(this._panelDisp.mc_lord.mc_lordContainer);
    this._lordTooltipTrigger.show();
    if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
      v.ButtonHelper.initButtons([this._panelDisp.mc_lord.mc_switchLord.btn_closed, this._panelDisp.mc_lord.mc_switchLord.btn_foldout], m.ClickFeedbackButtonHover, 1);
      v.ButtonHelper.initButtons([this._panelDisp.mc_lord.mc_lordSelection.mc_scroll.btn_slider], x.ClickFeedBackHoverSliderButton, 1);
      this._itxt_lordName = n.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.mc_lord.mc_switchLord.btn_foldout.txt_label, new s.TextVO(""));
      this._itxt_lordName.autoFitToBounds = true;
      if (this._scrollComponent) {
        this._scrollComponent.items.forEach(function (t) {
          return t.onClickSignal.remove(e.bindFunction(e.onCLickLord));
        });
        this._scrollComponent.onHide();
      } else {
        var t = new f.InfiniteScrollListClips(this._panelDisp.mc_lord.mc_lordSelection).addMaskMc(this._panelDisp.mc_lord.mc_lordSelection.mc_items.mask);
        var i = new E.InfiniteScrollListOptions(F.AttackDialogLordSelectionItem, "AttackDialogLordSelectionItemContainer", w.AttackDialog.NAME);
        this._scrollComponent = new O.InfiniteScrollListComponent(t, i);
      }
      this._lordSelectionItems = this.createLordSelectionItems();
      var o = 0;
      for (var a = 0; a < this._lordSelectionItems.length; a++) {
        if (this._lordSelectionItems[a].id == (B.AttackDialogController.getInstance().selectedLord ? B.AttackDialogController.getInstance().selectedLord.id : -1)) {
          o = a;
        }
      }
      v.ButtonHelper.enableButton(this._panelDisp.mc_lord.mc_switchLord.btn_foldout, true);
      this._scrollComponent.updateWithNewData(this._lordSelectionItems, true);
      this._scrollComponent.onShow();
      this._scrollComponent.items.forEach(function (t) {
        return t.onClickSignal.add(e.bindFunction(e.onCLickLord));
      });
      this.onCLickLord(this._lordSelectionItems[o]);
      var r = this._lordSelectionItems.length > 1;
      this._panelDisp.mc_lord.mc_switchLord.btn_foldout.mouseEnabled = r;
      this._panelDisp.mc_lord.mc_switchLord.btn_foldout.arrow.visible = r;
      v.ButtonHelper.enableButton(this._panelDisp.mc_lord.mc_switchLord.btn_foldout, r);
    } else {
      this.onLordChange();
    }
  };
  AttackDialogPlayerInfo.prototype.createLordSelectionItems = function () {
    var e;
    var t = [a.WorldConst.AREA_TYPE_VILLAGE, a.WorldConst.AREA_TYPE_ISLE_RESOURCE, a.WorldConst.AREA_TYPE_KINGS_TOWER, a.WorldConst.AREA_TYPE_FACTION_CAMP, a.WorldConst.AREA_TYPE_MONUMENT, a.WorldConst.AREA_TYPE_LABORATORY];
    var i = this.attackInfoVO.isConquerAttack && t.indexOf(this.attackInfoVO.targetArea.areaType) < 0;
    var n = this.attackInfoVO.targetArea.areaType == a.WorldConst.AREA_TYPE_CAPITAL && this.attackInfoVO.isConquerAttack;
    var s = this.attackInfoVO.targetArea.areaType == a.WorldConst.AREA_TYPE_METROPOL && this.attackInfoVO.isConquerAttack;
    var l = this.attackInfoVO.targetArea.areaType == a.WorldConst.AREA_TYPE_FACTION_CAMP && this.attackInfoVO.isConquerAttack;
    if (o.instanceOfClass(this.attackInfoVO, "CastleTreasureHuntFightscreenVO")) {
      e = h.CastleModel.lordData.getDefaultLordsByType(g.CastleLordData.DEFAULT_LORD_TYPE_TREASUREMAP);
    } else if (l) {
      e = h.CastleModel.lordData.factionBarons;
    } else if (s) {
      e = h.CastleModel.lordData.dummyMetropolBarons;
    } else if (n) {
      e = h.CastleModel.lordData.dummyCapitalBarons(this.attackInfoVO.targetArea.kingdomID);
    } else if (i) {
      e = h.CastleModel.lordData.barons;
    } else {
      var c = h.CastleModel.lordData.getDefaultLordByID(a.TravelConst.COMMANDER_PREMIUM);
      e = h.CastleModel.userData.level >= r.ClientConstLevelRestrictions.MIN_LEVEL_SELECT_PREMIUM_COMMANDER ? h.CastleModel.lordData.commanders.concat([c]) : h.CastleModel.lordData.commanders;
    }
    return e.filter(function (e) {
      return e.isAvailableForMovement;
    });
  };
  AttackDialogPlayerInfo.prototype.initGeneral = function () {
    v.ButtonHelper.initButtons([this._panelDisp.btn_switch], m.ClickFeedbackButtonHover);
    this._panelDisp.mc_info.visible = false;
    this._panelDisp.mc_info.mouseChildren = false;
    this.generalToolTipMC.visible = false;
    if (this._panelDisp.btn_switch) {
      this._panelDisp.btn_switch.visible = h.CastleModel.generalsIntroductionData.canAccessGenerals();
    }
    n.GoodgameTextFieldManager.getInstance().registerTextField(this.generalToolTipMC.txt_header, new s.LocalizedTextVO("dialog_attack_rework2022_generals_passiveEffectsList_header"));
    if (this._panelDisp.btn_change) {
      v.ButtonHelper.initButtons([this._panelDisp.btn_change], m.ClickFeedbackButtonHover);
      this._panelDisp.btn_change.toolTipText = "dialog_attack_rework2022_generals_specialAbilities_change_button";
    }
  };
  AttackDialogPlayerInfo.prototype.setLordSelectionVisibility = function (e) {
    if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
      this._panelDisp.mc_lord.mc_lordSelection.visible = e;
      this._panelDisp.mc_lord.mc_switchLord.btn_foldout.mc_open.visible = e;
    }
  };
  AttackDialogPlayerInfo.prototype.updateMainLordEffects = function () {};
  AttackDialogPlayerInfo.prototype.updateLordIcon = function () {
    n.MovieClipHelper.clearMovieClip(this._panelDisp.mc_lord.mc_lordContainer.mc_lordHolder);
    this._panelDisp.mc_lord.mc_lordContainer.visible = !!this.currentLord;
    if (this.currentLord) {
      A.EquipmentIconHelper.addLordIcon(this.currentLord, this._panelDisp.mc_lord.mc_lordContainer.mc_lordHolder, 58, -1, null, false);
      if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
        this._lordTooltipTrigger.setProperties(this.currentLord, this.attackInfoVO.sourceArea, this.attackInfoVO.targetArea, this.currentLord.isBaron ? y.LordEffectHelper.STRATEGY_DEFENCE_PVP : y.LordEffectHelper.getFilterStrategyAttackOrDefence(this.attackInfoVO.targetArea.ownerInfo.playerID, true));
      } else {
        this._lordTooltipTrigger.setProperties(this.currentLord, this.attackInfoVO.targetArea, this.attackInfoVO.sourceArea, y.LordEffectHelper.STRATEGY_DEFENCE_PVP);
      }
    }
  };
  AttackDialogPlayerInfo.prototype.updateGeneral = function () {
    var e = this;
    var t = this.currentLord ? this.currentLord.assignedGeneralVO : null;
    var i = t ? t.generalID : -1;
    var o = this._type == AttackDialogPlayerInfo.TYPE_SOURCE;
    t = o ? t || null : this.attackInfoVO.spyInfo.remainingSpyInfoTime <= 0 ? undefined : t || null;
    if (this._panelDisp.btn_change) {
      this._panelDisp.btn_change.visible = !!t;
    }
    if (this._currentGeneralID != i || this._generalNeedsUpdate) {
      this._currentGeneralID = i;
      this._generalNeedsUpdate = false;
      n.MovieClipHelper.clearMovieClip(this._panelDisp.mc_general_bg);
      n.MovieClipHelper.clearMovieClip(this._panelDisp.mc_general.mc_icon);
      this._panelDisp.mc_general.mc_level.visible = !!t && !t.isNPCGeneral;
      this._panelDisp.mc_general.mc_stars.visible = !!t && !t.isNPCGeneral;
      this._panelDisp.mc_general.icon_commander.visible = !!t && this._type == AttackDialogPlayerInfo.TYPE_SOURCE;
      this._panelDisp.mc_general.icon_baron.visible = !!t && this._type == AttackDialogPlayerInfo.TYPE_TARGET;
      var a = "GeneralPortrait_";
      if (t) {
        a += i;
        V.GeneralsHelper.updateStarLevel(this._panelDisp.mc_general.mc_stars, t);
        var r = t.currentLevel >= t.maxLevel;
        n.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.mc_general.mc_level.txt_value, new p.CastleLocalizedNumberVO(t.currentLevel)).visible = !r;
        this._panelDisp.mc_general.mc_level.mc_maxLevel.visible = r;
      } else {
        a += t === null ? "Generic" : "Unknown";
      }
      var l = new _.CastleGoodgameExternalClip(a, n.BasicModel.basicLoaderData.getVersionedItemAssetUrl(a), null, 0, false);
      this._panelDisp.mc_general.mc_icon.addChild(l);
      n.MovieClipHelper.clearMovieClip(this._panelDisp.mc_general.mc_lvl100_front);
      n.MovieClipHelper.clearMovieClip(this._panelDisp.mc_general.mc_lvl100_back);
      if (t && t.currentStarLevel >= t.maxStarLevel) {
        var c = "GeneralPortrait100_front_" + t.generalXmlVO.rarityString;
        var u = "GeneralPortrait100_back_" + t.generalXmlVO.rarityString;
        var d = new _.CastleGoodgameExternalClip(c, n.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Generals100_PortraisIcons"), null, 24, true);
        var g = new _.CastleGoodgameExternalClip(u, n.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Generals100_PortraisIcons"), null, 24, true);
        d.doWhenLoaded(function (t) {
          e._panelDisp.mc_general.mc_lvl100_front.addChild(d);
          e._panelDisp.mc_general.mc_lvl100_front.scaleX = e._panelDisp.mc_general.mc_lvl100_front.scaleY = 0.5;
        });
        g.doWhenLoaded(function (t) {
          e._panelDisp.mc_general.mc_lvl100_back.addChild(g);
          e._panelDisp.mc_general.mc_lvl100_back.scaleX = e._panelDisp.mc_general.mc_lvl100_back.scaleY = 0.5;
        });
      }
      if (o) {
        this._panelDisp.mc_general.mc_icon.toolTipText = t ? {
          t: "dialog_attack_rework2022_generals_foldInGeneralsInterface_attacker_assigned_simple_tooltip",
          p: [t.nameText]
        } : "dialog_attack_rework2022_generals_foldInGeneralsInterface_attacker_unassigned_simple_tooltip";
      } else {
        t = this.attackInfoVO.spyInfo.remainingSpyInfoTime > 0 ? t : undefined;
        this._panelDisp.mc_general.mc_icon.toolTipText = t ? {
          t: "dialog_attack_rework2022_generals_foldInGeneralsInterface_defender_assigned_simple_tooltip",
          p: [t.nameText]
        } : t === null ? "dialog_attack_rework2022_generals_foldInGeneralsInterface_defender_unassigned_simple_tooltip" : "dialog_attack_rework2022_generals_foldInGeneralsInterface_defender_unknown_simple_tooltip";
      }
      if (this.currentLord && !this.currentLord.isBaron) {
        n.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.txt_generalInfo, new s.LocalizedTextVO("dialog_generals_noGeneralAssigned_desc")).autoFitToBounds = true;
      } else if (this._type == AttackDialogPlayerInfo.TYPE_TARGET && this.attackInfoVO.spyInfo.remainingSpyInfoTime <= 0) {
        n.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.txt_generalInfo, new s.LocalizedTextVO("dialog_attack_noSpyinfos_short")).autoFitToBounds = true;
      } else {
        n.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.txt_generalInfo, new s.LocalizedTextVO("dialog_generals_noGeneralAssigned_desc")).autoFitToBounds = true;
      }
      this._panelDisp.txt_generalInfo.visible = !t;
      this._panelDisp.txt_generalInfo_bg.visible = !t;
      this._panelDisp.mc_abilites.visible = false;
      for (var C = 0; C < AttackDialogPlayerInfo.ABILITY_ROWS; C++) {
        var m = this._panelDisp.mc_abilites["mc_ability" + C];
        n.MovieClipHelper.clearMovieClip(m);
        m.visible = false;
        if (t) {
          var f = t.getSelectedAbilities(o).length > C ? t.getSelectedAbilities(o)[C].abilityID : -1;
          if (!o && t.defenseSlots.length <= C) {
            continue;
          }
          if (o && t.attackSlots.length <= C) {
            continue;
          }
          m.visible = true;
          this._panelDisp.mc_abilites.visible = true;
          var O = h.CastleModel.generalsData.getAbilityByID(f);
          m.addChild(V.GeneralsHelper.getGeneralAbilityClip(O ? O.abilityGroupID : -1, 46, -1, this._type == AttackDialogPlayerInfo.TYPE_SOURCE));
          m.mouseChildren = false;
          m.toolTipText = V.GeneralsHelper.getLocalizedTitleForAbility(O ? O.abilityGroupID : -1);
          if (f > 0) {
            m.toolTipText += "\n" + V.GeneralsHelper.getLocalizedCopyForAbility(f, this._type == AttackDialogPlayerInfo.TYPE_SOURCE);
          }
        }
      }
      if (t) {
        n.GoodgameTextFieldManager.getInstance().registerTextField(this.generalToolTipMC.txt_effects, new s.TextVO(t.getPassiveEffectsText())).autoFitToBounds = true;
      } else {
        n.GoodgameTextFieldManager.getInstance().registerTextField(this.generalToolTipMC.txt_effects, new s.TextVO(" "));
      }
    }
    this._panelDisp.mc_info.visible = !!t && !t.isNPCGeneral;
  };
  AttackDialogPlayerInfo.prototype.onClick = function (e) {
    if (v.ButtonHelper.isButtonEnabled(e.target)) {
      if (!n.MovieClipHelper.isChildrenOf(e.target, this._panelDisp.mc_lord)) {
        this.setLordSelectionVisibility(false);
      }
      switch (e.target) {
        case this._panelDisp.mc_player.btn_details:
          this._panelDisp.mc_playerTooltip.visible = !this._panelDisp.mc_playerTooltip.visible;
          break;
        case this._panelDisp.btn_mini:
          if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
            B.AttackDialogController.getInstance().hidePlayerInfos.dispatch();
          } else {
            B.AttackDialogController.getInstance().hideTargetInfos.dispatch();
          }
          break;
        case this._panelDisp.btn_change:
          C.CastleDialogHandler.getInstance().registerDefaultDialogs(M.GeneralsAbilityDialog, new R.GeneralsAbilityDialogProperties(this.currentLord ? this.currentLord.assignedGeneralVO : null, this._type == AttackDialogPlayerInfo.TYPE_SOURCE));
      }
      if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
        var t = false;
        if (this._generalSelectionOpen) {
          B.AttackDialogController.getInstance().closeGeneralSelection.dispatch();
          t = true;
        }
        switch (e.target) {
          case this._panelDisp.btn_switch:
            if (!this._generalSelectionOpen && !t) {
              B.AttackDialogController.getInstance().openGeneralSelection.dispatch();
            }
            break;
          case this._panelDisp.mc_lord.mc_switchLord.btn_foldout:
            if (this._lordSelectionItems.length > 1 || this.currentLord && this.currentLord.id > -1) {
              this.setLordSelectionVisibility(!this._panelDisp.mc_lord.mc_lordSelection.visible);
            }
            break;
          case this._panelDisp.mc_lord.mc_lordContainer:
            if (!h.CastleModel.tutorialData.isTutorialActive && this.selectedLord && this.currentLord.id > -1) {
              C.CastleDialogHandler.getInstance().registerDefaultDialogs(L.CastleEquipmentDialog, new P.CastleEquipmentDialogProperties(this.bindFunction(this.initLord), this.selectedLord ? this.selectedLord.id : -1, this.selectedLord.isBaron));
            }
        }
      }
    }
  };
  AttackDialogPlayerInfo.prototype.onMouseOver = function (e) {
    if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
      switch (e.target) {
        case this._panelDisp.mc_lord.mc_switchLord.btn_closed:
        case this._panelDisp.mc_lord.mc_switchLord.btn_foldout:
          this._panelDisp.mc_lord.mc_switchLord.btn_foldout.visible = true;
          this._panelDisp.mc_lord.mc_switchLord.btn_foldout.gotoAndStop(2);
          this._mouseOnFoldOutBtn = true;
      }
    }
    switch (e.target) {
      case this._panelDisp.mc_info:
        this.generalToolTipMC.visible = true;
    }
  };
  AttackDialogPlayerInfo.prototype.onMouseOut = function (e) {
    if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
      switch (e.target) {
        case this._panelDisp.mc_lord.mc_switchLord.btn_foldout:
          this._panelDisp.mc_lord.mc_switchLord.btn_foldout.visible = true;
          this._mouseOnFoldOutBtn = false;
      }
    }
    switch (e.target) {
      case this._panelDisp.mc_info:
        this.generalToolTipMC.visible = false;
    }
  };
  AttackDialogPlayerInfo.prototype.onLordChange = function () {
    this.updateMainLordEffects();
    this.updateLordIcon();
    this.updateGeneral();
    if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
      this._itxt_lordName.textContentVO.stringValue = this.currentLord ? this.currentLord.name.compose() : "";
      var e = this.currentLord && this.currentLord.id >= 0;
      this._panelDisp.btn_switch.toolTipText = e ? "dialog_attack_rework2022_generals_assignGeneral_tooltip" : "dialog_attack_rework2022_generals_assignGeneral_blocked_tooltip";
      v.ButtonHelper.enableButton(this._panelDisp.btn_switch, e);
      this._scrollComponent.updateWithNewData(this._lordSelectionItems, false);
    }
  };
  AttackDialogPlayerInfo.prototype.onCLickLord = function (e) {
    this.setLordSelectionVisibility(false);
    B.AttackDialogController.getInstance().selectedLord = e;
    for (var t = 0; t < this._lordSelectionItems.length; t++) {
      if (this._lordSelectionItems[t].id == (B.AttackDialogController.getInstance().selectedLord ? B.AttackDialogController.getInstance().selectedLord.id : -1)) {
        t;
      }
    }
  };
  AttackDialogPlayerInfo.prototype.onEquipOrRename = function (e) {
    this.onLordChange();
  };
  AttackDialogPlayerInfo.prototype.onGeneralAssigned = function (e) {
    this.onLordChange();
  };
  AttackDialogPlayerInfo.prototype.onGeneralsUpdated = function (e) {
    this._generalNeedsUpdate = true;
    this.updateGeneral();
  };
  AttackDialogPlayerInfo.prototype.onOpenGeneralSelection = function () {
    this._generalSelectionOpen = true;
    this._panelDisp.btn_switch.mc_open.visible = true;
    var e = this.currentLord.id >= 0;
    this._panelDisp.btn_switch.toolTipText = e ? "dialog_equipment_generals_closeGeneralQuickSelection_tooltip" : "dialog_attack_rework2022_generals_assignGeneral_blocked_tooltip";
    this._prevMiniVisibility = this._panelDisp.btn_mini.visible;
    this._panelDisp.btn_mini.visible = false;
  };
  AttackDialogPlayerInfo.prototype.onCloseGeneralSelection = function () {
    this._generalSelectionOpen = false;
    this._panelDisp.btn_switch.mc_open.visible = false;
    var e = this.currentLord.id >= 0;
    this._panelDisp.btn_switch.toolTipText = e ? "dialog_attack_rework2022_generals_assignGeneral_tooltip" : "dialog_attack_rework2022_generals_assignGeneral_blocked_tooltip";
    this._panelDisp.btn_mini.visible = this._prevMiniVisibility;
  };
  Object.defineProperty(AttackDialogPlayerInfo.prototype, "currentLord", {
    get: function () {
      if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
        return this.selectedLord;
      } else {
        return this.attackInfoVO.spyInfo.defendingLord;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogPlayerInfo.prototype, "selectedLord", {
    get: function () {
      return B.AttackDialogController.getInstance().selectedLord;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogPlayerInfo.prototype, "ownerArea", {
    get: function () {
      if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
        return this.attackInfoVO.sourceArea;
      } else {
        return this.attackInfoVO.targetArea;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogPlayerInfo.prototype, "ownerCrest", {
    get: function () {
      if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
        return this.attackInfoVO.sourceOwnerCrestVO;
      } else {
        return this.attackInfoVO.targetOwnerCrestVO;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogPlayerInfo.prototype, "ownerInfo", {
    get: function () {
      if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
        return this.attackInfoVO.sourceOwner;
      } else {
        return this.attackInfoVO.targetOwner;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogPlayerInfo.prototype, "attackInfoVO", {
    get: function () {
      return B.AttackDialogController.getInstance().attackVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogPlayerInfo.prototype, "generalToolTipMC", {
    get: function () {
      return this._generalToolTipMC || this._panelDisp.mc_generalInfoTooltip;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogPlayerInfo.__initialize_static_members = function () {};
  AttackDialogPlayerInfo.TYPE_SOURCE = 0;
  AttackDialogPlayerInfo.TYPE_TARGET = 1;
  AttackDialogPlayerInfo.LORD_SELECTION_ITEMS_PER_ROW = 4;
  AttackDialogPlayerInfo.LORD_SELECTION_ITEM_OFFSET = 74;
  AttackDialogPlayerInfo.ABILITY_ROWS = 5;
  return AttackDialogPlayerInfo;
}();
exports.AttackDialogPlayerInfo = k;
o.classImplementsInterfaces(k, "ICollectableRendererList");
k.__initialize_static_members();