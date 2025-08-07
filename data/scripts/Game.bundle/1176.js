Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CollectableParserS2CParamList() {}
  CollectableParserS2CParamList.prototype.createList = function (e) {
    var t = false;
    var i = new a.CollectableList();
    if (e) {
      if (Array.isArray(e)) {
        var n = e;
        if (n.length > 0 && typeof n[0] == "number") {
          t = true;
        }
        if (n.length > 0 && Array.isArray(n[0]) && Array.isArray(n[0][0])) {
          var o = [];
          for (var r = 0; r < n.length; r++) {
            o = o.concat(n[r]);
          }
          e = o;
        }
      }
      if (t) {
        i = s.CollectableManager.parser.s2cOldGoods.createList(e);
      } else {
        CollectableParserS2CParamList.createByParamListMethod(i, e);
      }
    }
    return i;
  };
  CollectableParserS2CParamList.createByParamListMethod = function (e, t) {
    var i = t;
    if (i && i.length > 0) {
      for (var n = 0; n < i.length; ++n) {
        var a = i[n][0];
        var s = i[n][1];
        var r = o.CollectableHelper.getTypeByServerKey(a, s);
        var l = o.CollectableHelper.createVO(r.type, -Number.MAX_VALUE, r.id);
        if (l) {
          l.parseServerObject(s);
          e.addItem(l);
        }
      }
    }
  };
  return CollectableParserS2CParamList;
}();
exports.CollectableParserS2CParamList = n;
var o = require("./45.js");
var a = require("./48.js");
var s = require("./50.js");