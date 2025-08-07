Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./39.js");
var p = require("./4177.js");
var h = require("./4.js");
var g = require("./11.js");
var C = createjs.Point;
var _ = function (e) {
  function CastleRelocateDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleRelocateDialog.NAME) || this;
  }
  n.__extends(CastleRelocateDialog, e);
  CastleRelocateDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.i_txt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new c.LocalizedTextVO("dialog_relocate_desc_01", []));
    this.i_costs_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.txt_cost0.txt_cost, new l.LocalizedNumberVO(0));
  };
  CastleRelocateDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.dialogDisp.txt_cost0.mc_icon.gotoAndStop(5);
    this.dialogDisp.txt_cost0.toolTipText = d.ClientConstTextIds.C2;
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel, this.dialogDisp.btn_close]);
    this.i_txt_desc.textContentVO.textReplacements = [o.TimeStringHelper.getTimeToString(h.CastleModel.userData.nextRelocationDuration, o.TimeStringHelper.ONE_TIME_HOURS_FORMAT, r.Localize.text)];
  };
  CastleRelocateDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.i_costs_txt_value.textContentVO.numberValue = this.getCost();
    m.CostHelper.setCostC2TextFieldColor(this.i_costs_txt_value, this.getCost());
  };
  CastleRelocateDialog.prototype.getCost = function () {
    return u.int(h.CastleModel.costsData.getFinalCostsC2(s.RelocationConst.getRelocationCost(h.CastleModel.userData.relocationCount)));
  };
  CastleRelocateDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        h.CastleModel.smartfoxClient.sendCommandVO(new p.C2SStartRelocationVO(this.dialogProperties.posX, this.dialogProperties.posY));
        h.CastleModel.worldmapCameraData.savedMapPosition = new C(this.dialogProperties.posX, this.dialogProperties.posY);
        this.hide();
        break;
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancel:
        this.hide();
    }
  };
  Object.defineProperty(CastleRelocateDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleRelocateDialog.__initialize_static_members = function () {
    CastleRelocateDialog.NAME = "CastleRelocate";
  };
  return CastleRelocateDialog;
}(g.CastleExternalDialog);
exports.CastleRelocateDialog = _;
var m = require("./66.js");
a.classImplementsInterfaces(_, "ICollectableRendererList");
_.__initialize_static_members();