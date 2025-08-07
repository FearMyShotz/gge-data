Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./18.js");
var l = require("./1484.js");
var c = require("./999.js");
var u = function (e) {
  function OfferBuildingVO(t, i, n) {
    var o = this;
    o._isoSortOrder = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this)._name = "Offer";
    o._group = r.ClientConstCastle.GROUP_BUILDING;
    o._height = 8;
    o._width = 8;
    o._type = t;
    o._textId = i;
    o._offerVO = n;
    o._isoSortOrder = s.int(l.IsoGeneratorEventBuildingPosition.getOfferBuildingSortOrder(t));
    return o;
  }
  n.__extends(OfferBuildingVO, e);
  Object.defineProperty(OfferBuildingVO.prototype, "isoSortOrder", {
    get: function () {
      return this._isoSortOrder;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.AEventBuildingVO.prototype, "isoSortOrder").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  OfferBuildingVO.prototype.getInfoTooltipLine1 = function () {
    return a.Localize.text(this.offerBuildingNameId);
  };
  OfferBuildingVO.prototype.getInfoTooltipLine2 = function () {
    return a.Localize.text("clickToOpen");
  };
  Object.defineProperty(OfferBuildingVO.prototype, "offerBuildingNameId", {
    get: function () {
      return this._textId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferBuildingVO.prototype, "offerVO", {
    get: function () {
      return this._offerVO;
    },
    enumerable: true,
    configurable: true
  });
  return OfferBuildingVO;
}(c.AEventBuildingVO);
exports.OfferBuildingVO = u;
o.classImplementsInterfaces(u, "IShopVO", "ICostVO", "IInventoryVO");