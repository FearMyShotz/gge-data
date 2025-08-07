Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./4.js");
var l = require("./8.js");
var c = function (e) {
  function CastleExpansionDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleExpansionDialog.NAME) || this;
  }
  n.__extends(CastleExpansionDialog, e);
  CastleExpansionDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok]);
  };
  CastleExpansionDialog.prototype.showLoaded = function (t) {
    var i;
    if (t === undefined) {
      t = null;
    }
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("expansion_title"));
    l.ButtonHelper.enableButton(this.dialogDisp.btn_help, this.isOutOfTutorial());
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    if (this.expansionDialogProperties.isPremium) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("expansion_buyPremium"));
      (i = new u.CollectableList()).addItem(new d.CollectableItemC2VO(r.CastleModel.costsData.getFinalCostsC2(r.CastleModel.expansionCostsData.getExpandCostC2())));
      h.CostHelper.initAsCosts(i, this.dialogDisp);
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("expansion_buy"));
      i = r.CastleModel.expansionCostsData.getExpandCostNormal();
      h.CostHelper.initAsCosts(i, this.dialogDisp);
    }
  };
  CastleExpansionDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (l.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_cancel:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.hide();
          if (this.expansionDialogProperties.functionOk != null) {
            this.expansionDialogProperties.functionOk();
          }
          break;
        case this.dialogDisp.btn_help:
          p.CastleDialogHandler.getInstance().showHelper("", a.Localize.text("help_expand"));
      }
    }
  };
  Object.defineProperty(CastleExpansionDialog.prototype, "expansionDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleExpansionDialog.__initialize_static_members = function () {
    CastleExpansionDialog.NAME = "CastleExpansionExt";
  };
  return CastleExpansionDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleExpansionDialog = c;
var u = require("./48.js");
var d = require("./128.js");
var p = require("./9.js");
var h = require("./66.js");
o.classImplementsInterfaces(c, "ICollectableRendererList");
c.__initialize_static_members();