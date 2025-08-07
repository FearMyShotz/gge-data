Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./277.js");
var c = require("./4.js");
var u = require("./8.js");
var d = function (e) {
  function CastleSamuraiInvasionEventTeaserDialog() {
    return e.call(this, CastleSamuraiInvasionEventTeaserDialog.NAME) || this;
  }
  n.__extends(CastleSamuraiInvasionEventTeaserDialog, e);
  CastleSamuraiInvasionEventTeaserDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    u.ButtonHelper.initBasicButton(this.dialogDisp.btn_goTo);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_goTo.txt_text, new r.LocalizedTextVO("panel_action_event")).autoFitToBounds = true;
  };
  CastleSamuraiInvasionEventTeaserDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    var i = this.getEventVO();
    var n = !!i && i.daimyoInfoVO.isEnabled;
    this.dialogDisp.mc_teaser1.visible = !n;
    this.dialogDisp.mc_teaser2.visible = !n;
    this.dialogDisp.mc_teaserDaimyo1.visible = n;
    this.dialogDisp.mc_teaserDaimyo2.visible = n;
  };
  CastleSamuraiInvasionEventTeaserDialog.prototype.setText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO("dialog_samuraiInvasion_message_header"));
    var e = this.getEventVO();
    var t = "dialog_samuraiInvasion_message_copy";
    if (e && e.daimyoInfoVO.isEnabled) {
      t = "dialog_samuraiInvasionDaimyo_message_copy";
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new r.LocalizedTextVO(t)).autoFitToBounds = true;
  };
  CastleSamuraiInvasionEventTeaserDialog.prototype.getEventVO = function () {
    if (c.CastleModel.specialEventData.isEventActive(s.EventConst.EVENTTYPE_SAMURAI_INVASION)) {
      return c.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_SAMURAI_INVASION);
    } else {
      return null;
    }
  };
  CastleSamuraiInvasionEventTeaserDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_goTo:
        var i = new h.CastleQuestConditionVO();
        i.loadFromParamArray([l.ClientConstQuestCondition.QUESTTYPE_OPEN_SAMURAI_EVENT_DIALOG]);
        o.CommandController.instance.executeCommand(p.IngameClientCommands.SHOW_HOW_TODO_QUESTCONDITION_COMMAND, [null, i]);
    }
  };
  CastleSamuraiInvasionEventTeaserDialog.NAME = "CastleSamuraiInvasionEventTeaser_Daimyo";
  return CastleSamuraiInvasionEventTeaserDialog;
}(require("./681.js").CastleBasicSpecialEventTeaserDialog);
exports.CastleSamuraiInvasionEventTeaserDialog = d;
var p = require("./29.js");
var h = require("./1639.js");
a.classImplementsInterfaces(d, "ICollectableRendererList");