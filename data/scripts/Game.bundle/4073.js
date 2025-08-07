Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./140.js");
var l = require("./13.js");
var c = require("./4.js");
var u = require("./76.js");
var d = require("./77.js");
var p = require("./8.js");
var h = function (e) {
  function PlayerIgnoreListDialog() {
    return e.call(this, PlayerIgnoreListDialog.NAME) || this;
  }
  n.__extends(PlayerIgnoreListDialog, e);
  PlayerIgnoreListDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("dialog_inbox_ignore_player_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("dialog_inbox_ignore_player_copy"));
    this.tf_emptyList = this.textFieldManager.registerTextField(this.dialogDisp.txt_noIgnore, new a.LocalizedTextVO("dialog_mailbox_emptyingorelist"));
    p.ButtonHelper.initButton(this.dialogDisp.btn_close, 1, _.ClickFeedbackButtonHover);
    var i = new d.InfiniteScrollListOptions(C.PlayerIgnoreList_Item, "PlayerIgnoreEx_Item", PlayerIgnoreListDialog.NAME);
    i.itemPaddingY = 4;
    i.useSmoothScroll = true;
    this._scrollList = new g.InfiniteScrollListComponent(new u.InfiniteScrollListClips(this.dialogDisp.mc_list).addMaskMc(this.dialogDisp.mc_list.mc_mask).addItemContainerMc(this.dialogDisp.mc_list.mc_items).addSliderMc(this.dialogDisp.mc_list.mc_slider), i);
  };
  PlayerIgnoreListDialog.prototype.onGetIgnoredPlayer = function (e) {
    var t = [];
    var i = 1;
    for (var n = 0, o = c.CastleModel.messageData.ignoredPlayer; n < o.length; n++) {
      var a = o[n];
      if (a !== undefined) {
        t.push([i, a]);
        i++;
      }
    }
    this.tf_emptyList.visible = t.length <= 0;
    this._scrollList.updateWithNewData(t);
  };
  PlayerIgnoreListDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._scrollList.onShow();
    c.CastleModel.messageData.addEventListener(r.CastleMessageDataEvent.GET_IGNORED_PLAYER, this.bindFunction(this.onGetIgnoredPlayer));
    c.CastleModel.messageData.getIgnoredPlayer();
  };
  PlayerIgnoreListDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this._scrollList.onHide();
    c.CastleModel.messageData.removeEventListener(r.CastleMessageDataEvent.GET_IGNORED_PLAYER, this.bindFunction(this.onGetIgnoredPlayer));
  };
  PlayerIgnoreListDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (p.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  PlayerIgnoreListDialog.NAME = "PlayerIgnoreEx";
  return PlayerIgnoreListDialog;
}(require("./11.js").CastleExternalDialog);
exports.PlayerIgnoreListDialog = h;
var g = require("./78.js");
var C = require("./4074.js");
var _ = require("./20.js");
o.classImplementsInterfaces(h, "ICollectableRendererList");