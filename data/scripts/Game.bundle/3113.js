Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./19.js");
var r = require("./4.js");
var l = require("./52.js");
var c = require("./76.js");
var u = require("./78.js");
var d = require("./77.js");
var p = require("./200.js");
var h = require("./8.js");
var g = require("./34.js");
var C = require("./1039.js");
var _ = require("./3114.js");
var m = require("./3115.js");
var f = createjs.Point;
var O = function (e) {
  function CastleListDetailOverviewSublayerCurrency(t) {
    var i = e.call(this, t) || this;
    h.ButtonHelper.initBasicButtons([i.subLayerDisp.mc_list.mc_slider.btn_up, i.subLayerDisp.mc_list.mc_slider.btn_down, i.subLayerDisp.mc_list.mc_slider.btn_slider]);
    i.textFieldManager.registerTextField(i.subLayerDisp.txt_desc, new a.LocalizedTextVO("dialog_listOverview_tabCurrency_desc"));
    var n = new d.InfiniteScrollListOptions(_.CollectableInfiniteScrollItem, "CastleListDetailOverviewCurrencyItemGroupScrollItem", C.CastleListDetailOverviewDialog.NAME);
    n.itemPaddingY = 4;
    n.useSmoothScroll = true;
    i._list = new u.InfiniteScrollListComponent(new c.InfiniteScrollListClips(i.subLayerDisp.mc_list).addSliderMc(i.subLayerDisp.mc_list.mc_slider), n);
    return i;
  }
  n.__extends(CastleListDetailOverviewSublayerCurrency, e);
  CastleListDetailOverviewSublayerCurrency.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    if (t[0]) {
      this._list.scrollComponent.currentValue;
      this._list.updateWithNewData(this.getListData());
      this._list.onShow();
      this._list.scrollToData(0);
      this._list.scrollComponent.onScrollSignal.add(this.bindFunction(p.TooltipManagerFacade.hideAllTooltips));
    }
  };
  CastleListDetailOverviewSublayerCurrency.prototype.hide = function () {
    e.prototype.hide.call(this);
    this._list.scrollComponent.onScrollSignal.remove(this.bindFunction(p.TooltipManagerFacade.hideAllTooltips));
  };
  CastleListDetailOverviewSublayerCurrency.prototype.getListData = function () {
    var e = [];
    var t = 0;
    var i = 0;
    var n = r.CastleModel.currencyData.getCurrenciesByIdRanges([r.CastleModel.currencyData.getCurrencyRangeByID(l.ClientConstCurrency.ID_RANGE_EVENT_CURRENCIES), r.CastleModel.currencyData.getCurrencyRangeByID(l.ClientConstCurrency.ID_RANGE_MINUTE_SKIP), r.CastleModel.currencyData.getCurrencyRangeByID(l.ClientConstCurrency.ID_RANGE_CI_BOOSTER), r.CastleModel.currencyData.getGeneralItemsIdRange(), r.CastleModel.currencyData.getCurrencyRangeByID(l.ClientConstCurrency.ID_RANGE_CRAFTING_CURRENCIES)]);
    var o = [l.ClientConstCurrency.ID_DAILY_TASK_POINTS_KEY, l.ClientConstCurrency.ID_CARGO_POINTS];
    if (n != null) {
      for (var a = 0, c = n; a < c.length; a++) {
        var u = c[a];
        if (u !== undefined && u.amount > 0 && o.indexOf(u.id) < 0) {
          if (u.xmlCurrencyVO && u.xmlCurrencyVO.id == l.ClientConstCurrency.ID_TONIC) {
            (u = u.clone()).amount = 0;
          }
          if (i >= 5) {
            i = 0;
            t++;
          }
          if (e.length < t + 1) {
            e.push([]);
          }
          e[t].push(new m.CollectableScrollItemVO(u, new s.CollectableRenderOptions(s.CollectableRenderOptions.SET_DEFAULT, new f(68, 54))));
          i++;
        }
      }
      return e;
    }
  };
  return CastleListDetailOverviewSublayerCurrency;
}(g.CastleDialogSubLayer);
exports.CastleListDetailOverviewSublayerCurrency = O;
o.classImplementsInterfaces(O, "ICollectableRendererList", "ISublayer");