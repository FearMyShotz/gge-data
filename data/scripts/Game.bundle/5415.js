Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./231.js");
var u = require("./28.js");
var d = require("./43.js");
var p = require("./149.js");
var h = require("./136.js");
var g = function (e) {
  function CastleAllianceWarPeaceMessageDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleAllianceWarPeaceMessageDialog.NAME) || this;
  }
  n.__extends(CastleAllianceWarPeaceMessageDialog, e);
  CastleAllianceWarPeaceMessageDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_alliance, this.dialogDisp.btn_close, this.dialogDisp.btn_diplomacy]);
  };
  CastleAllianceWarPeaceMessageDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.dialogDisp.btn_diplomacy.toolTipText = "dialog_alliance_diplomacy";
    var i = new l.TextVO(this.dialogProperties.messageVO.enemyAllianceName);
    var n = new l.TextVO(this.dialogProperties.messageVO.alliedMemberOrAllianceName);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.TextVO(this.dialogProperties.messageVO.subject));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_alliance.txt_value, i);
    switch (this.dialogProperties.messageVO.subtypeAllianceWar) {
      case a.MessageConst.SUBTYPE_ALLIANCE_ENEMY_ATTACK_WAR:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new r.LocalizedTextVO(CastleAllianceWarPeaceMessageDialog.TEXT_ID_ENEMY_ATTACK_WAR, [i, n]));
        break;
      case a.MessageConst.SUBTYPE_ALLIANCE_ENEMY_DECLARED_WAR:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new r.LocalizedTextVO(CastleAllianceWarPeaceMessageDialog.TEXT_ID_ENEMY_DECLARED_WAR, [i]));
        break;
      case a.MessageConst.SUBTYPE_ALLIANCE_OUR_DECLARED_WAR:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new r.LocalizedTextVO(CastleAllianceWarPeaceMessageDialog.TEXT_ID_WE_DECLARED_WAR, [n, i]));
        break;
      case a.MessageConst.SUBTYPE_ALLIANCE_ENEMY_END_WAR:
        var o = new Date();
        o.setTime(this.dialogProperties.messageVO.enemyPeaceOfferEndTimeStamp * u.ClientConstTime.SEC_2_MILLISEC);
        this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new r.LocalizedTextVO(CastleAllianceWarPeaceMessageDialog.TEXT_ID_PEACE_OFFER, [i, new s.LocalizedDateTimeVO(o)]));
        break;
      case a.MessageConst.SUBTYPE_ALLIANCE_OUR_ATTACK_WAR:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new r.LocalizedTextVO(CastleAllianceWarPeaceMessageDialog.TEXT_ID_WE_ATTACKED_OTHER_ALLY, [i]));
        break;
      case a.MessageConst.SUBTYPE_ALLIANCE_OUR_SABOTAGE_WAR:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new r.LocalizedTextVO(CastleAllianceWarPeaceMessageDialog.TEXT_ID_WE_SABOTAGED_OTHER_ALLIANCE, [i]));
    }
  };
  CastleAllianceWarPeaceMessageDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_alliance:
        C.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(_.CastleAllianceInfoDialog, new p.CastleAllianceInfoDialogProperties(this.dialogProperties.messageVO.enemyAllianceID), d.CastleDialogConsts.DIALOG_TYPE_SINGLE);
        break;
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_diplomacy:
        C.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleAllianceDialog, new h.CastleAllianceDialogProperties(c.ClientConstAlliance.CAT_DIPLOMACY));
        this.hide();
    }
  };
  Object.defineProperty(CastleAllianceWarPeaceMessageDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceWarPeaceMessageDialog.__initialize_static_members = function () {
    CastleAllianceWarPeaceMessageDialog.NAME = "CastleAllianceWarPeaceMessageEx";
    CastleAllianceWarPeaceMessageDialog.TEXT_ID_ENEMY_DECLARED_WAR = "message_autoWar_enemy_declare";
    CastleAllianceWarPeaceMessageDialog.TEXT_ID_WE_DECLARED_WAR = "message_autoWar_ownAlliance_declare";
    CastleAllianceWarPeaceMessageDialog.TEXT_ID_WE_ATTACKED_OTHER_ALLY = "message_autoWar_ownAlliance_attack";
    CastleAllianceWarPeaceMessageDialog.TEXT_ID_WE_SABOTAGED_OTHER_ALLIANCE = "message_autoWar_ownAlliance_sabotage";
    CastleAllianceWarPeaceMessageDialog.TEXT_ID_ENEMY_ATTACK_WAR = "message_autoWar_enemy_attack";
    CastleAllianceWarPeaceMessageDialog.TEXT_ID_PEACE_OFFER = "message_peaceOffer_copy";
  };
  return CastleAllianceWarPeaceMessageDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleAllianceWarPeaceMessageDialog = g;
var C = require("./9.js");
var _ = require("./132.js");
var m = require("./125.js");
o.classImplementsInterfaces(g, "ICollectableRendererList");
g.__initialize_static_members();