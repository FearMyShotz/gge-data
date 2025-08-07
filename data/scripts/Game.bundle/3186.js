Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function CastleOutpostTeaserDialog() {
    var t = this;
    CONSTRUCTOR_HACK;
    (t = e.call(this, CastleOutpostTeaserDialog.NAME) || this).backgroundAlpha = 0.5;
    return t;
  }
  n.__extends(CastleOutpostTeaserDialog, e);
  CastleOutpostTeaserDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_outpostTeaser_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new a.LocalizedTextVO("dialog_outpostTeaser_copy1"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, new a.LocalizedTextVO("dialog_outpostTeaser_copy2"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy3, new a.LocalizedTextVO("dialog_outpostTeaser_copy3"));
  };
  CastleOutpostTeaserDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close]);
  };
  CastleOutpostTeaserDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleOutpostTeaserDialog.__initialize_static_members = function () {
    CastleOutpostTeaserDialog.NAME = "CastleOutpostTeaser";
  };
  return CastleOutpostTeaserDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleOutpostTeaserDialog = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");
s.__initialize_static_members();