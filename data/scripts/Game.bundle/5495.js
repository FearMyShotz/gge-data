Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./8.js");
var r = require("./11.js");
var l = createjs.Point;
var c = function (e) {
  function CastleAlchemistRetirementDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleAlchemistRetirementDialog.NAME) || this;
  }
  n.__extends(CastleAlchemistRetirementDialog, e);
  CastleAlchemistRetirementDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_alchemistRetirement_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rewardHeader, new a.LocalizedTextVO("dialog_alchemistRetirement_rewardHeader"));
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close]);
    this.rewardListComponent = new u.CastleCenteredRewardRendererListComponent(this.dialogDisp, new l(44, 41));
  };
  CastleAlchemistRetirementDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.rewardListComponent.showRewards(this.dialogProperties.rewards);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new a.LocalizedTextVO("dialog_alchemistRetirement_description", this.dialogProperties.ingredients));
  };
  CastleAlchemistRetirementDialog.prototype.onClick = function (e) {
    if (s.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleAlchemistRetirementDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAlchemistRetirementDialog.__initialize_static_members = function () {
    CastleAlchemistRetirementDialog.NAME = "CastleAlchemistRetirementMessage";
  };
  return CastleAlchemistRetirementDialog;
}(r.CastleExternalDialog);
exports.CastleAlchemistRetirementDialog = c;
var u = require("./400.js");
o.classImplementsInterfaces(c, "ICollectableRendererList");
c.__initialize_static_members();