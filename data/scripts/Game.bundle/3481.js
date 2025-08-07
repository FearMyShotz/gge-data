Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./31.js");
var r = require("./19.js");
var l = require("./8.js");
var c = require("./25.js");
var u = require("./11.js");
var d = createjs.Point;
var p = function (e) {
  function CastleUnderworldMoraleBoosterRewardDialog() {
    return e.call(this, CastleUnderworldMoraleBoosterRewardDialog.NAME) || this;
  }
  n.__extends(CastleUnderworldMoraleBoosterRewardDialog, e);
  CastleUnderworldMoraleBoosterRewardDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_info, this.dialogDisp.btn_forward, this.dialogDisp.btn_ok, this.dialogDisp.btn_close]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_lowLevelUnderworld_boosterTower_popup_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward_subtitle, new a.LocalizedTextVO("reward"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_message, new a.LocalizedTextVO("dialog_lowLevelUnderworld_boosterTower_popup_desc"));
    this.dialogDisp.btn_forward.toolTipText = "dialog_questInfo_showMe";
    this.dialogDisp.btn_forward.visible = false;
  };
  CastleUnderworldMoraleBoosterRewardDialog.prototype.onClick = function (e) {
    if (l.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_ok:
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  CastleUnderworldMoraleBoosterRewardDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (this.dialogProp) {
      c.CollectableRenderHelper.displaySingleItem(new s.CollectableRenderClips(this.dialogDisp.mc_item).addInfoBtn(this.dialogDisp.btn_info), this.dialogProp.decoCollectableItem, new r.CollectableRenderOptions(r.CollectableRenderOptions.SET_DEFAULT, new d(130, 130)));
    }
  };
  Object.defineProperty(CastleUnderworldMoraleBoosterRewardDialog.prototype, "dialogProp", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleUnderworldMoraleBoosterRewardDialog.NAME = "CastleUnderworldMoraleBoosterRewardDialog";
  return CastleUnderworldMoraleBoosterRewardDialog;
}(u.CastleExternalDialog);
exports.CastleUnderworldMoraleBoosterRewardDialog = p;
o.classImplementsInterfaces(p, "ICollectableRendererList");