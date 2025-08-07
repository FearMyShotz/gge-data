Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1047.js");
var s = function (e) {
  function VolcanoSlumPackageScrollItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(VolcanoSlumPackageScrollItem, e);
  Object.defineProperty(VolcanoSlumPackageScrollItem.prototype, "dialogKey", {
    get: function () {
      return r.CastleVolcanoSlumPackageBuyDialog;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.SlumPackageScrollItem.prototype, "dialogKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return VolcanoSlumPackageScrollItem;
}(a.SlumPackageScrollItem);
exports.VolcanoSlumPackageScrollItem = s;
var r = require("./3205.js");
o.classImplementsInterfaces(s, "MovieClip");