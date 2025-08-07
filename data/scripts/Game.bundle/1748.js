Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./1.js");
var s = require("./11.js");
var r = require("./8.js");
var l = require("./20.js");
var c = require("./4.js");
var u = require("./21.js");
var d = require("./27.js");
var p = require("./551.js");
var h = require("./1747.js");
var g = require("./3665.js");
var C = require("./2.js");
var _ = require("./82.js");
var m = require("./47.js");
var f = require("./59.js");
var O = require("./60.js");
var E = require("./13.js");
var y = require("./130.js");
var b = require("./226.js");
var D = function (e) {
  function CastlePrivateBestsellerShopDialog() {
    var t = e.call(this, CastlePrivateBestsellerShopDialog.NAME) || this;
    t.subOfferItems = [];
    t._bestsellerSubOfferID = 0;
    return t;
  }
  n.__extends(CastlePrivateBestsellerShopDialog, e);
  CastlePrivateBestsellerShopDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    r.ButtonHelper.initButtons([this.dialogDisp.btn_close], l.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new o.TextVO(E.TextHelper.toUpperCaseLocaSafeTextId("dialog_privateBestsellerShop_title")));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_timer.txt_time, new o.TextVO(""));
    this.dialogDisp.mc_timer.toolTipText = "resttime";
    this.dialogDisp.mc_timer.mouseChildren = false;
    this.bestsellerSubOfferItem = new g.CastlePrivateBestsellerShopItem(this.dialogDisp.mc_bestseller);
    var i = new f.DynamicSizeScrollStrategyVertical(true, this.dialogDisp.mc_list.mask.height, true);
    var n = new m.SimpleScrollVO().initByParent(this.dialogDisp.mc_slider).addSliderBackground(this.dialogDisp.mc_slider.bg_cached).addMouseWheelElements([this.dialogDisp]);
    this._scrollComponent = new _.ModernSliderScrollComponent(n, i);
  };
  CastlePrivateBestsellerShopDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    new p.PPDDExternalPart(this.dialogDisp.mc_teaser, this.teaserImageID);
    new h.TopEyeCatcherPPDDExternal(this.dialogDisp.mc_topEyeCatcher, this.topEyeCatcherID);
    this.showSubOffers();
    this.dialogDisp.mc_timer.visible = !this.dialogProperties.offerVO.hasInfiniteTime;
    if (!this.dialogProperties.offerVO.hasInfiniteTime) {
      this.onTimerUpdate(null);
      c.CastleModel.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    }
    c.CastleModel.privateOfferData.addEventListener(y.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
    c.CastleModel.privateOfferData.addEventListener(y.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.onSubOfferStateChanged));
    c.CastleModel.privateOfferData.addEventListener(y.PrivateOfferDataEvent.PRIVATE_OFFER_CREATED, this.bindFunction(this.onSubOfferStateChanged));
  };
  CastlePrivateBestsellerShopDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.clearSubOfferItems();
    if (this.bestsellerSubOfferItem) {
      this.bestsellerSubOfferItem.onHide();
    }
    this._scrollComponent.hide();
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChange));
    c.CastleModel.timerData.removeEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    c.CastleModel.privateOfferData.removeEventListener(y.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
    c.CastleModel.privateOfferData.removeEventListener(y.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.onSubOfferStateChanged));
    c.CastleModel.privateOfferData.removeEventListener(y.PrivateOfferDataEvent.PRIVATE_OFFER_CREATED, this.bindFunction(this.onSubOfferStateChanged));
  };
  CastlePrivateBestsellerShopDialog.prototype.showSubOffers = function (e = true) {
    this.validateBestsellerSubOffer();
    this.fillBestsellerItem();
    this.fillListItems();
    var t = Math.max(0, this.dialogDisp.mc_list.height - CastlePrivateBestsellerShopDialog.MASK_HEIGHT);
    var i = this._scrollComponent.currentValue;
    this._scrollComponent.init(0, t, CastlePrivateBestsellerShopDialog.ROW_HEIGHT, CastlePrivateBestsellerShopDialog.ROW_HEIGHT / 2);
    this._scrollComponent.show();
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
    if (e) {
      this._scrollComponent.scrollToValue(0);
    } else {
      this._scrollComponent.scrollToValue(i);
    }
  };
  CastlePrivateBestsellerShopDialog.prototype.validateBestsellerSubOffer = function () {
    this._bestsellerSubOfferID = 0;
    if (this.validateOffer(this.dialogCustomization.BSOID)) {
      this._bestsellerSubOfferID = this.dialogCustomization.BSOID;
    } else {
      for (var e = 0, t = this.subOfferIDs; e < t.length; e++) {
        var i = t[e];
        if (this.validateOffer(i)) {
          this._bestsellerSubOfferID = i;
          break;
        }
      }
    }
  };
  CastlePrivateBestsellerShopDialog.prototype.fillBestsellerItem = function () {
    if (this._bestsellerSubOfferID > 0) {
      this.bestsellerSubOfferItem.showOffer(this._bestsellerSubOfferID, this.dialogProperties.offerVO.id);
      this.bestsellerSubOfferItem.setVisibility(true);
      this.bestsellerSubOfferItem.onShow();
    } else {
      this.bestsellerSubOfferItem.setVisibility(false);
    }
  };
  CastlePrivateBestsellerShopDialog.prototype.fillListItems = function () {
    this.clearSubOfferItems();
    var e = 0;
    var t = a.getDefinitionByName(CastlePrivateBestsellerShopDialog.ITEM_NAME);
    for (var i = 0, n = this.subOfferIDs; i < n.length; i++) {
      var o = n[i];
      if (o != this._bestsellerSubOfferID && this.validateOffer(o)) {
        var s = new t();
        var r = new g.CastlePrivateBestsellerShopItem(s);
        s.x = Math.floor(e % CastlePrivateBestsellerShopDialog.ITEMS_PER_ROW) * (s.width + CastlePrivateBestsellerShopDialog.ITEM_GAP);
        s.y = Math.floor(e / CastlePrivateBestsellerShopDialog.ITEMS_PER_ROW) * (s.height + CastlePrivateBestsellerShopDialog.ITEM_GAP);
        r.showOffer(o, this.dialogProperties.offerVO.id);
        r.onShow();
        this.subOfferItems.push(r);
        this.dialogDisp.mc_list.addChild(s);
        e++;
      }
    }
  };
  CastlePrivateBestsellerShopDialog.prototype.validateOffer = function (e) {
    return c.CastleModel.privateOfferData.getOfferById(e) && c.CastleModel.privateOfferData.getOfferById(e).offerState != b.PrivateOfferStateEnum.PRECONDITION;
  };
  CastlePrivateBestsellerShopDialog.prototype.onScrollValueChange = function () {
    this.dialogDisp.mc_list.y = CastlePrivateBestsellerShopDialog.LIST_START_Y - this._scrollComponent.currentValue;
  };
  CastlePrivateBestsellerShopDialog.prototype.clearSubOfferItems = function () {
    for (var e = 0, t = this.subOfferItems; e < t.length; e++) {
      var i = t[e];
      i.onHide();
      i.destroy();
    }
    C.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_list);
    this.dialogDisp.mc_list.y = CastlePrivateBestsellerShopDialog.LIST_START_Y;
    this.subOfferItems = [];
  };
  CastlePrivateBestsellerShopDialog.prototype.onTimerUpdate = function (e) {
    this.itxt_time.textContentVO.stringValue = d.CastleTimeStringHelper.getEventTimeString(this.dialogProperties.offerVO.remainingSeconds);
  };
  CastlePrivateBestsellerShopDialog.prototype.onOfferRemoved = function (e) {
    if (e.offerVO.id == this.dialogProperties.offerVO.id) {
      this.hide();
    }
  };
  CastlePrivateBestsellerShopDialog.prototype.onSubOfferStateChanged = function (e) {
    if (this.subOfferIDs.indexOf(e.offerVO.id) > -1) {
      this.showSubOffers(false);
    }
  };
  CastlePrivateBestsellerShopDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (r.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  Object.defineProperty(CastlePrivateBestsellerShopDialog.prototype, "subOfferIDs", {
    get: function () {
      return this.dialogCustomization.OIDS || [];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivateBestsellerShopDialog.prototype, "teaserImageID", {
    get: function () {
      return "PivatePrimeDayDynamicDialog_TeaserImage_" + this.dialogCustomization.TSID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivateBestsellerShopDialog.prototype, "topEyeCatcherID", {
    get: function () {
      return String(this.dialogCustomization.TEID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivateBestsellerShopDialog.prototype, "dialogCustomization", {
    get: function () {
      return this.dialogProperties.offerVO.getVisualComponentByName(O.ClientConstOffer.OFFER_VISUAL_OFFER_DIALOG).dialogCustomization;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivateBestsellerShopDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivateBestsellerShopDialog.NAME = "CastlePrivateBestsellerShopOfferExternal";
  CastlePrivateBestsellerShopDialog.OFFER_NAME = "BestsellerShopDialog";
  CastlePrivateBestsellerShopDialog.ITEM_NAME = "CastlePrivateBestsellerShopOfferExternal_Item";
  CastlePrivateBestsellerShopDialog.LIST_START_Y = 66;
  CastlePrivateBestsellerShopDialog.MASK_HEIGHT = 292;
  CastlePrivateBestsellerShopDialog.ROW_HEIGHT = 146;
  CastlePrivateBestsellerShopDialog.ITEM_GAP = 4;
  CastlePrivateBestsellerShopDialog.ITEMS_PER_ROW = 3;
  return CastlePrivateBestsellerShopDialog;
}(s.CastleExternalDialog);
exports.CastlePrivateBestsellerShopDialog = D;