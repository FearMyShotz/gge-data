Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./4.js");
var d = require("./24.js");
var p = require("./8.js");
var h = function (e) {
  function CastleColossusEventFinishedDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleColossusEventFinishedDialog.NAME) || this;
  }
  n.__extends(CastleColossusEventFinishedDialog, e);
  CastleColossusEventFinishedDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    this.dialogDisp.mc_combo.visible = false;
    this.itxt_copy = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new l.LocalizedTextVO("dialog_eventColossusFinished_copytext", [0, 0], true));
  };
  CastleColossusEventFinishedDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    C.CrestHelper.setCrestGraphics(this.dialogDisp.crest, u.CastleModel.userData.playerCrest);
    p.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
  };
  CastleColossusEventFinishedDialog.prototype.applyPropertiesLoaded = function (e = null) {
    var t = u.CastleModel.wodData.createVObyWOD(this.dialogProperties.wodID, g.CastleWodData.TYPE_BUILDING);
    if (t.type != "CoinColossus") {
      this.itxt_copy.textContentVO.textId = "dialog_eventColossusFinished_copytext";
    } else {
      this.itxt_copy.textContentVO.textId = "dialog_eventCoinColossusFinished_copy";
    }
    this.itxt_copy.textContentVO.textReplacements = [this.dialogProperties.points, this.dialogProperties.rank, this.dialogProperties.decoPoints];
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_colossus);
    t.customDecoPoints = c.int(this.dialogProperties.decoPoints);
    var i = new d.CastleGoodgameExternalClip(t.getVisualClassName(), o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(t.getVisualClassName()), null, 0, false);
    i.clipSizeComponent = new a.ClipSizeComponent(100, 130);
    this.dialogDisp.mc_colossus.addChild(i.asDisplayObject());
  };
  CastleColossusEventFinishedDialog.prototype.setCopyTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.LocalizedTextVO("dialog_eventColossusFinished_titletext"));
  };
  CastleColossusEventFinishedDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (p.ButtonHelper.isButtonEnabled(t.target) && t.target == this.dialogDisp.btn_ok) {
      this.hide();
    }
  };
  Object.defineProperty(CastleColossusEventFinishedDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleColossusEventFinishedDialog.__initialize_static_members = function () {
    CastleColossusEventFinishedDialog.NAME = "CastleColossusEventFinished";
  };
  return CastleColossusEventFinishedDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleColossusEventFinishedDialog = h;
var g = require("./56.js");
var C = require("./61.js");
r.classImplementsInterfaces(h, "ICollectableRendererList");
h.__initialize_static_members();