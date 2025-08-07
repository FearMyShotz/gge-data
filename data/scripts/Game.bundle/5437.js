Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./44.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./43.js");
var g = require("./11.js");
var C = require("./93.js");
var _ = function (e) {
  function CastleSiegeMessageDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleSiegeMessageDialog.NAME) || this;
  }
  n.__extends(CastleSiegeMessageDialog, e);
  CastleSiegeMessageDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.initBasicButtons([this.dialogDisp.btn_player, this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    var t = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new d.LocalizedTextVO(""));
    var i = this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new d.LocalizedTextVO(""));
    this.itxt_value = this.textFieldManager.registerTextField(this.dialogDisp.btn_player.txt_value, new d.LocalizedTextVO(""));
    switch (this.infoProperties.messageVO.subtypeSiege) {
      case s.MessageConst.SUBTYPE_CONQUERABLE_AREA_CONQUERED:
        if (this.infoProperties.messageVO.areaType == l.WorldConst.AREA_TYPE_OUTPOST) {
          t.textContentVO.textId = "dialog_messageHeader_outpostConquered";
          i.textContentVO.textId = "dialog_siegeMessage_outpostConquered";
        } else if (this.infoProperties.messageVO.areaType == l.WorldConst.AREA_TYPE_CAPITAL) {
          t.textContentVO.textId = "dialog_messageHeader_capitalConquered";
          i.textContentVO.textId = "dialog_siegeMessage_capitalConquered";
        } else if (this.infoProperties.messageVO.areaType == l.WorldConst.AREA_TYPE_METROPOL) {
          t.textContentVO.textId = u.SpecialServerHelper.checkTextIDForSkinText("dialog_messageHeader_metropolConquered");
          i.textContentVO.textId = u.SpecialServerHelper.checkTextIDForSkinText("dialog_siegeMessage_metropolConquered");
        } else if (this.infoProperties.messageVO.areaType == l.WorldConst.AREA_TYPE_FACTION_CAMP) {
          t.textContentVO.textId = "dialog_messageHeader_factionCampConquered";
          i.textContentVO.textId = "dialog_siegeMessage_factionCampConquered";
        }
        this.setPlayerInfoButton(false);
        break;
      case s.MessageConst.SUBTYPE_CONQUERABLE_AREA_LOST:
        if (this.infoProperties.messageVO.areaType == l.WorldConst.AREA_TYPE_OUTPOST) {
          t.textContentVO.textId = "dialog_messageHeader_outpostLost";
          i.textContentVO.textId = "dialog_siegeMessage_yourOutpostWasConquered";
        } else if (this.infoProperties.messageVO.areaType == l.WorldConst.AREA_TYPE_CAPITAL) {
          t.textContentVO.textId = "dialog_messageHeader_capitalLost";
          i.textContentVO.textId = "dialog_siegeMessage_yourCapitalWasConquered";
        } else if (this.infoProperties.messageVO.areaType == l.WorldConst.AREA_TYPE_METROPOL) {
          t.textContentVO.textId = u.SpecialServerHelper.checkTextIDForSkinText("dialog_messageHeader_metropolLost");
          i.textContentVO.textId = u.SpecialServerHelper.checkTextIDForSkinText("dialog_siegeMessage_yourMetropolWasConquered");
        } else if (this.infoProperties.messageVO.areaType == l.WorldConst.AREA_TYPE_FACTION_CAMP) {
          t.textContentVO.textId = "dialog_messageHeader_factionCampLost";
          i.textContentVO.textId = "dialog_siegeMessage_yourFactionCampWasConquered";
        }
        this.setPlayerInfoButton(true);
        break;
      case s.MessageConst.SUBTYPE_NEW_SIEGE:
        t.textContentVO.textId = "dialog_messageHeader_outpostNewConquering";
        i.textContentVO.textId = "dialog_siegeMessage_beenSiegedAgain";
        i.textContentVO.textReplacements = [o.TimeStringHelper.getTimeToString(r.OutpostConst.SIEGE_TIME, o.TimeStringHelper.ONE_TIME_FORMAT, c.Localize.text)];
        this.setPlayerInfoButton(true);
        break;
      case s.MessageConst.SUBTYPE_SIEGE_CANCELED:
        t.textContentVO.textId = "dialog_messageHeader_siegeCancelledByPlayer";
        i.textContentVO.textId = "dialog_siegeMessage_siegeCancelled";
        this.setPlayerInfoButton(true);
    }
  };
  CastleSiegeMessageDialog.prototype.setPlayerInfoButton = function (e) {
    if (e) {
      this.dialogDisp.btn_player.playerID = this.infoProperties.messageVO.attackerID;
      this.itxt_value.textContentVO = new p.TextVO(this.infoProperties.messageVO.attackerName);
    }
    this.dialogDisp.btn_player.visible = e;
  };
  CastleSiegeMessageDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_player:
        m.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(f.CastlePlayerInfoDialog, new C.CastlePlayerInfoDialogProperties(t.target.playerID), h.CastleDialogConsts.DIALOG_TYPE_SINGLE);
        break;
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastleSiegeMessageDialog.prototype, "infoProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSiegeMessageDialog.NAME = "CastleSiegeMessageEx";
  return CastleSiegeMessageDialog;
}(g.CastleExternalDialog);
exports.CastleSiegeMessageDialog = _;
var m = require("./9.js");
var f = require("./94.js");
a.classImplementsInterfaces(_, "ICollectableRendererList");