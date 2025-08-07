Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./18.js");
var p = require("./51.js");
var h = require("./55.js");
var g = require("./4.js");
var C = require("./967.js");
var _ = require("./524.js");
var m = require("./754.js");
var f = require("./236.js");
var O = function () {
  function AttackHelper() {}
  AttackHelper.executeAttackCommand = function (e, t, i) {
    if (!o.instanceOfClass(e, "DungeonMapobjectVO") && g.CastleModel.userData.userLevel < a.CombatConst.MIN_ATTACK_PLAYER_LEVEL) {
      var n = "dialog_attackWithLowLevel_NPC";
      if (o.instanceOfClass(e, "UpgradableLandmarkMapobjectVO")) {
        if (e.isPlayerOwned) {
          n = "dialog_attackWithLowLevel";
        }
      } else if (o.instanceOfClass(e, "KingstowerMapobjectVO") && e.isPlayerOwned) {
        n = "dialog_attackWithLowLevel";
      }
      T.CastleDialogHandler.getInstance().registerDefaultDialogs(A.CastleCharacterYesNoOKDialog, new f.CastleCharacterYesNoOKDialogProperties(c.Localize.text("generic_alert_watchout"), c.Localize.text(n, [a.CombatConst.MIN_ATTACK_PLAYER_LEVEL]), p.ClientConstCharacter.CHAR_ID_GENERAL, null, null, false, [e, t]));
      return;
    }
    var s = [e, t, i];
    if (!AttackHelper.checkProtectionStatus(e, t) || g.CastleModel.tutorialData.isTutorialActive) {
      if (e.isCoolingDown && e.cooldownCanBeSkipped) {
        var r = new m.SkippableCooldownDialogProperties(e, AttackHelper._onAttackCommandConfirmed, s);
        T.CastleDialogHandler.getInstance().registerDefaultDialogs(S.SkippableCooldownDialog, r);
      } else {
        AttackHelper._onAttackCommandConfirmed(s);
      }
    } else {
      T.CastleDialogHandler.getInstance().registerDefaultDialogs(A.CastleCharacterYesNoOKDialog, new f.CastleCharacterYesNoOKDialogProperties(c.Localize.text("generic_alert_watchout"), c.Localize.text("dialog_attackWithNoobProtection"), p.ClientConstCharacter.CHAR_ID_GENERAL, AttackHelper._onAttackCommandConfirmed, null, true, s));
    }
  };
  AttackHelper.checkProtectionStatus = function (e, t) {
    var i = o.instanceOfClass(e, "NomadCampMapObjectVO") || o.instanceOfClass(e, "NomadKhanCampMapObjectVO") || o.instanceOfClass(e, "SamuraiCampMapObjectVO") || o.instanceOfClass(e, "FactionInvasionCampMapObjectVO");
    var n = g.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_FACTION);
    var a = !h.ClientConstUtils.isObjectClassOf(e, [D.DungeonMapobjectVO, I.EventdungeonMapobjectVO, y.BossdungeonMapobjectVO, b.DaimyoCastleMapObjectVO, C.WolfkingCastleMapObjectVO]) && !i;
    var l = g.CastleModel.userData.isNoobProtectedInKingdom(e.kingdomID);
    var c = g.CastleModel.userData.isInPeaceMode && (g.CastleModel.userData.peaceModeStatus == E.CastleUserData.PEACEMODE_STATUS_PEACETIME || g.CastleModel.userData.peaceModeStatus == E.CastleUserData.PEACEMODE_STATUS_PRETIME);
    var u = o.instanceOfClass(e, "FactionCampMapobjectVO");
    var p = !!n && n.factionProtectionStatus > -1;
    var _ = t == d.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK;
    if (g.CastleModel.kingdomData.activeKingdomID == r.FactionConst.KINGDOM_ID) {
      return a && l || u && p;
    } else {
      return !_ && a && (l || c);
    }
  };
  AttackHelper.canDrawCastle = function (e) {
    switch (e.areaType) {
      case l.WorldConst.AREA_TYPE_ALIEN_CAMP:
      case l.WorldConst.AREA_TYPE_RED_ALIEN_CAMP:
      case l.WorldConst.AREA_TYPE_NOMAD_CAMP:
      case l.WorldConst.AREA_TYPE_FACTION_TOWER:
      case l.WorldConst.AREA_TYPE_FACTION_CAPITAL:
      case l.WorldConst.AREA_TYPE_FACTION_VILLAGE:
      case l.WorldConst.AREA_TYPE_ISLE_RESOURCE:
      case l.WorldConst.AREA_TYPE_FACTION_INVASION_CAMP:
      case l.WorldConst.AREA_TYPE_SAMURAI_CAMP:
      case l.WorldConst.AREA_TYPE_ALLIANCE_NOMAD_CAMP:
      case l.WorldConst.AREA_TYPE_DAIMYO_CASTLE:
      case l.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP:
      case l.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER:
      case l.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_RESOURCE_TOWER:
        return true;
    }
    return !(e.wallLevel <= 0) || !(e.gateLevel <= 0) || !(e.towerLevel <= 0) || !(e.moatLevel <= 0);
  };
  AttackHelper.canUseToolForAttackOnTarget = function (e, t, i) {
    var a = t.canBeUsedToAttackNPC || e.hasOtherPlayerInfo || o.instanceOfClass(e, "AAlienInvasionMapobjectVO");
    var s = t.isAllowedByAttackTarget(i, e.areaType);
    if (a && s) {
      var r = n.castAs(t, "EventtoolUnitVO");
      if (!r || !(r.usedForEvent.length > 0) || r.inventoryAmount != 0) {
        return true;
      }
      for (var l = 0, c = r.usedForEvent; l < c.length; l++) {
        var u = c[l];
        if (u !== undefined && g.CastleModel.specialEventData.isEventActive(u)) {
          return true;
        }
      }
    }
    return false;
  };
  AttackHelper._onAttackCommandConfirmed = function (e) {
    var t = e[0];
    var i = u.int(e[1]);
    var o = n.castAs(e[2], "Function");
    T.CastleDialogHandler.getInstance().registerDefaultDialogs(v.CastleStartAttackDialog, new _.CastleStartAttackDialogProperties(t, i));
    if (o != null) {
      o();
    }
  };
  return AttackHelper;
}();
exports.AttackHelper = O;
var E = require("./284.js");
var y = require("./883.js");
var b = require("./526.js");
var D = require("./574.js");
var I = require("./968.js");
var T = require("./9.js");
var v = require("./395.js");
var S = require("./755.js");
var A = require("./238.js");