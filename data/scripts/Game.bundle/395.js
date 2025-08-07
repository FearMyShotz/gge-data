Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./5.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./3.js");
var C = require("./6.js");
var _ = require("./18.js");
var m = require("./51.js");
var f = require("./16.js");
var O = require("./58.js");
var E = require("./2544.js");
var y = require("./2545.js");
var b = require("./2546.js");
var D = require("./2547.js");
var I = require("./2548.js");
var T = require("./2549.js");
var v = require("./2550.js");
var S = require("./2551.js");
var A = require("./2552.js");
var L = require("./2553.js");
var P = require("./2554.js");
var M = require("./2555.js");
var R = require("./617.js");
var V = require("./2556.js");
var x = require("./2557.js");
var w = require("./139.js");
var B = require("./1403.js");
var F = require("./26.js");
var N = require("./32.js");
var k = require("./31.js");
var U = require("./19.js");
var G = require("./53.js");
var H = require("./137.js");
var j = require("./4.js");
var W = require("./35.js");
var Y = require("./222.js");
var K = require("./2558.js");
var z = require("./171.js");
var q = require("./214.js");
var X = require("./235.js");
var Q = require("./187.js");
var J = require("./8.js");
var Z = require("./107.js");
var $ = require("./185.js");
var ee = require("./11.js");
var te = require("./525.js");
var ie = createjs.Point;
var ne = function (e) {
  function CastleStartAttackDialog() {
    return e.call(this, CastleStartAttackDialog.NAME) || this;
  }
  n.__extends(CastleStartAttackDialog, e);
  CastleStartAttackDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_yes, this.dialogDisp.btn_close, this.dialogDisp.btn_no, this.dialogDisp.spy_alert.spy_button]);
  };
  CastleStartAttackDialog.prototype.showSpyAlert = function () {
    return this.dialogProperties.worldmapObjectVO.canBeSpied && j.CastleModel.userData.userLevel >= O.ClientConstLevelRestrictions.MIN_LEVEL_SPY && this.dialogProperties.worldmapObjectVO.remainingSpyInfoTime <= 0 && this.actionType != _.ClientConstCastle.ACTION_TYPE_SENDTROUPS && this.actionType != _.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE && !j.CastleModel.subscriptionData.isAutoSpyActiveForArea(this.dialogProperties.worldmapObjectVO);
  };
  CastleStartAttackDialog.prototype.initAttackInfo = function () {
    var e;
    var t;
    this.dialogDisp.mc_estimatedCapitalCoins.visible = false;
    this.dialogDisp.mc_estimatedCapitalCoins.mouseChildren = false;
    this.dialogDisp.attackInfo.mc_crest_alliance.visible = false;
    if (this.dialogProperties.worldmapObjectVO.kingdomID == c.FactionConst.KINGDOM_ID) {
      e = this.factionEventVO.ownFaction == c.FactionConst.BLUE_FACTION ? re.FactionEventVO.BLUE_CREST_VO : re.FactionEventVO.RED_CREST_VO;
      t = this.dialogProperties.worldmapObjectVO.ownerInfo.factionID == c.FactionConst.BLUE_FACTION ? re.FactionEventVO.BLUE_CREST_VO : re.FactionEventVO.RED_CREST_VO;
    } else {
      e = j.CastleModel.userData.playerCrest;
      t = this.dialogProperties.worldmapObjectVO.ownerInfo.crest;
    }
    this.fillCastleList();
    this.fillUserCastle();
    he.CrestHelper.setCrestGraphics(this.dialogDisp.attackInfo.mc_crest0, e, null, true);
    this.drawEnemyCastle();
    if (this.dialogProperties.worldmapObjectVO.ownerInfo) {
      he.CrestHelper.setCrestGraphics(this.dialogDisp.attackInfo.mc_crest1, t, null, true);
      this.dialogDisp.attackInfo.mc_crest1.visible = true;
      this.dialogDisp.attackInfo.mc_crestShadowEnemy.visible = true;
    } else {
      this.dialogDisp.attackInfo.mc_crest1.visible = false;
      this.dialogDisp.attackInfo.mc_crestShadowEnemy.visible = false;
    }
    this.itxt_distance.textContentVO.numberValue = Y.MapHelper.getDistanceByMapobjects(this._castleList.selectedData, this.dialogProperties.worldmapObjectVO, true, this.actionType);
    if (this.actionType == _.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK) {
      this.renderCollectableIDAtCollectorMc(j.CastleModel.specialEventData.getActiveEventByEventId(u.EventConst.EVENTTYPE_COLLECTOR).collectInfoVO.collectorCurrencyID);
      j.CastleModel.collectEventData.getPlayerCollectorAmount(this.dialogProperties.worldmapObjectVO.ownerInfo.playerID);
      j.CastleModel.collectEventData.addEventListener(B.CastleCollectorEventDataEvent.COLLECT_CURRENCY_INFO, this.bindFunction(this.onCollecterData));
    } else if (this.isTempServerCollectorAttack) {
      this.renderCollectableIDAtCollectorMc(H.TempServerHelper.tmpServerEvent.settingVO.currencyID);
      j.CastleModel.collectEventData.getTempserverCollectorAmount(this.dialogProperties.worldmapObjectVO.ownerInfo.playerID);
      j.CastleModel.collectEventData.addEventListener(B.CastleCollectorEventDataEvent.COLLECT_CURRENCY_INFO, this.bindFunction(this.onCollecterData));
    } else if (this.isAllianceBattleGroundPlayerPointsAttack) {
      this.renderCollectableIDAtCollectorMc(G.ABGHelper.abgEvent.settingVO.currencyID);
      j.CastleModel.collectEventData.getABGCollectorAmount(this.dialogProperties.worldmapObjectVO.ownerInfo.playerID);
      j.CastleModel.collectEventData.addEventListener(B.CastleCollectorEventDataEvent.COLLECT_CURRENCY_INFO, this.bindFunction(this.onCollecterData));
    } else if (this.isAllianceBattleGroundAlliancePointsAttack) {
      this.renderCollectableIDAtCollectorMc(G.ABGHelper.abgEvent.settingVO.currencyID);
      j.CastleModel.collectEventData.getABGAllianceCollectorAmount(this.dialogProperties.worldmapObjectVO.ownerInfo.allianceID);
      j.CastleModel.collectEventData.addEventListener(B.CastleCollectorEventDataEvent.COLLECT_CURRENCY_INFO, this.bindFunction(this.onAllianceCollecterData));
    }
  };
  CastleStartAttackDialog.prototype.renderCollectableIDAtCollectorMc = function (e) {
    this.dialogDisp.mc_estimatedCapitalCoins.visible = true;
    this.dialogDisp.mc_estimatedCapitalCoins.mc_icon.gotoAndStop(2);
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_estimatedCapitalCoins.mc_icon.mc_placeholder);
    var t = se.CollectableHelper.createVO(ae.CollectableEnum.GENERIC_CURRENCY, 0, e);
    var i = new k.CollectableRenderClips().addIconMc(this.dialogDisp.mc_estimatedCapitalCoins.mc_icon.mc_placeholder);
    var n = new U.CollectableRenderOptions(U.CollectableRenderOptions.ICON, new ie(30, 30));
    pe.CollectableRenderHelper.displaySingleItem(i, t, n);
    this.dialogDisp.mc_estimatedCapitalCoins.toolTipText = t.getTooltipTextId();
  };
  Object.defineProperty(CastleStartAttackDialog.prototype, "isAllianceBattleGroundAlliancePointsAttack", {
    get: function () {
      return G.ABGHelper.isOnABGAndCollector && _e.instanceOfClass(this.dialogProperties.worldmapObjectVO, "CapitalMapobjectVO") && this.isActionTypeAnAttack;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartAttackDialog.prototype, "isAllianceBattleGroundPlayerPointsAttack", {
    get: function () {
      return G.ABGHelper.isOnABGAndCollector && _e.instanceOfClass(this.dialogProperties.worldmapObjectVO, "CastleMapobjectVO") && this.isActionTypeAnAttack;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartAttackDialog.prototype, "isAllianceBattleGroundTowerPlayerAttack", {
    get: function () {
      return G.ABGHelper.isOnABGAndTower && _e.instanceOfClass(this.dialogProperties.worldmapObjectVO, "CastleMapobjectVO") && this.isActionTypeAnAttack;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartAttackDialog.prototype, "isTempServerCollectorAttack", {
    get: function () {
      return !!this.isActionTypeAnAttack && !!this.env.isOnTemporaryServer && !!_e.instanceOfClass(this.dialogProperties.worldmapObjectVO, "CastleMapobjectVO") && this.dialogProperties.worldmapObjectVO.kingdomID == d.WorldClassic.KINGDOM_ID && !!H.TempServerHelper.tmpServerEvent && H.TempServerHelper.tmpServerEvent.isCollectorScoring;
    },
    enumerable: true,
    configurable: true
  });
  CastleStartAttackDialog.prototype.onCollecterData = function (e) {
    if (this.dialogProperties.worldmapObjectVO.ownerInfo.playerID == e.playerID) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_estimatedCapitalCoins.txt_value, new p.LocalizedNumberVO(e.collectCurrency));
      j.CastleModel.collectEventData.removeEventListener(B.CastleCollectorEventDataEvent.COLLECT_CURRENCY_INFO, this.bindFunction(this.onCollecterData));
    }
  };
  CastleStartAttackDialog.prototype.onAllianceCollecterData = function (e) {
    if (this.dialogProperties.worldmapObjectVO.ownerInfo.allianceID == e.playerID) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_estimatedCapitalCoins.txt_value, new p.LocalizedNumberVO(e.collectCurrency));
      j.CastleModel.collectEventData.removeEventListener(B.CastleCollectorEventDataEvent.COLLECT_CURRENCY_INFO, this.bindFunction(this.onAllianceCollecterData));
    }
  };
  Object.defineProperty(CastleStartAttackDialog.prototype, "factionEventVO", {
    get: function () {
      return j.CastleModel.specialEventData.getActiveEventByEventId(u.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  CastleStartAttackDialog.prototype.initFameAndHonor = function () {
    var e = this.isPvPAttack;
    e = (e = (e = (e = (e = (e = e && !this.isTempServerCollectorAttack) && !this.isAllianceBattleGroundAlliancePointsAttack) && !this.isAllianceBattleGroundPlayerPointsAttack) && !this.isAllianceBattleGroundTowerPlayerAttack) && this.actionType != _.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK) && !_e.instanceOfClass(this.dialogProperties.worldmapObjectVO, "ABGAllianceTowerMapobjectVO");
    this.dialogDisp.mc_fameBonus.visible = this.dialogDisp.mc_estimatedHonor.visible = e;
    if (this.dialogDisp.mc_estimatedHonor.visible) {
      var t = C.int(oe.CastleFameHelper.getEstimatedHonor(this.dialogProperties.worldmapObjectVO, this.actionType));
      var i = oe.CastleFameHelper.canEarnOrLoseHonor(this.dialogProperties.worldmapObjectVO, this.actionType);
      this.setHonorBonus(t, i);
      var n = C.int(oe.CastleFameHelper.getEstimatedFameBonus(this.dialogProperties.worldmapObjectVO, this.actionType));
      var o = oe.CastleFameHelper.canEarnFame(this.dialogProperties.worldmapObjectVO, this.actionType);
      this.setFameBonus(n, o);
    }
  };
  CastleStartAttackDialog.prototype.setHonorBonus = function (e, t) {
    if (j.CastleModel.subscriptionData.isEffectTypeActive(W.EffectTypeEnum.EFFECT_TYPE_HONOR_BONUS) && t && e > 0) {
      e = C.int(e * (1 + j.CastleModel.subscriptionData.getEffectValue(W.EffectTypeEnum.EFFECT_TYPE_HONOR_BONUS) / 100));
    }
    $.SubscriptionHelper.showSubscriptionStarToTextField(this.i_honor_txt_value, t && j.CastleModel.subscriptionData.isEffectTypeActive(W.EffectTypeEnum.EFFECT_TYPE_HONOR_BONUS), 20, new ie(-10, 0));
    if (e >= 0) {
      this.i_honor_txt_value.textContentVO.textId = a.GenericTextIds.VALUE_NOMINAL_ADD;
    } else {
      this.i_honor_txt_value.textContentVO.textId = a.GenericTextIds.VALUE_NOMINAL_SUBTRACT;
      this.i_honor_txt_value.color = f.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    }
    this.i_honor_txt_value.textContentVO.textReplacements = [Math.abs(e)];
    if (t) {
      this.dialogDisp.mc_estimatedHonor.icon_honor.gotoAndStop(CastleStartAttackDialog.FRAME_ICON_HONOR);
      this.dialogDisp.mc_estimatedHonor.toolTipText = "dialog_postAttack_estimatedHonor";
    } else {
      this.dialogDisp.mc_estimatedHonor.icon_honor.gotoAndStop(CastleStartAttackDialog.FRAME_ICON_NO_HONOR);
      this.dialogDisp.mc_estimatedHonor.toolTipText = "dialog_fame_nohonor";
    }
  };
  CastleStartAttackDialog.prototype.setFameBonus = function (e, t) {
    if (j.CastleModel.subscriptionData.isEffectTypeActive(W.EffectTypeEnum.EFFECT_TYPE_FAME_OFFENSE_BONUS) && t) {
      e += C.int(j.CastleModel.subscriptionData.getEffectValue(W.EffectTypeEnum.EFFECT_TYPE_FAME_OFFENSE_BONUS));
    }
    this.i_fame_txt_value.textContentVO.textReplacements = [e];
    $.SubscriptionHelper.showSubscriptionStarToTextField(this.i_fame_txt_value, t && j.CastleModel.subscriptionData.isEffectTypeActive(W.EffectTypeEnum.EFFECT_TYPE_FAME_OFFENSE_BONUS), 20, new ie(-10, 0));
    if (t) {
      this.dialogDisp.mc_fameBonus.icon_fame.gotoAndStop(CastleStartAttackDialog.FRAME_ICON_FAME);
      this.dialogDisp.mc_fameBonus.toolTipText = {
        t: "dialog_fame_getfame",
        p: [e]
      };
    } else {
      this.dialogDisp.mc_fameBonus.icon_fame.gotoAndStop(CastleStartAttackDialog.FRAME_ICON_NO_FAME);
      this.dialogDisp.mc_fameBonus.toolTipText = "dialog_fame_nofame";
    }
  };
  CastleStartAttackDialog.prototype.fillCastleList = function () {
    var e = 0;
    this._castleList.clearItems();
    var t;
    var i = C.int(this.dialogProperties.worldmapObjectVO.kingdomID);
    if (this.actionType == _.ClientConstCastle.ACTION_TYPE_CONQUER && this.dialogProperties.worldmapObjectVO.areaType != l.WorldConst.AREA_TYPE_FACTION_CAMP || this.actionType == _.ClientConstCastle.ACTION_TYPE_CONQUERATTACK || this.actionType == _.ClientConstCastle.ACTION_TYPE_LANDMARK_ATTACK || this.actionType == _.ClientConstCastle.ACTION_TYPE_VILLAGE_ATTACK) {
      (t = new z.ComboboxItemRendererVO()).itemLabel = j.CastleModel.userData.castleList.getMainCastleByKingdomID(i).areaNameString;
      t.data = j.CastleModel.userData.castleList.getMainCastleByKingdomID(i);
      this._castleList.addItem(t);
    } else {
      var n;
      var o = 0;
      e = 0;
      if ((n = this.dialogProperties.worldmapObjectVO.kingdomID == c.FactionConst.KINGDOM_ID ? j.CastleModel.userData.castleList.listWithoutOcupiedOrDestroyedFactionCamps : j.CastleModel.userData.castleList.listWithoutOcupiedOutposts) != null) {
        for (var a = 0, s = n; a < s.length; a++) {
          var r = s[a];
          if (r !== undefined && r.objectId != this.dialogProperties.worldmapObjectVO.objectId && r.kingdomID == i) {
            (t = new z.ComboboxItemRendererVO()).itemLabel = r.areaNameString;
            t.data = r;
            this._castleList.addItem(t);
            if (r == j.CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel) {
              e = o;
            }
            ++o;
          }
        }
      }
      if (j.CastleModel.userData.villageList && (this.actionType == _.ClientConstCastle.ACTION_TYPE_SENDTROUPS || this.actionType == _.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE)) {
        for (var u = 0, d = j.CastleModel.userData.villageList.getSortedVillageListByKingdomID(i); u < d.length; u++) {
          var p = d[u];
          var h = p.villageMapObjectVO.areaType == l.WorldConst.AREA_TYPE_ISLE_RESOURCE;
          var g = p.villageMapObjectVO.objectId != this.dialogProperties.worldmapObjectVO.objectId;
          var m = p.villageMapObjectVO.kingdomID == i;
          var f = this.actionType == _.ClientConstCastle.ACTION_TYPE_SENDTROUPS;
          if ((!h || f) && g && m) {
            (t = new z.ComboboxItemRendererVO()).itemLabel = p.villageMapObjectVO.areaNameString;
            t.data = p.villageMapObjectVO;
            this._castleList.addItem(t);
          }
        }
      }
      if (this.actionType == _.ClientConstCastle.ACTION_TYPE_SENDTROUPS || this.actionType == _.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE) {
        if (j.CastleModel.userData.kingstowerList.completeList && !_e.instanceOfClass(this.dialogProperties.worldmapObjectVO, "KingstowerMapobjectVO") && !_e.instanceOfClass(this.dialogProperties.worldmapObjectVO, "UpgradableLandmarkMapobjectVO")) {
          for (var O = 0, E = j.CastleModel.userData.kingstowerList.completeList; O < E.length; O++) {
            var y = E[O];
            if (y !== undefined && y.objectId != this.dialogProperties.worldmapObjectVO.objectId && y.kingdomID == i) {
              (t = new z.ComboboxItemRendererVO()).itemLabel = y.areaNameString;
              t.data = y;
              this._castleList.addItem(t);
            }
          }
        }
        if (j.CastleModel.userData.monumentList.completeList && !_e.instanceOfClass(this.dialogProperties.worldmapObjectVO, "KingstowerMapobjectVO") && !_e.instanceOfClass(this.dialogProperties.worldmapObjectVO, "UpgradableLandmarkMapobjectVO")) {
          for (var b = 0, D = j.CastleModel.userData.monumentList.completeList; b < D.length; b++) {
            var I = D[b];
            if (I !== undefined && I.objectId != this.dialogProperties.worldmapObjectVO.objectId && I.kingdomID == i) {
              (t = new z.ComboboxItemRendererVO()).itemLabel = I.areaNameString;
              t.data = I;
              this._castleList.addItem(t);
            }
          }
        }
        if (j.CastleModel.userData.laboratoryList.completeList && !_e.instanceOfClass(this.dialogProperties.worldmapObjectVO, "KingstowerMapobjectVO") && !_e.instanceOfClass(this.dialogProperties.worldmapObjectVO, "UpgradableLandmarkMapobjectVO")) {
          for (var T = 0, v = j.CastleModel.userData.laboratoryList.completeList; T < v.length; T++) {
            var S = v[T];
            if (S !== undefined && S.objectId != this.dialogProperties.worldmapObjectVO.objectId && S.kingdomID == i) {
              (t = new z.ComboboxItemRendererVO()).itemLabel = S.areaNameString;
              t.data = S;
              this._castleList.addItem(t);
            }
          }
        }
      }
    }
    this._castleList.enabled = true;
    if (this._castleList.numItems == 0) {
      if (j.CastleModel.userData.castleList.hasCastleInKingdom(i)) {
        (t = new z.ComboboxItemRendererVO()).itemLabel = j.CastleModel.userData.castleList.getMainCastleByKingdomID(i).areaNameString;
        t.data = j.CastleModel.userData.castleList.getHomeCastle();
        this._castleList.addItem(t);
      } else {
        this.hide();
      }
    } else if (this._castleList.numItems == 1) {
      this._castleList.enabled = false;
    }
    if (this.dialogProperties.worldmapObjectVO.areaType == l.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP) {
      var A;
      for (var L = 0, P = Array.from(j.CastleModel.armyData.mapMovements.values()); L < P.length; L++) {
        var M = P[L];
        if (M !== undefined && M.isMyMovement && M.targetArea.absAreaPos.equals(this.dialogProperties.worldmapObjectVO.absAreaPos)) {
          A = M.sourceArea;
          break;
        }
      }
      if (A) {
        this._castleList.enabled = false;
        for (var R = 0; R < this._castleList.itemData.length; R++) {
          if (this._castleList.itemData[R].data.absAreaPos.equals(A.absAreaPos)) {
            this._castleList.selectItemIndex(R);
          }
        }
      } else {
        this._castleList.selectItemIndex(e);
      }
    } else {
      this._castleList.selectItemIndex(e);
    }
  };
  CastleStartAttackDialog.prototype.fillUserCastle = function (e = null) {
    var t;
    var i = j.CastleModel.userData.getOwnCastle(this._castleList.selectedData.objectId, this._castleList.selectedData.kingdomID);
    t = _e.instanceOfClass(i, "CapitalMapobjectVO") ? new ie(90, 80) : new ie(70, 60);
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.attackInfo.mc_holder0);
    this.dialogDisp.attackInfo.mc_holder0.addChild(ge.WorldmapObjectIconHelper.drawMapObjectIcon(i, t, true, false, this.isOutOfTutorial(), "panel_action_jumpTo"));
    this.itxt_distance.textContentVO.numberValue = Y.MapHelper.getDistanceByMapobjects(this._castleList.selectedData, this.dialogProperties.worldmapObjectVO, true, this.actionType);
  };
  CastleStartAttackDialog.prototype.changeCasteList = function (e = null) {
    this.fillCastleList();
  };
  CastleStartAttackDialog.prototype.drawEnemyCastle = function () {
    var e;
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.attackInfo.mc_holder1);
    e = _e.instanceOfClass(this.dialogProperties.worldmapObjectVO, "CapitalMapobjectVO") ? new ie(90, 80) : new ie(70, 60);
    this.dialogDisp.attackInfo.mc_holder1.addChild(ge.WorldmapObjectIconHelper.drawMapObjectIcon(this.dialogProperties.worldmapObjectVO, e, true, false, this.isOutOfTutorial(), "panel_action_jumpTo"));
    if (this.dialogProperties.worldmapObjectVO.areaType == l.WorldConst.AREA_TYPE_METROPOL) {
      this.dialogDisp.attackInfo.mc_holder1.getChildAt(0).x += 10;
    }
    this.i_castleName_txt.textContentVO.stringValue = this.dialogProperties.worldmapObjectVO.areaNameString;
    this.dialogDisp.attackInfo.mc_nameEnemy.mc_dove.visible = false;
    this.dialogDisp.attackInfo.mc_nameEnemy.mc_rank.visible = false;
    this.dialogDisp.attackInfo.mc_nameEnemy.mc_searchAlliance.visible = false;
  };
  CastleStartAttackDialog.prototype.showLoaded = function (t = null) {
    if (this.dialogProperties.worldmapObjectVO) {
      this._castleList ||= new de.ComboboxComponent(this.dialogDisp.attackInfo.castleListCombobox, "", de.ComboboxComponent.OPEN_DOWN, 40, 45, -1, 7, new K.ComboboxItemRendererShort(), 15, true, false, 15);
      this.textFieldManager.registerTextField(this.dialogDisp.attackInfo.txt_from, new h.LocalizedTextVO("dialog_startAttack_from"));
      this.textFieldManager.registerTextField(this.dialogDisp.attackInfo.txt_to, new h.LocalizedTextVO("dialog_startAttack_to"));
      var i = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new h.LocalizedTextVO("dialog_supportDefence_title"));
      var n = this.textFieldManager.registerTextField(this.dialogDisp.attackInfo.mc_baron.txt_value, new h.LocalizedTextVO(a.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0]));
      this.itxt_distance = this.textFieldManager.registerTextField(this.dialogDisp.attackInfo.mc_distance.txt_distance, new p.LocalizedNumberVO(0, true, 1));
      this.i_fame_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_fameBonus.txt_value, new h.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE_ADD));
      this.i_honor_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_estimatedHonor.txt_value, new h.LocalizedTextVO(a.GenericTextIds.VALUE_NOMINAL_ADD, [0]));
      this.i_castleName_txt = this.textFieldManager.registerTextField(this.dialogDisp.attackInfo.mc_nameEnemy.castleName_txt, new g.TextVO(this.dialogProperties.worldmapObjectVO.areaNameString));
      this.dialogDisp.attackInfo.mc_distance.toolTipText = "distance";
      this.dialogDisp.mc_estimatedHonor.mouseChildren = false;
      this.dialogDisp.mc_fameBonus.mouseChildren = false;
      this.dialogDisp.spy_alert.visible = false;
      this.textFieldManager.registerTextField(this.dialogDisp.spy_alert.alert_message, new h.LocalizedTextVO("spyWarning_warning"));
      this.textFieldManager.registerTextField(this.dialogDisp.spy_alert.spy_button.txt_value, new h.LocalizedTextVO("spyWarning_spyNow"));
      this.updateSpyAlert();
      Z.CharacterHelper.createCharacterBig(m.ClientConstCharacter.CHAR_ID_GENERAL, this.dialogDisp.mc_charPlaceHolder, 145, 189);
      this.dialogDisp.attackInfo.mc_baron.visible = (this.actionType == _.ClientConstCastle.ACTION_TYPE_CONQUER || this.actionType == _.ClientConstCastle.ACTION_TYPE_CONQUERATTACK) && this.dialogProperties.worldmapObjectVO.areaType != l.WorldConst.AREA_TYPE_CAPITAL && this.dialogProperties.worldmapObjectVO.areaType != l.WorldConst.AREA_TYPE_METROPOL && this.dialogProperties.worldmapObjectVO.areaType != l.WorldConst.AREA_TYPE_KINGS_TOWER && this.dialogProperties.worldmapObjectVO.areaType != l.WorldConst.AREA_TYPE_FACTION_CAMP;
      this.dialogDisp.attackInfo.mc_baron.toolTipText = "equipment_itemType_baron";
      switch (this.actionType) {
        case _.ClientConstCastle.ACTION_TYPE_SENDTROUPS:
          i.textContentVO.textId = "dialog_sendTroups_title";
          break;
        case _.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE:
          i.textContentVO.textId = "dialog_supportDefence_title";
          break;
        case _.ClientConstCastle.ACTION_TYPE_CONQUER:
        case _.ClientConstCastle.ACTION_TYPE_CONQUERATTACK:
          i.textContentVO.textId = "ringmenu_conquer";
          n.textContentVO.textId = a.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
          n.textContentVO.textReplacements = [String(j.CastleModel.lordData.numAvailableBarons), String(j.CastleModel.lordData.numAllBarons)];
          break;
        default:
          i.textContentVO.textId = "dialog_startAttack_title";
      }
      this.initFameAndHonor();
      this.initChargeAttackInfo();
      this.initAttackInfo();
      this.initABGAllianceTowerInfo();
      e.prototype.showLoaded.call(this, t);
      this._castleList.disp.addEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.fillUserCastle));
      this.controller.addEventListener(N.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.changeCasteList));
      j.CastleModel.specialEventData.addEventListener(F.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
      this.controller.addEventListener(w.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onSpiesChanged));
    } else {
      this.hide();
    }
  };
  CastleStartAttackDialog.prototype.initABGAllianceTowerInfo = function () {
    this.dialogDisp.mc_abgAllianceTower_attackPlayer.visible = false;
    this.dialogDisp.mc_abgAllianceTower_attackTower.visible = false;
    this.dialogDisp.attackInfo.mc_crest_alliance.visible = true;
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.attackInfo.mc_crest_alliance);
    if (_e.instanceOfClass(this.dialogProperties.worldmapObjectVO, "ABGAllianceTowerMapobjectVO")) {
      this.dialogDisp.attackInfo.mc_crest1.visible = false;
      this.dialogDisp.mc_abgAllianceTower_attackTower.visible = true;
      Q.CastleAllianceCrestHelper.setCrestGraphics(this.dialogDisp.attackInfo.mc_crest_alliance, this.dialogProperties.worldmapObjectVO.ownerInfo.allianceCrestVO, X.AllianceCrestSizeEnum.S, q.AllianceCrestEnum.DEFAULT_CREST_SIMPLE);
      var e = this.dialogProperties.worldmapObjectVO;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_abgAllianceTower_attackTower.mc_points.txt_value, new p.LocalizedNumberVO(e.currentTowerPoints));
      this.dialogDisp.mc_abgAllianceTower_attackTower.mc_points.toolTipText = "currency_name_Statuette";
      this.dialogDisp.mc_abgAllianceTower_attackTower.mc_points.mouseChildren = false;
      new ce.ABGTowerConnectionsComponent(this.dialogDisp.mc_abgAllianceTower_attackTower.mc_connections, ue.ABGTowerConnectionStateComponent.TYPE_DIALOG, ue.ABGTowerConnectionStateComponent.SIZE_DIALOG_BIG, ue.ABGTowerConnectionStateComponent.SPACING_DIALOG).setConnections(e.connections);
    } else if (this.isAllianceBattleGroundTowerPlayerAttack) {
      this.dialogDisp.mc_abgAllianceTower_attackPlayer.visible = true;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_abgAllianceTower_attackPlayer.txt_status, new h.LocalizedTextVO("dialog_beyondTheHorizon_AllianceTower_statusForTower_copy"));
      var t = new ue.ABGTowerConnectionStateComponent(ue.ABGTowerConnectionStateComponent.TYPE_DIALOG, ue.ABGTowerConnectionStateComponent.SIZE_DIALOG_BIG, false);
      t.setConnection(this.dialogProperties.worldmapObjectVO.customConnections[0]);
      s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_abgAllianceTower_attackPlayer.mc_connection);
      this.dialogDisp.mc_abgAllianceTower_attackPlayer.mc_connection.addChild(t.disp);
    }
  };
  CastleStartAttackDialog.prototype.initChargeAttackInfo = function () {
    this.dialogDisp.mc_chargePoints.visible = false;
    this.dialogDisp.mc_chargeAttackBoost.visible = false;
    this.dialogDisp.mc_chargeAttackBoost.mouseChildren = false;
    this.dialogDisp.mc_chargePoints.mouseChildren = false;
    this.dialogDisp.mc_chargePoints.toolTipText = "currency_name_Tonic";
  };
  CastleStartAttackDialog.prototype.hideLoaded = function (t = null) {
    this.controller.removeEventListener(w.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onSpiesChanged));
    j.CastleModel.specialEventData.removeEventListener(F.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    e.prototype.hideLoaded.call(this, t);
    if (this._castleList) {
      this._castleList.disp.removeEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.fillUserCastle));
    }
    this.controller.removeEventListener(N.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.changeCasteList));
  };
  CastleStartAttackDialog.prototype.onSpiesChanged = function (e) {
    this.updateSpyAlert();
  };
  CastleStartAttackDialog.prototype.updateSpyAlert = function () {
    this.dialogDisp.spy_alert.visible = this.showSpyAlert();
    if (this.dialogDisp.spy_alert.visible) {
      var e = true;
      var t = "";
      if (j.CastleModel.spyData.getNumAvailableSpies(true) <= 0) {
        e = false;
        t = "spyWarning_noSpies";
      } else if (!this.dialogProperties.worldmapObjectVO.isInSpyLevelRange) {
        e = false;
        t = "ringmenu_toolTip_levelTooLow";
      }
      J.ButtonHelper.enableButton(this.dialogDisp.spy_alert.spy_button, e);
      this.dialogDisp.spy_alert.spy_button.toolTipText = t;
    }
  };
  CastleStartAttackDialog.prototype.onRemoveSpecialEvent = function (e) {
    if (e.specialEventVO.isOwnWmoVO(this.dialogProperties.worldmapObjectVO)) {
      this.hide();
    }
  };
  CastleStartAttackDialog.prototype.onClick = function (t) {
    if (J.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_yes:
          this.hide();
          this.onClickYes();
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_no:
          this.hide();
          break;
        case this.dialogDisp.spy_alert.spy_button:
          le.CastleDialogHandler.getInstance().registerDefaultDialogs(Ce.CastleSpyDialog, new te.CastleSpyDialogProperties(this.dialogProperties.worldmapObjectVO, Ce.CastleSpyDialog.TAB_SPY));
          j.CastleModel.smartfoxClient.sendCommandVO(new R.C2SGetSpyInfo(this.dialogProperties.worldmapObjectVO.absAreaPosX, this.dialogProperties.worldmapObjectVO.absAreaPosY, this.dialogProperties.worldmapObjectVO.kingdomID));
          this.hide();
      }
    }
  };
  CastleStartAttackDialog.prototype.onClickYes = function () {
    switch (this.actionType) {
      case _.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE:
        this.supportDefence();
        break;
      case _.ClientConstCastle.ACTION_TYPE_SENDTROUPS:
        this.onSendTroups();
        break;
      case _.ClientConstCastle.ACTION_TYPE_ATTACK:
      case _.ClientConstCastle.ACTION_TYPE_OUTPOSTATTACK:
        this.attackCastle();
        break;
      case _.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK:
        this.attackDungeon();
        break;
      case _.ClientConstCastle.ACTION_TYPE_ATTACK_ABG_TOWERS:
        this.attackABGTower();
        break;
      case _.ClientConstCastle.ACTION_TYPE_CONQUER:
      case _.ClientConstCastle.ACTION_TYPE_CONQUERATTACK:
        if (_e.instanceOfClass(this.dialogProperties.worldmapObjectVO, "CapitalMapobjectVO")) {
          this.conquerCapital();
        } else if (_e.instanceOfClass(this.dialogProperties.worldmapObjectVO, "FactionCampMapobjectVO")) {
          this.conquerFactionCamp();
        } else if (_e.instanceOfClass(this.dialogProperties.worldmapObjectVO, "MetropolMapobjectVO")) {
          this.conquerMetropol();
        } else {
          this.conquerOutpost();
        }
        break;
      case _.ClientConstCastle.ACTION_TYPE_BOSSDUNGEONATTACK:
        this.attackBossDungeon();
        break;
      case _.ClientConstCastle.ACTION_TYPE_ISLAND_ATTACK:
        this.attackIsland();
        break;
      case _.ClientConstCastle.ACTION_TYPE_VILLAGE_ATTACK:
        this.attackVillage();
        break;
      case _.ClientConstCastle.ACTION_TYPE_LANDMARK_ATTACK:
        this.attackLandmark();
        break;
      case _.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK:
        this.attackCollector();
    }
  };
  CastleStartAttackDialog.prototype.attackCastle = function () {
    var e = this._castleList.selectedData.absAreaPos;
    j.CastleModel.smartfoxClient.sendCommandVO(new T.C2SGetAttackCastleInfosVO(this.dialogProperties.worldmapObjectVO.absAreaPos, e, this.dialogProperties.worldmapObjectVO.kingdomID));
  };
  CastleStartAttackDialog.prototype.attackABGTower = function () {
    var e = this._castleList.selectedData.absAreaPos;
    j.CastleModel.smartfoxClient.sendCommandVO(new I.C2SGetAttackABGTowerInfosVO(this.dialogProperties.worldmapObjectVO.absAreaPos, e, this.dialogProperties.worldmapObjectVO.kingdomID));
  };
  CastleStartAttackDialog.prototype.attackCollector = function () {
    var e = this._castleList.selectedData.absAreaPos;
    j.CastleModel.smartfoxClient.sendCommandVO(new S.C2SGetCollectorAttackInfoVO(this.dialogProperties.worldmapObjectVO.absAreaPos, e, this.dialogProperties.worldmapObjectVO.kingdomID));
  };
  CastleStartAttackDialog.prototype.onSendTroups = function () {
    var e = this._castleList.selectedData.absAreaPos;
    var t = this.dialogProperties.worldmapObjectVO.absAreaPos;
    j.CastleModel.smartfoxClient.sendCommandVO(new x.C2STroopSupportInfoVO(t, e, this.dialogProperties.worldmapObjectVO.kingdomID));
  };
  CastleStartAttackDialog.prototype.supportDefence = function () {
    var e = this._castleList.selectedData.absAreaPos;
    j.CastleModel.smartfoxClient.sendCommandVO(new V.C2SSupportDefenceInfoVO(this.dialogProperties.worldmapObjectVO.absAreaPos, e));
  };
  CastleStartAttackDialog.prototype.attackDungeon = function () {
    if (this.dialogProperties.worldmapObjectVO.areaType != l.WorldConst.AREA_TYPE_EVENT_DUNGEON || j.CastleModel.specialEventData.getActiveEventByEventId(u.EventConst.EVENTTYPE_DUNGEON)) {
      var e = this._castleList.selectedData.absAreaPos;
      j.CastleModel.smartfoxClient.sendCommandVO(new v.C2SGetAttackDungeonInfosVO(e, this.dialogProperties.worldmapObjectVO.absAreaPos, this.dialogProperties.worldmapObjectVO.kingdomID));
    } else {
      this.hide();
    }
  };
  CastleStartAttackDialog.prototype.attackBossDungeon = function () {
    var e = this._castleList.selectedData.absAreaPos;
    j.CastleModel.smartfoxClient.sendCommandVO(new E.C2SAttackInfoBossDungeonVO(e, this.dialogProperties.worldmapObjectVO.absAreaPos, this.dialogProperties.worldmapObjectVO.kingdomID));
  };
  CastleStartAttackDialog.prototype.conquerOutpost = function () {
    j.CastleModel.smartfoxClient.sendCommandVO(new P.C2SGetConquerOutpostInfosVO(this.dialogProperties.worldmapObjectVO.absAreaPos, this.dialogProperties.worldmapObjectVO.kingdomID));
  };
  CastleStartAttackDialog.prototype.conquerFactionCamp = function () {
    var e = this._castleList.selectedData.absAreaPos;
    j.CastleModel.smartfoxClient.sendCommandVO(new M.C2SConquerInfoFactioncampVO(this.dialogProperties.worldmapObjectVO.absAreaPos, e, this.dialogProperties.worldmapObjectVO.kingdomID));
  };
  CastleStartAttackDialog.prototype.conquerCapital = function () {
    j.CastleModel.smartfoxClient.sendCommandVO(new A.C2SGetConquerCapitalInfosVO(this.dialogProperties.worldmapObjectVO.absAreaPos, this.dialogProperties.worldmapObjectVO.kingdomID));
  };
  CastleStartAttackDialog.prototype.conquerMetropol = function () {
    j.CastleModel.smartfoxClient.sendCommandVO(new L.C2SGetConquerMetropolInfosVO(this.dialogProperties.worldmapObjectVO.absAreaPos, this.dialogProperties.worldmapObjectVO.kingdomID));
  };
  CastleStartAttackDialog.prototype.attackVillage = function () {
    j.CastleModel.smartfoxClient.sendCommandVO(new D.C2SAttackInfoVillageVO(this.dialogProperties.worldmapObjectVO.absAreaPos, this.dialogProperties.worldmapObjectVO.kingdomID));
  };
  CastleStartAttackDialog.prototype.attackIsland = function () {
    j.CastleModel.smartfoxClient.sendCommandVO(new y.C2SAttackInfoIslandVO(this.dialogProperties.worldmapObjectVO.absAreaPos, this.dialogProperties.worldmapObjectVO.kingdomID));
  };
  CastleStartAttackDialog.prototype.attackLandmark = function () {
    var e = this._castleList.selectedData.absAreaPos;
    j.CastleModel.smartfoxClient.sendCommandVO(new b.C2SAttackInfoLandmarkVO(this.dialogProperties.worldmapObjectVO.absAreaPos, e, this.dialogProperties.worldmapObjectVO.kingdomID));
  };
  Object.defineProperty(CastleStartAttackDialog.prototype, "isActionTypeAnAttack", {
    get: function () {
      switch (this.actionType) {
        case _.ClientConstCastle.ACTION_TYPE_ATTACK:
        case _.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK:
        case _.ClientConstCastle.ACTION_TYPE_BOSSDUNGEONATTACK:
        case _.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK:
        case _.ClientConstCastle.ACTION_TYPE_VILLAGE_ATTACK:
        case _.ClientConstCastle.ACTION_TYPE_ISLAND_ATTACK:
        case _.ClientConstCastle.ACTION_TYPE_OUTPOSTATTACK:
        case _.ClientConstCastle.ACTION_TYPE_ATTACK_ABG_TOWERS:
          return true;
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartAttackDialog.prototype, "isPvPAttack", {
    get: function () {
      var e = this.dialogProperties.worldmapObjectVO.ownerInfo ? this.dialogProperties.worldmapObjectVO.ownerInfo.playerID : -1;
      return this.isActionTypeAnAttack && (!me.PlayerHelper.isNPCPlayer(e) || me.PlayerHelper.isNpcPvpPlayer(e));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartAttackDialog.prototype, "actionType", {
    get: function () {
      return this.dialogProperties.selectedActionType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartAttackDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleStartAttackDialog.NAME = "CastleStartAttackEx_ABGTower";
  CastleStartAttackDialog.FRAME_ICON_HONOR = 1;
  CastleStartAttackDialog.FRAME_ICON_NO_HONOR = 2;
  CastleStartAttackDialog.FRAME_ICON_FAME = 1;
  CastleStartAttackDialog.FRAME_ICON_NO_FAME = 2;
  return CastleStartAttackDialog;
}(ee.CastleExternalDialog);
exports.CastleStartAttackDialog = ne;
var oe = require("./753.js");
var ae = require("./12.js");
var se = require("./45.js");
var re = require("./202.js");
var le = require("./9.js");
var ce = require("./704.js");
var ue = require("./424.js");
var de = require("./178.js");
var pe = require("./25.js");
var he = require("./61.js");
var ge = require("./70.js");
var Ce = require("./443.js");
r.classImplementsInterfaces(ne, "ICollectableRendererList");
var _e = require("./1.js");
var me = require("./112.js");