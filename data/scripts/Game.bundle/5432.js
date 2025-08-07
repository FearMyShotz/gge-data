Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./6.js");
var g = require("./5433.js");
var C = require("./5434.js");
var _ = require("./1932.js");
var m = require("./140.js");
var f = require("./67.js");
var O = require("./19.js");
var E = require("./30.js");
var y = require("./4.js");
var b = require("./180.js");
var D = require("./68.js");
var I = require("./24.js");
var T = require("./42.js");
var v = require("./8.js");
var S = require("./11.js");
var A = createjs.Point;
var L = function (e) {
  function CastleChangelistDialog() {
    var t = this;
    t.openedTime = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this, CastleChangelistDialog.NAME) || this).desaturate = new s.ColorMatrix();
    t.desaturate.desaturate();
    return t;
  }
  n.__extends(CastleChangelistDialog, e);
  CastleChangelistDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textScroller = new P.CastleTextScrollComponent(new b.CastleTextScrollVO(this.dialogDisp.txt_changelist, this.dialogDisp.mc_scroll.btn_up, this.dialogDisp.mc_scroll.btn_down, this.dialogDisp.mc_scroll.btn_scroll, this.dialogDisp.mc_scroll.mc_slider, null));
    this.textScroller.hideArrowsOnScrollToEdges = true;
    this.textScroller.invisibleOnFit = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_header, new d.LocalizedTextVO("dialog_changelist_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_subheader, new d.LocalizedTextVO("dialog_changelist_subheader"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_collect.txt_value, new d.LocalizedTextVO("dialog_changelist_collect")).verticalAlign = T.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.itxt_changelist = this.textFieldManager.registerTextField(this.dialogDisp.txt_changelist, new p.TextVO(""));
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_collect, this.dialogDisp.mc_scroll.btn_up, this.dialogDisp.mc_scroll.btn_down, this.dialogDisp.mc_scroll.btn_scroll]);
  };
  CastleChangelistDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.openedTime = h.int(E.CachedTimer.getCachedTimer() / 1000);
    this.textScroller.scrollToStart();
    this.textScroller.onShow();
    var i = "";
    if (this.dialogProperties.messageVO.patchNoteId >= 19) {
      i = "\n\n" + u.Localize.text("changelist_forum_hint");
    }
    this.itxt_changelist.textContentVO.stringValue = u.Localize.text("changelist_message_" + this.dialogProperties.messageVO.patchNoteId) + i;
    this.textScroller.updateItemVisibility();
    this.updateCollectButton();
    this.updateTeaserPicture();
    this.requestRewards();
  };
  CastleChangelistDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.textScroller.onHide();
    this.controller.removeEventListener(_.CastleChangelistRewardsEvent.DATA_UPDATED, this.bindFunction(this.onChangelistDataArrived));
    if (this.dialogProperties.messageVO.patchNoteId == 59) {
      S.CastleExternalDialog.dialogHandler.registerDialogs(R.DecorationForgeQuickGuideDialog);
    }
  };
  CastleChangelistDialog.prototype.requestRewards = function () {
    r.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_rewardsContainer);
    this.controller.addEventListener(_.CastleChangelistRewardsEvent.DATA_UPDATED, this.bindFunction(this.onChangelistDataArrived));
    y.CastleModel.smartfoxClient.sendCommandVO(new C.C2SGetPatchNoteRewardsVO(this.dialogProperties.messageVO.patchNoteId));
  };
  CastleChangelistDialog.prototype.onChangelistDataArrived = function (e) {
    this.controller.removeEventListener(_.CastleChangelistRewardsEvent.DATA_UPDATED, this.bindFunction(this.onChangelistDataArrived));
    this.dialogProperties.rewards = e.rewards;
    this.updateLayout();
    this.updateRewards();
    this.updateCollectButton();
  };
  CastleChangelistDialog.prototype.updateLayout = function () {
    var e = this.dialogProperties.rewards.length > 0;
    var t = e ? 0 : 100;
    this.dialogDisp.txt_changelist.height = 145 + t;
    this.dialogDisp.mc_scroll.btn_down.y = 137 + t;
    this.dialogDisp.mc_scroll.mc_slider.height = 85 + t;
    this.dialogDisp.mc_button_background.visible = e;
  };
  CastleChangelistDialog.prototype.updateRewards = function () {
    r.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_rewardsContainer);
    var e = h.int(this.dialogProperties.rewards.length);
    if (e <= 0) {
      this.dialogProperties.messageVO.collected = true;
    } else {
      var t = c.getDefinitionByName("ChangelistRewardContainer");
      var i = new t();
      var n = e * i.width;
      var o = [];
      for (var a = 0; a < e; ++a) {
        this.dialogDisp.mc_rewardsContainer.addChild(i);
        i.x = (a + 0.5) * i.width - n / 2;
        v.ButtonHelper.initBasicButton(i.mc_item.btn_info);
        if (this.dialogProperties.messageVO.collected) {
          i.mc_item.useFilters([this.desaturate.filter]);
        } else {
          i.mc_item.useFilters(D.BitmapFilterHelper.NO_FILTER);
        }
        o.push(i);
        i = new t();
      }
      var s = new f.CollectableRenderClipsList();
      s.createByItemMcList(o);
      s.addItemMcs("mc_item");
      s.addInfoBtns("parent.btn_info");
      M.CollectableRenderHelper.displayMultipleItemsComplete(this, s, this.dialogProperties.rewards, new O.CollectableRenderOptions(O.CollectableRenderOptions.SET_ADVANCED, new A(56, 66)), null, function () {
        var e;
        for (e = 0; e < o.length; e++) {
          if ((i = o[e]).mc_item.cacheCanvas) {
            i.mc_item.updateCache();
          }
        }
      });
    }
  };
  CastleChangelistDialog.prototype.updateTeaserPicture = function () {
    var e;
    r.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_picture_container);
    e = this.dialogProperties.messageVO.teaserId > -1 ? "CastleWelcomeNews" + this.dialogProperties.messageVO.teaserId : "CastleWelcomeNewsUnspecified";
    var t = new I.CastleGoodgameExternalClip(e, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e), null, 0, false);
    t.clipSizeComponent = new a.ClipSizeComponent(CastleChangelistDialog.TEASER_SIZE_WIDTH, CastleChangelistDialog.TEASER_SIZE_HEIGHT);
    this.dialogDisp.mc_picture_container.addChild(t);
    if (t.isLoaded) {
      this.adjustTeaserBasedOnFrameSize(t);
    } else {
      t.clipLoaded.add(this.bindFunction(this.adjustTeaserBasedOnFrameSize));
    }
  };
  CastleChangelistDialog.prototype.adjustTeaserBasedOnFrameSize = function (e) {
    e.clipLoaded.remove(this.bindFunction(this.adjustTeaserBasedOnFrameSize));
    var t = e.currentshownDisplayObject;
    var i = t.getChildByName("frame_size");
    if (i) {
      var n = CastleChangelistDialog.TEASER_SIZE_WIDTH / i.width;
      e.scaleX = e.scaleY = 1;
      t.scaleX = t.scaleY = n;
    }
  };
  CastleChangelistDialog.prototype.updateCollectButton = function () {
    v.ButtonHelper.enableButton(this.dialogDisp.btn_collect, !this.dialogProperties.messageVO.collected);
    this.dialogDisp.btn_collect.toolTipText = this.dialogProperties.messageVO.collected ? "dialog_changelist_collected" : "";
    this.dialogDisp.btn_collect.visible = this.dialogProperties.rewards.length > 0;
  };
  CastleChangelistDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (v.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_collect:
          this.collectRewards();
      }
    }
  };
  CastleChangelistDialog.prototype.collectRewards = function () {
    this.dialogProperties.messageVO.collected = true;
    this.controller.dispatchEvent(new m.CastleMessageDataEvent(m.CastleMessageDataEvent.UPDATE_MESSAGELIST));
    this.updateCollectButton();
    this.updateRewards();
    y.CastleModel.smartfoxClient.sendCommandVO(new g.C2SCollectPatchNoteRewardsVO(this.dialogProperties.messageVO.patchNoteId, this.dialogProperties.messageVO.messageID));
  };
  Object.defineProperty(CastleChangelistDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleChangelistDialog.__initialize_static_members = function () {
    CastleChangelistDialog.NAME = "CastleChangelist";
    CastleChangelistDialog.TEASER_SIZE_WIDTH = 180;
    CastleChangelistDialog.TEASER_SIZE_HEIGHT = 103;
  };
  return CastleChangelistDialog;
}(S.CastleExternalDialog);
exports.CastleChangelistDialog = L;
var P = require("./182.js");
var M = require("./25.js");
var R = require("./1449.js");
l.classImplementsInterfaces(L, "ICollectableRendererList");
L.__initialize_static_members();