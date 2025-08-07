Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function CastleFactionEventLostLastCampDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleFactionEventLostLastCampDialog.NAME) || this;
  }
  n.__extends(CastleFactionEventLostLastCampDialog, e);
  CastleFactionEventLostLastCampDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("faction_message_lostlastCamp_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("faction_message_lostlastCamp_copy"));
  };
  CastleFactionEventLostLastCampDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.dialogDisp.mc_camp.gotoAndStop(this.dialogProperties.factionID);
  };
  CastleFactionEventLostLastCampDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (t.target == this.dialogDisp.btn_close || t.target == this.dialogDisp.btn_ok) {
      this.hide();
    }
  };
  Object.defineProperty(CastleFactionEventLostLastCampDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionEventLostLastCampDialog.__initialize_static_members = function () {
    CastleFactionEventLostLastCampDialog.NAME = "CastleFactionEventLostLastCamp";
  };
  return CastleFactionEventLostLastCampDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleFactionEventLostLastCampDialog = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");
s.__initialize_static_members();