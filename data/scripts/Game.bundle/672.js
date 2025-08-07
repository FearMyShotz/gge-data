Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function DailyLoginBonusStateButton(e, t, i = true) {
    this._defaultState = 0;
    this._currentState = 0;
    this._selected = false;
    this._enableButton = true;
    this._clickable = true;
    this._button = e;
    if (i) {
      this._basicButton = new a.BasicButton(this._button, true);
    }
    this._defaultState = t;
    this.changeToDefaultState();
    this._button[DailyLoginBonusStateButton.WRAPPER_PROPERTY] = this;
  }
  Object.defineProperty(DailyLoginBonusStateButton.prototype, "button", {
    get: function () {
      return this._button;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyLoginBonusStateButton.prototype, "defaultState", {
    get: function () {
      return this._defaultState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyLoginBonusStateButton.prototype, "selected", {
    get: function () {
      return this._selected;
    },
    set: function (e) {
      this._selected = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyLoginBonusStateButton.prototype, "collectableItem", {
    get: function () {
      return this._collectableItem;
    },
    set: function (e) {
      this._collectableItem = e;
      this.updateData();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyLoginBonusStateButton.prototype, "enableButton", {
    get: function () {
      return this._enableButton;
    },
    set: function (e) {
      this._enableButton = e;
      if (this._basicButton) {
        l.ButtonHelper.enableButton(this._button, this._enableButton);
        this._basicButton.enableButton = this._enableButton;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyLoginBonusStateButton.prototype, "clickable", {
    get: function () {
      return this._clickable;
    },
    set: function (e) {
      this._clickable = e;
      this.button.enabled = this._clickable;
    },
    enumerable: true,
    configurable: true
  });
  DailyLoginBonusStateButton.prototype.changeToDefaultState = function () {
    this.changeTo(this.defaultState);
    if (this._collectableRenderComponent) {
      this._collectableRenderComponent.destroy();
      this._collectableRenderComponent = null;
    }
  };
  DailyLoginBonusStateButton.prototype.changeTo = function (e) {
    if (this._currentState != e) {
      this._currentState = e;
      this.button.gotoAndStop(this._currentState);
    }
  };
  DailyLoginBonusStateButton.prototype.updateData = function () {
    if (this._collectableRenderComponent) {
      this._collectableRenderComponent.destroy();
    }
    this._collectableRenderComponent = o.CollectableRenderHelper.displaySingleItem(new s.CollectableRenderClips(this._button), this._collectableItem, new r.CollectableRenderOptions(), null, this.bindFunction(this.afterRenderFunc));
  };
  DailyLoginBonusStateButton.prototype.afterRenderFunc = function (e) {
    if (this._button && this._button.cacheCanvas) {
      this._button.updateCache();
    }
  };
  DailyLoginBonusStateButton.__initialize_static_members = function () {
    DailyLoginBonusStateButton.WRAPPER_PROPERTY = "wrapper";
  };
  return DailyLoginBonusStateButton;
}();
exports.DailyLoginBonusStateButton = n;
var o = require("./25.js");
var a = require("./49.js");
var s = require("./31.js");
var r = require("./19.js");
var l = require("./8.js");
n.__initialize_static_members();