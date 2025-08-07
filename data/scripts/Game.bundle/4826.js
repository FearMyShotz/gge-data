Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./8.js");
var l = function (e) {
  function CastleEilandTitleErrorDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleEilandTitleErrorDialog.NAME) || this;
  }
  n.__extends(CastleEilandTitleErrorDialog, e);
  CastleEilandTitleErrorDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleEilandTitleErrorDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    r.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new s.LocalizedTextVO(this.dialogProperties.descTextID)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.title_txt, new s.LocalizedTextVO(this.dialogProperties.titleTextID)).autoFitToBounds = true;
  };
  Object.defineProperty(CastleEilandTitleErrorDialog.prototype, "dialogProperties", {
    get: function () {
      if (a.instanceOfClass(this.properties, "CastleEilandTitleErrorProperties")) {
        return this.properties;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandTitleErrorDialog.prototype, "errorDialog", {
    get: function () {
      if (a.instanceOfClass(this.disp, "CastleEilandTitleErrorDialog")) {
        return castAs(this.disp, "CastleEilandTitleErrorDialog");
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleEilandTitleErrorDialog.__initialize_static_members = function () {
    CastleEilandTitleErrorDialog.NAME = "CastleEilandTitleErrorExternal";
  };
  return CastleEilandTitleErrorDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleEilandTitleErrorDialog = l;
o.classImplementsInterfaces(l, "ICollectableRendererList");
l.__initialize_static_members();