Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleShoppingCartPrimeDayAbstractGroup(e, t) {
    this._size = 0;
    this.items = [];
    this._category = e;
    this._size = t;
    for (var i = 0; i < t; i++) {
      this.items.push(this.createItem(i));
    }
  }
  CastleShoppingCartPrimeDayAbstractGroup.prototype.createItem = function (e) {
    throw new a.AbstractMethodError();
  };
  CastleShoppingCartPrimeDayAbstractGroup.prototype.checkClick = function (e) {
    for (var t = o.int(this.items.length - 1); t >= 0; t--) {
      if (this.items[t].checkClick(e)) {
        return true;
      }
    }
    return false;
  };
  CastleShoppingCartPrimeDayAbstractGroup.prototype.full = function () {
    for (var e = 0; e < this._size; e++) {
      if (this.items[e].isEmpty()) {
        return false;
      }
    }
    return true;
  };
  CastleShoppingCartPrimeDayAbstractGroup.prototype.empty = function () {
    for (var e = 0; e < this._size; e++) {
      if (!this.items[e].isEmpty()) {
        return false;
      }
    }
    return true;
  };
  CastleShoppingCartPrimeDayAbstractGroup.prototype.clear = function () {
    for (var e = 0; e < this._size; e++) {
      this.items[e].clear();
    }
  };
  return CastleShoppingCartPrimeDayAbstractGroup;
}();
exports.CastleShoppingCartPrimeDayAbstractGroup = n;
var o = require("./6.js");
var a = require("./69.js");