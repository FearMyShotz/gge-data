Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CollectableParserX2CRewards() {}
  CollectableParserX2CRewards.prototype.createList = function (e) {
    var t = new r.CollectableList();
    if (e) {
      var i = e;
      for (var n in e) {
        var c = a.CollectableEnum.getTypeByXmlKey(n);
        if (c != a.CollectableEnum.UNKNOWN) {
          for (var u = 0, d = String(i[n]).split("#"); u < d.length; u++) {
            var p = d[u];
            var h = s.CollectableHelper.createVO(c);
            if (!h) {
              break;
            }
            h.parseXmlObject(p);
            t.addItem(h);
          }
        }
      }
      t.addList(l.CollectableManager.parser.x2cList.createList(e, o.ClientConstCollectable.XML_PREFIX_ADD), true);
      t = CollectableParserX2CRewards.parseSortOrder(t, e);
      CollectableParserX2CRewards.parseGrantType(t, e);
    }
    return t;
  };
  CollectableParserX2CRewards.parseSortOrder = function (e, t) {
    var i = c.CastleXMLUtils.getValueOrDefault("sortOrder", t, "-1", false);
    if (i != "-1" && i != "") {
      return l.CollectableManager.sorter.sortListBySortOrderExpression(e, i);
    } else {
      return e;
    }
  };
  CollectableParserX2CRewards.parseGrantType = function (e, t) {
    var i = u.int(u.int(c.CastleXMLUtils.getValueOrDefault("grantType", t, "0", false)));
    for (var n = 0; n < e.length; ++n) {
      e.list[n].grantType = i;
    }
  };
  return CollectableParserX2CRewards;
}();
exports.CollectableParserX2CRewards = n;
var o = require("./86.js");
var a = require("./12.js");
var s = require("./45.js");
var r = require("./48.js");
var l = require("./50.js");
var c = require("./22.js");
var u = require("./6.js");