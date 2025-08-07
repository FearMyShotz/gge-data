Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./4.js");
var l = function (e) {
  function CastleRedAllianceAlienInvasionEventTeaserDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleRedAllianceAlienInvasionEventTeaserDialog.NAME) || this;
  }
  n.__extends(CastleRedAllianceAlienInvasionEventTeaserDialog, e);
  CastleRedAllianceAlienInvasionEventTeaserDialog.prototype.setText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO(CastleRedAllianceAlienInvasionEventTeaserDialog.TEXT_ID_HEADER));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new s.LocalizedTextVO(CastleRedAllianceAlienInvasionEventTeaserDialog.TEXT_ID_DESCRIPTION));
  };
  CastleRedAllianceAlienInvasionEventTeaserDialog.prototype.getEventVO = function () {
    return r.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE);
  };
  CastleRedAllianceAlienInvasionEventTeaserDialog.__initialize_static_members = function () {
    CastleRedAllianceAlienInvasionEventTeaserDialog.NAME = "CastleRedAllianceAlienInvasionEventTeaser";
    CastleRedAllianceAlienInvasionEventTeaserDialog.TEXT_ID_HEADER = "dialog_redAlienInvasion_message_header";
    CastleRedAllianceAlienInvasionEventTeaserDialog.TEXT_ID_DESCRIPTION = "dialog_redAlienInvasionAlliance_message_copy";
  };
  return CastleRedAllianceAlienInvasionEventTeaserDialog;
}(require("./679.js").CastleBasicSpecialEventTeaserDialog);
exports.CastleRedAllianceAlienInvasionEventTeaserDialog = l;
o.classImplementsInterfaces(l, "ICollectableRendererList");
l.__initialize_static_members();