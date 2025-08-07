Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./8.js");
var r = require("./107.js");
var l = function (e) {
  function CastleCharacterYesNoOKDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleCharacterYesNoOKDialog.NAME) || this;
  }
  n.__extends(CastleCharacterYesNoOKDialog, e);
  CastleCharacterYesNoOKDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    s.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_no, this.dialogDisp.btn_yes]);
  };
  CastleCharacterYesNoOKDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.TextVO(this.charcterYesNoOKDialogProperties.title));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.TextVO(this.charcterYesNoOKDialogProperties.copy)).autoFitToBounds = true;
    this.dialogDisp.btn_no.visible = this.charcterYesNoOKDialogProperties.showCancleButton;
    r.CharacterHelper.createCharacterBig(this.charcterYesNoOKDialogProperties.character, this.dialogDisp.mc_char, 167, 191);
  };
  CastleCharacterYesNoOKDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_yes:
        this.hide();
        if (this.charcterYesNoOKDialogProperties.functionYes != null) {
          this.charcterYesNoOKDialogProperties.functionYes(this.charcterYesNoOKDialogProperties.params);
        }
        break;
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_no:
        this.hide();
        if (this.charcterYesNoOKDialogProperties.functionNo != null) {
          this.charcterYesNoOKDialogProperties.functionNo(null);
        }
    }
  };
  Object.defineProperty(CastleCharacterYesNoOKDialog.prototype, "charcterYesNoOKDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleCharacterYesNoOKDialog.__initialize_static_members = function () {
    CastleCharacterYesNoOKDialog.NAME = "CastleCharacterYesNoOKExt";
  };
  return CastleCharacterYesNoOKDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleCharacterYesNoOKDialog = l;
o.classImplementsInterfaces(l, "ICollectableRendererList");
l.__initialize_static_members();