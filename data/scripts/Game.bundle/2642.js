Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./13.js");
var l = function (e) {
  function FusionForgeHubDialogMain(t, i) {
    var n = e.call(this, t) || this;
    n._forgeDialogOpenedFunc = i;
    n.init();
    return n;
  }
  n.__extends(FusionForgeHubDialogMain, e);
  FusionForgeHubDialogMain.prototype.init = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("dialog_fusionHub_fusionForges_title"))).autoFitToBounds = true;
    this.dialogDisp.mc_list.mc_slider.visible = false;
    this._decoItem = new u.FusionForgeHubDialogMainItem(this.decoItemMc, a.FusionConst.DECORATION_FORGE_ID, c.DecorationForgeMainDialog, this.bindFunction(this._forgeDialogOpenedFunc));
  };
  FusionForgeHubDialogMain.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this._decoItem.onShow();
  };
  FusionForgeHubDialogMain.prototype.hide = function () {
    this._decoItem.onHide();
    e.prototype.hide.call(this);
  };
  Object.defineProperty(FusionForgeHubDialogMain.prototype, "decoItemMc", {
    get: function () {
      return this.dialogDisp.mc_list.mc_item0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeHubDialogMain.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  return FusionForgeHubDialogMain;
}(require("./35.js").CastleDialogSubLayer);
exports.FusionForgeHubDialogMain = l;
var c = require("./988.js");
var u = require("./2643.js");
o.classImplementsInterfaces(l, "ICollectableRendererList", "ISublayer");