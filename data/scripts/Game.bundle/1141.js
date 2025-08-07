Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./21.js");
var h = require("./26.js");
var g = require("./31.js");
var C = require("./19.js");
var _ = require("./13.js");
var m = require("./4.js");
var f = require("./27.js");
var O = require("./24.js");
var E = require("./8.js");
var y = require("./114.js");
var b = createjs.Point;
var D = function (e) {
  function CollectorEventDialog() {
    return e.call(this, CollectorEventDialog.NAME) || this;
  }
  n.__extends(CollectorEventDialog, e);
  CollectorEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    E.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_tab_main, this.dialogDisp.btn_tab_shop]);
    E.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close], P.ClickFeedbackButton);
    this._subLayer = new Map();
    this._subLayer.set(CollectorEventDialog.TAB_MAIN, new L.CollectEventDialogMain(this.dialogDisp.sublayer_overview));
    this._subLayer.set(CollectorEventDialog.TAB_SHOP, new A.CollectEventDailogShop(this.dialogDisp.tab_activityShop));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_time_title, new u.TextVO(_.TextHelper.toUpperCaseLocaSafeTextId("dialog_shapeshifter_timer")));
    this.dialogDisp.btn_tab_main.toolTipText = "";
    this.dialogDisp.btn_tab_shop.toolTipText = "";
  };
  CollectorEventDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    m.CastleModel.timerData.addEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    m.CastleModel.specialEventData.addEventListener(h.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.serverMessageArrived));
    this.changeCategory(this.collectorEventVO ? CollectorEventDialog.TAB_MAIN : CollectorEventDialog.TAB_SHOP);
    this.updateRemainingEventTime();
  };
  CollectorEventDialog.prototype.hide = function () {
    m.CastleModel.timerData.removeEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    m.CastleModel.specialEventData.removeEventListener(h.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.serverMessageArrived));
    e.prototype.hide.call(this);
  };
  CollectorEventDialog.prototype.changeCategory = function (t) {
    E.ButtonHelper.enableButton(this.dialogDisp.btn_tab_main, !!this.collectorEventVO);
    E.ButtonHelper.enableButton(this.dialogDisp.btn_tab_shop, !!this.collectorShopEventVO && this.collectorShopEventVO.kingdomIDs.indexOf(m.CastleModel.kingdomData.activeKingdomID) != -1);
    if (this._currentCategory != t) {
      e.prototype.changeCategory.call(this, t);
      this.showSublayer(this._subLayer.get(t), []);
      this.updateButton(this.dialogDisp.btn_tab_main, this._currentCategory == CollectorEventDialog.TAB_MAIN, false);
      this.updateButton(this.dialogDisp.btn_tab_shop, this._currentCategory == CollectorEventDialog.TAB_SHOP, true);
      this.updateRemainingEventTime();
    }
  };
  CollectorEventDialog.prototype.updateButton = function (e, t, i) {
    e.gotoAndStop(t ? 2 : 1);
    s.MovieClipHelper.clearMovieClip(e.mc_icon);
    if (i) {
      var n = new g.CollectableRenderClips();
      n.addIconMc(e.mc_icon);
      var r = new C.CollectableRenderOptions(C.CollectableRenderOptions.ICON, new b(60, 60));
      var l = T.CollectableHelper.createVO(I.CollectableEnum.GENERIC_CURRENCY, 0, this.collectorOptionInfo.collectorCurrencyID);
      v.CollectableRenderHelper.displaySingleItem(n, l, r);
    } else {
      var c = "CollectorIcon_" + this.collectorOptionInfo.collectorEventSkinName;
      var u = new O.CastleGoodgameExternalClip(c, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(c));
      u.clipSizeComponent = new a.ClipSizeComponent(60, 60);
      e.mc_icon.addChild(u);
    }
  };
  CollectorEventDialog.prototype.updateRemainingEventTime = function () {
    if (this.collectorEventVO || this.collectorShopEventVO && this.collectorShopEventVO.kingdomIDs.indexOf(m.CastleModel.kingdomData.activeKingdomID) != -1) {
      var e = d.int(this.collectorEventVO ? this.collectorEventVO.remainingEventTimeInSeconds : this.collectorShopEventVO.remainingEventTimeInSeconds);
      f.CastleTimeStringHelper.setEventTime(this.dialogDisp.txt_time_copy, e);
    } else {
      this.hide();
    }
  };
  CollectorEventDialog.prototype.onClick = function (t) {
    if (E.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_tab_main:
          this.changeCategory(CollectorEventDialog.TAB_MAIN);
          break;
        case this.dialogDisp.btn_tab_shop:
          this.changeCategory(CollectorEventDialog.TAB_SHOP);
          break;
        case this.dialogDisp.btn_help:
          S.CastleExternalDialog.dialogHandler.showHelper("", c.Localize.text("dialog_collector_overview_help_desc_" + this.skinName));
      }
    }
  };
  CollectorEventDialog.prototype.serverMessageArrived = function (e) {
    this.isWaitingForServerMessage = false;
    if (m.CastleModel.specialEventData.getActiveEventByEventId(l.EventConst.EVENTTYPE_COLLECTOR) || this._currentCategory != CollectorEventDialog.TAB_MAIN) {
      if (m.CastleModel.specialEventData.getActiveEventByEventId(l.EventConst.EVENTTYPE_COLLECTOR_SHOP) || this._currentCategory != CollectorEventDialog.TAB_SHOP) {
        this.updateRemainingEventTime();
        return;
      } else if (m.CastleModel.specialEventData.getActiveEventByEventId(l.EventConst.EVENTTYPE_COLLECTOR)) {
        this.changeCategory(CollectorEventDialog.TAB_MAIN);
        return;
      } else {
        this.hide();
        return;
      }
    } else if (m.CastleModel.specialEventData.getActiveEventByEventId(l.EventConst.EVENTTYPE_COLLECTOR_SHOP)) {
      this.changeCategory(CollectorEventDialog.TAB_SHOP);
      return;
    } else {
      this.hide();
      return;
    }
  };
  CollectorEventDialog.prototype.onTickEvent = function (e) {
    this.updateRemainingEventTime();
  };
  Object.defineProperty(CollectorEventDialog.prototype, "collectorOptionInfo", {
    get: function () {
      if (this.collectorEventVO != null) {
        return this.collectorEventVO.collectInfoVO;
      } else {
        return this.collectorShopEventVO.collectInfoVO;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectorEventDialog.prototype, "skinName", {
    get: function () {
      return (this.collectorEventVO || this.collectorShopEventVO).collectInfoVO.collectorEventSkinName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectorEventDialog.prototype, "collectorEventVO", {
    get: function () {
      return m.CastleModel.specialEventData.getActiveEventByEventId(l.EventConst.EVENTTYPE_COLLECTOR);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectorEventDialog.prototype, "collectorShopEventVO", {
    get: function () {
      return m.CastleModel.specialEventData.getActiveEventByEventId(l.EventConst.EVENTTYPE_COLLECTOR_SHOP);
    },
    enumerable: true,
    configurable: true
  });
  CollectorEventDialog.NAME = "CollectorEvent_2";
  CollectorEventDialog.TAB_MAIN = "tab_main";
  CollectorEventDialog.TAB_SHOP = "tab_sop";
  return CollectorEventDialog;
}(y.CastleExternalSubLayerDialog);
exports.CollectorEventDialog = D;
var I = require("./12.js");
var T = require("./45.js");
var v = require("./25.js");
var S = require("./11.js");
var A = require("./4397.js");
var L = require("./4398.js");
var P = require("./36.js");
r.classImplementsInterfaces(D, "ICollectableRendererList");