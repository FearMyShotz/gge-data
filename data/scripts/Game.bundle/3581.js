Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = function (e) {
  function CastleKingdomTeaserDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleKingdomTeaserDialog.NAME) || this;
  }
  n.__extends(CastleKingdomTeaserDialog, e);
  CastleKingdomTeaserDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO(this.teaserProperties.titleTextID));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description0, new s.LocalizedTextVO("dialog_kingdomteaser_copy2"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description1, new s.LocalizedTextVO("dialog_kingdomteaser_copy3"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description2, new s.LocalizedTextVO("dialog_kingdomteaser_copy4_v2", [this.teaserProperties.minLevel]));
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.background_container);
    this.dialogDisp.background_container.addChild(this.teaserProperties.backgroundImage);
  };
  CastleKingdomTeaserDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close]);
  };
  CastleKingdomTeaserDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleKingdomTeaserDialog.prototype, "teaserProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleKingdomTeaserDialog.__initialize_static_members = function () {
    CastleKingdomTeaserDialog.NAME = "CastleKingdomTeaser";
  };
  return CastleKingdomTeaserDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleKingdomTeaserDialog = r;
a.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();