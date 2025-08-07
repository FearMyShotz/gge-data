Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./91.js");
var a = require("./32.js");
var s = require("./90.js");
var r = require("./15.js");
var l = require("./4.js");
var c = function () {
  function ButtonBasicComponent(e, t = null) {
    this.preConstructorBG(t);
    this._button = e;
    this.init();
  }
  ButtonBasicComponent.prototype.preConstructorBG = function (e) {};
  ButtonBasicComponent.prototype.init = function () {};
  ButtonBasicComponent.prototype.listenOnLevelUp = function () {
    this.controller.addEventListener(a.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
  };
  ButtonBasicComponent.prototype.listenOnLayoutChange = function () {
    this.controller.addEventListener(o.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
  };
  ButtonBasicComponent.prototype.listenOnChangeCastleList = function () {
    this.controller.addEventListener(a.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onChangeCastleList));
  };
  ButtonBasicComponent.prototype.listenOnChangeSelectedCastleListItem = function () {
    l.CastleModel.worldmapCameraData.addEventListener(s.CastleWorldmapEvent.SELECTED_CASTLELIST_ITEM_CHANGED, this.bindFunction(this.onChangeSelectedCastleListItem));
  };
  ButtonBasicComponent.prototype.onChangeSelectedCastleListItem = function (e) {};
  ButtonBasicComponent.prototype.onChangeCastleList = function (e) {};
  ButtonBasicComponent.prototype.onLevelUp = function (e) {};
  ButtonBasicComponent.prototype.onChangeLayoutState = function (e) {
    this.init();
  };
  ButtonBasicComponent.prototype.destroy = function () {
    this.controller.removeEventListener(o.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    this.controller.removeEventListener(a.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onChangeCastleList));
    this.controller.removeEventListener(a.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    if (l.CastleModel.worldmapData) {
      l.CastleModel.worldmapData.removeEventListener(s.CastleWorldmapEvent.SELECTED_CASTLELIST_ITEM_CHANGED, this.bindFunction(this.onChangeSelectedCastleListItem));
    }
  };
  Object.defineProperty(ButtonBasicComponent.prototype, "targetMC", {
    get: function () {
      return this._button;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ButtonBasicComponent.prototype, "layoutManager", {
    get: function () {
      return u.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ButtonBasicComponent.prototype, "controller", {
    get: function () {
      return r.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ButtonBasicComponent.prototype, "textFieldManager", {
    get: function () {
      return n.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return ButtonBasicComponent;
}();
exports.ButtonBasicComponent = c;
var u = require("./17.js");