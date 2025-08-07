Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableParserS2CParamObject() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableParserS2CParamObject, e);
  CollectableParserS2CParamObject.prototype.createList = function (e) {
    var t;
    var i = new s.CollectableList();
    if (e) {
      for (t in e) {
        var n = e[t];
        if (n != null) {
          for (var o = 0; o < n.length; ++o) {
            var r = n[o];
            var l = a.CollectableHelper.getTypeByServerKey(t, r);
            var c = a.CollectableHelper.createVO(l.type, -Number.MAX_VALUE, l.id);
            if (c) {
              c.parseServerObject(r);
              i.addItem(c);
            }
          }
        } else {
          console.warn("Rewards object from server contained null! This is an error on server side, but the client can cope with it. Please report to a server dev.");
        }
      }
    }
    return i = CollectableParserS2CParamObject.parseSortOrder(i, e.SO);
  };
  CollectableParserS2CParamObject.parseSortOrder = function (e, t) {
    if (t) {
      var i = t;
      if (i != "-1" && i != "") {
        return r.CollectableManager.sorter.sortListBySortOrderExpression(e, i);
      }
    }
    return e;
  };
  return CollectableParserS2CParamObject;
}(require("./1176.js").CollectableParserS2CParamList);
exports.CollectableParserS2CParamObject = o;
var a = require("./45.js");
var s = require("./48.js");
var r = require("./50.js");