Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./2008.js");
var a = require("./2009.js");
var s = require("./2010.js");
var r = require("./2011.js");
var l = require("./2012.js");
var c = function () {
  function CollectableRenderOptions(e = n.int(CollectableRenderOptions.SET_ADVANCED), t = null) {
    this._icon = new a.CollectableRenderOptionsIcon();
    this._textfield = new r.CollectableRenderOptionsTextfield();
    this._costTextfield = new o.CollectableRenderOptionsCostTextfield();
    this._tooltip = new l.CollectableRenderOptionsTooltip();
    this._storage = new s.CollectableRenderOptionsStorage();
    this._renderMask = 0;
    this._renderMask = e;
    if (t) {
      this.icon.dimension = t;
    }
  }
  CollectableRenderOptions.prototype.containsRenderOption = function (e) {
    return (this._renderMask & e) == e;
  };
  Object.defineProperty(CollectableRenderOptions.prototype, "icon", {
    get: function () {
      return this._icon;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderOptions.prototype, "textfield", {
    get: function () {
      return this._textfield;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderOptions.prototype, "costTextfield", {
    get: function () {
      return this._costTextfield;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderOptions.prototype, "tooltip", {
    get: function () {
      return this._tooltip;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderOptions.prototype, "storage", {
    get: function () {
      return this._storage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderOptions.prototype, "renderMask", {
    get: function () {
      return this._renderMask;
    },
    set: function (e) {
      this._renderMask = e;
    },
    enumerable: true,
    configurable: true
  });
  CollectableRenderOptions.__initialize_static_members = function () {
    CollectableRenderOptions.ICON = 1;
    CollectableRenderOptions.TOOLTIP = 2;
    CollectableRenderOptions.TEXTFIELD = 4;
    CollectableRenderOptions.TEXT_BACKGROUND = 8;
    CollectableRenderOptions.INFO_BUTTON = 16;
    CollectableRenderOptions.ICON_TRANSFORM = 32;
    CollectableRenderOptions.COLOR_BACKGROUND = 64;
    CollectableRenderOptions.EQUIPMENT_BACKGROUND = 128;
    CollectableRenderOptions.COST_TEXTFIELD = 256;
    CollectableRenderOptions.MINUTESKIP_BACKGROUND = 512;
    CollectableRenderOptions.BUILDING_LEVEL_MC = 1024;
    CollectableRenderOptions.ALLIANCE_REWARD_BACKGROUND = 2048;
    CollectableRenderOptions.STORAGE_BAR = 4096;
    CollectableRenderOptions.DYNAMIC_LEVEL_INDICATOR = 8192;
    CollectableRenderOptions.SET_ICON = CollectableRenderOptions.ICON | CollectableRenderOptions.TOOLTIP | CollectableRenderOptions.BUILDING_LEVEL_MC;
    CollectableRenderOptions.SET_BASIC = CollectableRenderOptions.SET_ICON | CollectableRenderOptions.INFO_BUTTON | CollectableRenderOptions.EQUIPMENT_BACKGROUND | CollectableRenderOptions.ALLIANCE_REWARD_BACKGROUND;
    CollectableRenderOptions.SET_DEFAULT = CollectableRenderOptions.SET_BASIC | CollectableRenderOptions.TEXTFIELD | CollectableRenderOptions.TEXT_BACKGROUND;
    CollectableRenderOptions.SET_ADVANCED = CollectableRenderOptions.SET_DEFAULT | CollectableRenderOptions.ICON_TRANSFORM;
    CollectableRenderOptions.SET_TIME_CHALLENGE = CollectableRenderOptions.SET_ADVANCED | CollectableRenderOptions.COLOR_BACKGROUND;
    CollectableRenderOptions.SET_TOURNAMENT_DEFAULT = CollectableRenderOptions.SET_ADVANCED | CollectableRenderOptions.COLOR_BACKGROUND;
    CollectableRenderOptions.SET_STARTUP_LOGIN_BONUS = CollectableRenderOptions.SET_ADVANCED | CollectableRenderOptions.EQUIPMENT_BACKGROUND;
    CollectableRenderOptions.SET_RESOURCE_LIST = CollectableRenderOptions.ICON | CollectableRenderOptions.TEXTFIELD | CollectableRenderOptions.TOOLTIP;
    CollectableRenderOptions.SET_COST_LIST = CollectableRenderOptions.ICON | CollectableRenderOptions.COST_TEXTFIELD | CollectableRenderOptions.TOOLTIP;
    CollectableRenderOptions.SET_COST_LIST_NO_TOOLTIP = CollectableRenderOptions.ICON | CollectableRenderOptions.COST_TEXTFIELD;
    CollectableRenderOptions.SET_SAGA_MAP = CollectableRenderOptions.ICON | CollectableRenderOptions.TOOLTIP | CollectableRenderOptions.INFO_BUTTON;
    CollectableRenderOptions.SET_STORAGE = CollectableRenderOptions.ICON | CollectableRenderOptions.TOOLTIP | CollectableRenderOptions.TEXTFIELD | CollectableRenderOptions.STORAGE_BAR;
  };
  return CollectableRenderOptions;
}();
exports.CollectableRenderOptions = c;
c.__initialize_static_members();