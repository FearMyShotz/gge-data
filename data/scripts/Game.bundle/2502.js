Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./4.js");
var l = require("./383.js");
var c = require("./47.js");
var u = require("./59.js");
var d = require("./8.js");
var p = require("./955.js");
var h = require("./222.js");
var g = function (e) {
  function CastleAllianceDialogTreasurySubscriptions(t) {
    var i = this;
    i._items = [];
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(CastleAllianceDialogTreasurySubscriptions, e);
  CastleAllianceDialogTreasurySubscriptions.prototype.init = function () {
    e.prototype.init.call(this);
    d.ButtonHelper.initButtons([this.disp.btn_subscription, this.disp.btn_info], y.ClickFeedbackButton);
    this.disp.btn_info.visible = false;
    b.registerUIComponentToCXF(this.disp.btn_subscription, "btn_webshop", {
      page: "subscriptions",
      route: "/offer/2",
      sourceId: D.CXFSourceTrackingConstants.CXF_SOURCE_ALLIANCE_SUBSCRIPTIONS_DIALOG
    });
    this.disp.btn_subscription.toolTipText = h.SubscriptionPackageEnum.ALLIANCE.nameTextId;
    this.disp.btn_info.toolTipText = "dialog_alliance_treasury_subscription_subInfo_button_tooltip";
    this._scrollComponent = new _.SimpleScrollComponent(new c.SimpleScrollVO().initByParent(this.disp.mc_slider).addMouseWheelElements([this.disp]).addVisualElements([this.disp.mc_slider]), new u.DynamicSizeScrollStrategyVertical(true));
  };
  CastleAllianceDialogTreasurySubscriptions.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    if (this._items != null) {
      for (var t = 0, i = this._items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onShow();
        }
      }
    }
    this._scrollComponent.show();
    this._scrollComponent.scrollToPercent(0);
  };
  CastleAllianceDialogTreasurySubscriptions.prototype.onHide = function () {
    if (this._items != null) {
      for (var t = 0, i = this._items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onHide();
        }
      }
    }
    this._scrollComponent.hide();
    e.prototype.onHide.call(this);
  };
  CastleAllianceDialogTreasurySubscriptions.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    C.CastleComponent.controller.addEventListener(l.SubscriptionEvent.ON_SUBSCRIPTION_CHANGED, this.bindFunction(this.onSubscriptionChanged));
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  CastleAllianceDialogTreasurySubscriptions.prototype.removeEventListener = function () {
    C.CastleComponent.controller.removeEventListener(l.SubscriptionEvent.ON_SUBSCRIPTION_CHANGED, this.bindFunction(this.onSubscriptionChanged));
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    e.prototype.removeEventListener.call(this);
  };
  CastleAllianceDialogTreasurySubscriptions.prototype.update = function () {
    e.prototype.update.call(this);
    if (this._items != null) {
      for (var t = 0, i = this._items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.destroy();
        }
      }
    }
    this._items = [];
    var o = this.getItemMc();
    o.removeChildren();
    var a = r.CastleModel.subscriptionData.getPackageSeriesIds(h.SubscriptionPackageEnum.ALLIANCE);
    if (a != null) {
      for (var l = 0, c = a; l < c.length; l++) {
        var u = c[l];
        if (u !== undefined) {
          n = new E.CastleAllianceDialogTreasurySubscriptionsItem(o, u);
          if (this.isShown) {
            n.onShow();
          }
          n.update();
          this._items.push(n);
        }
      }
    }
    var d = 0;
    for (var p = 0, g = this._items; p < g.length; p++) {
      (n = g[p]).disp.y = d;
      d += n.disp.height;
    }
    var C = s.int(Math.max(0, o.height - CastleAllianceDialogTreasurySubscriptions.ITEM_MASK_HEIGHT));
    var _ = this._scrollComponent.currentValue;
    this._scrollComponent.init(0, C, CastleAllianceDialogTreasurySubscriptions.ITEM_SCROLL_DELTA, CastleAllianceDialogTreasurySubscriptions.ITEM_SCROLL_DELTA);
    this._scrollComponent.setVisibility(C > 0);
    this._scrollComponent.scrollToValue(_);
    this.updateSubscriberCount();
  };
  CastleAllianceDialogTreasurySubscriptions.prototype.updateScrollPosition = function () {
    this.getItemMc().y = -this._scrollComponent.currentValue;
  };
  CastleAllianceDialogTreasurySubscriptions.prototype.updateSubscriberCount = function () {
    C.CastleComponent.textFieldManager.registerTextField(this.disp.txt_subscribers, new a.LocalizedTextVO("dialog_alliance_treasury_subscription_subCounter_copy", [r.CastleModel.subscriptionData.allianceSubscriberCount, r.CastleModel.allianceData.myAllianceVO.memberMax]));
  };
  CastleAllianceDialogTreasurySubscriptions.prototype.updateItems = function () {
    if (this._items != null) {
      for (var e = 0, t = this._items; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.update();
        }
      }
    }
  };
  CastleAllianceDialogTreasurySubscriptions.prototype.getItemMc = function () {
    return this.disp.mc_items.mc_transform;
  };
  CastleAllianceDialogTreasurySubscriptions.prototype.onClick = function (t) {
    if (d.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.disp.btn_subscription:
          break;
        case this.disp.btn_info:
          C.CastleComponent.layoutManager.hideDialog(O.CastleAllianceDialog);
          C.CastleComponent.dialogHandler.registerDefaultDialogs(m.SubscriptionDialog, new p.SubscriptionDialogProperties(m.SubscriptionDialog.TAB_INFO, f.SubscriptionInfoTopicEnum.TOPIC_ALLIANCE_SUBSCRIPTION));
      }
    }
  };
  CastleAllianceDialogTreasurySubscriptions.prototype.onScroll = function () {
    this.updateScrollPosition();
  };
  CastleAllianceDialogTreasurySubscriptions.prototype.onSubscriptionChanged = function (e) {
    this.updateItems();
    this.updateSubscriberCount();
  };
  CastleAllianceDialogTreasurySubscriptions.ITEM_MASK_HEIGHT = 299;
  CastleAllianceDialogTreasurySubscriptions.ITEM_SCROLL_DELTA = 80;
  return CastleAllianceDialogTreasurySubscriptions;
}(require("./954.js").ACastleAllianceDialogTreasurySublayer);
exports.CastleAllianceDialogTreasurySubscriptions = g;
var C = require("./14.js");
var _ = require("./95.js");
var m = require("./523.js");
var f = require("./958.js");
var O = require("./125.js");
var E = require("./2508.js");
var y = require("./36.js");
var b = require("./266.js");
var D = require("./107.js");
o.classImplementsInterfaces(g, "ICollectableRendererList");