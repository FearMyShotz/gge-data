Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = function () {
  function GenericCollapsibleItemProperties(e, t = true, i = -1, n = -1, o = true) {
    this._isVertical = false;
    this._expandDuration = 0;
    this._collapseDuration = 0;
    this._isExpanded = false;
    this._margin = e;
    this._isVertical = t;
    this._isExpanded = o;
    this._expandDuration = i > -1 ? i : GenericCollapsibleItemProperties.DEFAULT_DURATION;
    this._collapseDuration = n > -1 ? n : GenericCollapsibleItemProperties.DEFAULT_DURATION;
  }
  Object.defineProperty(GenericCollapsibleItemProperties.prototype, "margin", {
    get: function () {
      return this._margin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericCollapsibleItemProperties.prototype, "isVertical", {
    get: function () {
      return this._isVertical;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericCollapsibleItemProperties.prototype, "expandDuration", {
    get: function () {
      return this._expandDuration;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericCollapsibleItemProperties.prototype, "collapseDuration", {
    get: function () {
      return this._collapseDuration;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericCollapsibleItemProperties.prototype, "isExpanded", {
    get: function () {
      return this._isExpanded;
    },
    enumerable: true,
    configurable: true
  });
  GenericCollapsibleItemProperties.__initialize_static_members = function () {
    GenericCollapsibleItemProperties.DEFAULT_DURATION = 0.5;
  };
  return GenericCollapsibleItemProperties;
}();
exports.GenericCollapsibleItemProperties = o;
n.classImplementsInterfaces(o, "ICollapsibleItemProperties");
o.__initialize_static_members();