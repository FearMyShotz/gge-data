Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./32.js");
var h = require("./12.js");
var g = require("./45.js");
var C = require("./31.js");
var _ = require("./19.js");
var m = require("./13.js");
var f = require("./4.js");
var O = require("./24.js");
var E = require("./76.js");
var y = require("./78.js");
var b = require("./77.js");
var D = require("./25.js");
var I = require("./35.js");
var T = require("./4399.js");
var v = createjs.Point;
var S = function (e) {
  function CollectEventDialogMain(t) {
    var i = e.call(this, t) || this;
    i.init();
    return i;
  }
  n.__extends(CollectEventDialogMain, e);
  CollectEventDialogMain.prototype.init = function () {
    var e = new b.InfiniteScrollListOptions(T.CollectEventDialogMainRewardItem, "CollectorEvent_Main_Reward_Item", A.CollectorEventDialog.NAME);
    e.itemPaddingY = 10;
    e.useSmoothScroll = true;
    this._rewardScrollList = new y.InfiniteScrollListComponent(new E.InfiniteScrollListClips(this.subLayerDisp.mc_items).addMaskMc(this.subLayerDisp.mc_mask).addSliderMc(this.subLayerDisp.mc_items.mc_slider), e);
  };
  CollectEventDialogMain.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.controller.addEventListener(p.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialCurrencyChange));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId("panel_action_collector_overview_header_" + this.eventSuffix)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rewards, new c.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_dailyTask_rewards_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_current, new c.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId("value_colon", [d.Localize.text(this.eventCurrency.getNameTextId())]))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_daily, new c.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId("dialog_collector_overview_daily_header_" + this.eventSuffix))).autoFitToBounds = true;
    this.displayCurrentCurrency();
    this.onSpecialCurrencyChange();
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_collector_skin);
    var i = "CollectorTeaserImage_small_" + this.eventSuffix;
    if (r.BasicModel.basicLoaderData.isItemAssetVersioned(i)) {
      var n = r.BasicModel.basicLoaderData.getVersionedItemAssetUrl(i);
      var o = new O.CastleGoodgameExternalClip(i, n);
      this.dialogDisp.mc_collector_skin.addChild(o);
    }
    this._rewardScrollList.onShow();
    this._rewardScrollList.updateWithNewData(this.getRewardData());
  };
  CollectEventDialogMain.prototype.getRewardData = function () {
    var e = [];
    for (var t = this.eventVO.collectInfoVO.rewards, i = 0; i < t.length; i++) {
      e.push(t[i]);
    }
    return e;
  };
  Object.defineProperty(CollectEventDialogMain.prototype, "eventCurrency", {
    get: function () {
      return g.CollectableHelper.createVO(h.CollectableEnum.GENERIC_CURRENCY, 0, this.eventVO.collectInfoVO.collectorCurrencyID);
    },
    enumerable: true,
    configurable: true
  });
  CollectEventDialogMain.prototype.displayCurrentCurrency = function () {
    if (this.eventVO) {
      var e = new C.CollectableRenderClips(this.dialogDisp.mc_currency).addIconMc(this.dialogDisp.mc_currency);
      var t = new _.CollectableRenderOptions(_.CollectableRenderOptions.ICON, new v(50, 50));
      D.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, e, this.eventCurrency, t);
      var i = "CollectorIcon_" + this.eventVO.collectInfoVO.collectorEventSkinName;
      var n = r.BasicModel.basicLoaderData.getVersionedItemAssetUrl(i);
      var o = new O.CastleGoodgameExternalClip(i, n, null, 0, false);
      o.clipSizeComponent = new s.ClipSizeComponent(50, 50);
      a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_event);
      this.dialogDisp.mc_event.addChild(o);
    }
  };
  CollectEventDialogMain.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.controller.removeEventListener(p.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialCurrencyChange));
  };
  CollectEventDialogMain.prototype.onSpecialCurrencyChange = function (e = null) {
    if (this.eventVO) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_current_amount, new u.LocalizedNumberVO(this.eventCurrencyAmount));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_daily_amount, new u.LocalizedNumberVO(this.eventCurrencyAmount * (this.eventVO.collectInfoVO.dailyCurrencyIncrease / 100)));
    }
  };
  Object.defineProperty(CollectEventDialogMain.prototype, "eventCurrencyAmount", {
    get: function () {
      if (this.eventVO) {
        return f.CastleModel.currencyData.getAmountById(this.eventVO.collectInfoVO.collectorCurrencyID);
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventDialogMain.prototype, "eventVO", {
    get: function () {
      var e = L.castAs(f.CastleModel.specialEventData.getActiveEventByEventId(l.EventConst.EVENTTYPE_COLLECTOR), "CollectorEventEventVO");
      if (!e) {
        this.hide();
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventDialogMain.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectEventDialogMain.prototype, "eventSuffix", {
    get: function () {
      return this.eventVO.collectInfoVO.collectorEventSkinName;
    },
    enumerable: true,
    configurable: true
  });
  return CollectEventDialogMain;
}(I.CastleDialogSubLayer);
exports.CollectEventDialogMain = S;
o.classImplementsInterfaces(S, "ICollectableRendererList", "ISublayer");
var A = require("./1141.js");
var L = require("./1.js");