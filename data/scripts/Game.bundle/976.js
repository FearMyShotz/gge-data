Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./39.js");
var h = require("./28.js");
var g = require("./1417.js");
var C = require("./4.js");
var _ = require("./171.js");
var m = function (e) {
  function CastleStartPeaceModeDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleStartPeaceModeDialog.NAME) || this;
  }
  n.__extends(CastleStartPeaceModeDialog, e);
  CastleStartPeaceModeDialog.prototype.initLoaded = function (t = null) {
    this.dialogDisp.mc_castleSelector.gotoAndStop(1);
    this.dialogDisp.mc_castleSelector.visible = false;
    this.dialogDisp.info_time.mc_icon_more.visible = false;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new u.LocalizedTextVO("dialog_startPeaceMode_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new u.LocalizedTextVO("dialog_startPeaceMode_decription", [String(r.PlayerConst.PEACE_MODE_HEAT_UP * h.ClientConstTime.SEC_2_HOURES), String(r.PlayerConst.PEACE_MODE_COOLDOWN * h.ClientConstTime.SEC_2_HOURES)])).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_title, new u.LocalizedTextVO("costs"));
    this.itxt_costValue ||= this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_value, new c.LocalizedNumberVO(0));
    this._peaceTimeList ||= new f.ComboboxComponent(this.dialogDisp.info_time.mc_combobox, "", 1, 40, 45);
    this.dialogDisp.info_time.mc_icon.toolTipText = "runTime";
    this.dialogDisp.info_costs.toolTipText = p.ClientConstTextIds.C2;
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancle]);
    e.prototype.initLoaded.call(this, t);
  };
  CastleStartPeaceModeDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.initDelayedButtons([this.dialogDisp.btn_ok]);
    this.fillPeaceTimeList();
    this._peaceTimeList.disp.addEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onComboboxChange));
    this.setPrice();
  };
  CastleStartPeaceModeDialog.prototype.fillPeaceTimeList = function () {
    var e;
    this._peaceTimeList.clearItems();
    for (var t = 0; t < r.PlayerConst.PEACE_MODE_DURATION.length; t++) {
      (e = new _.ComboboxItemRendererVO()).itemLabel = a.TimeStringHelper.getCommaTimeStringFromSeconds(r.PlayerConst.PEACE_MODE_DURATION[t], l.Localize.text);
      e.data = r.PlayerConst.PEACE_MODE_C2[t];
      this._peaceTimeList.addItem(e);
    }
    this._peaceTimeList.selectItemIndex(0);
  };
  CastleStartPeaceModeDialog.prototype.onComboboxChange = function (e) {
    this.setPrice();
  };
  CastleStartPeaceModeDialog.prototype.setPrice = function () {
    var e = d.int(d.int(this._peaceTimeList.selectedData));
    e = d.int(C.CastleModel.costsData.getFinalCostsC2(e));
    this.itxt_costValue.textContentVO.numberValue = e;
    O.CostHelper.setCostC2TextFieldColor(this.itxt_costValue, e);
  };
  CastleStartPeaceModeDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancle:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        C.CastleModel.smartfoxClient.sendCommandVO(new g.C2SPeaceModeStartVO(this._peaceTimeList.selectedId));
        this.hide();
    }
  };
  CastleStartPeaceModeDialog.__initialize_static_members = function () {
    CastleStartPeaceModeDialog.NAME = "CastleBuyProtectionBoost";
  };
  return CastleStartPeaceModeDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleStartPeaceModeDialog = m;
var f = require("./178.js");
var O = require("./66.js");
s.classImplementsInterfaces(m, "ICollectableRendererList");
m.__initialize_static_members();