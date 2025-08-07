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
var h = require("./6.js");
var g = require("./572.js");
var C = require("./21.js");
var _ = require("./139.js");
var m = require("./207.js");
var f = require("./15.js");
var O = require("./4.js");
var E = require("./308.js");
var y = require("./20.js");
var b = require("./76.js");
var D = require("./78.js");
var I = require("./77.js");
var T = require("./200.js");
var v = require("./8.js");
var S = require("./73.js");
var A = require("./1728.js");
var L = require("./247.js");
var P = require("./164.js");
var M = require("./1729.js");
var R = require("./813.js");
var V = createjs.Point;
var x = function (e) {
  function CastleCompactArmyDialog() {
    return e.call(this, CastleCompactArmyDialog.NAME, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("CastleMovementDetails_APR25")) || this;
  }
  n.__extends(CastleCompactArmyDialog, e);
  CastleCompactArmyDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this._movementDetails = new N.CastleMovementDetailsComponent(this.dialogDisp.mc_movementInfo);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new p.LocalizedTextVO("dialog_shortArmy_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_compact_left.mc_banner.txt_flank, new p.LocalizedTextVO("dialog_battleLogDetail_flank"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_compact_middle.mc_banner.txt_flank, new p.LocalizedTextVO("dialog_battleLogDetail_frontal"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_compact_right.mc_banner.txt_flank, new p.LocalizedTextVO("dialog_battleLogDetail_flank"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_compact_yard.mc_banner.txt_flank, new p.LocalizedTextVO("dialog_battleLogDetail_finalWave")).autoFitToBounds = true;
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    v.ButtonHelper.initBasicButton(this.dialogDisp.btn_ok);
    v.ButtonHelper.initBasicButton(this.dialogDisp.btn_close);
    v.ButtonHelper.initBasicButton(this.dialogDisp.btn_help);
    v.ButtonHelper.initBasicButton(this.dialogDisp.mc_movementInfo.btn_sendHome);
    v.ButtonHelper.initBasicButton(this.dialogDisp.mc_movementInfo.btn_retreat);
    v.ButtonHelper.initBasicButton(this.dialogDisp.mc_compact_left.btn_up);
    v.ButtonHelper.initBasicButton(this.dialogDisp.mc_compact_left.btn_down);
    v.ButtonHelper.initBasicButton(this.dialogDisp.mc_compact_middle.btn_up);
    v.ButtonHelper.initBasicButton(this.dialogDisp.mc_compact_middle.btn_down);
    v.ButtonHelper.initBasicButton(this.dialogDisp.mc_compact_right.btn_up);
    v.ButtonHelper.initBasicButton(this.dialogDisp.mc_compact_right.btn_down);
    v.ButtonHelper.initButtons([this.dialogDisp.mc_compact_yard.btn_left, this.dialogDisp.mc_compact_yard.btn_right], y.ClickFeedbackButtonHover, 1);
    this.dialogDisp.mc_compact_yard.btn_left.visible = false;
    this.dialogDisp.mc_compact_yard.btn_right.visible = false;
  };
  CastleCompactArmyDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    this.setUnitCounter();
    O.CastleModel.timerData.addEventListener(C.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onArmyDataUpdated));
    f.CastleBasicController.getInstance().addEventListener(_.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onArmyRemoved));
    this._movementDetails.hideDistance(this.isAdventureMode);
    this._movementDetails.initComponent(this.armyAttackMapmovementVO, this.bindFunction(this.hide));
    this.dialogDisp.mc_compact_middle.mc_banner.bg.gotoAndStop(2);
    this.dialogDisp.mc_lordHolder.mouseChildren = false;
    if (this.mapMovementVO.lordVO) {
      var i = this.mapMovementVO.lordVO;
      S.EquipmentIconHelper.addLordIcon(i, this.dialogDisp.mc_lordHolder, 50);
    }
    this.updateLord();
    this.updateSupportTools();
    this.updateAutoSkip();
    this.updateAdvisor();
  };
  CastleCompactArmyDialog.prototype.updateLord = function () {
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_lordHolder);
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_general);
    this.dialogDisp.mc_lordHolder.mouseChildren = false;
    if (this.mapMovementVO.lordVO) {
      var e;
      e = this.mapMovementVO.lordVO.isBaron ? k.LordEffectHelper.STRATEGY_DEFENCE_PVP : l.instanceOfClass(this.mapMovementVO, "SupportDefenceMapmovementVO") ? k.LordEffectHelper.STRATEGY_SUPPORT : k.LordEffectHelper.STRATEGY_ATTACK;
      var t = this.mapMovementVO.lordVO;
      S.EquipmentIconHelper.addLordIcon(t, this.dialogDisp.mc_lordHolder, 50);
      var i = this.mapMovementVO.isReturnHome ? this.mapMovementVO.sourceArea : this.mapMovementVO.targetArea;
      this.lordTooltipTrigger.setProperties(t, null, i, e);
    }
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_general);
    this._generalIcon = new L.GeneralSelectionItem(this.mapMovementVO.lordVO.assignedGeneralVO, this.dialogDisp.mc_general, false, true, false, true, null, true, this.dialogProperties.mapMovementVO.movementOwnerInfo.playerID == O.CastleModel.userData.playerID, true);
    this._generalIcon.onShow();
    this.dialogDisp.mc_general.visible = !!this.mapMovementVO.lordVO.assignedGeneralVO;
    this.dialogDisp.mc_general.scaleX = this.dialogDisp.mc_general.scaleY = 0.8;
    this.dialogDisp.mc_general.visible = !!this.mapMovementVO.lordVO.assignedGeneralVO;
    var n = "";
    n = this.mapMovementVO.lordVO.assignedGeneralVO && this.mapMovementVO.lordVO.assignedGeneralVO.isNPCGeneral ? this.mapMovementVO.lordVO.assignedGeneralVO.nameTextShort : d.Localize.text("dialog_battleLog_activeGeneralEffects_tooltip");
    this.dialogDisp.mc_general.toolTipText = n;
    if (this.mapMovementVO.lordVO.assignedGeneralVO) {
      this.dialogDisp.mc_general.mouseChildren = false;
      var o = "";
      if (this.mapMovementVO.lordVO.assignedGeneralVO.getPassiveEffects().length > 0 || this.mapMovementVO.lordVO.assignedGeneralVO.selectedAbilities.length > 0) {
        o += d.Localize.text("dialog_battleLog_activeGeneralEffects_tooltip");
        var a = P.GeneralsHelper.getLocalizedGeneralAbilitySummary(this.mapMovementVO.lordVO.assignedGeneralVO, true);
        if (a != "") {
          o += "\n\n" + a;
        }
        var r = this.mapMovementVO.lordVO.assignedGeneralVO ? this.mapMovementVO.lordVO.assignedGeneralVO.getPassiveEffectsText() : "";
        if (r != "") {
          o += "\n\n" + r;
        }
      } else {
        o += d.Localize.text("dialog_generals_abilityDialog_noActiveAbilities");
      }
      this.dialogDisp.mc_general.toolTipText = {
        t: o,
        width: 500
      };
    }
  };
  CastleCompactArmyDialog.prototype.onArmyRemoved = function (e) {
    if (e.mapmovementVO.objectId == this.mapMovementVO.objectId) {
      this.hide();
    }
  };
  CastleCompactArmyDialog.prototype.hideLoaded = function (t = null) {
    this._movementDetails.destroy();
    this._generalIcon.onHide();
    e.prototype.hideLoaded.call(this);
    O.CastleModel.timerData.removeEventListener(C.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onArmyDataUpdated));
    f.CastleBasicController.getInstance().removeEventListener(_.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onArmyRemoved));
  };
  CastleCompactArmyDialog.prototype.setUnitCounter = function () {
    if (this.armyAttackMapmovementVO.attackArmyVO) {
      var e = this.mapMovementVO.sourceOwnerInfo ? this.mapMovementVO.sourceOwnerInfo.crest : new E.CrestVO();
      var t = this.mapMovementVO.targetOwnerInfo ? this.mapMovementVO.targetOwnerInfo.crest : new E.CrestVO();
      this.unitListLeft = this.setCompactArmyItemModernAttack(this.unitListLeft, this.dialogDisp.mc_compact_left, this.armyAttackMapmovementVO.attackArmyVO.itemsLeft, e, t);
      this.unitListMiddle = this.setCompactArmyItemModernAttack(this.unitListMiddle, this.dialogDisp.mc_compact_middle, this.armyAttackMapmovementVO.attackArmyVO.itemsMiddle, e, t);
      this.unitListRight = this.setCompactArmyItemModernAttack(this.unitListRight, this.dialogDisp.mc_compact_right, this.armyAttackMapmovementVO.attackArmyVO.itemsRight, e, t);
      this.unitListYard = this.setCompactArmyItemClassicAttack(this.unitListYard, this.dialogDisp.mc_compact_yard, this.armyAttackMapmovementVO.attackArmyVO.yardWave, e, t);
    }
  };
  CastleCompactArmyDialog.prototype.setCompactArmyItemModernAttack = function (e, t, i, n, o) {
    U.CrestHelper.setCrestGraphics(t.mc_banner.crest1, n);
    U.CrestHelper.setCrestGraphics(t.mc_banner.crest2, o);
    var a;
    var r = new I.InfiniteScrollListOptions(H.CastleCompactArmyDialogUnitItem, "CompactArmyList_TripleItem", "CastleMovementDetails_APR25");
    r.itemPaddingY = 2;
    r.useSmoothScroll = true;
    if (e && e.scrollComponent.scrollVO) {
      e.onHide();
      e.destroy();
      s.MovieClipHelper.clearMovieClip(t.mc_content);
      e.scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    }
    (e = new D.InfiniteScrollListComponent(new b.InfiniteScrollListClips(t.mc_content).addSliderMc(t).addItemContainerMc(t.mc_content).addMaskMc(t.mc_mask), r)).setVisibility(true);
    var l = [];
    for (var c = i.getUnits(null), u = 0; u < c.length;) {
      var d = {};
      for (var p = 0; p < 3; p++) {
        var h = c.length > u + p ? c[u + p] : null;
        (a = new M.UnitScrollItemVO()).unitVO = h;
        a.crestVO = n;
        a.levelIconOffset = new V(20, 20);
        a.levelIconSize = 20;
        a.maxUnitSize = 40;
        d["data" + p] = a;
      }
      u += 3;
      l.push(d);
    }
    e.onShow();
    e.updateWithNewData(l, true);
    e.onShow();
    e.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    t.visible = true;
    return e;
  };
  CastleCompactArmyDialog.prototype.onScroll = function () {
    T.TooltipManagerFacade.hideAllTooltips();
  };
  CastleCompactArmyDialog.prototype.setCompactArmyItemClassicAttack = function (e, t, i, n, o) {
    U.CrestHelper.setCrestGraphics(t.mc_banner.crest1, n);
    U.CrestHelper.setCrestGraphics(t.mc_banner.crest2, o);
    return this.setCompactArmyItem(e, t, i, n);
  };
  CastleCompactArmyDialog.prototype.setCompactArmyItem = function (e, t, i, n) {
    s.MovieClipHelper.clearMovieClip(t.mc_items);
    var o;
    var r = i ? i.getUnits(null) : [];
    r.sort(w.ClientConstSort.sortByUnitSortOrder);
    if (e) {
      e.clear();
      e.remove();
      e = null;
    }
    (e = new a.ItemScrollList(t)).scrollItemClass = G.UnitScrollListItem;
    for (var l = 0; l < r.length; l++) {
      var c = r[l];
      (o = new M.UnitScrollItemVO()).unitVO = c;
      o.crestVO = n;
      o.levelIconOffset = new V(20, 20);
      o.levelIconSize = 20;
      o.maxUnitSize = 40;
      e.pushContent(o);
    }
    e.scrollStep = e.veList.length;
    e.initList();
    return e;
  };
  CastleCompactArmyDialog.prototype.onArmyDataUpdated = function (e) {
    if (this.mapMovementVO.getTimeUnitMovmentReachTargetInSeconds() < 2) {
      this.hide();
    } else {
      this._movementDetails.updateComponent();
    }
  };
  CastleCompactArmyDialog.prototype.onClick = function (t) {
    if (!this.isLocked && !this.isWaitingForServerMessage && v.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_ok:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          F.CastleDialogHandler.getInstance().showHelper("", d.Localize.text(this.mapMovementVO.isReturnHome ? "help_armyDialog_return_player" : "help_armyDialog_player"));
      }
      if (this.checkEventCamps(t)) {
        t.preventDefault();
        if (B.FlashBlockHelper.checkFlashBlock(t.target.mapObject.mapID)) {
          return;
        }
        O.CastleModel.smartfoxClient.sendCommandVO(new g.C2SJoinCampVO(t.target.mapObject.mapID));
      }
    }
  };
  CastleCompactArmyDialog.prototype.checkEventCamps = function (e) {
    if (e.target.hasOwnProperty("mapObject") && l.instanceOfClass(e.target.mapObject, "EventCampMapobjectVO")) {
      var t = h.int(e.target.mapObject.mapID);
      for (var i = 0, n = u.TreasureMapsConst.CRUSADE_MAP_IDS; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o == t) {
          return true;
        }
      }
    }
    return false;
  };
  CastleCompactArmyDialog.prototype.updateSupportTools = function () {
    var e = !!this.armyAttackMapmovementVO.attackArmyVO.itemsSupport && this.armyAttackMapmovementVO.attackArmyVO.itemsSupport.getToolCount() > 0;
    if (this.dialogDisp.bg_supportTools) {
      this.dialogDisp.bg_supportTools.visible = e;
    }
    if (this.dialogDisp.mc_supportTools) {
      this.dialogDisp.mc_supportTools.visible = e;
      this.dialogDisp.mc_supportTools.mouseChildren = false;
    }
    if (e) {
      var t = d.Localize.text("dialog_shortArmy_attackSupportTools_tooltip_header");
      this.dialogDisp.mc_supportTools.toolTipText = A.SupportToolTooltipHelper.getToolTipByInventory(this.armyAttackMapmovementVO.attackArmyVO.itemsSupport, t);
    }
  };
  CastleCompactArmyDialog.prototype.updateAutoSkip = function () {
    if (O.CastleModel.subscriptionData.isAutoSkipTarget(this.dialogProperties.mapMovementVO.targetArea)) {
      this.dialogDisp.mc_autoskip.icon_actived.visible = this.armyAttackMapmovementVO.autoSkipCooldownType > c.AutoSkipCooldownConst.AUTO_SKIP_TYPE_OFF;
      this.dialogDisp.mc_autoskip.icon_deactivated.visible = this.armyAttackMapmovementVO.autoSkipCooldownType == c.AutoSkipCooldownConst.AUTO_SKIP_TYPE_OFF;
      this.dialogDisp.mc_autoskip.visible = true;
      this.dialogDisp.mc_autoskip.icon_deactivated.toolTipText = "dialog_armyDialog_autoCooldownSkip_inactive";
      if (this.armyAttackMapmovementVO.autoSkipCooldownType == c.AutoSkipCooldownConst.AUTO_SKIP_TYPE_MINUTE_SKIP) {
        this.dialogDisp.mc_autoskip.icon_actived.toolTipText = "dialog_armyDialog_autoCooldownSkip_active";
      } else if (this.armyAttackMapmovementVO.autoSkipCooldownType == c.AutoSkipCooldownConst.AUTO_SKIP_TYPE_C2) {
        this.dialogDisp.mc_autoskip.icon_actived.toolTipText = "dialog_armyDialog_autoCooldownSkip_active";
      }
      var e = this.armyAttackMapmovementVO.autoSkipCooldownType == c.AutoSkipCooldownConst.AUTO_SKIP_TYPE_OFF ? "dialog_armyDialog_autoCooldownSkip_inactive" : "dialog_armyDialog_autoCooldownSkip_active";
      this.textFieldManager.registerTextField(this.dialogDisp.mc_autoskip.txt_autoskip, new p.LocalizedTextVO(e));
    } else {
      this.dialogDisp.mc_autoskip.visible = false;
    }
  };
  CastleCompactArmyDialog.prototype.updateAdvisor = function () {
    var e = m.AdvisorAttackHelper.getAdvisorTypeByAreaType(this.armyAttackMapmovementVO.targetArea.areaType);
    this.dialogDisp.mc_advisor.visible = this.armyAttackMapmovementVO.advisorType;
    this.dialogDisp.mc_advisor.toolTipText = "title_advisor_" + m.AdvisorAttackHelper.getTextIDSuffix(e);
  };
  Object.defineProperty(CastleCompactArmyDialog.prototype, "armyAttackMapmovementVO", {
    get: function () {
      return this.dialogProperties.mapMovementVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyDialog.prototype, "mapMovementVO", {
    get: function () {
      return this.dialogProperties.mapMovementVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyDialog.prototype, "isAdventureMode", {
    get: function () {
      return this.dialogProperties.isAdventureMode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleCompactArmyDialog.NAME = "CastleCompactArmyExt";
  return CastleCompactArmyDialog;
}(R.CastleArmyExternalDialog);
exports.CastleCompactArmyDialog = x;
var w = require("./75.js");
var B = require("./160.js");
var F = require("./9.js");
var N = require("./468.js");
var k = require("./133.js");
var U = require("./61.js");
var G = require("./1730.js");
var H = require("./1731.js");
r.classImplementsInterfaces(x, "ICollectableRendererList");