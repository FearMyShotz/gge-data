Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Point;
var o = function () {
  function IsoGeneratorEventBuildingPosition() {}
  IsoGeneratorEventBuildingPosition._getOfferBuildingSortOrderDic = function () {
    var e = new Map();
    e.set("lowlevelmerchant", 1800);
    e.set("coinmine", 1900);
    e.set("rubymine", 2000);
    e.set("timechallenge", 2100);
    e.set("decoration", 2200);
    e.set("famebooster", 2600);
    return e;
  };
  IsoGeneratorEventBuildingPosition.getOfferBuildingSortOrder = function (e) {
    var t = r.int(Number.MAX_VALUE);
    var i = e.toLowerCase();
    if (s.DictionaryUtil.containsKey(IsoGeneratorEventBuildingPosition.OFFER_BUILDING_SORT_ORDER_DIC, i)) {
      t = r.int(IsoGeneratorEventBuildingPosition.OFFER_BUILDING_SORT_ORDER_DIC.get(i));
    } else {
      a.error("[ClientConstHomeCastleEventCampPositions] " + e + " wasn't found in the dictionary, please add it");
    }
    return t;
  };
  IsoGeneratorEventBuildingPosition.getPosListByNewVersion = function (e) {
    for (var t = e.origins.getOriginRect(), i = e.origins.getOriginPos(l.IsoGridOriginEnum.BOTTOM_CORNER).add(new n(18, 11)), o = 0, a = 0, s = 0, r = 0, c = [], u = 0; u < IsoGeneratorEventBuildingPosition.getNumEventCampsByGridWidth(t.width); u++) {
      if (r < u || s % 3 == 0) {
        o -= 9;
        s = 0;
        r += Number(u) + 0.5;
      }
      a = s % 3 * 8 + s % 3 * 1;
      c.push(i.add(new n(o, a)));
      s++;
    }
    return c;
  };
  IsoGeneratorEventBuildingPosition.getNumEventCampsByGridWidth = function (e) {
    var t = 13;
    if (e <= 50) {
      t = 19;
    }
    if (e > 50) {
      t = 23;
    }
    return t;
  };
  IsoGeneratorEventBuildingPosition.getPosListByOldVersion = function (e, t) {
    var i = e.origins.getOriginPos(l.IsoGridOriginEnum.BOTTOM_CORNER);
    var o = new n(i.x, i.y);
    o.x += 1;
    o.y += 1;
    var a = [];
    if (t <= 1) {
      a.push(o.add(new n(6, 6)));
    } else {
      a.push(o.add(new n(8, -2)));
      a.push(o.add(new n(0, 7)));
      a.push(o.add(new n(9, 8)));
      a.push(o.add(new n(17, -2)));
      a.push(o.add(new n(0, 18)));
      a.push(o.add(new n(17, 8)));
      a.push(o.add(new n(9, 18)));
      a.push(o.add(new n(17, 18)));
      a.push(o.add(new n(26, -2)));
      a.push(o.add(new n(0, 29)));
      a.push(o.add(new n(9, 28)));
      a.push(o.add(new n(17, 28)));
    }
    return a;
  };
  IsoGeneratorEventBuildingPosition.__initialize_static_members = function () {
    IsoGeneratorEventBuildingPosition.OFFER_BUILDING_SORT_ORDER_DIC = IsoGeneratorEventBuildingPosition._getOfferBuildingSortOrderDic();
  };
  return IsoGeneratorEventBuildingPosition;
}();
exports.IsoGeneratorEventBuildingPosition = o;
var a = require("./2.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./105.js");
o.__initialize_static_members();