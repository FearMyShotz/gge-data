Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./67.js");
var s = function (e) {
  function SimpleCollectableScrollComponent(t, i, n, o, a) {
    var s = this;
    s._maxRewards = 0;
    s._scrollStep = 0;
    CONSTRUCTOR_HACK;
    (s = e.call(this) || this)._disp = t;
    s._maxRewards = o;
    s._scrollStep = a;
    s.scrollComponent = new c.SimpleScrollComponent(i, n);
    return s;
  }
  n.__extends(SimpleCollectableScrollComponent, e);
  SimpleCollectableScrollComponent.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.scrollComponent.destroy();
  };
  SimpleCollectableScrollComponent.prototype.show = function (e, t, i = null, n = null) {
    this._collectableList = e;
    this._options = t;
    this._preRenderFunc = i;
    this._afterRenderFunc = n;
    var o = Math.max(0, Math.ceil((this._collectableList.length - this._maxRewards) / this._scrollStep));
    this.scrollComponent.init(0, o);
    this.scrollComponent.scrollToValue(0);
    if (o > 0) {
      this.scrollComponent.setVisibility(true);
      this.scrollComponent.show();
      this.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
    } else {
      this.scrollComponent.setVisibility(false);
    }
    this.renderCollectables();
  };
  SimpleCollectableScrollComponent.prototype.hide = function () {
    this.scrollComponent.hide();
  };
  SimpleCollectableScrollComponent.prototype.onScrollValueChange = function () {
    this.renderCollectables();
  };
  SimpleCollectableScrollComponent.prototype.renderCollectables = function () {
    this.destroyCollectableRenderList();
    var e = new r.CollectableList();
    for (var t = 0; t < this._maxRewards; t++) {
      var i = t + this.scrollComponent.currentValue * this._scrollStep;
      if (i < this._collectableList.length) {
        e.addItem(this._collectableList.getItemByIndex(i));
      }
    }
    l.CollectableRenderHelper.displayMultipleItemsComplete(this, new a.CollectableRenderClipsList(this._disp, "item").addItemMcs("mc_item").addInfoBtns("parent.btn_info"), e, this._options, this.bindFunction(this._preRenderFunc), this.bindFunction(this._afterRenderFunc));
  };
  return SimpleCollectableScrollComponent;
}(require("./14.js").CastleComponent);
exports.SimpleCollectableScrollComponent = s;
var r = require("./48.js");
var l = require("./25.js");
var c = require("./95.js");
o.classImplementsInterfaces(s, "ICollectableRendererList");