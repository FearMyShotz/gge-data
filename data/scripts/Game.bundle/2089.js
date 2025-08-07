Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./4.js");
var s = function (e) {
  function CastleShoppingCartPrimeDaySelectedGroup(t, i) {
    var n = e.call(this, t, a.CastleModel.shoppingCartPrimeDayData.optionCount) || this;
    for (var s = 0; s < i.length; s++) {
      var r = o.int(i[s]);
      var l = t.choosableGroup.getItemByOptionId(r);
      n.items[s].select(l);
    }
    return n;
  }
  n.__extends(CastleShoppingCartPrimeDaySelectedGroup, e);
  CastleShoppingCartPrimeDaySelectedGroup.prototype.createItem = function (e) {
    return new r.CastleShoppingCartPrimeDaySelectedItem(this._category, e);
  };
  CastleShoppingCartPrimeDaySelectedGroup.prototype.getSelectedOptions = function () {
    var e = [];
    for (var t = 0; t < this._size; t++) {
      var i = this.items[t];
      if (!i.isEmpty()) {
        e.push(i.optionId);
      }
    }
    return e;
  };
  CastleShoppingCartPrimeDaySelectedGroup.prototype.checkClick = function (t) {
    var i = e.prototype.checkClick.call(this, t);
    if (i) {
      this.compact();
    }
    return i;
  };
  CastleShoppingCartPrimeDaySelectedGroup.prototype.compact = function () {
    for (var e = 0; e < this._size; e++) {
      var t = this.items[e];
      if (t.isEmpty()) {
        for (var i = e + 1; i < this._size; i++) {
          var n = this.items[i];
          if (!n.isEmpty()) {
            t.switchWith(n);
            break;
          }
        }
      }
    }
  };
  CastleShoppingCartPrimeDaySelectedGroup.prototype.select = function (e) {
    for (var t = 0; t < this._size; t++) {
      if (this.items[t].select(e)) {
        return true;
      }
    }
    return false;
  };
  return CastleShoppingCartPrimeDaySelectedGroup;
}(require("./1203.js").CastleShoppingCartPrimeDayAbstractGroup);
exports.CastleShoppingCartPrimeDaySelectedGroup = s;
var r = require("./2090.js");