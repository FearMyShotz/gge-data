Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ABundleMVC(e = null, t = null, i = null) {
    this._destroyed = false;
    this._views = [];
    this._controllers = [];
    if (e && (this._model = new e(), !this._model)) {
      throw new Error("The class used for the model doesn't implement IModel interface");
    }
    if (t && (this._views[0] = new t(), !this._views[0])) {
      throw new Error("The class used for the view doesn't implement IView interface");
    }
    if (i && (this._controllers[0] = new i(), !this._controllers[0])) {
      throw new Error("The class used for the controller doesn't implement IController interface");
    }
    if (this._model) {
      if (this._views.length) {
        this._views[0].setModel(this._model);
      }
      if (this._controllers.length) {
        this._controllers[0].setModel(this._model);
      }
    }
    if (this._views.length && this._controllers.length) {
      this._views[0].setController(this._controllers[0]);
      this._controllers[0].setView(this._views[0]);
    }
  }
  ABundleMVC.prototype.getModel = function () {
    return this._model;
  };
  Object.defineProperty(ABundleMVC.prototype, "views", {
    get: function () {
      return this._views;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABundleMVC.prototype, "controllers", {
    get: function () {
      return this._controllers;
    },
    enumerable: true,
    configurable: true
  });
  ABundleMVC.prototype.setModel = function (e) {
    if (e) {
      this._model = e;
      var t = 0;
      for (t = 0; t < this._controllers.length; t++) {
        this._controllers[t].setModel(e);
      }
      for (t = 0; t < this._views.length; t++) {
        this._views[t].setModel(e);
      }
    }
  };
  ABundleMVC.prototype.setView = function (e, t = 0, i = true) {
    if ((t = o.CastleMathHelper.limit(t, 0, this._views.length)) < this._views.length && this._views[t]) {
      this._views[t].destroy();
    }
    this._views[t] = e;
    if (this._model) {
      e.setModel(this._model);
    }
    if (i && this._controllers[0]) {
      e.setController(this._controllers[0]);
      this._controllers[0].setView(e);
    }
    return t;
  };
  ABundleMVC.prototype.setController = function (e, t = 0, i = true) {
    t = o.CastleMathHelper.limit(t, 0, this._controllers.length);
    if (this._controllers.length && this._controllers[t]) {
      this._controllers[t].destroy();
    }
    this._controllers[t] = e;
    if (this._model) {
      e.setModel(this._model);
    }
    if (i && this._views[0]) {
      e.setView(this._views[0]);
    }
    return t;
  };
  ABundleMVC.prototype.addView = function (e) {
    if (e) {
      this._views.push(e);
      if (this._model) {
        e.setModel(this._model);
      }
    }
  };
  ABundleMVC.prototype.destroy = function () {
    if (!this._destroyed) {
      this._destroy();
      this._destroyed = true;
    }
  };
  ABundleMVC.prototype._destroy = function () {
    this._model.destroy();
    var e = 0;
    for (e = 0; e < this._controllers.length; e++) {
      this._controllers[e].destroy();
    }
    this._controllers = null;
    e = 0;
    for (; e < this._views.length; e++) {
      this._views[e].destroy();
    }
    this._views = null;
  };
  return ABundleMVC;
}();
exports.ABundleMVC = n;
var o = require("./213.js");