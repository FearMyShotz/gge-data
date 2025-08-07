Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function CastleTreasureMapNoNewMapDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleTreasureMapNoNewMapDialog.NAME) || this;
  }
  n.__extends(CastleTreasureMapNoNewMapDialog, e);
  CastleTreasureMapNoNewMapDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close]);
  };
  CastleTreasureMapNoNewMapDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new a.LocalizedTextVO("dialog_treasureMap_noMoreMaps"));
  };
  CastleTreasureMapNoNewMapDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleTreasureMapNoNewMapDialog.__initialize_static_members = function () {
    CastleTreasureMapNoNewMapDialog.NAME = "CastleTreasureMapNoNewMap";
  };
  return CastleTreasureMapNoNewMapDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleTreasureMapNoNewMapDialog = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");
s.__initialize_static_members();