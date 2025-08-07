Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./5.js");
var o = require("./3.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./28.js");
var c = require("./44.js");
var u = require("./4.js");
var d = require("./375.js");
var p = function () {
  function AllianceActionListItemVO() {
    this.playerID = 0;
    this.action = 0;
  }
  AllianceActionListItemVO.prototype.parseActionListItem = function (e) {
    this.playerID = r.int(e.PID);
    this.playerName = e.PN;
    var t = r.int(e.MA);
    this.bornDate = new Date();
    this.bornDate.setTime(this.bornDate.getTime() - t * l.ClientConstTime.SEC_2_MILLISEC);
    this.action = r.int(e.A);
    this.actionValues = e.AV;
  };
  AllianceActionListItemVO.prototype.getActionText = function () {
    var e = c.SpecialServerHelper.checkTextIDForSkinText("dialog_alliance_chronic" + String(this.action));
    switch (this.action) {
      case n.AllianceConst.CHANGE_DIPLOMACY:
      case n.AllianceConst.REFUSE_DIPLOMACY:
      case n.AllianceConst.SEND_REQUEST_DIPLOMACY:
      case n.AllianceConst.GET_REQUEST_DIPLOMACY:
        var t = this.actionValues[1];
        var i = o.Localize.text("dialog_allianceDiplomacy_status" + this.actionValues[2]);
        var r = [new s.TextVO(t), i];
        return new a.LocalizedTextVO(e, r);
      case n.AllianceConst.UPGRADE:
        if (this.actionValues[0] == n.AllianceConst.TYPE_MEMBERS || this.actionValues[0] == n.AllianceConst.TYPE_FORGE_UPGRADE) {
          var l = this.actionValues.slice(1);
          return new a.LocalizedTextVO(e + "_" + this.actionValues[0], l);
        }
        var p = o.Localize.text(AllianceActionListItemVO.getAllianceBuffTextId(this.actionValues[0]));
        return new a.LocalizedTextVO(e + "_1", [p]);
      case n.AllianceConst.ACTIVATE_TEMP_BUFF:
      case n.AllianceConst.EXTEND_TEMP_BUFF:
        return new a.LocalizedTextVO(e + "_" + this.actionValues[0]);
      case n.AllianceConst.CONQUERED_CAPITAL:
      case n.AllianceConst.CONQUERED_METROPOL:
      case n.AllianceConst.LOOSING_CAPITAL:
      case n.AllianceConst.LOOSING_METROPOL:
      case n.AllianceConst.LOST_CAPITAL:
      case n.AllianceConst.LOST_METROPOL:
      case n.AllianceConst.ABANDONED_CAPITAL:
      case n.AllianceConst.ABANDONED_METROPOL:
      case n.AllianceConst.MEMBER_INACTIVE_KICK:
      case n.AllianceConst.NEW_KINGS_NAME:
        return new a.LocalizedTextVO(e, [new s.TextVO(this.playerName)]);
      case n.AllianceConst.MEMBER_EARN_FAME:
      case n.AllianceConst.MEMBER_DONATE_RES:
      case n.AllianceConst.MEMBER_DONATE_C1:
      case n.AllianceConst.MEMBER_DONATE_C2:
        var h = this.actionValues[0] == 1 ? "_singleDigit" : "";
        return new a.LocalizedTextVO(e + h, this.actionValues);
      case n.AllianceConst.CHANGE_NAME:
      case n.AllianceConst.ALLIANCE_BATTLE_GROUND_MALUS_INCREASED:
      case n.AllianceConst.ALLIANCE_BATTLE_GROUND_MALUS_RESET:
      case n.AllianceConst.ALLIANCE_BATTLE_GROUND_OWNED_TOWER_DEFEATED:
      case n.AllianceConst.ALLIANCE_BATTLE_GROUND_POINTS_GAINED:
        return new a.LocalizedTextVO(e, [new s.TextVO(this.actionValues[0])], false);
      case n.AllianceConst.METROPOLIS_OWNER_JOINED:
      case n.AllianceConst.CAPITAL_OWNER_JOINED:
        return new a.LocalizedTextVO(e, [new s.TextVO(this.playerName)]);
      case n.AllianceConst.DAIMYO_ALLIANCE_CASTLE_CONTRACT_COMPLETED:
        var g = u.CastleModel.samuraiDaimyoData.xml.getContractsList(d.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE).get(this.actionValues[0]);
        return new a.LocalizedTextVO(e, [g.rank, u.CastleModel.samuraiDaimyoData.xml.getContractSeriesIndex(d.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE, g.id) + 1, u.CastleModel.samuraiDaimyoData.xml.getNumberOfContractsForSeries(d.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE, g.id)]);
      case n.AllianceConst.DAIMYO_ALLIANCE_TOWNSHIP_CONTRACT_COMPLETED:
        var C = u.CastleModel.samuraiDaimyoData.xml.getContractsList(d.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE).get(this.actionValues[0]);
        return new a.LocalizedTextVO(e, [C.rank, u.CastleModel.samuraiDaimyoData.xml.getContractSeriesIndex(d.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE, C.id) + 1, u.CastleModel.samuraiDaimyoData.xml.getNumberOfContractsForSeries(d.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE, C.id)]);
    }
    return new a.LocalizedTextVO(e, this.actionValues);
  };
  Object.defineProperty(AllianceActionListItemVO.prototype, "plainActionValues", {
    get: function () {
      var e = new Array(this.actionValues.length);
      for (var t = 0; t < this.actionValues.length; t++) {
        e[t] = new s.TextVO(this.actionValues[t]);
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  AllianceActionListItemVO.getAllianceBuffTextId = function (e) {
    switch (e) {
      case n.AllianceConst.TYPE_DEFENSE_SPEED_BOOST:
        return "dialog_alliance_defenseBoost";
      case n.AllianceConst.TYPE_MARKET_SPEED_BOOST:
        return "dialog_alliance_marketBoost";
      case n.AllianceConst.TYPE_DEPOSIT_BONUS:
        return "dialog_alliance_depositBonus";
      case n.AllianceConst.TYPE_MARAUDER_BONUS:
        return "dialog_alliance_permanentBoost_lootCapacity";
      case n.AllianceConst.TYPE_ATTACK_SPEED_BOOST:
        return "dialog_alliance_movementBoost";
    }
    return "";
  };
  return AllianceActionListItemVO;
}();
exports.AllianceActionListItemVO = p;