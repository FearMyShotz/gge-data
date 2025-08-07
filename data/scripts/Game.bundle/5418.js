Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./6.js");
var g = require("./148.js");
var C = require("./4.js");
var _ = require("./20.js");
var m = require("./11.js");
var f = createjs.Point;
var O = function (e) {
  function CastleNoFightMessageDialog() {
    return e.call(this, CastleNoFightMessageDialog.NAME) || this;
  }
  n.__extends(CastleNoFightMessageDialog, e);
  CastleNoFightMessageDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    T.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_player], _.ClickFeedbackButtonHover);
  };
  CastleNoFightMessageDialog.prototype.applyPropertiesLoaded = function (e = null) {
    var t;
    var i;
    var n = this.textFieldManager.registerTextField(this.dialogDisp.btn_player.txt_value, new p.TextVO(""));
    var o = this.dialogProperties.messageVO.senderName; //!ST dialogDisp.btn_player.txt_value.text =  areaName
    n.textContentVO = o && o != "" ? new p.TextVO(o) : new d.LocalizedTextVO("Unknown_name");
    this.dialogDisp.btn_player.toolTipText = "panel_action_jumpTo";
    this.dialogDisp.btn_player.KID = this.dialogProperties.messageVO.kingdomID;
    var a = this.dialogProperties.messageVO.ownerID;
    this.dialogDisp.btn_player.areaPos = new f(this.dialogProperties.messageVO.posX, this.dialogProperties.messageVO.posY);
    if (this.dialogProperties.messageVO.messageType == c.MessageConst.MESSAGE_TYPE_SPY_CANCELLED) {
      t = "spyWarning_warning";
      i = "dialog_noSpyMessage_copy";
    } else if (this.dialogProperties.messageVO.subtypeAttackCancelled == c.MessageConst.SUBTYPE_ATTACK_ABORTED) {
      var l = h.int(this.dialogProperties.messageVO.reason);
      if (l == c.MessageConst.BATTLE_LOG_CANCELLED_COOLDOWN) {
        i = this.dialogProperties.messageVO.areaType == u.WorldConst.AREA_TYPE_FACTION_TOWER ? "dialog_noFightMessage_berimondTower_copy" : "dialog_noFightMessage_cooldown_copy";
      } else if (l == c.MessageConst.BATTLE_LOG_CANCELLED_STARVATION) {
        i = "dialog_noFightMessage_starvation_copy";
      } else {
        var _ = C.CastleModel.specialEventData.isEventActive(r.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
        T.ButtonHelper.enableButton(this.dialogDisp.btn_player, _);
        this.dialogDisp.btn_player.mouseEnabled = _;
        i = a <= g.ClientConstNPCs.NPC_ID_NOMAD_CAMP_FIRST_ID && a >= g.ClientConstNPCs.NPC_ID_NOMAD_CAMP_LAST_ID ? "dialog_noFightMessage_Nomads_copy" : a == g.ClientConstNPCs.NPC_ID_ALLIANCE_NOMAD_CAMP ? C.CastleModel.userData.isInAlliance ? "dialog_noFightMessage_khanCampLevelUp" : "dialog_noFightMessage_khanCampNoAlliance" : "dialog_noFightMessage_copy";
      }
      t = "dialog_noFightMessage_title";
    } else if (this.dialogProperties.messageVO.subtypeAttackCancelled == c.MessageConst.SUBTYPE_ATTACK_AUTO_RETREAT) {
      t = "dialog_message_retreatTroops_attacker_header";
      i = "dialog_message_retreatTroops_attacker_copy";
    } else if (this.dialogProperties.messageVO.subtypeAttackCancelled == c.MessageConst.SUBTYPE_ATTACK_AUTO_RETREAT_ENEMY) {
      t = "dialog_message_retreatTroops_defender_header";
      i = "dialog_message_retreatTroops_defender_copy";
    }
    var m = "";
    if (this.dialogProperties.messageVO.autoSkipType > s.AutoSkipCooldownConst.AUTO_SKIP_TYPE_OFF) {
      m = "dialog_noFightMessage_autoCooldownSkip";
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new d.LocalizedTextVO(t)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new d.LocalizedTextVO(i));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description2, new d.LocalizedTextVO(m));
  };
  CastleNoFightMessageDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_player:
        if (this.dialogDisp.btn_player.KID == l.FactionConst.KINGDOM_ID && !C.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_FACTION)) {
          break;
        }
        if (!C.CastleModel.userData.isInAlliance && C.CastleModel.specialEventData.isEventActive(r.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE) && this.dialogProperties.messageVO.areaType == u.WorldConst.AREA_TYPE_ALLIANCE_NOMAD_CAMP) {
          I.CastleDialogHandler.getInstance().registerDefaultDialogs(b.CastleAllianceNomadInvasionDialog, new D.CastleAllianceNomadInvasionEventDialogProperties(b.CastleAllianceNomadInvasionDialog.TAB_ALLIANCEEVENT));
        } else {
          var i = new y.UnknownMapobjectVO();
          i.parseAreaInfo([this.dialogDisp.btn_player.areaPos.x, this.dialogDisp.btn_player.areaPos.y, this.dialogDisp.btn_player.KID]);
          o.CommandController.instance.executeCommand(E.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, i);
        }
        this.hide();
    }
  };
  Object.defineProperty(CastleNoFightMessageDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleNoFightMessageDialog.NAME = "CastleNoFightMessageEx_JUN23";
  return CastleNoFightMessageDialog;
}(m.CastleExternalDialog);
exports.CastleNoFightMessageDialog = O;
var E = require("./29.js");
var y = require("./1231.js");
var b = require("./822.js");
var D = require("./819.js");
var I = require("./9.js");
var T = require("./8.js");
a.classImplementsInterfaces(O, "ICollectableRendererList");