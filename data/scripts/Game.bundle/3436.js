Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./13.js");
var l = require("./4.js");
var c = require("./24.js");
var u = require("./20.js");
var d = require("./76.js");
var p = require("./78.js");
var h = require("./77.js");
var g = require("./8.js");
var C = require("./11.js");
var _ = require("./3437.js");
var m = function (e) {
  function GachaEventEndDialog() {
    return e.call(this, GachaEventEndDialog.NAME) || this;
  }
  n.__extends(GachaEventEndDialog, e);
  GachaEventEndDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    g.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], u.ClickFeedbackButtonHover);
    var i = new d.InfiniteScrollListClips(this.dialogDisp).addSliderMc(this.dialogDisp.mc_slider).addItemContainerMc(this.dialogDisp.mc_list).addMouseWheelAreaMc(this.dialogDisp.mc_list.mask).addMaskMc(this.dialogDisp.mc_list.mask);
    var n = new h.InfiniteScrollListOptions(_.GachaEventEndDialogItem, GachaEventEndDialog.ITEM_NAME, GachaEventEndDialog.NAME);
    n.itemPaddingY = 4;
    n.useSmoothScroll = true;
    this._scrollList = new p.InfiniteScrollListComponent(i, n);
  };
  GachaEventEndDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    var i = l.CastleModel.specialEventData.createEventVOByEventID(this.dialogProperties().eventID);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("event_end_header_" + i.eventName)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new s.LocalizedTextVO("event_end_description_" + i.eventName));
    this._scrollList.onShow();
    this._scrollList.updateWithNewData(this.getData());
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_teaser);
    var n = new c.CastleGoodgameExternalClip("EventEndTeaser_" + this.dialogProperties().eventID, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("EventEndTeaser_" + this.dialogProperties().eventID));
    this.dialogDisp.mc_teaser.addChild(n);
  };
  GachaEventEndDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    if (this._scrollList) {
      this._scrollList.onHide();
    }
  };
  GachaEventEndDialog.prototype.getData = function () {
    var e = {};
    e.rank = this.dialogProperties().rank;
    e.rewards = this.dialogProperties().rewards;
    e.score = this.dialogProperties().currentScore;
    return [e];
  };
  GachaEventEndDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  GachaEventEndDialog.prototype.dialogProperties = function () {
    return this.properties;
  };
  GachaEventEndDialog.NAME = "GachaEventEnd";
  GachaEventEndDialog.ITEM_NAME = "GachaEventEnd_Item";
  return GachaEventEndDialog;
}(C.CastleExternalDialog);
exports.GachaEventEndDialog = m;
a.classImplementsInterfaces(m, "ICollectableRendererList");