Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./3.js");
var s = require("./16.js");
var r = require("./12.js");
var l = require("./31.js");
var c = require("./104.js");
var u = require("./85.js");
var d = require("./52.js");
var p = require("./81.js");
var h = require("./25.js");
var g = function (e) {
  function CollectableInfiniteScrollItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableInfiniteScrollItem, e);
  CollectableInfiniteScrollItem.prototype.initLoaded = function () {};
  CollectableInfiniteScrollItem.prototype.collectableScrollItemVO = function (e) {
    if (e + 1 > this.data.length) {
      return null;
    } else {
      return this.data[e];
    }
  };
  CollectableInfiniteScrollItem.prototype.fill = function () {
    for (var e = 0; e < 5; e++) {
      this.fillItem(this.getItemMc()["item" + e], this.collectableScrollItemVO(e));
    }
  };
  CollectableInfiniteScrollItem.prototype.fillItem = function (e, t) {
    if (t) {
      e.visible = true;
      h.CollectableRenderHelper.displaySingleItemComplete(new c.CollectableRendererList(), new l.CollectableRenderClips(e.mc_item).addInfoBtn(e.btn_info), t.collectable, t.collectableRenderOptions);
      var i = o.GoodgameTextFieldManager.getInstance().getTextField(e.mc_item.txt_text);
      i.color = s.ClientConstColor.FONT_DEFAULT_COLOR;
      i.verticalAlign = o.GGSVerticalAlign.MIDDLE;
      i.wordwrap = false;
      if (t.collectable.itemType == r.CollectableEnum.GENERIC_CURRENCY) {
        var n = t.collectable;
        if (n.id != d.ClientConstCurrency.ID_SCEAT_TOKEN && n.id != d.ClientConstCurrency.ID_IMPERIAL_DUCAT && n.id != d.ClientConstCurrency.ID_MINUTE_SKIP_10_MIN && n.id != d.ClientConstCurrency.ID_MINUTE_SKIP_30_MIN && n.id != d.ClientConstCurrency.ID_MINUTE_SKIP_60_MIN && n.id != d.ClientConstCurrency.ID_MINUTE_SKIP_5_H && n.id != d.ClientConstCurrency.ID_MINUTE_SKIP_24_H) {
          return;
        }
        if (n.xmlCurrencyVO.softCap <= 0) {
          return;
        }
        i.wordwrap = true;
        i.textContentVO = new a.LocalizedTextVO("numbersXY", [new u.CastleLocalizedNumberVO(n.amount, {
          compactThreshold: 10000000,
          compactFractionalDigits: 0
        }), new u.CastleLocalizedNumberVO(n.xmlCurrencyVO.softCap, {
          compactThreshold: 10000000,
          compactFractionalDigits: 0
        })]);
        if (n.amount >= n.xmlCurrencyVO.softCap) {
          i.color = s.ClientConstColor.FONT_INSUFFICIENT_COLOR;
        }
      }
    } else {
      e.visible = false;
    }
  };
  CollectableInfiniteScrollItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
  };
  return CollectableInfiniteScrollItem;
}(p.AInfiniteScrollListItem);
exports.CollectableInfiniteScrollItem = g;