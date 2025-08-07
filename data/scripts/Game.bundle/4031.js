Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function CastleUnderworldFinishEasyModeDialog(t = CastleUnderworldFinishEasyModeDialog.NAME) {
    CONSTRUCTOR_HACK;
    return e.call(this, t) || this;
  }
  n.__extends(CastleUnderworldFinishEasyModeDialog, e);
  CastleUnderworldFinishEasyModeDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel, this.dialogDisp.btn_close]);
  };
  CastleUnderworldFinishEasyModeDialog.prototype.setToolTips = function () {
    e.prototype.setToolTips.call(this);
  };
  CastleUnderworldFinishEasyModeDialog.prototype.setCopyTexts = function () {
    e.prototype.setCopyTexts.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO(this.dialogProperties.copy));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO(this.dialogProperties.title));
  };
  CastleUnderworldFinishEasyModeDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        if (t.target.basicButton.enabled) {
          if (this.dialogProperties.functionYes) {
            this.dialogProperties.functionYes();
          }
          this.hide();
        }
        break;
      case this.dialogDisp.btn_close:
        if (this.dialogProperties.functionClose) {
          this.dialogProperties.functionClose();
        }
        this.hide();
        break;
      case this.dialogDisp.btn_cancel:
        if (this.dialogProperties.functionNo) {
          this.dialogProperties.functionNo();
        }
        this.hide();
    }
  };
  Object.defineProperty(CastleUnderworldFinishEasyModeDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleUnderworldFinishEasyModeDialog.__initialize_static_members = function () {
    CastleUnderworldFinishEasyModeDialog.NAME = "CastleUnderworldFinishEasy";
  };
  return CastleUnderworldFinishEasyModeDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleUnderworldFinishEasyModeDialog = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");
s.__initialize_static_members();