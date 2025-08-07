Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./4.js");
var l = function (e) {
  function CastleAllianceAlienInvasionEventTeaserDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleAllianceAlienInvasionEventTeaserDialog.NAME) || this;
  }
  n.__extends(CastleAllianceAlienInvasionEventTeaserDialog, e);
  CastleAllianceAlienInvasionEventTeaserDialog.prototype.setText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO(CastleAllianceAlienInvasionEventTeaserDialog.TEXT_ID_HEADER));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new s.LocalizedTextVO(CastleAllianceAlienInvasionEventTeaserDialog.TEXT_ID_DESCRIPTION));
  };
  CastleAllianceAlienInvasionEventTeaserDialog.prototype.getEventVO = function () {
    return r.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE);
  };
  CastleAllianceAlienInvasionEventTeaserDialog.__initialize_static_members = function () {
    CastleAllianceAlienInvasionEventTeaserDialog.NAME = "CastleAllianceAlienInvasionEventTeaser";
    CastleAllianceAlienInvasionEventTeaserDialog.TEXT_ID_HEADER = "dialog_alienInvasion_message_header";
    CastleAllianceAlienInvasionEventTeaserDialog.TEXT_ID_DESCRIPTION = "dialog_alienInvasionAlliance_message_copy";
  };
  return CastleAllianceAlienInvasionEventTeaserDialog;
}(require("./681.js").CastleBasicSpecialEventTeaserDialog);
exports.CastleAllianceAlienInvasionEventTeaserDialog = l;
o.classImplementsInterfaces(l, "ICollectableRendererList");
l.__initialize_static_members();