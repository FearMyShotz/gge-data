Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./163.js");
var a = function () {
  function BetaTestNewsItemsProperties(e) {
    this._id = 0;
    this._id = e;
  }
  Object.defineProperty(BetaTestNewsItemsProperties.prototype, "margin", {
    get: function () {
      return BetaTestNewsItemsProperties._margin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BetaTestNewsItemsProperties.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BetaTestNewsItemsProperties.prototype, "isVertical", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BetaTestNewsItemsProperties.prototype, "expandDuration", {
    get: function () {
      return BetaTestNewsItemsProperties.EXPAND_DURATION;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BetaTestNewsItemsProperties.prototype, "collapseDuration", {
    get: function () {
      return BetaTestNewsItemsProperties.EXPAND_DURATION;
    },
    enumerable: true,
    configurable: true
  });
  BetaTestNewsItemsProperties.__initialize_static_members = function () {
    BetaTestNewsItemsProperties._margin = new o.LayoutMargin(0, 0, 0, 0);
    BetaTestNewsItemsProperties.EXPAND_DURATION = 0.5;
  };
  return BetaTestNewsItemsProperties;
}();
exports.BetaTestNewsItemsProperties = a;
n.classImplementsInterfaces(a, "ICollapsibleItemProperties");
a.__initialize_static_members();