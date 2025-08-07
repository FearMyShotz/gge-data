Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./39.js");
var s = require("./8.js");
var r = function (e) {
  function CastleBuyTempCommanderDialog() {
    return e.call(this) || this;
  }
  n.__extends(CastleBuyTempCommanderDialog, e);
  CastleBuyTempCommanderDialog.prototype.initLoaded = function (t = null) {
    s.ButtonHelper.initBasicButton(this.dialogDisp.btn_ok);
    e.prototype.initLoaded.call(this, t);
  };
  CastleBuyTempCommanderDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.dialogDisp.info_costs.mc_discount.visible = false;
  };
  CastleBuyTempCommanderDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.dialogDisp.info_time.visible = false;
    this.dialogDisp.info_costs.toolTipText = a.ClientConstTextIds.C2;
  };
  CastleBuyTempCommanderDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
        this.dialogProperties.functionOk();
    }
  };
  Object.defineProperty(CastleBuyTempCommanderDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  return CastleBuyTempCommanderDialog;
}(require("./1418.js").CastleCostInfoDialog);
exports.CastleBuyTempCommanderDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");