Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1204.js");
var a = function (e) {
  function CastleShoppingCartPrimeDayChoosableItem(t, i) {
    var n = this;
    n.stock = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t, "item", i) || this).stock = CastleShoppingCartPrimeDayChoosableItem.DEFAULT_STOCK;
    return n;
  }
  n.__extends(CastleShoppingCartPrimeDayChoosableItem, e);
  Object.defineProperty(CastleShoppingCartPrimeDayChoosableItem.prototype, "node", {
    get: function () {
      return Object.getOwnPropertyDescriptor(o.CastleShoppingCartPrimeDayAbstractItem.prototype, "node").get.call(this);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(o.CastleShoppingCartPrimeDayAbstractItem.prototype, "node").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleShoppingCartPrimeDayChoosableItem.prototype.isEmpty = function () {
    return this.stock < 1 || e.prototype.isEmpty.call(this);
  };
  CastleShoppingCartPrimeDayChoosableItem.prototype.checkClick = function (e) {
    return e == this.itemMc.mc_item && !!(this.stock > 0) && !!this.category.selectedGroup.select(this);
  };
  CastleShoppingCartPrimeDayChoosableItem.prototype.decreaseStock = function () {
    this.stock--;
    if (this.stock == 0) {
      this.renderNode();
    }
  };
  CastleShoppingCartPrimeDayChoosableItem.prototype.unselect = function () {
    this.stock++;
    if (this.stock == 1) {
      this.renderNode();
    }
  };
  CastleShoppingCartPrimeDayChoosableItem.prototype.reset = function () {
    e.prototype.reset.call(this);
    this.stock = CastleShoppingCartPrimeDayChoosableItem.DEFAULT_STOCK;
  };
  CastleShoppingCartPrimeDayChoosableItem.__initialize_static_members = function () {
    CastleShoppingCartPrimeDayChoosableItem.DEFAULT_STOCK = 3;
  };
  return CastleShoppingCartPrimeDayChoosableItem;
}(o.CastleShoppingCartPrimeDayAbstractItem);
exports.CastleShoppingCartPrimeDayChoosableItem = a;
a.__initialize_static_members();