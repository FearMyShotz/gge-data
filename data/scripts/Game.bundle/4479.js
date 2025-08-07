Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./256.js");
var r = function (e) {
  function CastleNomadHunterEventDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleNomadHunterEventDialog.NAME) || this;
  }
  n.__extends(CastleNomadHunterEventDialog, e);
  CastleNomadHunterEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new a.LocalizedTextVO("dialog_nomadHunter_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_detailedDescription, new a.LocalizedTextVO("dialog_nomadHunter_desc_detail")).autoFitToBounds = true;
  };
  Object.defineProperty(CastleNomadHunterEventDialog.prototype, "merchantScrollItem", {
    get: function () {
      return l.CastleNomadHunterEventScrollItem;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleGenericMerchantDialog.prototype, "merchantScrollItem").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleNomadHunterEventDialog.__initialize_static_members = function () {
    CastleNomadHunterEventDialog.NAME = "CastleNomadHunterEvent";
  };
  return CastleNomadHunterEventDialog;
}(s.CastleGenericMerchantDialog);
exports.CastleNomadHunterEventDialog = r;
var l = require("./4480.js");
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();