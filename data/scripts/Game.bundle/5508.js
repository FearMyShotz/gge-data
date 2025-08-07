Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./4.js");
var l = require("./8.js");
var c = function (e) {
  function CastleAllianceNomadInvasionEventTeaserDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleAllianceNomadInvasionEventTeaserDialog.NAME) || this;
  }
  n.__extends(CastleAllianceNomadInvasionEventTeaserDialog, e);
  CastleAllianceNomadInvasionEventTeaserDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    l.ButtonHelper.initBasicButton(this.dialogDisp.btn_eventDialog);
  };
  CastleAllianceNomadInvasionEventTeaserDialog.prototype.setText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("message_header_invasion_start"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_eventDialog.txt_label, new s.LocalizedTextVO("panel_action_event"));
    if (this.getEventVO().khanCampBarVO && r.CastleModel.userData.isLegend) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new s.LocalizedTextVO("dialog_nomadinvasion_messageKhanContent"));
      this.dialogDisp.mc_khan.visible = true;
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new s.LocalizedTextVO("dialog_nomadinvasion_message"));
      this.dialogDisp.mc_khan.visible = false;
    }
  };
  CastleAllianceNomadInvasionEventTeaserDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_eventDialog:
        this.layoutManager.hideAllDialogs();
        this.getEventVO().openDialog();
    }
  };
  CastleAllianceNomadInvasionEventTeaserDialog.prototype.getEventVO = function () {
    return r.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
  };
  CastleAllianceNomadInvasionEventTeaserDialog.__initialize_static_members = function () {
    CastleAllianceNomadInvasionEventTeaserDialog.NAME = "CastleAllianceNomadInvasionEventTeaser";
  };
  return CastleAllianceNomadInvasionEventTeaserDialog;
}(require("./681.js").CastleBasicSpecialEventTeaserDialog);
exports.CastleAllianceNomadInvasionEventTeaserDialog = c;
o.classImplementsInterfaces(c, "ICollectableRendererList");
c.__initialize_static_members();