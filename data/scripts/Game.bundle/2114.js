Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./39.js");
var g = require("./28.js");
var C = require("./2115.js");
var _ = require("./4.js");
var m = require("./171.js");
var f = function (e) {
  function CastleFactionProtectionModeDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleFactionProtectionModeDialog.NAME) || this;
  }
  n.__extends(CastleFactionProtectionModeDialog, e);
  CastleFactionProtectionModeDialog.prototype.initLoaded = function (t = null) {
    var i = p.int(l.FactionConst.getPeaceHeatup(false) * g.ClientConstTime.SEC_2_HOURES);
    var n = p.int(l.FactionConst.getPeaceDuration(false) * g.ClientConstTime.SEC_2_HOURES / 24);
    this.dialogDisp.mc_castleSelector.gotoAndStop(1);
    this.dialogDisp.mc_castleSelector.visible = false;
    this.dialogDisp.info_time.mc_icon_more.visible = false;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new d.LocalizedTextVO("factionProtection_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new d.LocalizedTextVO("factionProtection_copy", [i, n]));
    this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_title, new d.LocalizedTextVO("costs"));
    this.itxt_value ||= this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_value, new u.LocalizedNumberVO(0));
    this._peaceTimeList ||= new O.ComboboxComponent(this.dialogDisp.info_time.mc_combobox, "", 1, 40, 45);
    this.dialogDisp.info_time.mc_icon.toolTipText = "runTime";
    this.dialogDisp.info_costs.toolTipText = h.ClientConstTextIds.C2;
    this.initBasicButtons([this.dialogDisp.btn_cancle, this.dialogDisp.btn_close]);
    e.prototype.initLoaded.call(this, t);
  };
  CastleFactionProtectionModeDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.initDelayedButtons([this.dialogDisp.btn_ok]);
    this.fillPeaceTimeList();
    this._peaceTimeList.disp.addEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onComboboxChange));
    this.setPrice();
  };
  CastleFactionProtectionModeDialog.prototype.fillPeaceTimeList = function () {
    this._peaceTimeList.clearItems();
    var e = new m.ComboboxItemRendererVO();
    e.itemLabel = s.TimeStringHelper.getCommaTimeStringFromSeconds(l.FactionConst.getPeaceDuration(a.EnvGlobalsHandler.globals.isTest), c.Localize.text);
    e.data = l.FactionConst.getPeaceC2Cost();
    this._peaceTimeList.addItem(e);
    this._peaceTimeList.selectItemIndex(0);
  };
  CastleFactionProtectionModeDialog.prototype.onComboboxChange = function (e) {
    this.setPrice();
  };
  CastleFactionProtectionModeDialog.prototype.setPrice = function () {
    var e = p.int(p.int(this._peaceTimeList.selectedData));
    e = p.int(_.CastleModel.costsData.getFinalCostsC2(e));
    this.itxt_value.textContentVO.numberValue = e;
  };
  CastleFactionProtectionModeDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancle:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        _.CastleModel.smartfoxClient.sendCommandVO(new C.C2SStartFactionProtectionVO(this._peaceTimeList.selectedId));
        this.hide();
    }
  };
  CastleFactionProtectionModeDialog.__initialize_static_members = function () {
    CastleFactionProtectionModeDialog.NAME = "CastleBuyProtectionBoost";
  };
  return CastleFactionProtectionModeDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleFactionProtectionModeDialog = f;
var O = require("./178.js");
r.classImplementsInterfaces(f, "ICollectableRendererList");
f.__initialize_static_members();