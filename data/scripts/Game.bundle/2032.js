Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./52.js");
var a = function () {
  function CollectableParserS2COldGoods() {}
  Object.defineProperty(CollectableParserS2COldGoods, "OLD_STYLE_GOODS_ORDER", {
    get: function () {
      if (this._OLD_STYLE_GOODS_ORDER == undefined) {
        this._OLD_STYLE_GOODS_ORDER = [s.CollectableEnum.WOOD, s.CollectableEnum.STONE, s.CollectableEnum.FOOD, s.CollectableEnum.C1, s.CollectableEnum.C2, s.CollectableEnum.COAL, s.CollectableEnum.OIL, s.CollectableEnum.GLASS, o.ClientConstCurrency.ID_KHAN_TABLET, o.ClientConstCurrency.ID_SKULL_RELIC, o.ClientConstCurrency.ID_PEARL_RELIC, s.CollectableEnum.AQUAMARINE, s.CollectableEnum.IRON, o.ClientConstCurrency.ID_SILVER_RUNE, o.ClientConstCurrency.ID_GOLD_RUNE, o.ClientConstCurrency.ID_GREEN_SKULL_RELIC, o.ClientConstCurrency.ID_SAMURAI_TOKEN, o.ClientConstCurrency.ID_ROYAL_CAPITAL_TOKEN, o.ClientConstCurrency.ID_APPRENTICE_TOKEN];
      }
      return this._OLD_STYLE_GOODS_ORDER;
    },
    enumerable: true,
    configurable: true
  });
  CollectableParserS2COldGoods.prototype.createList = function (e) {
    var t = new l.CollectableList();
    CollectableParserS2COldGoods.createByParamListOldGoods(t, e);
    return t;
  };
  CollectableParserS2COldGoods.createByParamListOldGoods = function (e, t) {
    for (var i = t, o = 0; o < i.length; ++o) {
      var a = n.int(i[o]);
      var l = CollectableParserS2COldGoods.OLD_STYLE_GOODS_ORDER[o];
      if (a != 0) {
        if (typeof l == "number") {
          e.addItem(r.CollectableHelper.createVO(s.CollectableEnum.GENERIC_CURRENCY, a, l));
        } else {
          e.addItem(r.CollectableHelper.createVO(l, a));
        }
      }
    }
  };
  return CollectableParserS2COldGoods;
}();
exports.CollectableParserS2COldGoods = a;
var s = require("./12.js");
var r = require("./45.js");
var l = require("./48.js");