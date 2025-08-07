Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = function (e) {
  function CastleShoppingCartPrimeDayChoosableGroup(t, i = null) {
    var n = e.call(this, t, o.ShoppingCartConst.OPTIONS_PER_GROUP) || this;
    for (var a = 0; a < i.length; a++) {
      n.items[a].typeId = i[a];
    }
    if (!n.full()) {
      throw new Error("Couldn't fill choosable group! " + o.ShoppingCartConst.OPTIONS_PER_GROUP + " valid items are needed! Category " + (t ? t.groupId : "none"));
    }
    return n;
  }
  n.__extends(CastleShoppingCartPrimeDayChoosableGroup, e);
  CastleShoppingCartPrimeDayChoosableGroup.prototype.createItem = function (e) {
    return new s.CastleShoppingCartPrimeDayChoosableItem(this._category, e);
  };
  CastleShoppingCartPrimeDayChoosableGroup.prototype.reset = function () {
    for (var e = 0; e < this.items.length; e++) {
      this.items[e].reset();
    }
  };
  CastleShoppingCartPrimeDayChoosableGroup.prototype.enable = function () {
    for (var e = 0; e < this._size; e++) {
      this.items[e].enable();
    }
  };
  CastleShoppingCartPrimeDayChoosableGroup.prototype.disable = function () {
    for (var e = 0; e < this._size; e++) {
      this.items[e].disable();
    }
  };
  CastleShoppingCartPrimeDayChoosableGroup.prototype.getItemByOptionId = function (e) {
    for (var t = 0; t < this._size; t++) {
      var i = this.items[t];
      if (i.optionId == e) {
        return i;
      }
    }
    return null;
  };
  return CastleShoppingCartPrimeDayChoosableGroup;
}(require("./1203.js").CastleShoppingCartPrimeDayAbstractGroup);
exports.CastleShoppingCartPrimeDayChoosableGroup = a;
var s = require("./2087.js");