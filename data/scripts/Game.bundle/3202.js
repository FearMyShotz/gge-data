Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1048.js");
var s = function (e) {
  function IcecreamSlumPackageScrollItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(IcecreamSlumPackageScrollItem, e);
  Object.defineProperty(IcecreamSlumPackageScrollItem.prototype, "dialogKey", {
    get: function () {
      return r.CastleIcecreamSlumPackageBuyDialog;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.SlumPackageScrollItem.prototype, "dialogKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return IcecreamSlumPackageScrollItem;
}(a.SlumPackageScrollItem);
exports.IcecreamSlumPackageScrollItem = s;
var r = require("./3203.js");
o.classImplementsInterfaces(s, "MovieClip");