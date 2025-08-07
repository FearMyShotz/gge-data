Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function FlattenedImage(t, n, i, a, s, r = false) {
    var o = e.call(this, t <= 0 ? 1 : t, n <= 0 ? 1 : n, r, s) || this;
    o._registrationPointX = 0;
    o._registrationPointY = 0;
    if (s == 0) {
      s = 16777215;
      r = true;
    }
    o._registrationPointX = i;
    o._registrationPointY = a;
    return o;
  }
  i.__extends(FlattenedImage, e);
  Object.defineProperty(FlattenedImage.prototype, "registrationPointX", {
    get: function () {
      return this._registrationPointX;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FlattenedImage.prototype, "registrationPointY", {
    get: function () {
      return this._registrationPointY;
    },
    enumerable: true,
    configurable: true
  });
  FlattenedImage.prototype.setRegistrationPointX = function (e) {
    this._registrationPointX = e;
  };
  FlattenedImage.prototype.setRegistrationPointY = function (e) {
    this._registrationPointY = e;
  };
  return FlattenedImage;
}(createjs.BitmapData);
exports.FlattenedImage = a;