Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./1648.js");
var p = require("./3387.js");
var h = require("./3388.js");
var g = function (e) {
  function OpenAllianceBuyBoosterCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OpenAllianceBuyBoosterCommand, e);
  OpenAllianceBuyBoosterCommand.prototype.execute = function (e = null) {
    var t;
    var i;
    var n;
    var o;
    var r = e[0];
    var g = u.int(e[1]);
    var m = e[2];
    if (e.length >= 4) {
      t = e[3];
    }
    var y = a.TimeStringHelper.getTimeToString(r.getBoostDuration(g, r.getBoostLevel(g) + 1), a.TimeStringHelper.ONE_TIME_HOURS_FORMAT, c.Localize.text);
    var b = r.isBoosterTemporary(g);
    var D = b && r.isTemporaryBoosterActive(g);
    var I = C.AllianceBuffData.CUSTOMIZABLE_BUFFS.indexOf(g) > -1;
    i = b ? D ? c.Localize.text("dialog_alliance_prolongEffect_header") : I ? c.Localize.text("dialog_alliance_temporaryBoost_activate_title") : c.Localize.text("dialog_alliance_activateEffect_header") : c.Localize.text("dialog_alliance_raiseEffect");
    o = c.Localize.text(s.GenericTextIds.VALUE_PERCENTAGE_ADD, [r.getUpgradeBoostValue(g, m)]);
    switch (g) {
      case l.AllianceConst.TYPE_MEMBERS:
        i = c.Localize.text("dialog_alliance_raiseMemberLimit");
        n = c.Localize.text("dialog_alliance_raiseMemberLimit_desc");
        o = c.Localize.text(s.GenericTextIds.VALUE_NOMINAL_ADD, [r.additionalMemberForNextLevel]);
        break;
      case l.AllianceConst.TYPE_DEFENSE_SPEED_BOOST:
        n = c.Localize.text("dialog_alliance_raiseDefenceBoost_desc");
        break;
      case l.AllianceConst.TYPE_MARKET_SPEED_BOOST:
        n = c.Localize.text("dialog_alliance_raiseMarketBoost_desc");
        break;
      case l.AllianceConst.TYPE_DEPOSIT_BONUS:
        n = c.Localize.text("dialog_alliance_raiseDepositBonus_desc");
        break;
      case l.AllianceConst.TYPE_MARAUDER_BONUS:
        n = c.Localize.text("dialog_alliance_raiseMarauderBonus_desc");
        break;
      case l.AllianceConst.TYPE_ATTACK_SPEED_BOOST:
        n = c.Localize.text("dialog_alliance_raiseAttackBoost_desc");
        break;
      case l.AllianceConst.TYPE_TEMP_ATTACK_POWER_BOOST:
        n = c.Localize.text(D ? "dialog_alliance_temporaryBoost_attackPower_prolong_desc" : "dialog_alliance_temporaryBoost_attackPower_desc", [y]);
        break;
      case l.AllianceConst.TYPE_TEMP_DEFENSE_POWER_BOOST:
        n = c.Localize.text(D ? "dialog_alliance_temporaryBoost_defencePower_prolong_desc" : "dialog_alliance_temporaryBoost_defencePower_desc", [y]);
        break;
      case l.AllianceConst.TYPE_TEMP_DEFENSE_SPEED_BOOST:
        n = c.Localize.text(D ? "dialog_alliance_temporaryBoost_supportTravel_prolong_desc" : "dialog_alliance_temporaryBoost_supportTravel_desc", [y]);
        break;
      case l.AllianceConst.TYPE_TEMP_GLORY_BOOST:
        n = c.Localize.text(D ? "dialog_alliance_temporaryBoost_glory_prolong_desc" : "dialog_alliance_temporaryBoost_glory_desc", [y]);
        break;
      case l.AllianceConst.TYPE_RAGE_POINT_BOOST:
        n = c.Localize.text("dialog_alliance_temporaryBoost_allianceRageBoost_desc");
        break;
      case l.AllianceConst.TYPE_COOLDOWN_REDUCTION_KHAN:
        n = c.Localize.text("dialog_alliance_temporaryBoost_allianceCooldownReductionKhan_desc");
        break;
      case l.AllianceConst.TYPE_COOLDOWN_REDUCTION_NOMADS:
        n = c.Localize.text("dialog_alliance_temporaryBoost_allianceCooldownReductionNomad_desc");
        break;
      case l.AllianceConst.TYPE_ALIEN_ATTACK_BOOST:
        n = c.Localize.text("dialog_alliance_temporaryBoost_allianceAttackBoostAliens_desc");
        break;
      case l.AllianceConst.TYPE_DAIMYO_ATTACK_BOOST:
        n = c.Localize.text("dialog_alliance_temporaryBoost_allianceAttackBoostDaimyo_desc");
        break;
      case l.AllianceConst.TYPE_KHAN_DEFENSE_BOOST:
        n = c.Localize.text("dialog_alliance_temporaryBoost_allianceDefenseBoostKhan_desc");
        break;
      case l.AllianceConst.TYPE_HEALING_SPEED_BOOST:
        n = c.Localize.text("dialog_alliance_temporaryBoost_healingSpeedIncreaseBoostPremium_desc");
        break;
      case l.AllianceConst.TYPE_INFLUENCE_POINT_BOOST:
        n = c.Localize.text("dialog_alliance_temporaryBoost_BGCollectorBoost_desc");
        break;
      case l.AllianceConst.TYPE_COOLDOWN_REDUCTION_SAMURAI_CAMP:
        n = c.Localize.text("dialog_alliance_temporaryBoost_allianceSamuraiCooldownReduction_desc");
        break;
      case l.AllianceConst.TYPE_COOLDOWN_REDUCTION_DAIYMO:
        n = c.Localize.text("dialog_alliance_temporaryBoost_allianceDaimyoCooldownReduction_desc");
        break;
      default:
        return;
    }
    if (I) {
      _.CastleDialogHandler.getInstance().registerDefaultDialogs(f.CastleAllianceBuyCustomizableBoostDialog, new p.CastleAllianceBuyCustomizableBoostDialogProperties(i, n, g, t, D));
    } else if (b) {
      _.CastleDialogHandler.getInstance().registerDefaultDialogs(E.CastleAllianceBuyTemporaryBoostExternalDialog, new h.CastleAllianceBuyTemporaryBoostDialogProperties(i, n, o, y, r.getUpgradeCosts(g), g, t));
    } else {
      _.CastleDialogHandler.getInstance().registerDefaultDialogs(O.CastleAllianceBuyStandardBoostDialog, new d.CastleAllianceBuyBoostDialogProperties(i, n, o, r.getUpgradeCosts(g), g, t));
    }
  };
  Object.defineProperty(OpenAllianceBuyBoosterCommand.prototype, "layoutManager", {
    get: function () {
      return m.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return OpenAllianceBuyBoosterCommand;
}(o.SimpleCommand);
exports.OpenAllianceBuyBoosterCommand = g;
var C = require("./747.js");
var _ = require("./9.js");
var m = require("./17.js");
var f = require("./3389.js");
var O = require("./3390.js");
var E = require("./3391.js");
r.classImplementsInterfaces(g, "ISimpleCommand");