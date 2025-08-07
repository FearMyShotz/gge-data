Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./39.js");
var u = require("./779.js");
var d = require("./4.js");
var p = require("./8.js");
var h = function (e) {
  function CastleMercenaryRefreshMissionDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleMercenaryRefreshMissionDialog.NAME) || this;
  }
  n.__extends(CastleMercenaryRefreshMissionDialog, e);
  CastleMercenaryRefreshMissionDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.LocalizedTextVO("dialog_mission_swap")).verticalAlign = o.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new l.LocalizedTextVO("dialog_mission_swap_desc"));
    this.txt_c2 = this.textFieldManager.registerTextField(this.dialogDisp.mc_c2.txt_value, new r.LocalizedNumberVO(s.MercenaryConst.REFRESH_MISSION_COST));
    this.dialogDisp.mc_c2.mouseChildren = false;
    this.dialogDisp.mc_c2.toolTipText = c.ClientConstTextIds.C2;
    p.ButtonHelper.initBasicButtons([this.dialogDisp.btn_no, this.dialogDisp.btn_close, this.dialogDisp.btn_yes]);
  };
  CastleMercenaryRefreshMissionDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    p.ButtonHelper.delayEnableButton(this.dialogDisp.btn_yes, true);
    g.CostHelper.setCostC2TextFieldColor(this.txt_c2, s.MercenaryConst.REFRESH_MISSION_COST);
    d.CastleModel.mercenaryData.addEventListener(u.CastleMercenaryDataEvent.NEW_MISSIONS_ARRIVED, this.bindFunction(this.onNewMissionsArrived));
  };
  CastleMercenaryRefreshMissionDialog.prototype.onNewMissionsArrived = function (e) {
    this.hide();
  };
  CastleMercenaryRefreshMissionDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    d.CastleModel.mercenaryData.removeEventListener(u.CastleMercenaryDataEvent.NEW_MISSIONS_ARRIVED, this.bindFunction(this.onNewMissionsArrived));
  };
  CastleMercenaryRefreshMissionDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (p.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_no:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_yes:
          this.refreshMission();
      }
    }
  };
  CastleMercenaryRefreshMissionDialog.prototype.refreshMission = function () {
    this.dialogProperties.confirmRefreshCallback();
    this.hide();
  };
  Object.defineProperty(CastleMercenaryRefreshMissionDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleMercenaryRefreshMissionDialog.__initialize_static_members = function () {
    CastleMercenaryRefreshMissionDialog.NAME = "CastleMercenaryRefreshMissionExt";
  };
  return CastleMercenaryRefreshMissionDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleMercenaryRefreshMissionDialog = h;
var g = require("./66.js");
a.classImplementsInterfaces(h, "ICollectableRendererList");
h.__initialize_static_members();