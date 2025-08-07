Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = function (e) {
  function CastleFactionUnitLimitDialog() {
    var t = this;
    t._canUpgrade = false;
    CONSTRUCTOR_HACK;
    (t = e.call(this, new (o.getDefinitionByName("CastleStandardOk"))()) || this).textFieldManager.registerTextField(t.standardDialog.btn_label.txt_field, new s.LocalizedTextVO("dialog_questInfo_showMe"));
    return t;
  }
  n.__extends(CastleFactionUnitLimitDialog, e);
  CastleFactionUnitLimitDialog.prototype.applyProperties = function () {
    this._factionUnitCampBuildingVO = c.Iso.data.objects.provider.getObjectByType(l.IsoObjectEnum.FACTION_UNIT_CAMP);
    this._canUpgrade = this._factionUnitCampBuildingVO.canUpgrade();
    e.prototype.applyProperties.call(this);
  };
  CastleFactionUnitLimitDialog.prototype.show = function () {
    e.prototype.show.call(this);
    this.standardDialog.btn_label.visible = this._canUpgrade;
    this.standardDialog.btn_ok.visible = !this._canUpgrade;
  };
  CastleFactionUnitLimitDialog.prototype.getDialogMessage = function () {
    if (this._canUpgrade) {
      return "dialog_factionRecruit_alert_Upgrade_copy";
    } else {
      return "dialog_factionRecruit_alert_NoUpgrade_copy";
    }
  };
  CastleFactionUnitLimitDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.standardDialog.btn_label:
        c.Iso.renderer.mouse.changeSelectedTarget(c.Iso.renderer.objects.provider.getObjectByVO(this._factionUnitCampBuildingVO));
        this.layoutManager.hideAllDialogs();
    }
  };
  CastleFactionUnitLimitDialog.__initialize_static_members = function () {
    CastleFactionUnitLimitDialog.NAME = "CastleFactionUnitLimitDialog";
  };
  return CastleFactionUnitLimitDialog;
}(require("./38.js").CastleStandardOkDialog);
exports.CastleFactionUnitLimitDialog = r;
var l = require("./80.js");
var c = require("./34.js");
a.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();