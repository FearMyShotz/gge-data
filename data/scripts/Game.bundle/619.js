Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./6.js");
var u = require("./28.js");
var d = require("./21.js");
var p = require("./44.js");
var h = require("./4.js");
var g = require("./27.js");
var C = function (e) {
  function ButtonAttackComponent(t) {
    var i = this;
    i._isListeningToTimer = false;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(ButtonAttackComponent, e);
  Object.defineProperty(ButtonAttackComponent.prototype, "targetWMO", {
    set: function (e) {
      this._worldMapObjectVO = e;
    },
    enumerable: true,
    configurable: true
  });
  ButtonAttackComponent.prototype.initAsRingmenuButton = function () {
    this.initAttackButton(false);
  };
  Object.defineProperty(ButtonAttackComponent.prototype, "isBasicallyVisible", {
    get: function () {
      var e = this._worldMapObjectVO.canBeConquered();
      var t = this._worldMapObjectVO.isOwnMapobject;
      var i = h.CastleModel.userData.isUserInMyAlliance(this._worldMapObjectVO.ownerInfo);
      var n = !t && !i && h.CastleModel.allianceData.getStatusByAlliance(this._worldMapObjectVO.ownerInfo.allianceID) == l.AllianceConst.DIPLOMACY_REAL_ALLIED;
      return !e && !t && !i && !n || (t || i) && this._worldMapObjectVO.isUnderConquerControl && !n;
    },
    enumerable: true,
    configurable: true
  });
  ButtonAttackComponent.prototype.initAttackButton = function (e) {
    var t;
    if ((this._button.disp.toolTipText = null, this._button.toolTipText = null, this._button.visible = this.isBasicallyVisible, this._button.enableButton = this._worldMapObjectVO.canBeAttacked(), m.instanceOfClass(this._worldMapObjectVO, "AAlienInvasionMapobjectVO") || m.instanceOfClass(this._worldMapObjectVO, "SamuraiCampMapObjectVO") || m.instanceOfClass(this._worldMapObjectVO, "DaimyoCastleMapObjectVO") || m.instanceOfClass(this._worldMapObjectVO, "DaimyoTownshipMapObjectVO") || m.instanceOfClass(this._worldMapObjectVO, "NomadKhanCampMapObjectVO") || m.instanceOfClass(this._worldMapObjectVO, "NomadCampMapObjectVO")) && (m.instanceOfClass(this._worldMapObjectVO, "RedAlienInvasionMapobjectVO") && (t = h.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE)), m.instanceOfClass(this._worldMapObjectVO, "AlienInvasionMapobjectVO") && (t = h.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE)), (m.instanceOfClass(this._worldMapObjectVO, "NomadCampMapObjectVO") || m.instanceOfClass(this._worldMapObjectVO, "NomadKhanCampMapObjectVO")) && (t = h.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE)), (m.instanceOfClass(this._worldMapObjectVO, "SamuraiCampMapObjectVO") || m.instanceOfClass(this._worldMapObjectVO, "DaimyoCastleMapObjectVO") || m.instanceOfClass(this._worldMapObjectVO, "DaimyoTownshipMapObjectVO")) && (t = h.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_SAMURAI_INVASION)), t.needToOpenDifficultyDialog())) {
      t.openDialog();
      return;
    }
    if (e && this._button.enabled) {
      this._button.disp.toolTipText = "ringmenu_military_menu_attack";
    } else {
      this._button.disp.toolTipText = null;
    }
    if (m.instanceOfClass(this._worldMapObjectVO, "CastleMapobjectVO")) {
      this.initNormalCastleHandling();
      this._button.visible = this._button.visible;
    } else if (m.instanceOfClass(this._worldMapObjectVO, "DungeonMapobjectVO")) {
      this.initDungeonHandling();
    } else if (m.instanceOfClass(this._worldMapObjectVO, "ABGResourceTowerMapobjectVO")) {
      this.initResourceTowerHandling();
    } else if (m.instanceOfClass(this._worldMapObjectVO, "NomadCampMapObjectVO") || m.instanceOfClass(this._worldMapObjectVO, "NomadKhanCampMapObjectVO")) {
      this.initNomadCampHandling();
    } else if (m.instanceOfClass(this._worldMapObjectVO, "BossdungeonMapobjectVO")) {
      this.initBossDungeonHandling();
    } else if (m.instanceOfClass(this._worldMapObjectVO, "AAlienInvasionMapobjectVO")) {
      this.initAlienInvasionHandling();
    } else if (m.instanceOfClass(this._worldMapObjectVO, "SamuraiCampMapObjectVO")) {
      this.initSamuraiInvasionHandling();
    } else if (m.instanceOfClass(this._worldMapObjectVO, "OutpostMapobjectVO")) {
      this.initOutpostHandling();
    } else if (m.instanceOfClass(this._worldMapObjectVO, "FactionInteractiveMapobjectVO")) {
      this.initFactionHandling();
    } else if (m.instanceOfClass(this._worldMapObjectVO, "FactionInvasionCampMapObjectVO")) {
      this.initFactionInvasionHandling();
    } else if (m.instanceOfClass(this._worldMapObjectVO, "ABGAllianceTowerMapobjectVO")) {
      this.initABGTowerHandling();
    } else if (m.instanceOfClass(this._worldMapObjectVO, "WolfkingCastleMapObjectVO")) {
      this.initWolfkingHandling();
    }
    if (this._button.enabled == 0 && !this._isListeningToTimer) {
      h.CastleModel.timerData.addEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTime));
      this._isListeningToTimer = true;
    }
    this._button.visible &&= !m.instanceOfClass(this._worldMapObjectVO, "VillageMapobjectVO") && !m.instanceOfClass(this._worldMapObjectVO, "FactionVillageMapobjectVO") && !m.instanceOfClass(this._worldMapObjectVO, "KingstowerMapobjectVO");
  };
  ButtonAttackComponent.prototype.initSamuraiInvasionHandling = function () {
    this._button.enableButton = true;
  };
  ButtonAttackComponent.prototype.destroy = function () {
    h.CastleModel.timerData.removeEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTime));
    e.prototype.destroy.call(this);
  };
  ButtonAttackComponent.prototype.onUpdateTime = function (e) {
    this.initAttackButton(true);
    if (this._button.enabled) {
      h.CastleModel.timerData.removeEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTime));
      this._isListeningToTimer = false;
      if (this.layoutManager.tooltipManager.target == this._button.disp) {
        this.layoutManager.tooltipManager.hide();
      }
    }
  };
  ButtonAttackComponent.prototype.initFactionHandling = function () {
    this._button.visible = this._worldMapObjectVO.canBeAttacked();
    this._button.enableButton = true;
    if (!m.instanceOfClass(this._worldMapObjectVO, "FactionCampMapobjectVO")) {
      var e = h.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_FACTION);
      this._button.visible = this._worldMapObjectVO.ownerInfo.factionID != e.ownFaction;
      this._button.enableButton = this._worldMapObjectVO.canBeAttacked();
      if (!this._button.enabled) {
        if (this._worldMapObjectVO.areaType == s.WorldConst.AREA_TYPE_FACTION_CAPITAL || this._worldMapObjectVO.areaType == s.WorldConst.AREA_TYPE_FACTION_TOWER) {
          this._button.toolTipText = "dialog_factionEvent_blockedByTower";
        } else if (this._worldMapObjectVO.areaType == s.WorldConst.AREA_TYPE_FACTION_VILLAGE) {
          this._button.toolTipText = "dialog_factionEvent_villageBlockedByTower";
        }
      }
    }
    if (this._button.visible && this._worldMapObjectVO.remainingCooldownTimeInSeconds > 0) {
      var t = "";
      if (m.instanceOfClass(this._worldMapObjectVO, "FactionTowerMapobjectVO")) {
        t = "faction_tower_cooldown";
      } else if (m.instanceOfClass(this._worldMapObjectVO, "FactionVillageMapobjectVO")) {
        t = "faction_village_cooldown";
      } else if (m.instanceOfClass(this._worldMapObjectVO, "FactionCampMapobjectVO")) {
        t = "faction_camp_cooldown";
      }
      this._button.enableButton = false;
      this._button.toolTipText = {
        t: t,
        p: [a.TimeStringHelper.getShortTimeString(this._worldMapObjectVO.remainingCooldownTimeInSeconds * u.ClientConstTime.SEC_2_MILLISEC, a.TimeStringHelper.ONE_TIME_FORMAT)]
      };
    }
    if (m.instanceOfClass(this._worldMapObjectVO, "FactionCampMapobjectVO")) {
      if (this._button.visible && this._worldMapObjectVO.ownerInfo.isFactionProtected && !this._worldMapObjectVO.ownerInfo.isOwnOwnerInfo) {
        this._button.enableButton = false;
        var i = g.CastleTimeStringHelper.getCantAttackTimeString(this._worldMapObjectVO.ownerInfo.remainingFactionProtectionTimeInSeconds);
        this._button.toolTipText = {
          t: "playerHasNoobProtection",
          p: [i]
        };
      }
      if (this._button.visible && this._worldMapObjectVO.ownerInfo.isNoobProtected) {
        this._button.enableButton = false;
        var n = g.CastleTimeStringHelper.getCantAttackTimeString(this._worldMapObjectVO.ownerInfo.remainingNoobTime);
        this._button.toolTipText = {
          t: "playerHasNoobProtection",
          p: [n]
        };
      }
    }
    if (this._button.visible && h.CastleModel.userData.castleList.listWithoutOcupiedOrDestroyedFactionCamps.length == 0) {
      this._button.enableButton = false;
      this._button.toolTipText = "panel_action_castle_spectator";
    }
  };
  ButtonAttackComponent.prototype.initFactionInvasionHandling = function () {
    this._button.visible = this._worldMapObjectVO.canBeAttacked();
    this._button.enableButton = true;
    if (this._button.visible && this._worldMapObjectVO.remainingCooldownTimeInSeconds > 0) {
      this._button.enableButton = false;
      this._button.toolTipText = {
        t: "faction_camp_cooldown",
        p: [a.TimeStringHelper.getShortTimeString(this._worldMapObjectVO.remainingCooldownTimeInSeconds * u.ClientConstTime.SEC_2_MILLISEC, a.TimeStringHelper.ONE_TIME_FORMAT)]
      };
    }
  };
  ButtonAttackComponent.prototype.initNomadCampHandling = function () {
    this._button.enableButton = true;
  };
  ButtonAttackComponent.prototype.initAlienInvasionHandling = function () {
    if (this._worldMapObjectVO.remainingCooldownTimeInSeconds > 0) {
      this._button.enableButton = false;
      var e = a.TimeStringHelper.getShortTimeString(this._worldMapObjectVO.remainingCooldownTimeInSeconds * u.ClientConstTime.SEC_2_MILLISEC, a.TimeStringHelper.ONE_TIME_FORMAT);
      this._button.toolTipText = {
        t: "nomadHasCooldown",
        p: [e]
      };
    } else if (this._worldMapObjectVO.canBeAttackedButHasPeacemode()) {
      this._button.enableButton = false;
      this._button.toolTipText = {
        t: "playerHasNoobProtection",
        p: ["-"]
      };
    } else {
      this._button.enableButton = !this._worldMapObjectVO.isOwnMapobject;
    }
  };
  ButtonAttackComponent.prototype.initABGTowerHandling = function () {
    var e = this._worldMapObjectVO;
    if (!e.isAttackable && e.connections.length > e.defeatedConnections) {
      this._button.enableButton = false;
      this._button.disp.toolTipText = {
        t: "ringmenu_allianceTower_waitPvPAttack_tooltip",
        p: []
      };
    } else if (e.isAttackable || e.connections.length != e.defeatedConnections) {
      this._button.enableButton = !this._worldMapObjectVO.isOwnMapobject;
    } else {
      this._button.enableButton = false;
      this._button.disp.toolTipText = {
        t: "ringmenu_allianceTower_drained_tooltip",
        p: []
      };
    }
  };
  ButtonAttackComponent.prototype.initBossDungeonHandling = function () {
    if (this._worldMapObjectVO.remainingCooldownTimeInSeconds > 0) {
      this._button.enableButton = false;
      var e = a.TimeStringHelper.getShortTimeString(this._worldMapObjectVO.remainingCooldownTimeInSeconds * u.ClientConstTime.SEC_2_MILLISEC, a.TimeStringHelper.ONE_TIME_FORMAT);
      this._button.toolTipText = {
        t: "bossDungeon_attackable_in",
        p: [e]
      };
    } else {
      this._button.enableButton = !this._worldMapObjectVO.isOwnMapobject;
    }
  };
  ButtonAttackComponent.prototype.initDungeonHandling = function () {
    if (this._worldMapObjectVO.remainingCooldownTimeInSeconds > 0) {
      var e = a.TimeStringHelper.getShortTimeString(this._worldMapObjectVO.remainingCooldownTimeInSeconds * u.ClientConstTime.SEC_2_MILLISEC, a.TimeStringHelper.ONE_TIME_FORMAT);
      if (m.instanceOfClass(this._worldMapObjectVO, "DungeonIsleMapobjectVO")) {
        this._button.enableButton = false;
        this._button.toolTipText = {
          t: "eiland_dungeon_cooldownLocal_tooltip",
          p: [e]
        };
        this.layoutManager.tooltipManager.updateText(this._button.toolTipText, this._button.disp);
      } else {
        this._button.enableButton = true;
      }
    } else {
      this._button.enableButton = !this._worldMapObjectVO.isOwnMapobject;
    }
  };
  ButtonAttackComponent.prototype.initResourceTowerHandling = function () {
    if (this._worldMapObjectVO.remainingCooldownTimeInSeconds > 0) {
      this._button.enableButton = true;
    } else {
      this._button.enableButton = !this._worldMapObjectVO.isOwnMapobject;
    }
  };
  ButtonAttackComponent.prototype.initNormalCastleHandling = function (e = true) {
    if (h.CastleModel.userData.isUserInMyAlliance(this._worldMapObjectVO.ownerInfo)) {
      this._button.toolTipText = "dialog_alliance_canAttackBuddy";
      this._button.enableButton = false;
    } else if (e && this._worldMapObjectVO.ownerInfo.remainingNoobTime > 0) {
      var t = g.CastleTimeStringHelper.getCantAttackTimeString(this._worldMapObjectVO.ownerInfo.remainingNoobTime);
      this._button.toolTipText = {
        t: "playerHasNoobProtection",
        p: [t]
      };
      this._button.enableButton = false;
    } else if (e && this._worldMapObjectVO.ownerInfo.remainingPeaceTime > 0) {
      var i = g.CastleTimeStringHelper.getCantAttackTimeString(this._worldMapObjectVO.ownerInfo.remainingPeaceTime);
      this._button.toolTipText = {
        t: "playerHasNoobProtection",
        p: [i]
      };
      this._button.enableButton = false;
    } else if (c.int(h.CastleModel.allianceData.getStatusByAlliance(this._worldMapObjectVO.ownerInfo.allianceID)) == l.AllianceConst.DIPLOMACY_REAL_ALLIED && h.CastleModel.userData.allianceID != -1) {
      this._button.toolTipText = "cantAttackAlliedPlayer";
      this._button.enableButton = false;
    } else if (this._worldMapObjectVO.remainingCooldownTimeInSeconds > 0) {
      var n = a.TimeStringHelper.getShortTimeString(this._worldMapObjectVO.remainingCooldownTimeInSeconds * u.ClientConstTime.SEC_2_MILLISEC, a.TimeStringHelper.ONE_TIME_FORMAT);
      this._button.toolTipText = {
        t: "castleHasCooldown",
        p: [n]
      };
      this._button.enableButton = false;
    } else if (this._worldMapObjectVO.kingdomID == r.WorldClassic.KINGDOM_ID && this._worldMapObjectVO.ownerInfo.remainingRelocateDuration > 0) {
      var o = a.TimeStringHelper.getShortTimeString(this._worldMapObjectVO.ownerInfo.remainingRelocateDuration * u.ClientConstTime.SEC_2_MILLISEC, a.TimeStringHelper.ONE_TIME_FORMAT);
      this._button.toolTipText = {
        t: "relocate_attackprotection",
        p: [o]
      };
      this._button.enableButton = false;
    } else {
      this._button.enableButton = !this._worldMapObjectVO.isOwnMapobject;
    }
  };
  ButtonAttackComponent.prototype.initOutpostHandling = function () {
    var e = this._worldMapObjectVO;
    var t = c.int(h.CastleModel.allianceData.getStatusByAlliance(e.ownerInfo.allianceID)) == l.AllianceConst.DIPLOMACY_REAL_ALLIED && !e.isUnderConquerControl && (e.isConqueredByMe || e.isConqueredByAllianceMember);
    var i = -1;
    if (this._worldMapObjectVO.controllerWorldMapOwnerInfoVO) {
      i = c.int(h.CastleModel.allianceData.getStatusByAlliance(this._worldMapObjectVO.controllerWorldMapOwnerInfoVO.allianceID));
    }
    if (i == l.AllianceConst.DIPLOMACY_REAL_ALLIED && h.CastleModel.userData.allianceID != -1) {
      this._button.toolTipText = "cantAttackAlliedPlayer";
      this._button.enableButton = false;
    } else if (t) {
      this._button.enableButton = false;
      this._button.toolTipText = "cantAttackAlliedPlayer";
    } else if (!e.ignoresPeaceMode && e.canBeAttackedButHasPeacemode()) {
      if (e.ownerInfo.remainingPeaceTime > 1 && !e.ownerInfo.isOwnOwnerInfo && !e.isUnderConquerControl) {
        this._button.enableButton = false;
        var n = g.CastleTimeStringHelper.getCantAttackTimeString(e.ownerInfo.remainingPeaceTime);
        this._button.toolTipText = {
          t: "playerHasNoobProtection",
          p: [n]
        };
      } else if (e.remainingCooldownTimeInSeconds > 1) {
        this._button.enableButton = false;
        var o = a.TimeStringHelper.getShortTimeString(e.remainingCooldownTimeInSeconds * u.ClientConstTime.SEC_2_MILLISEC, a.TimeStringHelper.ONE_TIME_FORMAT);
        var s = {
          t: "outpostHasCooldown"
        };
        s.p = [o];
        this._button.toolTipText = s;
      }
    } else if (e.remainingCooldownTimeInSeconds > 0 && !e.ownerInfo.isOwnOwnerInfo) {
      this._button.enableButton = false;
      var r = a.TimeStringHelper.getShortTimeString(e.remainingCooldownTimeInSeconds * u.ClientConstTime.SEC_2_MILLISEC, a.TimeStringHelper.ONE_TIME_FORMAT);
      var d = null;
      (d = m.instanceOfClass(e, "CapitalMapobjectVO") ? {
        t: "capitalHasCooldown"
      } : m.instanceOfClass(e, "MetropolMapobjectVO") ? {
        t: p.SpecialServerHelper.checkTextIDForSkinText("metropolHasCooldown")
      } : {
        t: "outpostHasCooldown"
      }).p = [r];
      this._button.toolTipText = d;
    }
  };
  ButtonAttackComponent.prototype.initWolfkingHandling = function () {
    this._button.visible = this._worldMapObjectVO.canBeAttacked();
    this._button.enableButton = h.CastleModel.generalsIntroductionData.canAttackWolfking();
  };
  ButtonAttackComponent.prototype.onClick = function () {
    _.AttackHelper.executeAttackCommand(this._worldMapObjectVO, this._worldMapObjectVO.attackType, null);
  };
  Object.defineProperty(ButtonAttackComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_military_menu_attack";
    },
    enumerable: true,
    configurable: true
  });
  return ButtonAttackComponent;
}(require("./150.js").ButtonBasicComponent);
exports.ButtonAttackComponent = C;
o.classImplementsInterfaces(C, "IWorldMapObjectRingmenuButtonComponent");
var _ = require("./250.js");
var m = require("./1.js");