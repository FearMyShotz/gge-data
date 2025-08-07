Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./4.js");
var c = require("./24.js");
var u = require("./42.js");
var d = function (e) {
  function CastleSeasonEventFailDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleSeasonEventFailDialog.NAME) || this;
  }
  n.__extends(CastleSeasonEventFailDialog, e);
  CastleSeasonEventFailDialog.prototype.applyProperties = function () {
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO("dialog_season_loose_titel")).verticalAlign = u.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    p.CrestHelper.setCrestGraphics(this.dialogDisp.bg.crest, l.CastleModel.userData.playerCrest);
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_deco);
    var e = new c.CastleGoodgameExternalClip(this.dialogProperties.assetName, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.dialogProperties.assetName), null, 0, false).asDisplayObject();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO(this.dialogProperties.copyTextID));
    this.dialogDisp.mc_deco.addChild(e);
  };
  CastleSeasonEventFailDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastleSeasonEventFailDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSeasonEventFailDialog.__initialize_static_members = function () {
    CastleSeasonEventFailDialog.NAME = "CastleSeasonEventFailEx";
  };
  return CastleSeasonEventFailDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleSeasonEventFailDialog = d;
var p = require("./61.js");
s.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();