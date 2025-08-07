Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./4.js");
var r = function (e) {
  function CastleNewSocketDialog() {
    return e.call(this, CastleNewSocketDialog.NAME) || this;
  }
  n.__extends(CastleNewSocketDialog, e);
  CastleNewSocketDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new a.LocalizedTextVO("dialog_gems_insertGems_text", [this.dialogProperties.gemVO.nameString, this.dialogProperties.eqVO.nameString]));
  };
  CastleNewSocketDialog.prototype.onValidConfirmClicked = function () {
    s.CastleModel.gemData.bindGem(this.dialogProperties.gemVO, this.dialogProperties.eqVO, this.dialogProperties.lordID, false);
  };
  CastleNewSocketDialog.NAME = "CastleNewSocket";
  return CastleNewSocketDialog;
}(require("./907.js").ACastleSocketDialog);
exports.CastleNewSocketDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");