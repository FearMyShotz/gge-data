Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CollectableSorter() {}
  CollectableSorter.prototype.sortListBySortOrderExpression = function (e, t) {
    if (t == "random") {
      return this.sortListByRandom(e);
    } else {
      return this.sortListByIds(e, t.split("#"));
    }
  };
  CollectableSorter.prototype.sortListByRandom = function (e) {
    var t = e.length;
    if (t <= 2) {
      return e;
    }
    var i = new Array(t);
    for (var n = 0; n < t; ++n) {
      i[n] = n;
    }
    var o;
    var s;
    for (var r = i.length; r;) {
      s = Math.floor(Math.random() * r--);
      o = i[r];
      i[r] = i[s];
      i[s] = o;
    }
    var l = new a.CollectableList();
    for (var c = 0; c < t; ++c) {
      l.addItem(e.getItemByIndex(i[c]));
    }
    return l;
  };
  CollectableSorter.prototype.sortListByIds = function (e, t, i = true) {
    if (e.length <= 1) {
      return e;
    }
    var n;
    var s;
    var c;
    var u = new a.CollectableList();
    var d = [];
    var p = 0;
    var h = 0;
    for (var g = 0; g < t.length; ++g) {
      var C = this.partUpSortId(t[g]);
      n = C.prefix;
      p = l.int(C.subIndex);
      if ((s = o.CollectableEnum.getTypeByServerKey(n)) != o.CollectableEnum.UNKNOWN) {
        if (p < (c = e.getIndicesByType(s)).length) {
          h = c[p];
          if (d.indexOf(h) < 0) {
            u.addItem(e.getItemByIndex(h));
            d.push(h);
          }
        } else if (i) {
          r.debug("CollectableSorter.sortListByIds(): The mentioned sortOrder entry '" + t[g] + "' couldn't be found in sourceList.");
        }
      }
    }
    for (var _ = 0; _ < e.length; ++_) {
      if (d.indexOf(_) < 0) {
        u.addItem(e.getItemByIndex(_));
      }
    }
    return u;
  };
  CollectableSorter.prototype.sortListByTypes = function (e, t, i = false) {
    if (!t || t.length <= 0 || e.length <= 1) {
      return e;
    }
    var n = new Array(t.length);
    for (var o = 0; o < t.length; ++o) {
      n[o] = t[o].serverKey;
    }
    return this.sortListByIds(e, n, i);
  };
  CollectableSorter.prototype.partUpSortId = function (e) {
    var t = s.ClientConstUtils.getTrimmedText(e).split("_");
    var i = t[0];
    var n = 0;
    if (t.length >= 2 && t[1] != "") {
      n = parseInt(t[1]);
    }
    return {
      prefix: i,
      subIndex: n
    };
  };
  return CollectableSorter;
}();
exports.CollectableSorter = n;
var o = require("./12.js");
var a = require("./48.js");
var s = require("./55.js");
var r = require("./2.js");
var l = require("./6.js");