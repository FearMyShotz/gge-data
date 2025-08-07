Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./207.js");
var l = require("./13.js");
var c = require("./20.js");
var u = require("./8.js");
var d = require("./11.js");
var p = function (e) {
  function AdvisorAttackInfoDialog() {
    return e.call(this, AdvisorAttackInfoDialog.NAME) || this;
  }
  n.__extends(AdvisorAttackInfoDialog, e);
  AdvisorAttackInfoDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    u.ButtonHelper.initButtons([this.dialogDisp.btn_close], c.ClickFeedbackButtonHover);
  };
  AdvisorAttackInfoDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("title_advisorInformation")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO(this.descriptionTextId)).autoFitToBounds = true;
  };
  Object.defineProperty(AdvisorAttackInfoDialog.prototype, "descriptionTextId", {
    get: function () {
      return "description_advisorInformation_" + r.AdvisorAttackHelper.getTextIDSuffix(this.dialogProperties.advisorType);
    },
    enumerable: true,
    configurable: true
  });
  AdvisorAttackInfoDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(AdvisorAttackInfoDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AdvisorAttackInfoDialog.NAME = "NomadAdvisorFunctionalityExt";
  return AdvisorAttackInfoDialog;
}(d.CastleExternalDialog);
exports.AdvisorAttackInfoDialog = p;
o.classImplementsInterfaces(d.CastleExternalDialog, "ICollectableRendererList");