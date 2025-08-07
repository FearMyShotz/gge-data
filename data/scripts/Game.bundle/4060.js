Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = createjs.Container;
var a = function () {
  function AView() {
    this._displayObject = new o();
    this._width = 0;
    this._height = 0;
    this._destroyed = false;
  }
  AView.prototype.setController = function (e) {
    this._controller = e;
  };
  AView.prototype.setModel = function (e) {
    this._model = e;
    this._model.SGN_UPDATE.add(this.bindFunction(this._onModelUpdate));
    this._onModelUpdate(e);
  };
  AView.prototype.destroy = function () {
    if (!this._destroyed) {
      this._destroy();
      this._destroyed = true;
    }
    return this._destroyed;
  };
  AView.prototype._destroy = function () {};
  AView.prototype.update = function () {};
  AView.prototype._onModelUpdate = function (e) {
    this.update();
  };
  AView.prototype._updateWidth = function () {};
  AView.prototype._updateHeight = function () {};
  Object.defineProperty(AView.prototype, "x", {
    get: function () {
      return this._displayObject.x;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AView.prototype, "y", {
    get: function () {
      return this._displayObject.y;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AView.prototype, "width", {
    get: function () {
      return this._displayObject.width;
    },
    set: function (e) {
      this._width = e;
      this._updateWidth();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AView.prototype, "height", {
    get: function () {
      return this._displayObject.height;
    },
    set: function (e) {
      this._height = e;
      this._updateHeight();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AView.prototype, "displayObject", {
    get: function () {
      return this._displayObject;
    },
    enumerable: true,
    configurable: true
  });
  AView.prototype.getModel = function () {
    return this._model;
  };
  return AView;
}();
exports.AView = a;
n.classImplementsInterfaces(a, "IView");