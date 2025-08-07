Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./5.js");
var s = function (e) {
  function BasicPanel(t) {
    var n = e.call(this, t) || this;
    n._isLocked = false;
    return n;
  }
  i.__extends(BasicPanel, e);
  BasicPanel.prototype.init = function () {
    e.prototype.init.call(this);
    this.addEventListenerOnInit();
  };
  BasicPanel.prototype.addEventListenerOnInit = function () {};
  BasicPanel.prototype.show = function () {
    e.prototype.show.call(this);
    this.addEventListenerOnShow();
  };
  BasicPanel.prototype.addEventListenerOnShow = function () {};
  BasicPanel.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.removeEventListenerOnHide();
  };
  BasicPanel.prototype.removeEventListenerOnHide = function () {};
  BasicPanel.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.removeEventListenerOnDestroy();
  };
  BasicPanel.prototype.removeEventListenerOnDestroy = function () {};
  Object.defineProperty(BasicPanel.prototype, "env", {
    get: function () {
      return a.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  BasicPanel.prototype.onMouseOver = function (e) {
    this.onCursorOver(e);
  };
  BasicPanel.prototype.onMouseOut = function (e) {
    this.onCursorOut(e);
  };
  BasicPanel.prototype.onCursorOver = function (e) {};
  BasicPanel.prototype.onCursorOut = function (e) {};
  BasicPanel.prototype.lockPanel = function () {
    this._isLocked = true;
  };
  BasicPanel.prototype.unLockPanel = function () {
    this._isLocked = false;
  };
  Object.defineProperty(BasicPanel.prototype, "isLocked", {
    get: function () {
      return this._isLocked;
    },
    enumerable: true,
    configurable: true
  });
  BasicPanel.prototype.checkWaitingAnimState = function (e) {};
  return BasicPanel;
}(require("./100.js").FlashUIComponent);
exports.BasicPanel = s;