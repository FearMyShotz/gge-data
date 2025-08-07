Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./13.js");
var l = require("./4.js");
var c = require("./659.js");
var u = require("./76.js");
var d = require("./78.js");
var p = require("./77.js");
var h = require("./8.js");
var g = function (e) {
  function SamuraiEventEndDialog() {
    return e.call(this, SamuraiEventEndDialog.NAME) || this;
  }
  n.__extends(SamuraiEventEndDialog, e);
  SamuraiEventEndDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    h.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], _.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("dialog_samuraiInvasionEnd_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new a.LocalizedTextVO("dialog_samuraiInvasionEnd_desc")).autoFitToBounds = true;
    var i = new p.InfiniteScrollListOptions(C.SamuraiEventEndDialogItem, "SamuraiEventEnd_Item", SamuraiEventEndDialog.NAME);
    i.itemPaddingY = 3;
    i.useSmoothScroll = true;
    this._scrollList = new d.InfiniteScrollListComponent(new u.InfiniteScrollListClips(this.dialogDisp.mc_list), i);
  };
  SamuraiEventEndDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.controller.addEventListener(c.SamuraiDaimyoEvent.ON_NEW_EVENT_END_DIALOG_INFO_ARRIVED, this.bindFunction(this.onNewDataArrived));
    this._scrollList.onShow();
    this.updateItems();
  };
  SamuraiEventEndDialog.prototype.hideLoaded = function (t = null) {
    this.controller.removeEventListener(c.SamuraiDaimyoEvent.ON_NEW_EVENT_END_DIALOG_INFO_ARRIVED, this.bindFunction(this.onNewDataArrived));
    this._scrollList.onHide();
    l.CastleModel.samuraiDaimyoData.server.clearEventEndDialogData();
    e.prototype.hideLoaded.call(this, t);
  };
  SamuraiEventEndDialog.prototype.updateItems = function () {
    this._scrollList.updateWithNewData(l.CastleModel.samuraiDaimyoData.server.eventEndDialogData);
  };
  SamuraiEventEndDialog.prototype.onClick = function (t) {
    if (h.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  SamuraiEventEndDialog.prototype.onNewDataArrived = function (e) {
    this.updateItems();
  };
  SamuraiEventEndDialog.NAME = "SamuraiEventEnd";
  return SamuraiEventEndDialog;
}(require("./11.js").CastleExternalDialog);
exports.SamuraiEventEndDialog = g;
var C = require("./3521.js");
var _ = require("./36.js");
o.classImplementsInterfaces(g, "ICollectableRendererList");