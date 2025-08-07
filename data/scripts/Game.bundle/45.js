Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./5.js");
var o = require("./6.js");
var a = require("./55.js");
var s = require("./4.js");
var r = require("./52.js");
var l = require("./367.js");
var c = require("./12.js");
var u = require("./48.js");
var d = require("./74.js");
var p = function () {
  function CollectableHelper() {}
  CollectableHelper.getTypeByServerKey = function (e, t) {
    var i = new d.CollectableTypeVO();
    i.type = e && e != "" ? c.CollectableEnum.getTypeByServerKey(e) : c.CollectableEnum.UNKNOWN;
    if (e == "MS") {
      var o = t[0];
      var a = parseInt(o.charAt(o.length - 1));
      return new d.CollectableTypeVO(c.CollectableEnum.GENERIC_CURRENCY, s.CastleModel.currencyData.getCurrencyRangeByID(r.ClientConstCurrency.ID_RANGE_MINUTE_SKIP)[0] + a);
    }
    if (i.type == c.CollectableEnum.BOOSTER && t.ID) {
      if (n.BoosterConst.PRIME_SALE_BOOSTER_IDS.indexOf(t.ID) > -1) {
        i.type = c.CollectableEnum.BOOSTER;
      } else {
        switch (t.ID) {
          case n.BoosterConst.GLORY_BOOST_ID:
          case n.BoosterConst.PERSONAL_GLORY_BOOST_ID:
            i.type = c.CollectableEnum.GLORY_BOOSTER;
            break;
          case n.BoosterConst.KHAN_BOOST_ID:
            i.type = c.CollectableEnum.KHAN_TABLET_BOOSTER;
            break;
          case n.BoosterConst.XP_BOOSTER_ID:
            i.type = c.CollectableEnum.XP_BOOSTER;
            break;
          case n.BoosterConst.SAMURA_TOKEN_BOOST_ID:
            i.type = c.CollectableEnum.SAMURAI_BOOSTER;
            break;
          case n.BoosterConst.ALLIANCE_COIN_BOOST_ID:
            i.type = c.CollectableEnum.ALLIANCE_COIN_BOOSTER;
            break;
          case n.BoosterConst.LONGTERM_POINT_EVENT_BOOST_ID:
            i.type = c.CollectableEnum.LONG_TERM_POINT_EVENT_BOOSTER;
            break;
          case n.BoosterConst.REPUTATION_POINT_BOOST_ID:
            i.type = c.CollectableEnum.REPUTATION_BOOSTER;
            break;
          case n.BoosterConst.GALLANTRY_POINTS_BOOST_ID:
            i.type = c.CollectableEnum.GALLANTRY_BOOSTER;
            break;
          case n.BoosterConst.RAGE_POINT_BOOST_ID:
            i.type = c.CollectableEnum.RAGE_POINT_BOOSTER;
            break;
          case n.BoosterConst.KHAN_MEDAL_BOOST_ID:
            i.type = c.CollectableEnum.KHAN_MEDAL_POINT_BOOSTER;
        }
      }
    }
    if (i.type == c.CollectableEnum.EQUIPMENT_RARENESS && t) {
      switch (t) {
        case n.EquipmentConst.RARENESS_HERO_COMMON:
        case n.EquipmentConst.RARENESS_HERO_RARE:
        case n.EquipmentConst.RARENESS_HERO_EPIC:
        case n.EquipmentConst.RARENESS_HERO_LEGENDARY:
          i.type = c.CollectableEnum.HERO_RANDOM;
      }
    }
    if (i.type == c.CollectableEnum.UNKNOWN) {
      var l = s.CastleModel.currencyData.getXmlCurrencyByKey(e);
      if (l) {
        i.type = c.CollectableEnum.GENERIC_CURRENCY;
        i.id = l.id;
      }
    }
    return i;
  };
  CollectableHelper.createVO = function (e, t = o.int(-Number.MAX_VALUE), i = o.int(-Number.MAX_VALUE), n = false) {
    if (!e || e == c.CollectableEnum.UNKNOWN || !e.dataClass) {
      return null;
    }
    var a = new e.dataClass();
    if (t != -Number.MAX_VALUE) {
      a.amount = t;
    }
    if (i != -Number.MAX_VALUE && "id" in a) {
      a.id = i;
    }
    a.isSubscriptionBuffed = n;
    return a;
  };
  CollectableHelper.createVE = function (e, t) {
    if (!e || e.itemType == c.CollectableEnum.UNKNOWN || !e.itemType.viewClass) {
      return null;
    }
    var i = new e.itemType.viewClass();
    i.init(e, t);
    return i;
  };
  CollectableHelper.haveSameIdAndType = function (e, t) {
    return e.itemType == t.itemType && CollectableHelper.haveSameId(e, t);
  };
  CollectableHelper.haveSameId = function (e, t) {
    var i = "id" in e;
    var n = "id" in t;
    return !i && !n || !!n && !!i && e.id == t.id;
  };
  CollectableHelper.hasTypeAndId = function (e, t, i) {
    return !!e && e.itemType == t && "id" in e && e.id == i;
  };
  CollectableHelper.getGoodsKeySuffix = function (e) {
    var t;
    switch (e) {
      case c.CollectableEnum.C1:
      case c.CollectableEnum.C2:
        t = e.serverKey;
        break;
      default:
        t = e.xmlKey;
    }
    return a.ClientConstUtils.capitalizeFirstLetter(t);
  };
  CollectableHelper.getMinuteSkipIndexByCurrencyId = function (e) {
    return o.int(e - s.CastleModel.currencyData.getCurrencyRangeByID(r.ClientConstCurrency.ID_RANGE_MINUTE_SKIP)[0]);
  };
  CollectableHelper.getServerKeyByCollectable = function (e) {
    if (e) {
      if (e.itemType == c.CollectableEnum.GENERIC_CURRENCY) {
        return e.xmlCurrencyVO.jsonKey;
      } else {
        return e.itemType.serverKey;
      }
    } else {
      return c.CollectableEnum.UNKNOWN.serverKey;
    }
  };
  CollectableHelper.createCostList = function (e) {
    var t = new u.CollectableList();
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          t.addItem(o);
        }
      }
    }
    return new l.CollectablesCosts(t);
  };
  return CollectableHelper;
}();
exports.CollectableHelper = p;