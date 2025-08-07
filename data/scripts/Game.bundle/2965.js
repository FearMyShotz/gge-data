Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./129.js");
var c = require("./8.js");
var u = function (e) {
  function DoubleUnitsConfirmationDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, DoubleUnitsConfirmationDialog.NAME) || this;
  }
  n.__extends(DoubleUnitsConfirmationDialog, e);
  DoubleUnitsConfirmationDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    var i = this.dialogProperties.isSoldiers ? "dialog_recruit_doubleUnits_title" : "dialog_recruit_doubleTools_title";
    var n = this.dialogProperties.isSoldiers ? "dialog_recruit_doubleUnits_copy" : "dialog_recruit_doubleTools_copy";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO(i));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new s.LocalizedTextVO(n, [this.dialogProperties.amount, this.dialogProperties.name]));
    this.textFieldManager.registerTextField(this.dialogDisp.costContainer.txt_titleCost, new s.LocalizedTextVO("cost"));
    var o = this.textFieldManager.registerTextField(this.dialogDisp.costContainer.txt_cost, new a.LocalizedNumberVO(this.dialogProperties.cost));
    h.CostHelper.setCurrencyTextFieldColor(o, new p.CollectableTypeVO(d.CollectableEnum.C2), this.dialogProperties.cost);
    this.initBasicButtons([this.dialogDisp.btn_yes, this.dialogDisp.btn_no, this.dialogDisp.btn_close]);
    this.dialogDisp.costContainer.rubies.toolTipText = "gold";
  };
  DoubleUnitsConfirmationDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(l.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onPackageListUpdated));
  };
  DoubleUnitsConfirmationDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(l.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onPackageListUpdated));
  };
  DoubleUnitsConfirmationDialog.prototype.onPackageListUpdated = function (e) {
    if (e.params && e.params.length > 0 && r.int(e.params[0]) == this.dialogProperties.listID) {
      this.hide();
    }
  };
  DoubleUnitsConfirmationDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (c.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_no:
          this.hide();
          break;
        case this.dialogDisp.btn_yes:
          this.confirmAction();
          this.hide();
      }
    }
  };
  DoubleUnitsConfirmationDialog.prototype.confirmAction = function () {
    this.dialogProperties.onDoubleUnitsConfirmed();
  };
  Object.defineProperty(DoubleUnitsConfirmationDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  DoubleUnitsConfirmationDialog.__initialize_static_members = function () {
    DoubleUnitsConfirmationDialog.NAME = "DoubleUnitsConfirmation";
  };
  return DoubleUnitsConfirmationDialog;
}(require("./11.js").CastleExternalDialog);
exports.DoubleUnitsConfirmationDialog = u;
var d = require("./12.js");
var p = require("./74.js");
var h = require("./66.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");
u.__initialize_static_members();