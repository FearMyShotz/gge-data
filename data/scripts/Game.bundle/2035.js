Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./22.js");
var a = require("./4.js");
var s = function () {
  function CollectableParserX2CList() {}
  CollectableParserX2CList.prototype.createList = function (e, t) {
    var i = new c.CollectableList();
    if (e) {
      for (var o in e) {
        var s = String(o);
        if (n.int(s.indexOf(t)) == 0) {
          var d;
          var p = s.substr(t.length);
          var h = r.CollectableEnum.getTypeByXmlKey(p);
          if (h) {
            d = l.CollectableHelper.createVO(h);
          }
          if (d) {
            d.parseXmlObject(e[o]);
          } else {
            var g = a.CastleModel.currencyData.getXmlCurrencyByName(p);
            if (g) {
              d = new u.CollectableItemGenericCurrencyVO(g.id, parseInt(e[o]));
            }
          }
          if (d) {
            i.addItem(d);
          }
        }
      }
      i = CollectableParserX2CList.parseSortOrder(i, e);
      CollectableParserX2CList.parseGrantType(i, e);
    }
    return i;
  };
  CollectableParserX2CList.parseSortOrder = function (e, t) {
    var i = o.CastleXMLUtils.getValueOrDefault("sortOrder", t, "-1", false);
    if (i != "-1" && i != "") {
      return d.CollectableManager.sorter.sortListBySortOrderExpression(e, i);
    } else {
      return e;
    }
  };
  CollectableParserX2CList.parseGrantType = function (e, t) {
    var i = n.int(n.int(o.CastleXMLUtils.getValueOrDefault("grantType", t, "0", false)));
    for (var a = 0; a < e.length; ++a) {
      e.list[a].grantType = i;
    }
  };
  return CollectableParserX2CList;
}();
exports.CollectableParserX2CList = s;
var r = require("./12.js");
var l = require("./45.js");
var c = require("./48.js");
var u = require("./155.js");
var d = require("./50.js");