Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./13.js");
var d = require("./47.js");
var p = require("./59.js");
var h = require("./8.js");
var g = require("./11.js");
var C = function (e) {
  function SeasonLeagueRewardOverviewDialog() {
    var t = this;
    t._items = [];
    CONSTRUCTOR_HACK;
    return t = e.call(this, SeasonLeagueRewardOverviewDialog.NAME) || this;
  }
  n.__extends(SeasonLeagueRewardOverviewDialog, e);
  SeasonLeagueRewardOverviewDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    h.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help], f.ClickFeedbackButton);
    this._scrollComponent = new _.ModernSliderScrollComponent(new d.SimpleScrollVO().initByParent(this.dialogDisp.mc_slider).addMouseWheelElements([this.dialogDisp.mc_items]), new p.DynamicSizeScrollStrategyVertical(true));
  };
  SeasonLeagueRewardOverviewDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    this._scrollComponent.show();
    if (this._items != null) {
      for (var i = 0, n = this._items; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          o.onShow();
        }
      }
    }
    this.updateText();
    this.updateItems();
  };
  SeasonLeagueRewardOverviewDialog.prototype.hide = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    this._scrollComponent.hide();
    if (this._items != null) {
      for (var t = 0, i = this._items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onHide();
        }
      }
    }
    e.prototype.hide.call(this);
  };
  SeasonLeagueRewardOverviewDialog.prototype.updateText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId(this.dialogProperties.titleTextId))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new r.LocalizedTextVO(this.dialogProperties.descTextId)).autoFitToBounds = true;
  };
  SeasonLeagueRewardOverviewDialog.prototype.updateItems = function () {
    if (this._items != null) {
      for (var e = 0, t = this._items; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.destroy();
        }
      }
    }
    this._items = [];
    var n = this.getIemContainerMc();
    o.MovieClipHelper.clearMovieClip(n);
    var a = 0;
    for (var s = 0; s < this.dialogProperties.itemVOs.length; ++s) {
      var r = this.dialogProperties.itemVOs[s];
      (i = new m.SeasonLeagueRewardOverviewDialogItem(n, r, s)).onShow();
      i.disp.y = a;
      a += i.disp.height;
    }
    var l = c.int(i ? i.disp.height : 1);
    var u = c.int(Math.max(0, n.height - SeasonLeagueRewardOverviewDialog.ITEM_MASK_HEIGHT));
    this._scrollComponent.init(0, u, l, l);
    this._scrollComponent.scrollToValue(0);
    this._scrollComponent.setVisibility(u > 0);
  };
  SeasonLeagueRewardOverviewDialog.prototype.getIemContainerMc = function () {
    return this.dialogDisp.mc_items.mc_transform;
  };
  SeasonLeagueRewardOverviewDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        g.CastleExternalDialog.dialogHandler.showHelper("", s.Localize.text(this.dialogProperties.helpTextId));
    }
  };
  SeasonLeagueRewardOverviewDialog.prototype.onScroll = function () {
    this.getIemContainerMc().y = -this._scrollComponent.currentValue;
  };
  Object.defineProperty(SeasonLeagueRewardOverviewDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueRewardOverviewDialog.NAME = "SeasonLeagueRewardOverview";
  SeasonLeagueRewardOverviewDialog.ITEM_MASK_HEIGHT = 384;
  return SeasonLeagueRewardOverviewDialog;
}(g.CastleExternalDialog);
exports.SeasonLeagueRewardOverviewDialog = C;
var _ = require("./82.js");
var m = require("./3419.js");
var f = require("./36.js");
a.classImplementsInterfaces(C, "ICollectableRendererList");