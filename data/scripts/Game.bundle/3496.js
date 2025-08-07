Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./39.js");
var l = function (e) {
  function CastleBountyhunterWinDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleBountyhunterWinDialog.NAME) || this;
  }
  n.__extends(CastleBountyhunterWinDialog, e);
  CastleBountyhunterWinDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("dialog_bountyhunterWin_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_winText, new s.LocalizedTextVO("dialog_bountyhunter_title_won"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward, new s.LocalizedTextVO("reward"));
    this.itxt_c1 = this.textFieldManager.registerTextField(this.dialogDisp.txt_c1, new a.LocalizedNumberVO(0));
    this.itxt_c2 = this.textFieldManager.registerTextField(this.dialogDisp.txt_c2, new a.LocalizedNumberVO(0));
    this.dialogDisp.mc_c1.toolTipText = r.ClientConstTextIds.C1;
    this.dialogDisp.mc_c2.toolTipText = r.ClientConstTextIds.C2;
  };
  CastleBountyhunterWinDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.itxt_c1.textContentVO.numberValue = this.dialogProperties.bountyPrizeC1;
    this.itxt_c2.textContentVO.numberValue = this.dialogProperties.bountyPrizeC2;
  };
  CastleBountyhunterWinDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastleBountyhunterWinDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleBountyhunterWinDialog.__initialize_static_members = function () {
    CastleBountyhunterWinDialog.NAME = "CastleBountyHunterWinExternal";
  };
  return CastleBountyhunterWinDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleBountyhunterWinDialog = l;
o.classImplementsInterfaces(l, "ICollectableRendererList");
l.__initialize_static_members();