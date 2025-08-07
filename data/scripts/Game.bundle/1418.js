Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./16.js");
var c = require("./4.js");
var u = require("./8.js");
var d = function (e) {
  function CastleCostInfoDialog(t = null) {
    CONSTRUCTOR_HACK;
    return e.call(this, t || CastleCostInfoDialog.NAME) || this;
  }
  n.__extends(CastleCostInfoDialog, e);
  CastleCostInfoDialog.prototype.initLoaded = function (t = null) {
    u.ButtonHelper.initBasicButton(this.dialogDisp.btn_cancle);
    u.ButtonHelper.initBasicButton(this.dialogDisp.btn_close);
    e.prototype.initLoaded.call(this, t);
  };
  CastleCostInfoDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_title, new s.LocalizedTextVO("costs"));
    var t = this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_value, new a.LocalizedNumberVO(this.costProperties.amount));
    if (c.CastleModel.currencyData.c2Amount < this.costProperties.amount) {
      t.color = l.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    } else {
      t.color = l.ClientConstColor.FONT_DEFAULT_COLOR;
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.TextVO(this.costProperties.copy));
    this.dialogDisp.info_bonus.visible = false;
    this.textFieldManager.registerTextField(this.dialogDisp.info_time.txt_value, new r.TextVO(this.costProperties.timestring));
  };
  CastleCostInfoDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_cancle:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleCostInfoDialog.prototype, "costProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleCostInfoDialog.__initialize_static_members = function () {
    CastleCostInfoDialog.NAME = "CastleCostInfoEx";
  };
  return CastleCostInfoDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleCostInfoDialog = d;
o.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();