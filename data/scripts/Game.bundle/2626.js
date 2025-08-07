Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./57.js");
var s = require("./320.js");
var r = require("./95.js");
var l = require("./47.js");
var c = require("./414.js");
var u = function (e) {
  function CastleScrollableResourceListComponent(t, i, n, o = 3, s = 1) {
    var u = this;
    u.itemCount = 0;
    u._renderedList = new d.CollectableList();
    u.onUpdated = new a.Signal();
    CONSTRUCTOR_HACK;
    (u = e.call(this, t, i, o, s, t) || this)._availableList = n;
    u.itemCount = u._availableList.length;
    var p = new c.SimpleScrollStrategyVertical(true, true);
    var h = t.parent;
    u._scrollComponent = new r.SimpleScrollComponent(new l.SimpleScrollVO().initByParent(h).addMouseWheelElements([h]), p);
    return u;
  }
  n.__extends(CastleScrollableResourceListComponent, e);
  CastleScrollableResourceListComponent.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    if (this._scrollComponent.scrollVO) {
      this._scrollComponent.hide();
    }
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChange));
    if (this._scrollComponent.scrollVO) {
      this._scrollComponent.destroy();
    }
  };
  CastleScrollableResourceListComponent.prototype.initialize = function () {
    this._scrollComponent.init(0, Math.max(0, this.itemCount - this.maxItemCount), this.maxItemCount, this.maxItemCount);
    this._scrollComponent.show();
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
    this.renderList();
  };
  CastleScrollableResourceListComponent.prototype.onScrollValueChange = function () {
    this.renderList();
  };
  CastleScrollableResourceListComponent.prototype.renderList = function () {
    this._renderedList.clear();
    var t = this._availableList.list.slice(this._scrollComponent.currentValue, this._scrollComponent.currentValue + this.maxItemCount);
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          this._renderedList.addItem(o);
        }
      }
    }
    e.prototype.updateComponent.call(this, this._renderedList);
    this.onUpdated.dispatch();
  };
  CastleScrollableResourceListComponent.prototype.getPositionList = function (t) {
    return e.prototype.getPositionList.call(this, this.maxItemCount);
  };
  return CastleScrollableResourceListComponent;
}(s.CastleResourceListComponent);
exports.CastleScrollableResourceListComponent = u;
o.classImplementsInterfaces(u, "ICollectableRendererList");
var d = require("./48.js");