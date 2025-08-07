Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./8.js");
var r = function (e) {
  function CastleShoppingCartPrimeDaySelectedItem(t, i) {
    var n = e.call(this, t, "select", i) || this;
    n.setPlaceholderVisibility(true);
    n.itemMc.blocker.visible = true;
    delete n.itemMc.blocker.toolTipText;
    s.ButtonHelper.enableButton(n.itemMc.mc_item, true);
    n.showShadow();
    return n;
  }
  n.__extends(CastleShoppingCartPrimeDaySelectedItem, e);
  CastleShoppingCartPrimeDaySelectedItem.prototype.clear = function () {
    e.prototype.clear.call(this);
    this.node = null;
  };
  CastleShoppingCartPrimeDaySelectedItem.prototype.showShadow = function () {
    var e = castAs(this.itemMc.getChildByName("shadow"), "MovieClip");
    if (e) {
      e.visible = true;
      e.gotoAndStop(this.category.groupId);
    }
  };
  CastleShoppingCartPrimeDaySelectedItem.prototype.checkClick = function (e) {
    return !!this.selectedItem && e == this.itemMc.mc_item && (this.selectedItem.unselect(), this.unselect(), true);
  };
  CastleShoppingCartPrimeDaySelectedItem.prototype.select = function (t) {
    return !!o.instanceOfClass(t, "CastleShoppingCartPrimeDayChoosableItem") && !!e.prototype.select.call(this, t) && (t.decreaseStock(), this.selectedItem = t, true);
  };
  CastleShoppingCartPrimeDaySelectedItem.prototype.unselect = function () {
    this.optionId = -1;
    this.selectedItem = null;
  };
  CastleShoppingCartPrimeDaySelectedItem.prototype.switchWith = function (e) {
    var t = a.int(this.optionId);
    var i = this.selectedItem;
    this.optionId = e.optionId;
    this.selectedItem = e.selectedItem;
    e.optionId = t;
    e.selectedItem = i;
  };
  return CastleShoppingCartPrimeDaySelectedItem;
}(require("./1204.js").CastleShoppingCartPrimeDayAbstractItem);
exports.CastleShoppingCartPrimeDaySelectedItem = r;