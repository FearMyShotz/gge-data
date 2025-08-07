Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = function (e) {
  function CastleConfirmCostsDialog(t = null) {
    CONSTRUCTOR_HACK;
    return e.call(this, t ?? CastleConfirmCostsDialog.NAME) || this;
  }
  n.__extends(CastleConfirmCostsDialog, e);
  CastleConfirmCostsDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (this.yesNoWithCostsProperties.storage) {
      this.resourceListComponent.otherResourceStorageForCosts = this.yesNoWithCostsProperties.storage;
    }
    this.resourceListComponent.displayAsCosts = true;
    this.resourceListComponent.updateComponent(this.yesNoWithCostsProperties.costs);
  };
  CastleConfirmCostsDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.initBasicButtons([this.dialogDisp.btn_yes, this.dialogDisp.btn_close, this.dialogDisp.btn_no]);
    this.resourceListComponent = new l.CastleResourceListComponent(this.dialogDisp.mc_costs, Library.CastleInterfaceElements.ResourceListCompnent_Item, 3, 2, this.dialogDisp.mc_costs);
    var t = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(this.yesNoWithCostsProperties.title));
    t.autoFitToBounds = true;
    t.verticalAlign = o.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.TextVO(this.yesNoWithCostsProperties.copy)).autoFitToBounds = true;
    this.dialogDisp.btn_yes.label = this.yesNoWithCostsProperties.buttonLabel_yes;
    this.dialogDisp.btn_no.label = this.yesNoWithCostsProperties.buttonLabel_no;
  };
  CastleConfirmCostsDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_yes:
        this.hide();
        if (this.yesNoWithCostsProperties.functionYes != null) {
          this.yesNoWithCostsProperties.functionYes(null);
        }
        break;
      case this.dialogDisp.btn_close:
        this.hide();
        if (this.yesNoWithCostsProperties.functionClose != null) {
          this.yesNoWithCostsProperties.functionClose(null);
        }
        break;
      case this.dialogDisp.btn_no:
        this.hide();
        if (this.yesNoWithCostsProperties.functionNo != null) {
          this.yesNoWithCostsProperties.functionNo(null);
        }
    }
  };
  Object.defineProperty(CastleConfirmCostsDialog.prototype, "yesNoWithCostsProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleConfirmCostsDialog.__initialize_static_members = function () {
    CastleConfirmCostsDialog.NAME = "CastleStandardYesNoWithCostsEx";
  };
  return CastleConfirmCostsDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleConfirmCostsDialog = r;
var l = require("./320.js");
a.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();