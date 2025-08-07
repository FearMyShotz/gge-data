Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./51.js");
var C = require("./26.js");
var _ = require("./4.js");
var m = require("./27.js");
var f = require("./586.js");
var O = require("./197.js");
var E = require("./76.js");
var y = require("./78.js");
var b = require("./77.js");
var D = require("./133.js");
var I = require("./200.js");
var T = require("./8.js");
var v = require("./107.js");
var S = require("./73.js");
var A = require("./247.js");
var L = require("./164.js");
var P = require("./813.js");
var M = require("./1731.js");
var R = require("./1943.js");
var V = require("./1729.js");
var x = createjs.Point;
var w = function (e) {
  function CastleSpyinfoDetailsDialog() {
    return e.call(this, CastleSpyinfoDetailsDialog.NAME) || this;
  }
  n.__extends(CastleSpyinfoDetailsDialog, e);
  CastleSpyinfoDetailsDialog.prototype.initLoaded = function (t = null) {
    this.itxt_title ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new p.LocalizedTextVO("dialog_spy_military"));
    this.itxt_title.verticalAlign = o.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_compact_left.mc_banner.txt_flank, new p.LocalizedTextVO("dialog_battleLogDetail_flank"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_compact_middle.mc_banner.txt_flank, new p.LocalizedTextVO("dialog_battleLogDetail_frontal"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_compact_right.mc_banner.txt_flank, new p.LocalizedTextVO("dialog_battleLogDetail_flank"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_compact_yard.mc_banner.txt_flank, new p.LocalizedTextVO("dialog_battleLogDetail_courtyard"));
    this.dialogDisp.mc_compact_left.mc_banner.bg.gotoAndStop(1);
    this.dialogDisp.mc_compact_middle.mc_banner.bg.gotoAndStop(2);
    this.dialogDisp.mc_compact_right.mc_banner.bg.gotoAndStop(1);
    this.dialogDisp.mc_compact_yard.mc_banner.bg.gotoAndStop(3);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    var i = new Array();
    if (this.dialogDisp.btn_close) {
      i.push(this.dialogDisp.btn_close);
    }
    if (this.dialogDisp.btn_cancel) {
      i.push(this.dialogDisp.btn_cancel);
    }
    if (this.dialogDisp.btn_forwarding) {
      i.push(this.dialogDisp.btn_forwarding);
    }
    if (this.dialogDisp.btn_help) {
      i.push(this.dialogDisp.btn_help);
    }
    if (this.dialogDisp.btn_ok) {
      i.push(this.dialogDisp.btn_ok);
    }
    if (this.dialogDisp.btn_attack) {
      i.push(this.dialogDisp.btn_attack);
    }
    if (this.dialogDisp.mc_compact_yard.btn_up) {
      i.push(this.dialogDisp.mc_compact_yard.btn_up);
    }
    if (this.dialogDisp.mc_compact_yard.btn_down) {
      i.push(this.dialogDisp.mc_compact_yard.btn_down);
    }
    this.initBasicButtons(i);
    e.prototype.initLoaded.call(this, t);
  };
  CastleSpyinfoDetailsDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    v.CharacterHelper.createCharacterBig(g.ClientConstCharacter.CHAR_ID_SPY, this.dialogDisp.mc_char, 189, 164);
    this.dialogDisp.btn_forwarding.visible = !this.dialogProperties.forwarded && (!this.dialogProperties.spyInfoVO.enemyOwnerInfo.isDungeonOwner || this.dialogProperties.spyInfoVO.enemyOwnerInfo.isDungeonOwner && this.dialogProperties.spyInfoVO.enemyOwnerInfo.isShareableDungeon) && !this.dialogProperties.spyInfoVO.isFactionSpyLog && _.CastleModel.userData.isInAlliance && this.dialogProperties.messageId != -1;
    T.ButtonHelper.enableButton(this.dialogDisp.btn_forwarding, this.dialogDisp.btn_forwarding.visible && _.CastleModel.allianceData.myAllianceVO && _.CastleModel.allianceData.myAllianceVO.memberAmount > 1);
    this.dialogDisp.btn_forwarding.toolTipText = this.dialogDisp.btn_forwarding.enabled ? "dialog_forwardlog_tootlipp" : "dialog_forwardLog_noMember_tooltip";
    this.dialogDisp.icon_forward.toolTipText = "dialog_forwardlog_owner" + O.CastleToolTipManager.ID_PARAM_SEPERATOR + this.dialogProperties.forwardSender;
    this.dialogDisp.icon_forward.visible = this.dialogProperties.forwarded;
    this.dialogDisp.mc_compact_yard.btn_left.visible = false;
    this.dialogDisp.mc_compact_yard.btn_right.visible = false;
    if (this.dialogProperties.spyInfoVO.isFactionSpyLog) {
      k.CrestHelper.getPlayerOrFactionCrest(this.dialogProperties.spyInfoVO.enemyOwnerInfo);
    } else {
      this.dialogProperties.spyInfoVO.enemyOwnerInfo.crest;
    }
    this.updateLord();
    var i;
    var n = this.dialogProperties.spyInfoVO.enemyOwnerInfo.crest;
    var o = n;
    if (this.dialogProperties.spyInfoVO.armyInfoVO) {
      this.unitListLeft = this.setCompactArmyItemModernAttack(this.unitListLeft, this.dialogDisp.mc_compact_left, this.dialogProperties.spyInfoVO.armyInfoVO.itemsLeft, n, o);
      this.unitListMiddle = this.setCompactArmyItemModernAttack(this.unitListMiddle, this.dialogDisp.mc_compact_middle, this.dialogProperties.spyInfoVO.armyInfoVO.itemsMiddle, n, o);
      this.unitListRight = this.setCompactArmyItemModernAttack(this.unitListRight, this.dialogDisp.mc_compact_right, this.dialogProperties.spyInfoVO.armyInfoVO.itemsRight, n, o);
      var a = new f.UnitInventoryList();
      a.addAll(this.dialogProperties.spyInfoVO.armyInfoVO.itemsKeep.getUnits(null));
      a.addAll(this.dialogProperties.spyInfoVO.armyInfoVO.itemsSupport.getUnits(null));
      this.unitListYard = this.setCompactArmyItemClassicAttack(this.unitListYard, this.dialogDisp.mc_compact_yard, a, n, o);
    }
    this.dialogDisp.btn_attack.visible = this.dialogProperties.spyInfoVO != null && this.dialogProperties.spyInfoVO.mapobjectVO.canBeAttacked() && !this.dialogProperties.messageVO.forwarded && !l.instanceOfClass(this.dialogProperties.spyInfoVO.mapobjectVO, "WolfkingCastleMapObjectVO");
    if (this.dialogProperties.spyInfoVO.mapobjectVO.kingdomID == c.FactionConst.KINGDOM_ID && this.dialogProperties.spyInfoVO.enemyOwnerInfo.isFactionProtected) {
      i = m.CastleTimeStringHelper.getCantAttackTimeString(this.dialogProperties.spyInfoVO.mapobjectVO.ownerInfo.remainingFactionProtectionTimeInSeconds);
      this.dialogDisp.btn_attack.toolTipText = {
        t: "playerHasNoobProtection",
        p: [i]
      };
      T.ButtonHelper.enableButton(this.dialogDisp.btn_attack, false);
    } else if (this.dialogProperties.spyInfoVO.mapobjectVO.kingdomID != c.FactionConst.KINGDOM_ID && this.dialogProperties.spyInfoVO.enemyOwnerInfo.isPeaceProtected && !this.dialogProperties.spyInfoVO.mapobjectVO.ignoresPeaceMode) {
      i = m.CastleTimeStringHelper.getCantAttackTimeString(this.dialogProperties.spyInfoVO.mapobjectVO.ownerInfo.remainingPeaceTime);
      this.dialogDisp.btn_attack.toolTipText = {
        t: "playerHasNoobProtection",
        p: [i]
      };
      T.ButtonHelper.enableButton(this.dialogDisp.btn_attack, false);
    } else if (this.dialogProperties.spyInfoVO.enemyOwnerInfo.isNoobProtected && !this.dialogProperties.spyInfoVO.mapobjectVO.ignoresPeaceMode) {
      i = m.CastleTimeStringHelper.getCantAttackTimeString(this.dialogProperties.spyInfoVO.mapobjectVO.ownerInfo.remainingNoobTime);
      this.dialogDisp.btn_attack.toolTipText = {
        t: "playerHasNoobProtection",
        p: [i]
      };
      T.ButtonHelper.enableButton(this.dialogDisp.btn_attack, false);
    } else if (this.dialogProperties.spyInfoVO.isFactionSpyLog && (l.instanceOfClass(this.dialogProperties.spyInfoVO.mapobjectVO, "FactionTowerMapobjectVO") || l.instanceOfClass(this.dialogProperties.spyInfoVO.mapobjectVO, "FactionCapitalMapobjectVO"))) {
      this.dialogDisp.btn_attack.toolTipText = "ringmenu_military_menu_attack";
    } else {
      if (l.instanceOfClass(this.dialogProperties.spyInfoVO.mapobjectVO, "VillageMapobjectVO") || this.dialogProperties.spyInfoVO.mapobjectVO.isNpcCapital || this.dialogProperties.spyInfoVO.isFactionSpyLog) {
        this.dialogDisp.btn_attack.toolTipText = "ringmenu_military_menu_village";
      } else {
        this.dialogDisp.btn_attack.toolTipText = "ringmenu_military_menu_attack";
      }
      T.ButtonHelper.enableButton(this.dialogDisp.btn_attack, true);
    }
    this.drawCastle();
    this.setLegendIcon();
    this.dialogDisp.mc_autoSpyIcon.visible = this.isAutoSpyLog();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new p.LocalizedTextVO(this.isAutoSpyLog() ? "dialog_spyLog_detailDescription_autoSpy_copy" : "dialog_spyLog_detailDescription"));
  };
  CastleSpyinfoDetailsDialog.prototype.addEventListenerOnShow = function () {
    _.CastleModel.specialEventData.addEventListener(C.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
  };
  CastleSpyinfoDetailsDialog.prototype.removeEventListenerOnHide = function () {
    _.CastleModel.specialEventData.removeEventListener(C.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    if (this._generalIcon) {
      this._generalIcon.onHide();
    }
  };
  CastleSpyinfoDetailsDialog.prototype.onSpecialEventRemoved = function (e) {
    var t = this.dialogProperties.spyInfoVO.mapobjectVO;
    if (l.instanceOfClass(t, "AInvasionEventMapObjectVO") && e.specialEventVO.eventId == t.eventType) {
      this.hide();
    }
  };
  CastleSpyinfoDetailsDialog.prototype.updateLord = function () {
    this.dialogDisp.mc_lordHolder.mouseChildren = false;
    var e = this.dialogProperties.spyInfoVO.lordVO;
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_lordHolder);
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_general);
    this.dialogDisp.mc_lordHolder.mouseChildren = false;
    if (e) {
      var t;
      if (e.isBaron) {
        t = D.LordEffectHelper.STRATEGY_DEFENCE_PVP;
      }
      var i = e;
      S.EquipmentIconHelper.addLordIcon(i, this.dialogDisp.mc_lordHolder, 50);
      this.lordTooltipTrigger.setProperties(i, null, this.dialogProperties.spyInfoVO.mapobjectVO, t, false);
      this._generalIcon = new A.GeneralSelectionItem(i.assignedGeneralVO, this.dialogDisp.mc_general, false, true, false, false, null, false, this.dialogProperties.spyInfoVO.enemyOwnerInfo.playerID == _.CastleModel.userData.playerID);
      this._generalIcon.onShow();
      this.dialogDisp.mc_general.scaleX = this.dialogDisp.mc_general.scaleY = 0.8;
      this.dialogDisp.mc_general.mouseChildren = false;
      this.dialogDisp.mc_general.visible = !!i.assignedGeneralVO;
      var n = "";
      if (i.assignedGeneralVO) {
        if (i.assignedGeneralVO.isNPCGeneral) {
          n = i.assignedGeneralVO.nameTextShort;
        } else {
          n = d.Localize.text("dialog_battleLog_activeGeneralEffects_tooltip");
          var o = L.GeneralsHelper.getLocalizedGeneralAbilitySummary(i.assignedGeneralVO, false);
          if (o != "") {
            n += "\n\n" + o;
          }
          var a = i.assignedGeneralVO ? i.assignedGeneralVO.getPassiveEffectsText() : "";
          if (a != "") {
            n += "\n\n" + a;
          }
        }
      }
      this.dialogDisp.mc_general.toolTipText = {
        t: n,
        width: 500
      };
    }
  };
  CastleSpyinfoDetailsDialog.prototype.setCompactArmyItemModernAttack = function (e, t, i, n, o) {
    k.CrestHelper.setCrestGraphics(t.mc_banner.crest1, n);
    k.CrestHelper.setCrestGraphics(t.mc_banner.crest2, o);
    var a;
    var r = new b.InfiniteScrollListOptions(M.CastleCompactArmyDialogUnitItem, "CompactArmyList_TripleItem", "CastleMovementDetails_APR25");
    r.itemPaddingY = 2;
    r.useSmoothScroll = true;
    if (e && e.scrollComponent.scrollVO) {
      e.onHide();
      e.destroy();
      s.MovieClipHelper.clearMovieClip(t.mc_content);
      e.scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    }
    (e = new y.InfiniteScrollListComponent(new E.InfiniteScrollListClips(t.mc_content).addSliderMc(t.mc_slider).addItemContainerMc(t.mc_content).addMaskMc(t.mc_mask), r)).setVisibility(true);
    var l = [];
    for (var c = i.getUnits(null), u = 0; u < c.length;) {
      var d = {};
      for (var p = 0; p < 3; p++) {
        var h = c.length > u + p ? c[u + p] : null;
        (a = new V.UnitScrollItemVO()).unitVO = h;
        a.crestVO = n;
        a.levelIconOffset = new x(20, 20);
        a.levelIconSize = 20;
        a.maxUnitSize = 40;
        d["data" + p] = a;
      }
      u += 3;
      l.push(d);
    }
    e.onShow();
    e.updateWithNewData(l, true);
    e.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    t.visible = true;
    return e;
  };
  CastleSpyinfoDetailsDialog.prototype.onScroll = function () {
    I.TooltipManagerFacade.hideAllTooltips();
  };
  CastleSpyinfoDetailsDialog.prototype.setLegendIcon = function () {
    if (this.dialogProperties.spyInfoVO.enemyOwnerInfo.isLegend) {
      if (this.dialogProperties.spyInfoVO.spyOwnerInfo.isLegend) {
        this.dialogDisp.mc_legendIcon.gotoAndStop(1);
        this.dialogDisp.mc_legendIcon.toolTipText = "legendTemple_espionage_true";
      } else {
        this.dialogDisp.mc_legendIcon.gotoAndStop(2);
        this.dialogDisp.mc_legendIcon.toolTipText = "legendTemple_espionage_false";
      }
      this.dialogDisp.mc_legendIcon.visible = true;
      this.dialogDisp.mc_legendIcon_gold.visible = true;
      this.dialogDisp.mc_legendIcon.mouseChildren = false;
    } else {
      this.dialogDisp.mc_legendIcon.visible = false;
      this.dialogDisp.mc_legendIcon_gold.visible = false;
    }
  };
  CastleSpyinfoDetailsDialog.prototype.drawCastle = function () {
    var e = this.dialogProperties.spyInfoVO.mapobjectVO;
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_castleIcon.mc_holder);
    var t = U.WorldmapObjectIconHelper.drawMapObjectIcon(e, new x(1000, 70));
    this.dialogDisp.mc_castleIcon.visible = true;
    this.dialogDisp.mc_castleIcon.mc_holder.addChild(t);
    var i = e.absAreaPosX + " : " + e.absAreaPosY;
    if (e.absAreaPosX < 0 || e.absAreaPosY < 0) {
      i = "-";
    }
    this.textFieldManager.registerTextField(this.dialogDisp.mc_castleIcon.mc_name.txt_name, new h.TextVO(i));
    if (_.CastleModel.kingdomData.isKingdomUnlocked(e.kingdomID)) {
      t.toolTipText = l.instanceOfClass(e, "CastleMapobjectVO") ? "dialog_jumpto_castleSelected" : "dialog_jumpto_targetSelected";
      this.dialogDisp.mc_castleIcon.actLikeButton = true;
    } else {
      t.toolTipText = "not_unlocked";
      this.dialogDisp.mc_castleIcon.actLikeButton = false;
    }
    if (this.dialogProperties.spyInfoVO.isFactionSpyLog) {
      this.dialogDisp.mc_kingdomIndicator.gotoAndStop(5);
    } else if (this.dialogProperties.spyInfoVO.isIslandSpyLog) {
      this.dialogDisp.mc_kingdomIndicator.gotoAndStop(8);
    } else {
      this.dialogDisp.mc_kingdomIndicator.gotoAndStop(e.kingdomID + 1);
    }
  };
  CastleSpyinfoDetailsDialog.prototype.setCompactArmyItemClassicAttack = function (e, t, i, n, o) {
    k.CrestHelper.setCrestGraphics(t.mc_banner.crest1, n);
    k.CrestHelper.setCrestGraphics(t.mc_banner.crest2, o);
    return this.setCompactArmyItem(e, t, i, n);
  };
  CastleSpyinfoDetailsDialog.prototype.setCompactArmyItem = function (e, t, i, n) {
    s.MovieClipHelper.clearMovieClip(t.mc_items);
    var o;
    var r = i ? i.getUnits(null) : [];
    r.sort(B.ClientConstSort.sortByUnitSortOrder);
    if (e) {
      e.clear();
      e.remove();
      e = null;
    }
    (e = new a.ItemScrollList(t)).scrollItemClass = H.UnitScrollListItem;
    for (var l = 0; l < r.length; l++) {
      var c = r[l];
      (o = new V.UnitScrollItemVO()).unitVO = c;
      o.crestVO = n;
      o.levelIconOffset = new x(20, 20);
      o.levelIconSize = 20;
      o.maxUnitSize = 40;
      e.pushContent(o);
    }
    e.scrollStep = e.veList.length;
    e.initList();
    return e;
  };
  CastleSpyinfoDetailsDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (T.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_help:
          F.CastleDialogHandler.getInstance().showHelper("", d.Localize.text(this.isAutoSpyLog() ? "help_autoSpyDialog" : "help_spyLogDetail"));
          break;
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_attack:
          N.AttackHelper.executeAttackCommand(this.dialogProperties.spyInfoVO.mapobjectVO, this.dialogProperties.spyInfoVO.mapobjectVO.attackType, this.bindFunction(this.hideBoth));
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_forwarding:
          F.CastleDialogHandler.getInstance().registerDefaultDialogs(G.CastleForwardMessageDialog, new R.CastleForwardMessageDialogProperties(this.dialogProperties.messageId, u.MessageConst.MESSAGE_TYPE_SPY_PLAYER));
      }
    }
  };
  CastleSpyinfoDetailsDialog.prototype.hideBoth = function () {
    if (this.dialogProperties.hideParentDialog) {
      this.dialogProperties.hideParentDialog();
    }
    this.hide();
  };
  CastleSpyinfoDetailsDialog.prototype.isAutoSpyLog = function () {
    return _.CastleModel.subscriptionData.isAutoSpyActiveForArea(this.dialogProperties.spyInfoVO.mapobjectVO);
  };
  Object.defineProperty(CastleSpyinfoDetailsDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpyinfoDetailsDialog.NAME = "CastleSpyinfoDetails_Generals";
  return CastleSpyinfoDetailsDialog;
}(P.CastleArmyExternalDialog);
exports.CastleSpyinfoDetailsDialog = w;
var B = require("./75.js");
var F = require("./9.js");
var N = require("./250.js");
var k = require("./61.js");
var U = require("./70.js");
var G = require("./1944.js");
var H = require("./1730.js");
r.classImplementsInterfaces(w, "ICollectableRendererList");