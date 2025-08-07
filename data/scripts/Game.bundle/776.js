Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./1497.js");
var s = require("./72.js");
var r = require("./4.js");
var l = function (e) {
  function CastleResourceCartsData() {
    var t = this;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._resourceCarts = [];
    for (var i = 0; i < CastleResourceCartsData.RESOURCE_TYPE_COUNT; ++i) {
      t._resourceCarts.push(new u.ResourceCartData());
    }
    return t;
  }
  n.__extends(CastleResourceCartsData, e);
  CastleResourceCartsData.prototype.parse_RCC = function (e) {
    var t = CastleResourceCartsData.getEnumItemFromIndex(e.RT);
    var i = o.int(e.A);
    if (e.grc) {
      r.CastleModel.areaData.activeArea.updater.parseGRC(e.grc);
    }
    if (e.rci) {
      this.parse_RCI(e.rci);
    }
    if (i > 0) {
      this.dispatchEvent(new a.CastleResourceCartsDataEvent(a.CastleResourceCartsDataEvent.ON_RESOURCE_DROPPED, [t, i]));
    }
  };
  CastleResourceCartsData.prototype.parse_RCI = function (e) {
    for (var t = 0; t < CastleResourceCartsData.RESOURCE_TYPE_COUNT; ++t) {
      this._resourceCarts[t].parseRciItem(e.RC[t]);
    }
    this.dispatchEvent(new a.CastleResourceCartsDataEvent(a.CastleResourceCartsDataEvent.DATA_CHANGED));
  };
  CastleResourceCartsData.prototype.getResourceCartData = function (e) {
    return this._resourceCarts[CastleResourceCartsData.getIndexFromEnumItem(e)];
  };
  CastleResourceCartsData.getEnumItemFromIndex = function (e) {
    switch (e) {
      case 0:
        return c.CollectableEnum.WOOD;
      case 1:
        return c.CollectableEnum.STONE;
      case 2:
        return c.CollectableEnum.FOOD;
      default:
        return c.CollectableEnum.UNKNOWN;
    }
  };
  CastleResourceCartsData.getIndexFromEnumItem = function (e) {
    switch (e) {
      case c.CollectableEnum.WOOD:
        return 0;
      case c.CollectableEnum.STONE:
        return 1;
      case c.CollectableEnum.FOOD:
        return 2;
      default:
        return -1;
    }
  };
  CastleResourceCartsData.__initialize_static_members = function () {
    CastleResourceCartsData.RESOURCE_TYPE_COUNT = 3;
  };
  return CastleResourceCartsData;
}(s.CastleEventDispatcher);
exports.CastleResourceCartsData = l;
var c = require("./12.js");
var u = require("./2767.js");
l.__initialize_static_members();