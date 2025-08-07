Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ButtonBasicComponentExternal(e) {
    this._button = e;
    this.init();
  }
  ButtonBasicComponentExternal.prototype.init = function () {};
  ButtonBasicComponentExternal.prototype.listenOnLayoutChange = function () {
    this.controller.addEventListener(a.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
  };
  ButtonBasicComponentExternal.prototype.listenOnChangeCastleList = function () {
    this.controller.addEventListener(s.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onChangeCastleList));
  };
  ButtonBasicComponentExternal.prototype.listenOnChangeSelectedCastleListItem = function () {
    c.CastleModel.worldmapCameraData.addEventListener(r.CastleWorldmapEvent.SELECTED_CASTLELIST_ITEM_CHANGED, this.bindFunction(this.onChangeSelectedCastleListItem));
  };
  ButtonBasicComponentExternal.prototype.onChangeSelectedCastleListItem = function (e) {};
  ButtonBasicComponentExternal.prototype.onChangeCastleList = function (e) {};
  ButtonBasicComponentExternal.prototype.onChangeLayoutState = function (e) {
    this.init();
  };
  ButtonBasicComponentExternal.prototype.destroy = function () {
    this.controller.removeEventListener(a.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    this.controller.removeEventListener(s.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onChangeCastleList));
    if (c.CastleModel.worldmapData) {
      c.CastleModel.worldmapData.removeEventListener(r.CastleWorldmapEvent.SELECTED_CASTLELIST_ITEM_CHANGED, this.bindFunction(this.onChangeCastleList));
    }
  };
  Object.defineProperty(ButtonBasicComponentExternal.prototype, "layoutManager", {
    get: function () {
      return o.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ButtonBasicComponentExternal.prototype, "controller", {
    get: function () {
      return l.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return ButtonBasicComponentExternal;
}();
exports.ButtonBasicComponentExternal = n;
var o = require("./17.js");
var a = require("./91.js");
var s = require("./32.js");
var r = require("./90.js");
var l = require("./15.js");
var c = require("./4.js");