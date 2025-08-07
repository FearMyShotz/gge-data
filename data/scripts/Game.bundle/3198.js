Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1048.js");
var s = function (e) {
  function DessertSlumPackageScrollItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(DessertSlumPackageScrollItem, e);
  Object.defineProperty(DessertSlumPackageScrollItem.prototype, "dialogKey", {
    get: function () {
      return r.CastleDessertSlumPackageBuyDialog;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.SlumPackageScrollItem.prototype, "dialogKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return DessertSlumPackageScrollItem;
}(a.SlumPackageScrollItem);
exports.DessertSlumPackageScrollItem = s;
var r = require("./3200.js");
o.classImplementsInterfaces(s, "MovieClip");