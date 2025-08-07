Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./4.js");
var r = require("./42.js");
var l = function (e) {
  function CastleTreasureCompleteDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleTreasureCompleteDialog.NAME) || this;
  }
  n.__extends(CastleTreasureCompleteDialog, e);
  CastleTreasureCompleteDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_treasureMap_mapComplete_title")).verticalAlign = r.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("dialog_treasureMap_mapComplete_copy"));
  };
  CastleTreasureCompleteDialog.prototype.applyPropertiesLoaded = function (e = null) {
    c.CrestHelper.setCrestGraphics(this.dialogDisp.bg.crest, s.CastleModel.userData.playerCrest);
  };
  CastleTreasureCompleteDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleTreasureCompleteDialog.__initialize_static_members = function () {
    CastleTreasureCompleteDialog.NAME = "CastleTreasureComplete";
  };
  return CastleTreasureCompleteDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleTreasureCompleteDialog = l;
var c = require("./61.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");
l.__initialize_static_members();