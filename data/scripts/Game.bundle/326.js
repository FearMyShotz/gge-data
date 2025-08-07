Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleTutorialDialogFilter(e) {
    this._allowedDialogs = [];
    this._active = false;
    if (e == null) {
      throw new Error("do not instantiate, use instance getter");
    }
  }
  Object.defineProperty(CastleTutorialDialogFilter, "instance", {
    get: function () {
      CastleTutorialDialogFilter._instance ||= new CastleTutorialDialogFilter(new s());
      return CastleTutorialDialogFilter._instance;
    },
    enumerable: true,
    configurable: true
  });
  CastleTutorialDialogFilter.prototype.replace = function (e) {
    if (!e) {
      throw new ReferenceError("target must not be null!");
    }
    this.clear();
    this.add(e);
  };
  CastleTutorialDialogFilter.prototype.add = function (e) {
    if (!e) {
      throw new ReferenceError("target must not be null!");
    }
    if (this._allowedDialogs.indexOf(a.CastleExternalPreloaderDialog) < 0) {
      this._allowedDialogs.push(a.CastleExternalPreloaderDialog);
    }
    this._allowedDialogs.push(e);
    this._active = true;
    o.CastleLayoutManager.getInstance().hideAllDialogsExcept(this._allowedDialogs);
  };
  CastleTutorialDialogFilter.prototype.allowNoDialogs = function () {
    this.clear();
    this._active = true;
    o.CastleLayoutManager.getInstance().hideAllDialogs();
  };
  CastleTutorialDialogFilter.prototype.clear = function () {
    this._allowedDialogs = [];
    this._active = false;
  };
  CastleTutorialDialogFilter.prototype.isActive = function () {
    return this._active;
  };
  CastleTutorialDialogFilter.prototype.isAllowed = function (e) {
    return !this._active || this._allowedDialogs.indexOf(e) > -1;
  };
  CastleTutorialDialogFilter.prototype.isInAllowedDialogs = function (e) {
    return this._active && this._allowedDialogs.indexOf(e) > -1;
  };
  return CastleTutorialDialogFilter;
}();
exports.CastleTutorialDialogFilter = n;
var o = require("./17.js");
var a = require("./154.js");
var s = function () {
  return function SingletonBlocker() {};
}();
exports.SingletonBlocker = s;