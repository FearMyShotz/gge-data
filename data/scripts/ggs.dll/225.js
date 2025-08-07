Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./88.js");
var a = function () {
  function Transform(e) {
    this._colorTransform = new i.ColorTransform();
    this._colorTransform.displayObject = e;
    this._displayObject = e;
  }
  Object.defineProperty(Transform.prototype, "colorTransform", {
    get: function () {
      return this._colorTransform;
    },
    set: function (e) {
      this._colorTransform = e;
      this._colorTransform.displayObject = this._displayObject;
      this._colorTransform.updateColor();
      this._displayObject.doCache();
    },
    enumerable: true,
    configurable: true
  });
  return Transform;
}();
exports.Transform = a;