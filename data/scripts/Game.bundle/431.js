Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./55.js");
var s = require("./24.js");
var r = function (e) {
  function AModernPackageShopBuyElement() {
    var t = e.call(this, null) || this;
    t._disp = (t._clip = new s.CastleGoodgameExternalClip((t._elementType = u.ModernPackageShopBuyElementEnum.getTypeByDataClass(a.ClientConstUtils.getClassFromObject(t))).assetClipName, l.IsoHelper.view.getAssetFileURL(c.ModernPackageShopBuyDialog.NAME))).currentshownDisplayObject;
    return t;
  }
  n.__extends(AModernPackageShopBuyElement, e);
  AModernPackageShopBuyElement.prototype.init = function (e) {
    this._parentDialog = e;
  };
  AModernPackageShopBuyElement.prototype.destroy = function () {
    this._clip = null;
    e.prototype.destroy.call(this);
  };
  AModernPackageShopBuyElement.prototype.update = function () {};
  AModernPackageShopBuyElement.prototype.getDispHeight = function () {
    return this.disp.height;
  };
  Object.defineProperty(AModernPackageShopBuyElement.prototype, "parentDialog", {
    get: function () {
      return this._parentDialog;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AModernPackageShopBuyElement.prototype, "elementType", {
    get: function () {
      return this._elementType;
    },
    enumerable: true,
    configurable: true
  });
  return AModernPackageShopBuyElement;
}(require("./40.js").CastleItemRenderer);
exports.AModernPackageShopBuyElement = r;
var l = require("./46.js");
var c = require("./206.js");
var u = require("./592.js");
o.classImplementsInterfaces(r, "ICollectableRendererList");