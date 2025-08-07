Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./18.js");
var l = require("./31.js");
var c = require("./19.js");
var u = require("./4.js");
var d = function (e) {
  function CastlePrivateOfferDecorationFinishDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePrivateOfferDecorationFinishDialog.NAME) || this;
  }
  n.__extends(CastlePrivateOfferDecorationFinishDialog, e);
  CastlePrivateOfferDecorationFinishDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    var i = this.dialogProperties.offerVO.getTotalRewardListFromOfferVO();
    var n = i.getItemByType(p.CollectableEnum.BUILDING).buildingVO;
    if (n) {
      C.WodPicHelper.addWodPic(n, this.dialogDisp.mc_decoHolder, 160, 120);
      h.CollectableRenderHelper.displaySingleItem(new l.CollectableRenderClips(this.dialogDisp.mc_decoHolder), i.getItemByType(p.CollectableEnum.BUILDING), new c.CollectableRenderOptions(c.CollectableRenderOptions.SET_TIME_CHALLENGE));
      var o = n.buildingGroundType == r.ClientConstCastle.BUILDINGGROUND_TYPE_DECO ? "dialog_specialOfferDeco_finished_copy" : "dialog_buildingOffer_finished_copy";
      this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("dialog_specialOfferDeco_finished_title"));
      this.itxt_copy = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO(o));
    }
  };
  CastlePrivateOfferDecorationFinishDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
  };
  CastlePrivateOfferDecorationFinishDialog.prototype.applyPropertiesLoaded = function (e = null) {
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_decoHolder);
    this.dialogDisp.mc_decoHolder.mouseEnabled = true;
    this.dialogDisp.mc_decoHolder.mouseChildren = false;
    g.CrestHelper.setCrestGraphics(this.dialogDisp.crest, u.CastleModel.userData.playerCrest);
  };
  CastlePrivateOfferDecorationFinishDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastlePrivateOfferDecorationFinishDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivateOfferDecorationFinishDialog.__initialize_static_members = function () {
    CastlePrivateOfferDecorationFinishDialog.NAME = "CastlePrivateOfferDecorationFinish";
  };
  return CastlePrivateOfferDecorationFinishDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastlePrivateOfferDecorationFinishDialog = d;
var p = require("./12.js");
var h = require("./25.js");
var g = require("./61.js");
var C = require("./63.js");
a.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();